## MongoDB

- MongoDB is a cross-platform, document-oriented, NoSQL database.
- It uses JSON-like documents with schema.
- It stores documents (referred to as rows in SQL) in form of key-pair values.

## Installations

- To install MongoDB in MacOS, follow this [link](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/).

## Getting Started

- To start the mongo db as a service in macOS, I have an alias for it `mdbs`.
- To restart mongoDB daemon, the alias is `mdbrs`.
- Once mongoDB service is running, we can dive into mongoDB shell using command `mongo`.
- Once we are in the shell, we can see all available databases using comman `show dbs`.
- To create and at the same time use the database u have just created, `use new-database-name`.
- To check the current database that you are on, `db`.
- To create a database user, first dive into the db that you are targeting, then `db.createUser({user: "walter", pwd: "test-password", roles: ["readWrite", "dbAdmin"]})`.
- To login using the new user, `exit` and run `mongo database-name -u username -p 'password'`.
- In MongoDB, tables (SQL) === collections (NoSQL).
- To create a collection, use this command... `db.createCollection("name of collection")`.
- To see all collections, `show collections`.
- To insert document in a collection, `db.name-of-collection.insert({first_name: "John", last_name: "Doe"})`.
- To show all documents in a collection, `db.name-of-collection.find()`.
- To show documents in an organized format, `db.name-of-collection.find().pretty()`.
- To insert several documents at once, you pass the documents in an array, `..insert([{},{},{}])`.
- To update a document, `db.name-of-collection.update({first_name: "Walter"}, {first_name: "Walter1", last_name: "Nyeko1", age: 26})`. Note that you can add/remove extra/existing fields for new records. In the update() function, the first parameter is equivalent to the `WHERE` clause in `SQL`, and the second parameter is the new body of the document (It replaces the entire object that existed before).
- To update specific attribute without replacing the entire document, `db.name-of-collection.update({first_name: "Walter"}, {$set:{age: 27}})`. This will only either add attribute `age` or modify it if it existed already in the document.
- To remove a field, `db.name-of-collection.update({first_name: "Walter"}, {$unset:{age: 1}})`. It will remove the age field only from that document (row).
- To update if exists, and insert if not exists, `db.name-of-collection.update({first_name: "Walter"}, {first_name: "Walter", last_name: "Nyeko", age: 27}, {upsert: true})`. This will either update or insert new record.
- To delete one item from a collection, `db.employees.deleteOne({first_name: "Walter"});`. From now onwards, I will consider `employees` as my collection.
- To delete all items matching a criteria `db.employees.remove({first_name: "Walter"});` or `db.employees.deleteMany({first_name: "Walter"});`. These will delete all items matching the criteria specified.
- To rename a field in mongo collection's document, `db.employees.remove({first_name: "Walter"}, {$rename: {"gender":"sex"}})`.
- To find items similar to where clause, `db.employees.find({first_name: "Walter"});`. This will return all occurences of Walter as first_name.
- To use OR operator, `db.employees.find({$or: {[{first_name: "Walter"},{last_name: "Nyeko"}]});`. This will return all documents with first name Walter, including those whose first name is not Walter but last name is Nyeko.
- To use AND operator, `db.employees.find({$and: {[{first_name: "Walter"},{last_name: "Nyeko"}]});`. This will return all documents with first name Walter, and last name is Nyeko.
- To use Less Than and Greater Than operators, `db.employees.find({ age: {$lt: 20} });`, `db.employees.find({ age: {$gt: 20} });`. lt === less than, gt === greater than.
- To use Less Than or Equal To, and Greater Than or Equal To operators, `db.employees.find({ age: {$lte: 20} });`, `db.employees.find({ age: {$gte: 20} });`. lte === less than or equal to, gte === greater than or equal to.
- To deal with attributes which are objects, `db.employees.find({"address.city": "Kampala"});`. This will return all employees whose city attributes in the employees object is Kampala. Note that in this case the query param is both in quotes.
- To query from an array of items, `db.employees.find({memberships: "Admin"});`. In this case, the document has an array attribute called memberships, the array contains strings which represent the different memberships that an employee belong to.
- To sort documents in ascending, `db.employees.find().sort({last_name: 1})`. This will sort by last name in ascending order. replace `1` with `-1` for descending order.
- To count all documents in a collection, `db.employees.find().count();`. Will count all records.
- To count based on some query param, `db.employees.find({gender: "Female"}).count();`. Will count all females.
- To limit returned rows, `db.employees.find().limit(5);`. Will return the first 5 documents.
- To limit returned rows based on a query param, `db.employees.find({gender: "female"}).limit(5);`. Will return the first 5 females.
- To sort and limit records to certain number, `db.employees.find().limit(5).sort({last_name: 1});`. Will sort by last name in asc order and limit returned records to 5 rows only.
- To sort and limit records to certain number based on some param, `db.employees.find({first_name: "walter"}).limit(5).sort({last_name: 1});`. Will sort by last name in asc order and limit returned records to 5 rows only.
- To loop through the collections using forEach: 
    *db.employees.find().forEach(doc => {
        print(`Emplyee: ${doc.first_name}`)
    });*

## Further Reading
- Equivalent to BETWEEN clause in SQL
- Equivalent to FUNCTIONS in SQL
- Equivalent to STORED PRCEDURES
- Equivalent to TRIGGERS
- Equivalent DATE functions like TIMESTAMPDIFF() in SQL.

## SQL vs NoSQL syntax

| SQL Terms/Concepts          | MongoDB Terms/Concepts               |
|-----------------------------|:------------------------------------:|
| database                    | database                             |
| table                       | collection                           |
| row                         | document or BSON document            | 
| column                      | field                                |
| index                       | index                                |
| table joins                 | $lookup                              |
| aggregation (e.g. group by) | aggregation pipeline                 |
| primary key                 | automatically set to the _id field.  |


## Executables 

|                 |  MongoDB      |  MySQL      |  Oracle     |  Informix    |  DB2        |
|-----------------|:-------------:|------------:|------------:|-------------:|------------:|
| Database Server |  mongod       | mysqld      | oracle      |  IDS         |  DB2 Server |
| Database Client |  mongo        | mysql       | sqlplus     |  DB-Access   |  DB2 Client |