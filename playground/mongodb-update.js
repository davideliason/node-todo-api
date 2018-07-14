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

    db.collection("Todos").findOneAndUpdate({

        _id: new ObjectID("5b49d68b4d1f0eb3645bed4b")

    }, {
            $set: {
                completed: true
            }
        }, { returnOrignal: false }).then((result) => {
            if (err) {
                console.log("unable to find document and delete", err);
            }
            console.log("success", result);
        });

    // db.close();
});