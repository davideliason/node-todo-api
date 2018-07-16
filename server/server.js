const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/ToDoApp");

var User = mongoose.model({
    email: {
        type: string,
        required: true,
        trim: true,
        minlength: 1
    }
})

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var newTodo = new Todo({
    text: "Make coffee"
});

newTodo.save().then((doc) => {
    console.log("doc saved", doc);
}, (e) => {
    console.log("unable to save document");
});