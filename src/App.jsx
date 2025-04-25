import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from './components/CartContainer';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import Checkout from './pages/Checkout';
import Footer from './components/Footer';

const App = () => {
  const [cart, setCart] = useState([]);

  // Función para agregar productos al carrito
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


