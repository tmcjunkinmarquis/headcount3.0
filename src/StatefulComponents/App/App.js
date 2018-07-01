import React, { Component } from 'react';
import DistrictRepository from '../../helper';
import './App.css';
import Form from '../Form/Form';
import CardContainer from 
  '../../StatelessComponents/CardContainer/CardContainer';
import SelectedContainer from 
  '../../StatelessComponents/SelectedContainer/SelectedContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.districtRepo = new DistrictRepository();
    this.state = {
      selectedCards: [],
      allDistricts: []
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
      if ( card.location === selected.location) { isDuplicate = true; }
    });

    if (isDuplicate) { 
      this.unselect(selected.location);
      return;
    }
    if (cards.length <= 1) {
      cards.push(selected);
    } else {
      cards.splice(1, 1, selected);
    }
    this.setState({
      selectedCards: cards
    });
  }

  unselect = (district) => {
    const selectedCards = this.state.selectedCards.filter(card => (
      card.location !== district )
    );
    this.setState({
      selectedCards
    });
  }

  findFromSearch = (chars) => {
    const allDistricts = this.districtRepo.findAllMatches(chars);
    this.setState({ allDistricts });
  };

  render() {
    return (
      <div>
        <Form 
          selectDistrict={this.selectDistrict}
          findFromSearch={this.findFromSearch}
          allDistricts={this.state.allDistricts}/>
        <SelectedContainer 
          unselect={this.unselect}
          selectedCards={this.state.selectedCards}
          compareDistrictAverages={this.districtRepo.compareDistrictAverages}
        />
        <CardContainer 
          allDistricts={this.state.allDistricts}
          selectDistrict={this.selectDistrict}
          selectedCards={this.state.selectedCards}
          unselect={this.unselect}
          className="card-container"
        />
      </div>
    );
  }
}

export default App;
