import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"
const Navigation =()=> {
    
        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-back fixed-top">
          <Link className="navbar-brand" to="/"> React Calculator</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link " to="/">Home </Link>
              <Link className="nav-item nav-link" to="About">About</Link>
            </div>
          </div>
        </nav>
          );
}
 
export default Navigation;