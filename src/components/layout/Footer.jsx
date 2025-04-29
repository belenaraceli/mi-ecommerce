import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer mt-5 py-4 bg-light border-top">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="mb-2">Urbana Shop</h5>
            <p className="mb-0 small text-muted">Tu estilo, tu elección.</p>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="mb-2">Navegación</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none text-dark small">Inicio</Link></li>
              <li><Link to="/productos" className="text-decoration-none text-dark small">Productos</Link></li>
              <li><Link to="/contacto" className="text-decoration-none text-dark small">Contacto</Link></li>
              <li><Link to="/cart" className="text-decoration-none text-dark small">Carrito</Link></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="mb-2">Seguinos</h6>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-dark small">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-dark small">Facebook</a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="text-dark small">TikTok</a>
            </div>
          </div>
        </div>

        <hr className="my-4" />
        <p className="small text-muted mb-0">&copy; {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
