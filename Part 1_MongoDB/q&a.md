# Part 1: MongoDB

## Write a MongoDB query to find all documents in a collection where the "age" field is greater than 25.

```
db.collection.find( { age: { $gt: 25 } } )
```

## Write a MongoDB query to update the "email" field of a document with a specific ID.

```
db.collection.updateOne(
  { _id: 'someId' },
  {
    $set: { email: 'frans261087@gmail.com' },
    $currentDate: { lastModified: true }
  }
```

## Write a MongoDB query to delete all documents in a collection where the "status" field is set to "inactive".

```
db.collection.deleteMany({ status: 'inactive' })
```
