import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/nav/NavBar';
import Footer from './components/layout/Footer';

import ItemListContainer from './components/products/ItemListContainer';
import ItemDetailContainer from './components/productDetail/ItemDetailContainer';
import CartContainer from './components/cart/CartContainer';

import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Checkout from './pages/Checkout';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (producto) => {
    setCart((prevCart) => [...prevCart, producto]);
  };

  return (
    <>
      <NavBar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ItemListContainer greeting="Todos los productos" />} />
        <Route path="/categoria/:categoryId" element={<ItemListContainer greeting="Filtrado por categoría" />} />
        <Route path="/productos/:id" element={<ItemDetailContainer addToCart={addToCart} />} />
        <Route path="/cart" element={<CartContainer cart={cart} setCart={setCart} />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/checkout" element={<Checkout cart={cart} clearCart={() => setCart([])} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;


