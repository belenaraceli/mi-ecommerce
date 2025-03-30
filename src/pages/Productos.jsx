import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Productos = ({ addToCart }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hacer la solicitud HTTP para obtener los productos
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProductos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Hubo un error al obtener los productos:', error);
      });
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center">Nuestros Productos</h2>
      <div className="row">
        {productos.map((producto) => (
          <div className="col-md-4" key={producto.id}>
            <div className="card">
              <img src={producto.image} alt={producto.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">{producto.description}</p>
                <p className="card-text"><strong>${producto.price}</strong></p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(producto)}
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
