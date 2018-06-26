import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };

  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      value
    })
  }

  render(){
    return(
      <form>
        <h1>Head Count Logo</h1>
        <input
          className='searchField' 
          type="text"
          value={this.state.value}
          placeholder='Enter District'
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Form;