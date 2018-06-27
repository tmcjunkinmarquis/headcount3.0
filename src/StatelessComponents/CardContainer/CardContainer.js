import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import './CardContainer.css'

const CardContainer = ({allDistricts}) => {

  const makeCards = (districts)=>{

    return districts.map((district)=>{
      return (
        <Card 
          district={district}
          key={district.location}
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
  allDistricts: PropTypes.array.isRequired
}

export default CardContainer;