import React from "react";
import { Link } from "react-router-dom"
import '../../index.css'



function App() {
    return (
      <div classNameName="App">
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link active" href="/">Accueil
              <span className="visually-hidden">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Products">Produits</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Contact">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/About">A propos</a>
          </li>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle show text-dark" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">Actualités</a>
          <div className="dropdown-menu" data-bs-popper="static">
            <a className="dropdown-item text-dark nav-link" href="/Blog" style={{color :"black"}}><Link to="/Blog">Blog</Link></a>
            <a className="dropdown-item text-dark nav-link" href="/post" style={{color :"black"}}><Link to="/post">Création article</Link></a>
          </div>
        </li>
        </ul>
      </div>
    </div>
  </nav>  
  
  
    </div>
  
    );
  }

export default App;