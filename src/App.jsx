import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';

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
        <Route path="/" element={<Home />} /> {/* Ruta principal */}
        <Route path="/productos" element={<Productos addToCart={addToCart} />} /> {/* Ruta de productos */}
        <Route path="/contacto" element={<Contacto />} /> {/* Ruta de contacto */}
      </Routes>
    </>
  );
};

export default App;


