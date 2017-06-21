import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Max from './Max';
import Precios from './Precios';
import Contact from './Contact';

render((
  <Router>
    <div>
    <Route exact path="/" component={Max}/>
    <Route path="/#precios" component={Precios}/>
    <Route path="/#contact" component={Contact}/>
    </div>
  </Router>
), document.getElementById('app'));
