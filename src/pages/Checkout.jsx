import React, { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

const Checkout = ({ cart, clearCart }) => {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: ''
  });

  const [orderId, setOrderId] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orden = {
      buyer: form,
      items: cart,
      total: cart.reduce((acc, item) => acc + item.price, 0),
      date: Timestamp.fromDate(new Date())
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), orden);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error('Error al generar la orden:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Finalizar compra</h2>

      {orderId ? (
        <div className="alert alert-success mt-4">
          <h4>¡Gracias por tu compra!</h4>
          <p>Tu número de orden es: <strong>{orderId}</strong></p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Nombre</label>
            <input type="text" name="nombre" className="form-control" value={form.nombre} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" name="email" className="form-control" value={form.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Teléfono</label>
            <input type="tel" name="telefono" className="form-control" value={form.telefono} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-success">Generar orden</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
