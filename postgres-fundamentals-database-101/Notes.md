# Postgres Fundamentals - Database 101
- AWS
- Completed May 8, 2019
----------

## History

### History of PostgreSQL
- Initiated as Ingres project at UC Berkeley by Michael Stonebraker
- First version released in 1997
- Written in C
- Flexible across all UNIX platforms, Windows, MacOS, and others


## Database 101
### Quick database refresher
-	A database stores data
- Plain text files have limited functionality for basic processes, including: 
	- Searches
	- Simultaneous updates and reads
	- Access control
- Access the text file via a management system to:
	- Traffic cop the data
	- Manage concurrency
	- Provide other features
		
### ACID compliance
- **Atomicity** - store data in all-or-nothing approach
- **Consistency** - give me a consistent picture of the data
- **Isolation** - prevent concurrrent data updates from incorrect read/writes
- **Durability** - when I say 'COMMIT' the data make sure it is safe until I explicitly destroy it
	
### Database transactions
- A transaction is a unit of work.
- A transaction is all or nothing:
	- Beginning (BEGIN;)
	- Work (INSERT/UPDATE/DELETE/SELECT)
	- Ending (END;) results in one of  the following:
	- COMMIT; (save everything)
	- ROLLBACK; (undo all changes, and save nothing)
- Once the transaction ends, it either makes ALL of the changes between BEGIN; and COMMIT; or NONE of them (if there is an error, for example).	
	
## PostgresSQL 101
### PostgresSQL 101
- PostgreSQL meets all the requirements to be a fully ACID-compliant, transactional database.
- To accomplish this, many database and computer science concepts are implemented.
- The focus of the course is to illustrate PostgreSQL internals and the effects they have on the end user.
- PostgreSQL relational database management system (RDBMS) serves an instance that:
	- Serves one (and only one) TCP/IP port
	- Has a dedicated data directory
	- Contains at least one database

### PostgreSQL features
- ACID compliant
- Transactional (uses WAL/REDO)
- Partitioning
- Multiversion concurrency control (readers don’t block writers)
- Online maintenance operations
- Hot/warm Standby
- Full-text search
- Rich geospatial (PostGIS)
- Procedural languages
	
### Database limitations
- General database limitations
	- Maximum database size: Unlimited
	- Maximum table size: 32 TB
	- Maximum row size: 1.6 TB
	- Maximum field size: 1 GB
	- Maximum rows/table: Unlimited
	- Maximum columns/table: 250 - 1600
	- Maximum indexes/table: Unlimited
		
### PostgreSQL terminology
- PostgreSQL was designed in academia:
	- Objects defined in academic terms
	- Terminology based on relational calculus/algebra
		
### Common database object names
- Industry term
```
Table or index	Relation
Row             Tuple
Column          Attribute
Data block      Page (when block is on disk)
Page            Buffer (when block in in memory)
```		
	
## Conclusion
### Review what you learned
- PostgreSQL is an enterprise class, open source relational database management system.
- PostgreSQL has a rich history and was created at UC Berkeley. PostgreSQL is flexible, and can scale into the future.
- The PostgreSQL engine adds new features and functionality to appeal to new use cases.
