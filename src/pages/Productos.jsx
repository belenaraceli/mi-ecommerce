import React from 'react';

const Productos = ({ addToCart }) => {
  return (
    <div>
      <h1>Productos</h1>
      <p>Aquí encontrarás nuestros productos más populares.</p>
      <button onClick={addToCart}>Agregar al carrito</button> {/* Al hacer clic, se agrega un producto */}
    </div>
  );
};

export default Productos;
