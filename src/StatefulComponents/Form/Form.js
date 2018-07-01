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
    if(!this.props.allDistricts.length || !this.state.value) {
      return
    } else if (this.props.allDistricts.length === 1) {
      this.props.selectDistrict(this.props.allDistricts[0].location);
      return
    } else if (this.props.findFromSearch(this.state.value)) {
      this.props.selectDistrict(this.state.value);
      this.setState({value: ''});
      this.props.findFromSearch(''); 
    }
  }

  render(){
    return (
      <form className="form"onSubmit={this.handleSubmit}>
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