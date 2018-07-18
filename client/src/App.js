import React, { Component } from 'react';
import './App.css';

import Form from './Form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Todos</h3>
        <Form />
      </div>
    );
  }
}

export default App;
