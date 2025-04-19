import React from 'react';
import CartView from './CartView';

const CartContainer = ({ cart, setCart }) => {
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartView 
      cart={cart} 
      removeFromCart={removeFromCart} 
      clearCart={clearCart} 
    />
  );
};

export default CartContainer;
