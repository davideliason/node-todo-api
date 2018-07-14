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

    // deleteMany

    // db.collection("Todos").deleteMany({ text: "drink more coffee" }).then((result) => {
    //     console.log(result);
    // });
    // // deleteOne
    // db.collection("Todos").deleteOne({
    //     text: "walk the dog"
    // }).then((result) => {
    //     console.log("document deleted", result);
    // });

    // deleteOne example two
    // db.collection("Todos").deleteOne({
    //     text: "sleep"
    // }).then((result) => {
    //     console.log(result);
    // });
    // findOneAndDelete
    // db.collection("Todos").findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // practice solution of removing duplicates
    // db.collection("Users").deleteMany({
    //     name: "Tom"
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection("Users").findOneAndDelete({
        _id: new ObjectID('5b49cdbd4d1f0eb3645bead4')
    }).then((result) => {
        console.log(result);
    });


    // db.close();
});