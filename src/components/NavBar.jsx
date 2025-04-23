import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = ({ cart }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Mi Tienda</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos">Todos los Productos</Link>
            </li>

            {/* Menú de categorías */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorías
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/categoria/hombre">Ropa Hombre</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/mujer">Ropa Mujer</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/joyeria">Joyas</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/electronica">Electrónica</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/cart">Carrito</Link>
            </li>

          </ul>
        </div>

        <CartWidget cart={cart} />
      </div>
    </nav>
  );
};


export default NavBar;


