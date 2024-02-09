import React from "react";

function Reportes(){ 



    return(
        <div className="container">
            <div class="col-md-8">
            <h2>Generar reportes</h2>
            <div className="form-group">
                <div className="label">Fecha Inicial</div>
                <input className="form-control"
                    type="date"
                    placeholder="Fecha inicial"
                />
            </div>
            <br/>
            <div className="form-group">
                <div className="label">Fecha Final</div>
                <input className="form-control"
                    type="date"
                    placeholder="Fecha inicial"
                />
            </div>
            <br/>

            </div>
            <button className="btn btn-success">Generar Reporte</button>
            <button className="btn btn-primary">Borrar Reporte</button>
        </div>
    )
}

export default Reportes;