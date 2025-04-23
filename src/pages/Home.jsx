import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-3">Explorá nuestras colecciones</h1>
      <p className="lead">Moda urbana, tecnología y más. Todo lo que necesitás, en un solo lugar.</p>
      <Link to="/productos" className="btn btn-primary mt-4">
        Ver productos
      </Link>
    </div>
  );
};

export default Home;
