import React from "react";
import { Link } from "react-router-dom";
// import logo from './login_umss1.png';


function Header() {
    let url = "";               
                           

    return (
            <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: '#B25A5A'}}>
                <div className="container-fluid">
                 {/* <img height="30px" width="10px" src={logo} alt="logo"/>  */}
                    <a className="navbar-brand" href={url}>TIENDA DE LIBROS</a>   
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={"/"} >
                                <a className="nav-link active" aria-current="page" href={url}>Autor</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/libro"}>
                                <a className="nav-link" href={url}>Libro</a>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to={"/prestamo"}>
                                <a className="nav-link" href={url}>Prestamo</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/cliente"}>
                                <a className="nav-link " href={url} tabindex="-1" aria-disabled="true">Cliente</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/reportes"}>
                                <a className="nav-link " href={url} tabindex="-1" aria-disabled="true">Reportes</a>
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
  
    )
  
  }
  
  export default Header;
