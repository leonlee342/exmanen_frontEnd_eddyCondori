import React from "react";
import Header from "./Layout/header";
import { Route,Routes } from "react-router-dom";
import Autor from "./Autor";
import Libro from "./Libro";
import Prestamo from "./Prestamo";
import Cliente from "./Cliente";
import Reportes from "./Reportes";

export const  App = () =>{
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Autor/>}/>
        <Route path="/libro" element={<Libro/>}/>
        <Route path="/prestamo" element={<Prestamo/>}/>
        <Route path="/cliente" element={<Cliente/>}/>
        <Route path="/reportes" element={<Reportes/>}/>        
      </Routes>

    </div>
  );
}


