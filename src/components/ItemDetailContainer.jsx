import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ItemDetail from './ItemDetail'; // 👈 importar componente presentacional

const ItemDetailContainer = ({ addToCart }) => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProducto(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener el producto:', error);
      });
  }, [id]);

  return (
    <>
      {loading 
        ? <p>Cargando detalles del producto...</p>
        : <ItemDetail producto={producto} addToCart={addToCart} />
      }
    </>
  );
};

export default ItemDetailContainer;
