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


    db.collection('Todos').find().toArray()
        .then((docs) => {
            console.log("Todos");
            console.log(JSON.stringify(docs, undefined, 2))
        }, (err) => {
            console.log("error retrieving files", err);
        });

    // db.close();
});