const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/Todo');

// use a db collection document id for queries
var id = '5b4cb94dcf398d204d4d1d91';

// mongoose will translate string id to ObjectID
Todo.find({
    _id: id
}).then((todos) => {
    console.log("Todos", todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log("Todo", todo);
});