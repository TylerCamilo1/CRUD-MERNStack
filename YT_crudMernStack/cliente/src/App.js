import logo from './logo.svg';
import './App.css';
import ListaUsuarios from './component/ListaUsuarios';
import AgregarUsuario from './component/AgregarUsuario';
import EditarUsuario from './component/EditarUsuario';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React, { useState } from 'react'

function App() {
  return (
    <div className="App">
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="https://github.com/TylerCamilo">Colegio de JavaScript</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
            aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Lista de estudiantes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="agregarusuario">Agregar estudiante</a>
                </li>  
              </ul>
            </div>
          </div>
        </nav>
      <BrowserRouter>
        <Routes>
          <Route path = '' element = {<ListaUsuarios/>} exact></Route>
          <Route path = '/agregarusuario' element = {<AgregarUsuario/>} exact></Route>
          <Route path = '/editarusuario/:idusuario' element = {<EditarUsuario/>} exact></Route>
          
        </Routes>
      </BrowserRouter>
    </div>

    
  );
}

export default App;
