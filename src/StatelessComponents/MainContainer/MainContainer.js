import React from 'react';
//import Card from '../Card/Card';
import CardContainer from '../CardContainer/CardContainer';


const MainContainer = (props) => {
  return (
    <div>
      <h5> this is the main container </h5>
      <CardContainer {...props}/>
    </div>
    )
}

export default MainContainer;