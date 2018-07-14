// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');
var obj = new ObjectID();


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    // handle errors, return if there is one
    if (err) {
        return console.log('unable to connect to MongoDB server');

    }
    console.log("connected to MongoDB server");
    const db = client.db("TodoApp");

    // findOneAndUpdate

    // db.collection("Todos").findOneAndUpdate({

    //     _id: new ObjectID("5b49d68b4d1f0eb3645bed4b")

    // }, {
    //         $set: {
    //             completed: true
    //         }
    //     }, { returnOrignal: false }).then((result) => {
    //         if (err) {
    //             console.log("unable to find document and delete", err);
    //         }
    //         console.log("success", result);
    //     });

    // exercise in finding a document by _id, updating the name field 
    // with a new value, and using the $inc operator to increment the age
    // field by one value

    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5b49cdd14d1f0eb3645beada")
    }, {
            $set: {
                name: "David"
            },
            $inc: {
                age: 1
            }
        },
        {
            returnOriginal: false
        }).then((result) => {
            console.log("success", result);
        });
    // db.close();
});