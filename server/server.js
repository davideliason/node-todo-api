const _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');
var { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    // validate id
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    }
    // okay it's valid
    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(400).send();
        }
        res.status(200).send(todo);
    }).catch((err) => {
        res.status(404).send();
    });
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    // id is valid:
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.status(200).send(todo);
    }).catch((err) => {
        res.status(404).send();
    });
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    // _.pick will only select the two fields to be attached
    // to the req.body => body for use
    var body = _.pick(req.body, ['text', 'completed']);
    // validate id
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    // 'completed'.value (Boolean) ? set timestamp : clear timestamp
    // is it a boolean && is that boolean === true?
    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    }
    else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, { $set: body }, { new: true }).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.status(200).send({ todo });
    }).catch((e) => {
        res.status(400).send();
    });
});

app.listen(port, () => {
    console.log(`server running at ${port}`);
});

module.exports = { app };