import { Link } from 'react-router-dom';
import React from 'react';

const CartView = ({ cart, removeFromCart, clearCart }) => {
  return (
    <div className="container mt-5">
      <h2>Carrito de compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {item.title} - ${item.price}
                <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <button className="btn btn-warning me-2" onClick={clearCart}>Vaciar carrito</button>
          <Link to="/checkout" className="btn btn-success"> Ir al checkout </Link>

        </>
      )}
    </div>
  );
};

export default CartView;
