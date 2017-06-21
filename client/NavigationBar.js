import React from 'react';

class NavigationBar extends React.Component {
    constructor(){
        super();
    }

    render() {
        return(
          <div className='navbar-fixed'>
            <nav className="transparent">
              <div className="nav-wrapper">
                  <a href="/" className="brand-logo center">Max's Pool</a>
                  <ul className="right hide-on-med-and-down">
                    <li><a href="/#precios">Precios</a></li>
                    <li><a href="/#contact">Contáctanos</a></li>
                    <li><a href="#">Promocion</a></li>
                  </ul>
              </div>
            </nav>
          </div>
        );
    }
}
export default NavigationBar;
