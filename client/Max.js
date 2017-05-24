import React from 'react';
import NavigationBar from './NavigationBar';
import Intro from './Intro';
import Precios from './Precios';

class Max extends React.Component {
  constructor(){
    super ();
  }
  render (){
    return(
      <div>
        <NavigationBar />
        <Intro />
        <Precios />
      </div>
    )
  }
}

export default Max;
