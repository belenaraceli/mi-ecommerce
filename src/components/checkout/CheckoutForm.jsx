import React, { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Swal from 'sweetalert2';

const CheckoutForm = ({ cart, clearCart, setOrderId }) => {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: ''
  });

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

      Swal.fire({
        icon: 'success',
        title: '¡Compra realizada!',
        text: `Tu número de orden es: ${docRef.id}`,
        confirmButtonColor: '#212529'
      });

    } catch (error) {
      console.error('Error al generar la orden:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un problema al generar la orden. Intenta nuevamente.',
        confirmButtonColor: '#dc3545'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input type="text" name="nombre" className="form-control" value={form.nombre} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" name="email" className="form-control" value={form.email} onChange={handleChange} required />
      </div>
      <div className="mb-4">
        <label className="form-label">Teléfono</label>
        <input type="tel" name="telefono" className="form-control" value={form.telefono} onChange={handleChange} required />
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-dark px-4">Generar orden</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
