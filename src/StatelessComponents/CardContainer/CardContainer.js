import React from 'react';
import Card from '../Card/Card';

const CardContainer = ({allDistricts}) => {

  const makeCards = (districts)=>{

    return districts.map((district)=>{
      return (
        <Card 
          district={district}
          key={Date.now()}/>
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

export default CardContainer;