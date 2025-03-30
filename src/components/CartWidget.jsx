import React from 'react';

const CartWidget = ({ cartCount }) => {
  return (
    <div className="d-flex align-items-center">
      <span className="fs-3">🛒</span>
      <span className="ms-2">{cartCount}</span> {/* Muestra la cantidad del carrito */}
    </div>
  );
};

export default CartWidget;
