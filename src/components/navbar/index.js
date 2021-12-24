import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (


        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <span className="navbar-brand text-white">Navbar</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fas fa-bars text-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link class="nav-link" to="/cadastro">Cadastrar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;