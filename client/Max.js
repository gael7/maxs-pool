import React from 'react';
import NavigationBar from './NavigationBar';
import Intro from './Intro';
import Contact from './Contact';
import CarouselComp from './CarouselComp';
import Precios from './Precios';

class Max extends React.Component {
  constructor(){
    super ();
  }
  render (){
    return(
      <div>
      <div className="intro-background">
        <NavigationBar />
        <Intro />
      </div>
        <CarouselComp />
        <Contact />
      </div>
    )
  }
}

export default Max;
