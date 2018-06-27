import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
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

  handleSubmit = (e) => {
    e.preventDefault();
    //debugger
    this.props.selectDistrict(this.state.value);
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
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