import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = ({ cart }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Urbana Shop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/productos">Productos</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                Categorías
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/categoria/hombre">Hombre</Link></li>
                <li><Link className="dropdown-item" to="/categoria/mujer">Mujer</Link></li>
                <li><Link className="dropdown-item" to="/categoria/joyeria">Joyería</Link></li>
                <li><Link className="dropdown-item" to="/categoria/electronica">Electrónica</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
          </ul>
          <CartWidget cart={cart} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

