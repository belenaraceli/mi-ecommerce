import React from 'react';

const CartWidget = () => {
  return (
    <div className="d-flex align-items-center">
      <span className="fs-3">🛒</span>
      <span className="ms-2">0</span> {/* Aquí se mostrará la cantidad de productos en el carrito */}
    </div>
  );
};

export default CartWidget;
