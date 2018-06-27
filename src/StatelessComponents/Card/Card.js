import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {

  const generateList = (stats) => {
    const years = Object.keys(stats);
    return years.map(year => {
      return (
        <li key={year}>{year}<span className="percent">{stats[year]}</span></li>
        )
    })

  }

  return(
    
    <div>
      <h5 className="district">{props.district.location}</h5>
      <ul>
        {generateList(props.district.stats)}
      </ul>
    </div>
    )
}

Card.proptypes = {
  stats: PropTypes.object.isRequired
}

export default Card;