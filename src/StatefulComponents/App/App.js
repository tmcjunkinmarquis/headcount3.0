import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import MainContainer from '../../StatelessComponents/MainContainer/MainContainer';
import DistrictRepository from '../../helper';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCards: [],
      allDistricts: [],
      average: null,

    };

  }

  componentDidMount(){
    const districtRepo = new DistrictRepository()
    const districts = Object.values(districtRepo.stats)
    this.setState({allDistricts: districts})
     
  }

  render() {
   
    return (
      <div>Welcome To Headcount 2.0
        <Form />
        <MainContainer 
          allDistricts={this.state.allDistricts}/>
      </div>
    );
  }
}

export default App;
