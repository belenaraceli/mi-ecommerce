import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = ({ cart }) => {
  const totalItems = cart.length;

  return (
    <Link to="/cart" className="btn btn-outline-dark position-relative">
      🛒
      {totalItems > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;
