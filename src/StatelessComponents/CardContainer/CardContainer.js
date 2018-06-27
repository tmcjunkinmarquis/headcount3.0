import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const CardContainer = ({allDistricts}) => {

  const makeCards = (districts)=>{

    return districts.map((district)=>{
      return (
        <Card 
          district={district}
          key={district.location}/>
      );
    });
  };

  return (
    
    <div>
      <h5> this is the card container </h5>
      {makeCards(allDistricts)}
    </div>
  );
};

CardContainer.proptypes = {
  allDistricts: PropTypes.array.isRequired
}

export default CardContainer;