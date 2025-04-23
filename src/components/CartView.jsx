import { Link } from 'react-router-dom';
import React from 'react';

const CartView = ({ cart, removeFromCart, clearCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Tu Carrito</h2>
      {cart.length === 0 ? (
        <div className="alert alert-info text-center">
          No hay productos en el carrito.
        </div>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>Producto</th>
                  <th className="text-end">Precio</th>
                  <th className="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td className="text-end">${item.price.toFixed(2)}</td>
                    <td className="text-center">
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <button className="btn btn-outline-secondary" onClick={clearCart}>
              Vaciar Carrito
            </button>
            <h5>Total: ${total.toFixed(2)}</h5>
            <Link to="/checkout" className="btn btn-primary">
              Finalizar Compra
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartView;

