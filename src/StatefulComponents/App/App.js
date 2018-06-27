import React, { Component } from 'react';
import DistrictRepository from '../../helper';
import './App.css';
import Form from '../Form/Form';
import CardContainer from '../../StatelessComponents/CardContainer/CardContainer';
import SelectedContainer from '../../StatelessComponents/SelectedContainer/SelectedContainer';


class App extends Component {
  constructor(props) {
    super(props);
    this.districtRepo = new DistrictRepository();
    this.state = {
      selectedCards: [],
      allDistricts: [],
      average: null,
    };
  }

  componentDidMount(){
    const districts = Object.values(this.districtRepo.stats);

    this.setState({allDistricts: districts});  
  }

  selectDistrict = (district) => {
    const selected = this.districtRepo.findByName(district);

    this.setState({
      selectedCards: [...this.state.selectedCards, selected]
    })

  }

  render() {
    return (
      <div>Welcome To Headcount 2.0
        <Form selectDistrict={this.selectDistrict}/>
        {this.state.selectedCards.length && 
          <SelectedContainer />}
        <CardContainer 
          allDistricts={this.state.allDistricts}/>
      </div>
    );
  }
}

export default App;
