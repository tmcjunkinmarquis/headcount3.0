import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCards: [],
      allCards: [],
      average: null
    };

  }
  render() {
    return (
      <div>Welcome To Headcount 2.0
        <Form />

      </div>
    );
  }
}

export default App;
