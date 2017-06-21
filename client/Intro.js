import React from 'react';


class Intro extends React.Component {
  constructor(){
    super()
    const telephones = [{
      icon: "phone",
      num: "196-20-48"
    },{
      icon: "phone_android",
      num: "42*13*29316"
    },{
      icon: "phone_iphone",
      num: "(956)231-63-33"
    }];
    this.state = {
      telephones
    }
  }
  render(){
    return(
      <div className="section">
        <div className="row">
          <div className="col s4">
        <h5 className="center">Llamanos</h5>
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

export default Intro;
