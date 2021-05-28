import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/">Ryan Anderson</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/about" target="">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.linkedin.com/in/ryan-anderson-52842784/" target="_blank" rel="noreferrer">
                                LinkedIn
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/Ryansswell" target="_blank" rel="noreferrer">GitHub</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/portfolio">Portfolio</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
}


export default Navbar;