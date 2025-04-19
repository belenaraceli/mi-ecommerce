import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ productos }) => {
  return (
    <div className="row">
      {productos.map((producto) => (
        <div className="col-md-4" key={producto.id}>
          <div className="card mb-4">
            <img src={producto.image} alt={producto.title} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{producto.title}</h5>
              <p className="card-text"><strong>${producto.price}</strong></p>
              <Link to={`/productos/${producto.id}`} className="btn btn-primary">
                Ver Detalle
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
