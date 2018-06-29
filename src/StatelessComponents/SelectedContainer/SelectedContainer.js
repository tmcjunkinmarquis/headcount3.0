import React from 'react';
import Card from '../Card/Card';
import './SelectedContainer.css'

const SelectedContainer = ({ selectedCards }) => {
  const showCards = (districts) => {
    return districts.map(district => <Card district={district} key={district.location}/>)
  }

  return (
      <div className='selected-container'>
        {showCards(selectedCards)}
      </div>
    )
}

export default SelectedContainer;