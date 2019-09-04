## Elasticsearch

- Elasticsearch is a distributed, open source search and analytics engine for all types of data, including textual, numerical, geospatial, structured, and unstructured.
- Elasticsearch is built on Apache Lucene and was first released in 2010 by Elasticsearc.

## Features of Elasticsearch

- Distributed: Scales to thousands of nodes
- High availability: Multiple copies of data are stored within the cluster.
- RESTful API: CRUD, monitoring and other operations via simple JSON-based HTTP calls.
- Powerful Query DSL: Expresses complex queries simply.
- Schemaless: All documents that you index need no schema and data types.

## Installation

- Visit www.elastic.co and download the version that matches your operating system.

## Basic Concepts

### Near Real Time Search Platform

- The difference between time when you index a document and search it is almost negligible

### Cluster

- Collection of one or more nodes that together hold the entire data.

### Node

- A node is a single server inside of cluster that participates in storing, indexing, and searching within the cluster.

### Index

- A collection of documents with similar x-teristics and is identified by a name. For example we can have a movies index, this will store only data related to movies.

### Type

- Type is a category within an index that defines documents with sets of common fields. For example, within movies index, we can have a type called NigerianMovies, this will store only nigerian movies.

### Document

- This is a basic unit of information which can be indexed. It is expressed in JSON

### Shards

- Elasticsearch sub-divides oversized indices into smaller copies called shards. Each shard is a fully functional index that can be hosted on any node within the cluster.

### Replicas

- To avoid data losses, elastic search makes one or more copies of your shards called replica shards.

## Example Hands-on Application

- I have built something on Spring [here](https://github.com/WalterNyeko/elasticsearch-java) that communicates with elasticsearch.
