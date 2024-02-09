import { Button } from "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import { useState } from "react";
import { Container, Table } from "reactstrap";

function Autor(){ 


    return(
        <>
        
            <Container>
            <h2>Agregar Cliente</h2>
                <br/>
                <button className="btn btn-success">Nuevo Cliente</button>
                <br/> <br/>

                <table className="table table-striped table-hover ">
                    <thead className="table-danger">
                        <tr>
                            <th>ID</th>
                            <th>NOMBRE CLIENTE</th>
                            <th>EMAIL</th>
                            <th><center>ACCIONES</center></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Hernan Soto Mayor</td>
                            <td>hernan@gmail.com</td>
                            <td>
                            <center>
                            <button className="btn btn-primary" >Editar  <i className="fa-solid fa-edit"></i></button> {"   "}
                            <button className="btn btn-danger" >Eliminar <i className="fa-solid fa-trash"></i></button>
                            </center>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Grace Helen Garcia Gabo</td>
                            <td>grace_gabo@gmail.com</td>
                            <td>
                            <center>
                            <button className="btn btn-primary" >Editar  <i className="fa-solid fa-edit"></i></button> {"   "}
                            <button className="btn btn-danger" >Eliminar <i className="fa-solid fa-trash"></i></button>
                            </center>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Ernesto de La Cruz</td>
                            <td>ernestocruz@gmail.com</td>
                            <td>
                            <center>
                            <button className="btn btn-primary" >Editar  <i className="fa-solid fa-edit"></i></button> {"   "}
                            <button className="btn btn-danger" >Eliminar <i className="fa-solid fa-trash"></i></button>
                            </center>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Container>

        </>
    )
}

export default Autor;




