import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = ({ allDistricts, selectDistrict, selectedCards, unselect }) => {

  const selectedNames = selectedCards.map(district=>{
    return district.location;
  });

  const isSelected = district =>{
    return selectedNames.includes(district.location)
  }

  const makeCards = (districts)=>{
    return districts.map((district)=>{
      return (
        <Card 
          district={district}
          key={district.location}
          selectDistrict={selectDistrict}
          selected={isSelected(district)}
          unselect={unselect}
        />
      );
    });
  };

  return (
    
    <div className="card-container">
      {makeCards(allDistricts)}
    </div>
  );
};

CardContainer.proptypes = {
  allDistricts: PropTypes.array.isRequired,
  selectDistrict: PropTypes.func.isRequired,
  selectedCards: PropTypes.array.isRequired,
  unselect: PropTypes.func.isRequired,
};

export default CardContainer;