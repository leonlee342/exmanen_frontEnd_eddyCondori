import React from "react";

function Prestamo(){ 



    return(
        <div className="container">
            <div class="col-md-8">
            <h2>Préstamo de Libro</h2>
            <select className="form-control">
                <option>Seleccionar libro</option>
            </select><br/>
            <select className="form-control">
                <option>Seleccionar cliente</option>
            </select><br/>
            <div className="form-group">
                <div className="label">Fecha de Prestamo:</div>
                <input className="form-control"
                    type="date"
                    placeholder="Tituló del libro"
                />
            </div>
            <br/>
            <input className="form-control"
                type="number"
                placeholder="Numero de dias de prestamo"
            />
            <br />
            <input className="form-control"
                type="text"
                placeholder="Estado del libro"
            />
            <br />
            </div>
              <button className="btn btn-success">Registrar Prestamo</button>
              <button className="btn btn-primary">Registrar Devolucion</button>
  
        </div>
    )
}

export default Prestamo;