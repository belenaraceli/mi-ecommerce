import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ItemDetail = ({ producto, addToCart }) => {
  const [cantidad, setCantidad] = useState(1);

  const handleAgregar = () => {
    // Se podría extender para controlar stock en un futuro
    addToCart({ ...producto, cantidad });
  };

  return (
    <div className="container mt-5">
      <div className="row align-items-start">
        {/* Imagen */}
        <div className="col-md-6">
          <img src={producto.image} alt={producto.title} className="img-fluid rounded" />
        </div>

        {/* Detalles */}
        <div className="col-md-6">
          <h2>{producto.title}</h2>
          <p className="text-muted">{producto.description}</p>
          <p className="h5 mb-4"><strong>${producto.price}</strong></p>

          {/* Selector de cantidad */}
          <div className="mb-3">
            <label className="form-label">Cantidad</label>
            <input
              type="number"
              min="1"
              className="form-control w-50"
              value={cantidad}
              onChange={(e) => setCantidad(Number(e.target.value))}
            />
          </div>

          <button
            className="btn btn-primary"
            onClick={() => {
              addToCart(producto);
              Swal.fire({
                title: 'Producto agregado',
                text: `${producto.title} fue añadido al carrito`,
                icon: 'success',
                confirmButtonColor: '#212529'
              });
            }}
          >
            Añadir al carrito
          </button>


          {/* Info adicional */}
          <div className="mt-4">
            <p><strong>Métodos de pago:</strong> Tarjeta de crédito, débito o efectivo</p>
            <p><strong>Envíos:</strong> Gratis a todo el país desde $20.000</p>
            <p><strong>Devoluciones:</strong> Hasta 30 días desde la compra</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

