// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// call new instance of ObjectID
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    // handle errors, return if there is one
    if (err) {
        return console.log('unable to connect to MongoDB server');

    }
    console.log("connected to MongoDB server");
    const db = client.db("TodoApp");

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("unable to insert todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // });

    // insert new doc into User { name : "david", age: x, location : ""}
    // using insertOne, error handling, print opps

    // db.collection('Todos').insertOne({
    //     name: "Tom",
    //     age: 56,
    //     location: "Seattle"
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("unable to insert document", err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });
    client.close();
});