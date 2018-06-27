import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {

  const generateList = (stats) => {
    const years = Object.keys(stats);
    return years.map(year => {
      let low = stats[year] < .5 ? 'low' : '';
      return (
        <li className={low} key={year}> <span className="year">{year}</span>
          <span className="percent">
            {stats[year]}
          </span>
        </li>
        )
    })
  }

  return(
    <div className="card">
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