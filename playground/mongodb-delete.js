// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    // handle errors, return if there is one
    if (err) {
        return console.log('unable to connect to MongoDB server');

    }
    console.log("connected to MongoDB server");
    const db = client.db("TodoApp");

    // deleteMany

    db.collection("Todos").deleteMany({ text: "drink more coffee" }).then((result) => {
        console.log(result);
    });
    // deleteOne
    db.collection("Todos").deleteOne({
        text: "walk the dog"
    }).then((result) => {
        console.log("document deleted", result);
    });

    // deleteOne example two
    db.collection("Todos").deleteOne({
        text: "sleep"
    }).then((result) => {
        console.log(result);
    });
    // findOneAndDelete

    // db.close();
});