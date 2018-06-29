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
    const cards = this.state.selectedCards;
    const selected = this.districtRepo.findByName(district);
    let isDuplicate = false;
    cards.forEach(card => {
      if( card.location === selected.location) { isDuplicate = true; };
    });

    if(isDuplicate){ return; }

    if (cards.length <= 1) {
      cards.push(selected);
    } else {
      cards.splice(1,1,selected);
    }
    this.setState({
      selectedCards: cards
    });
  }

  findFromSearch = (chars) => {
    const allDistricts = this.districtRepo.findAllMatches(chars);
    this.setState({ allDistricts });
  };

  render() {
    return (
      <div>Welcome To Headcount 2.0
        <Form 
          selectDistrict={this.selectDistrict}
          findFromSearch={this.findFromSearch}/>
        <SelectedContainer selectedCards={this.state.selectedCards}/>
        <CardContainer 
          allDistricts={this.state.allDistricts}/>
      </div>
    );
  }
}

export default App;
