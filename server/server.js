
// grabbing the return object from mongoose.js
var { mongoose } = require('./db/mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

var tom = new User({
    email: "this@chateau.com"
});

tom.save().then((doc) => {
    console.log("new user saved", JSON.stringify(doc, undefined, 2));

}, (e) => {
    console.log("error", e);
});

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
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