import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';

const App = () => {
  // Creamos un estado para el carrito, inicializado en 0
  const [cartCount, setCartCount] = useState(0);

  // Función para agregar productos al carrito
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
      <NavBar cartCount={cartCount} /> {/* Pasamos el cartCount al NavBar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos addToCart={addToCart} />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
};

export default App;


