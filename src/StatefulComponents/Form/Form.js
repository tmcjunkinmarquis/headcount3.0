import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      value
    });
    this.props.findFromSearch(value);

  }

  handleSubmit = (event) => {
    event.preventDefault();
    const value = this.state.value;
    const districts = this.props.allDistricts;
    if (!districts.length || !value) {
      return;
    } else if (districts.length === 1) {
      this.props.selectDistrict(districts[0].location);
      this.props.findFromSearch('');
      return;
    } else if (districts.filter(district => 
      district.location === value.toUpperCase()).length) {
      this.props.selectDistrict(value);
      this.setState({value: ''});
      this.props.findFromSearch(''); 
    }
  }

  render(){
    return (
      <form className="form"onSubmit={this.handleSubmit}>
        <h1>Head Count 2.0</h1>
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

Form.propTypes = {
  selectDistrict: PropTypes.func.isRequired,
  findFromSearch: PropTypes.func.isRequired,
  allDistricts: PropTypes.array.isRequired
};

export default Form;