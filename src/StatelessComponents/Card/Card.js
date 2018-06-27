import React from 'react';

const Card = (props) => {

  const generateList = (stats) => {
    const years = Object.keys(stats);
    return years.map(year => {
      return (
        <li>{year}<span className="percent">{stats[year]}</span></li>
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

export default Card;