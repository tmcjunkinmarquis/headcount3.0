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
    const value = this.state.value;
    const districts = this.props.allDistricts;
    if(!districts.length || !value) {
      return
    } else if (districts.length === 1) {
      this.props.selectDistrict(districts[0].location);
      this.props.findFromSearch('');
      return
    } else if (districts.filter(district => district.location === value.toUpperCase()).length) {
      this.props.selectDistrict(value);
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