import React, { Component } from 'react';
import './App.css';
var axios = require('axios');

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            text: "",
            completed: false
        }
        this.handleTextAdd = this.handleTextAdd.bind(this);
        // this.handleCompletedStatus = this.handleCompletedStatus.bind(this);

    }
    handleTextAdd(event) {
        this.setState({
            text: event.target.value
        });
    }
    // handleCompletedStatus(event) {
    //     this.setState({
    //         completed: event.target.value
    //     });
    // }

    addTodo = event => {
        event.preventDefault();
        this.setState({
            text: event.target.value
            // completed: event.target.value
        });

        axios.post('https://murmuring-mesa-64245.herokuapp.com/', {
            text: this.state.text,
            completed: this.state.completed
        })
            .then(response => {
                console.log("todo added", response)
            })
            .catch(err => {
                console.log(err, "todo not added")
            });

        this.setState({
            text: "",
        })
    }

    render() {
        return (
            <div className="Form">
                <h3>Form</h3>
                <p>{this.state.text}</p>

                <input
                    onChange={this.handleTextAdd}
                    name="text"
                    value={this.state.text}
                    placeholder="enter todo text"
                />
            </div>
        );
    }
}

export default Form;
