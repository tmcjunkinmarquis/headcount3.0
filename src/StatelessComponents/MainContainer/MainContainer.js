import React from 'react';
import CardContainer from '../CardContainer/CardContainer';
import PropTypes from 'prop-types';

const MainContainer = (props) => {
  return (
    <div>
      <h5> this is the main container </h5>
      <CardContainer {...props}/>
    </div>
    )
}

MainContainer.proptypes = {
  props: PropTypes.object.isRequired
}

export default MainContainer;