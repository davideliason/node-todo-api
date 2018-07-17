var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

app.use(bodyParser.json());

// middleware config
// bodyParser will take the JSON string and turn it into an object
// .. attaching it to the req object

app.post('/todos', (req, res) => {
    // print out the body compliments of bodyParser
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc)
    }, (e) => {
        console.log("unable to retrieve post");
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos
        });
    }, (e) => {
        res.status(400, e);
    })
});

app.listen(3000, () => {
    console.log("app started on port 3000");
})

module.exports = { app };