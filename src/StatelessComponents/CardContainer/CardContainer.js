import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = ({ allDistricts, selectDistrict }) => {

  const makeCards = (districts)=>{

    return districts.map((district)=>{
      return (
        <Card 
          district={district}
          key={district.location}
          selectDistrict={selectDistrict}
          selected={false}
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
};

export default CardContainer;