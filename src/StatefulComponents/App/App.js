import React, { Component } from 'react';
import DistrictRepository from '../../helper';
import './App.css';
import Form from '../Form/Form';
import CardContainer from '../../StatelessComponents/CardContainer/CardContainer';
import SelectedContainer from '../../StatelessComponents/SelectedContainer/SelectedContainer';


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
    const districtRepo = new DistrictRepository();
    const districts = Object.values(districtRepo.stats);

    this.setState({allDistricts: districts});  
  }

  render() {
    return (
      <div>Welcome To Headcount 2.0
        <Form />
        {this.state.selectedCards.length && <SelectedContainer />}
        <CardContainer 
          allDistricts={this.state.allDistricts}/>
      </div>
    );
  }
}

export default App;
