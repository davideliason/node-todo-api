const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user')

Todo.findByIdAndRemove('5b4df1f1792c73566457504e').then((todo) => {
    console.log("removed", todo);
});