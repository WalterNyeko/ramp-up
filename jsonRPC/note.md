## Serializing Java Objects to JSON and Vice-Versa and Talking to MongoDB

- Refer to this [hands-on](https://github.com/WalterNyeko/json-rpc-and-mongodb/tree/master/jsonrpc) project for this.
- The same repository illustrates a typical implementation of JSON-RPC server in Java.

## Getting Started

- `JSON-RPC` Is a `Remote Procedure Call` encoded in JSON (`JavaScript Object Notation`).
- `JSON-RPC` is a simple protocol similar to `XML-RPC`, that defines only a few data types and commands.
- `JSON-RPC` allows for notifications (data sent to the server that does not require a response).
- `JSON-RPC` allows for multiple calls to be sent to the server which may be answered out of order.
- `JSON-RPC` is stateless and light-weight.
- `JSON-RPC`, as `JSON`, is represented by four `Primitive data types`; (Strings, Numbers, Booleans, and Null) and two `Structured data types; (Array and Objects).
- `JSON-RPC` considers all member names exchanged between the Client and the Server that are considered for matching of any kind, to be case-sensitive.
- `JSON-RPC` Client is defined as the origin of Request objects and the handler of Response objects.
- `JSON-RPC` Server is defined as the origin of Response objects and the handler of Request objects.

## Request Object

- A rpc call is represented by sending a Request object to a Server with the following members in the request object.

### jsonrpc

- A String specifying the version of the JSON-RPC protocol. MUST be exactly "2.0".

### method

- A String containing the name of the method to be invoked
- Method names that begin with the word rpc followed by a period character are reserved for rpc-internal methods and extensions and MUST NOT be used for anything else.

### params

- A Structured value that holds the parameter values to be used during the invocation of the method
- This member MAY be omitted.

### id

- An identifier established by the Client that MUST contain a String, Number, or NULL value if included.
- If it is not included it is assumed to be a notification.
- The value SHOULD normally not be Null and Numbers SHOULD NOT contain fractional parts.
- The Server MUST reply with the same value in the Response object if included.

#### NB:

1. `The use of Null as a value for the id member in a Request object is discouraged, because this specification uses a value of Null for Responses with an unknown id`.
2. `Also, Also, because JSON-RPC 1.0 uses an id value of Null for Notifications this could cause confusion in handling`.
3. `Fractional parts may be problematic, since many decimal fractions cannot be represented exactly as binary fractions.`

#### Notification

- A Notification is a Request object without an "id" member.
- A Request object that is a Notification signifies the Client's lack of interest in the corresponding Response object, and as such no Response object needs to be returned to the client.
- The Server MUST NOT reply to a Notification, including those that are within a batch request.
- Notifications are not confirmable by definition, since they do not have a Response object to be returned. As such, the Client would not be aware of any errors (like "Invalid params","Internal error").

#### Parameters Structure

- If present, parameters for the rpc call MUST be provided as a Structured value.
- Either by-position through an Array (containing the values in the Server expected order) or by-name through an Object (with member names that match the Server expected parameter names).
- The names MUST match exactly, including case, to the method's expected parameters.

## Response Object

- When a rpc call is made, the Server MUST reply with a Response, except for in the case of Notifications.
- The Response is expressed as a single JSON Object, with the following members:

### jsonrpc

- A String specifying the version of the JSON-RPC protocol. MUST be exactly "2.0".

### result

- REQUIRED on success.
- MUST NOT exist if there was an error invoking the method.
- The value of this member is determined by the method invoked on the Server.

### error

- REQUIRED on error.
- MUST NOT exist if there was no error while invoking the method.
- The value for this member MUST be an Object.

### id

- REQUIRED.
- MUST be the same as the value of the id member in the Request Object.
- MUST be Null if there was error detecting request id.

#### Error Structure

- When a rpc call encounters an error, the Response Object MUST contain the error member with a value that is a Object with the following members:

1. `Code:`

- A number(Integer) that indicates the type of error that occured.

2. `message:`

- A String providing a short description of the error.

3. `data:`

- A Primitive or Structured value that contains additional information about the error. (OPTIONAL)

## Batch

- To send several Request objects at the same time, the Client MAY send an Array filled with Request objects.
- The Server should respond with an Array containing the corresponding Response objects, after all of the batch Request objects have been processed.
- A Response object SHOULD exist for each Request object, except that there SHOULD NOT be any Response objects for notifications.
- The Server MAY process a batch rpc call as a set of concurrent tasks, processing them in any order and with any width of parallelism.
- The Response objects being returned from a batch call MAY be returned in any order within the Array.
- The Client SHOULD match contexts between the set of Request objects and the resulting set of Response objects based on the id member within each Object
- If the batch rpc call itself fails to be recognized as an valid JSON or as an Array with at least one value, the response from the Server MUST be a single Response object.
- If there are no Response objects contained within the Response array as it is to be sent to the client, the server MUST NOT return an empty Array and should return nothing at all.

## Examples

- rpc call with positional parameters:
  `--> {"jsonrpc": "2.0", "method": "subtract", "params": [42, 23], "id": 1}`
  `<-- {"jsonrpc": "2.0", "result": 19, "id": 1}`.

- rpc call with named parameters:
  `--> {"jsonrpc": "2.0", "method": "subtract", "params": {"subtrahend": 23, "minuend": 42}, "id": 3}`
  `<-- {"jsonrpc": "2.0", "result": 19, "id": 3}`.

[Refer to Specification](https://www.jsonrpc.org/specification) for further details.
