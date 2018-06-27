import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import MainContainer from '../../StatelessComponents/MainContainer/MainContainer';

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
        <MainContainer />
      </div>
    );
  }
}

export default App;
