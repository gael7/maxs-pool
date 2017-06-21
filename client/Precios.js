import React from 'react';


class Precios extends React.Component {
  constructor(){
    super()
    const days = ["Lunes - Jueves", "Viernes", "Sabado", "Domingo"];
    const precios = ["1,200", "1,500", "2,500", "2,000"];

    this.state = {
      days,
      precios
    }
  }
  render(){
    return(
      <div className="section" id="precios">
        <div className="row">
          <div className="col s6">
            <h1 className="center">Precios</h1>
            <div className="col s8">
              {this.state.days.map((day, index)=>(
                <h3 key={index}>{day}</h3>
              ))}
            </div>
            <div className="col s4">
              {this.state.precios.map((precio, index2)=>(
                <h3 key={index2}>{"$ "+precio}</h3>
              ))}
            </div>
          </div>
          <div className="col s6">

          </div>
        </div>
      </div>
  )
  }
}

export default Precios;
