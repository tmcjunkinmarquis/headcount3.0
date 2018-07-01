import React from 'react';
import Card from '../Card/Card';
import './SelectedContainer.css';
import PropTypes from 'prop-types';

const SelectedContainer = ({ 
  selectedCards, 
  unselect, 
  compareDistrictAverages }) => {
  
  const showCards = (districts) => {
    return districts.map(district => (
      <Card 
        district={district} 
        key={district.location}
        selected={true}
        unselect={unselect}
      />)
    );
  };

  const comparison = () => {
    if (selectedCards.length === 2) {
      const nameA = selectedCards[0].location;
      const nameB = selectedCards[1].location;
      const comparisonObj = compareDistrictAverages(nameA, nameB);

      return (
        <div className='comparison-content'>
          <h5 className='comp-dist'>{nameA} : {comparisonObj[nameA]}</h5>
          <h4 className='comparison-value'>{comparisonObj.compared}</h4>
          <h5 className='comp-dist'>{nameB} : {comparisonObj[nameB]}</h5>
        </div>
      );
    }
  };

  return (
    <div className='selected-container'>
      {showCards(selectedCards)[0]}
      {selectedCards.length === 2 && comparison()}
      {showCards(selectedCards)[1]}
    </div>
  );
};

SelectedContainer.propTypes = {
  unselect: PropTypes.func.isRequired,
  selectedCards: PropTypes.func.isRequired,
  compareDistrictAverages: PropTypes.func.isRequired
};

export default SelectedContainer;