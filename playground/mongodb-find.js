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


    // db.collection('Todos').find({

    //     _id: new ObjectID('5b4919fb383f5d028cc26b40')

    // }).toArray()
    //     .then((docs) => {
    //         console.log("Todos");
    //         console.log(JSON.stringify(docs, undefined, 2))
    //     }, (err) => {
    //         console.log("error retrieving files", err);
    //     });

    // create a cursor and use count method on Todos
    // db.collection('Todos').find().count()
    //     .then((count) => {
    //         console.log(`Todos count: ${count} `);
    //         console.log(JSON.stringify(count, undefined, 2))
    //     }, (err) => {
    //         console.log("error retrieving files", err);
    //     });

    db.collection('Users').find({ name: "Tom" }).count()
        .then((count) => {
            console.log(JSON.stringify(count, undefined, 2))
        }, (err) => {
            console.log("error retrieving files to count");
        });

    // db.close();
});