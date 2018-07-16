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

var Todo2 = mongoose.model('Todo')

var newTodo = new Todo({
    text: "Make coffee"
});

newTodo.save().then((doc) => {
    console.log("doc saved", doc);
}, (e) => {
    console.log("unable to save document");
});