import React from "react";

function Libro(){ 



    return(
        <div className="container">
            <div class="col-md-8">
            <h2>Agregar Libro</h2>
            <input className="form-control"
                type="text"
                placeholder="Tituló del libro"
            />
            <br/>
            <select className="form-control">
                <option>Seleccionar autor</option>
            </select><br/>
            <input className="form-control"
                type="number"
                placeholder="Numero de lote"
            /><br/>
            <textarea className="form-control"
                placeholder="Descripcion del libro"
            />
            <br/>
            </div>
            <button className="btn btn-success">Crear</button>
            <button className="btn btn-primary">Modificar</button>
            <button className="btn btn-danger">Eliminar</button>
        </div>
    )
}

export default Libro;