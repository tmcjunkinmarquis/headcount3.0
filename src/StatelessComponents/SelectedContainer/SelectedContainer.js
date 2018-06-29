import React from 'react';
import Card from '../Card/Card';
import './SelectedContainer.css'

const SelectedContainer = ({ selectedCards, unselect }) => {
  const showCards = (districts) => {
    return districts.map(district => (
        <Card 
          district={district} 
          key={district.location}
          selected={true}
          unselect={unselect}
        />)
    )
  }

  return (
      <div className='selected-container'>
        {showCards(selectedCards)}
      </div>
    )
}

export default SelectedContainer;