import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

// 🔥 Firestore
import { db } from '../../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, 'productos');

    const consulta = categoryId
      ? query(productosRef, where('category', '==', categoryId))
      : productosRef;

    getDocs(consulta)
      .then((resp) => {
        const items = resp.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      console.log("🟡 categoryId desde URL:", categoryId);
      console.log("✅ Productos filtrados:", items);
        setProductos(items);
      })
      .catch((error) => {
        console.error('Error al obtener productos:', error);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div className="container mt-5">
      <h2 className="text-center">{greeting || 'Productos'}</h2>
      {loading ? <p>Cargando productos...</p> : <ItemList productos={productos} />}
    </div>
  );
};

export default ItemListContainer;
