import React from 'react';
import PropTypes from 'prop-types'
import {withGoogleMap, GoogleMap, Marker, } from 'react-google-maps';
import withScriptjs from "react-google-maps/lib/async/withScriptjs";
import FaSpinner from "react-icons/lib/fa/spinner";
const bounds = {
  ne: {lat: 27.466883, lng: -99.512667},
  sw: {lat: 27.492849, lng: -99.478849}
};
const Map = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    //(map)=>{console.log(map); map.fitBounds({lat: 27.492849, lng: -99.478849}, {lat: 27.466883, lng:-99.512667}) }
    ref={props.onMapLoad}
    defaultZoom={17}
    defaultCenter={{ lat: 27.479025, lng: -99.485029 }}
    defaultOptions={{
    scrollwheel: false,
  }}>
    {props.markers.map(marker => (
          <Marker
            {...marker}
          />
        ))}
    </GoogleMap>
)));

class Contact extends React.Component {
  constructor(props){
    super(props);
    const telephones = [{
      icon: "phone",
      num: "196-2048"
    },{
      icon: "phone_android",
      num: "42*13*29316"
    },{
      icon: "phone_iphone",
      num: "(956)231-6333"
    }];
    this.state = {
      telephones,
      markers: [{
        position: {
          lat: 27.479025,
          lng: -99.485029,
        },
        key: "Max's Pool",
        defaultAnimation: 2,
      }]
    };
  }
  render(){
    return(
      <div className="section max-background" id="contact">
        <div className="row">
          <div className="col m8 s12">
            <Map googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD3LR064cXagnOZBTyj4gptDnbpnEgxuXo"
            loadingElement={
              <div style={{ height: `100%` }}>
                <FaSpinner
                  style={{
                    display: `block`,
                    width: `80px`,
                    height: `80px`,
                    margin: `150px auto`,
                    animation: `fa-spin 2s infinite linear`,
                  }}
                />
        </div>}
              containerElement={
              <div style={{height: '500px'}}></div>
            } mapElement={
              <div style={{ height: '100%'}}></div>
            } markers={this.state.markers} />
          </div>
          <div className="col m4 s12">
            <h5 className="center">Llámanos</h5>
              <div className="card-panel orange darken-2">
                <span className="white-text">
                  {this.state.telephones.map((telephone, index3)=>(
                    <h5 key={index3}><i className="material-icons">{telephone.icon}</i> {telephone.num}</h5>
                  ))}
                </span>
              </div>
            </div>
          </div>
      </div>
  )
  }
}
export default Contact;
