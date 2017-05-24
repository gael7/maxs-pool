import React from 'react';

class Intro extends React.Component {
  constructor(){
    super();
      const pictures = ["one", "two", "three", "four", "five", "six"];
      const includes = ["Palapa", "Karaoke", "Mobilario para 50 personas", "Asador con Ataud", "Pileta (Hielera)", "Area de Juegos"];
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
        pictures,
        includes,
        telephones
      };
  }
  render(){
    return(

        <div className="section max-background">
          <div className="row">
            <div className="col s9">
              <div className="carousel carousel-slider" data-indicators="true">
                {this.state.pictures.map((picture, index)=>(
                  <a key={index} className="carousel-item" href={"#"+picture+"!"}><img src={"images/"+picture+".jpg"} /></a>
                ))}
              </div>
            </div>
            <div className="col s3 white-text">
              <div className="row">
              <h5 className="center">Incluye</h5>
              <div className="card-panel orange darken-2">
                <span className="white-text">
                  {this.state.includes.map((include, index2)=>(
                    <h5 key={index2}><i className="material-icons">pool</i> {include}</h5>
                  ))}
                </span>
              </div>
            </div>
            <div className="row">
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
        </div>

    )
  }
}

export default Intro;
