import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

// 🔥 Firestore
import { db } from '../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams(); // este valor viene de la URL

  useEffect(() => {
    setLoading(true);

    // Referencia a la colección
    const productosRef = collection(db, 'productos');

    // Si hay categoría, filtramos por ella
    const consulta = categoryId
      ? query(productosRef, where('category', '==', categoryId))
      : productosRef;

    // Obtenemos los datos
    getDocs(consulta)
      .then((resp) => {
        const items = resp.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        // 🔍 Agregamos logs para debuggear
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
