import React from 'react';

const CartWidget = ({ cart }) => {
  return (
    <div className="d-flex align-items-center">
      <span className="fs-3">🛒</span>
      <span className="ms-2">{cart.length}</span> {/* Mostrar la cantidad de productos en el carrito */}
    </div>
  );
};

export default CartWidget;
