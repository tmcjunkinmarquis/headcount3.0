import React from 'react';

const Card = ({ district }) => {

  const generateList = (stats) => {
    const years = Object.keys(stats);
    years.map(year => {
      return (
        <li>{year}<span className="percent">{stats[year]}</span></li>
        )
    })

  }

  return(
    <div>
      <h5 className="district">Some District</h5>
      <ul>
        {() => generateList(district.stats)}
      </ul>
    </div>
    )
}

export default Card;