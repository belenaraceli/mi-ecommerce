import React from 'react';

const ItemDetail = ({ producto, addToCart }) => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">{producto.title}</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={producto.image} alt={producto.title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <p>{producto.description}</p>
          <p><strong>${producto.price}</strong></p>
          <button className="btn btn-primary" onClick={() => addToCart(producto)}>
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
