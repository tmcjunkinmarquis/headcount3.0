import React from 'react';
import Card from '../Card/Card';

const SelectedContainer = ({ selectedCards }) => {
  const showCards = (districts) => {
    return districts.map(district => <Card district={district} />)
  }

  return (
      <div>
        {showCards(selectedCards)}
      </div>
    )
}

export default SelectedContainer;