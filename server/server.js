const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/ToDoApp");

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});



var newTodo = new Todo({
    text: "Make coffee"
});

var newTodo2 = new Todo({
    text: "drink coffee",
    completed: true,
    completedAt: new Date()
});

newTodo2.save().then((doc) => {
    console.log("saved", doc);
}, (e) => {
    console.log("error saving doc");
});


newTodo.save().then((doc) => {
    console.log("doc saved", doc);
}, (e) => {
    console.log("unable to save document");
});