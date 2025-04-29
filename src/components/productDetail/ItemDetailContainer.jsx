import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'; 

import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = ({ addToCart }) => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, 'productos', id);

    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("El producto no existe");
        }
      })
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
      })
      .finally(() => setLoading(false));
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
