import React, { Component } from 'react';
import './Form.css';

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
    });
    this.props.findFromSearch(value);

  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (!event.target.value) {
      return;
    }
    this.props.selectDistrict(this.state.value);
    this.setState({value: ''});
    this.props.findFromSearch('');

  }

  render(){
    return (
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