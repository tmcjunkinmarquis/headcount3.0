import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };

  }

  handleChange = (e)=>{
    console.log('poop');
  }

  render(){
    return(
      <div>
        <h1>Head Count Logo</h1>
        <input
          className='searchField' 
          type="text"
          value={this.state.value}
          placeholder='Enter District'
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Form;