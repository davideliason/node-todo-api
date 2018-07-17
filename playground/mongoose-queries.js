const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user')

var id = '5b4d23b624f9833770f4f2cf';

User.findById(id).then((user) => {
    if (!user) {
        return console.log("user not found");
    }
    console.log("user :", user);
}).catch((e) => console.log(e));




// query User collection and get an id


// use a db collection document id for queries
// var id = '5b4cb94dcf398d204d4d1d91';

// if (!ObjectID.isValid(id){
//     console.log("id not valid");
// });

// // mongoose will translate string id to ObjectID
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log("Todos", todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log("Todo", todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('id not found');
//     }
//     console.log("todo by id", todo);
// }).catch((e) => console.log(e));

