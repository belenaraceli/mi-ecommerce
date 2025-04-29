import React, { useState } from 'react';
import CheckoutForm from '../components/checkout/CheckoutForm';


const Checkout = ({ cart, clearCart }) => {
  const [orderId, setOrderId] = useState('');

  return (
    <div className="container mt-5 mb-5 checkout-page">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Finalizar compra</h2>

          {orderId ? (
            <div className="alert alert-success mt-4 text-center">
              <h4>¡Gracias por tu compra!</h4>
              <p>Tu número de orden es: <strong>{orderId}</strong></p>
            </div>
          ) : (
            <CheckoutForm cart={cart} clearCart={clearCart} setOrderId={setOrderId} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
