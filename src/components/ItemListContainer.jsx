import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams(); // ← 🟡 importante: este nombre debe coincidir con el de la ruta

  useEffect(() => {
    setLoading(true);

    let url = 'https://fakestoreapi.com/products';
    if (categoryId) {
      url = `https://fakestoreapi.com/products/category/${categoryId}`;
    }

    axios.get(url)
      .then((response) => {
        setProductos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener productos:', error);
        setLoading(false);
      });

  }, [categoryId]); // 🟡 vuelve a ejecutar si cambia la categoría

  return (
    <div className="container mt-5">
      <h2 className="text-center">{greeting || "Productos"}</h2>
      {loading ? <p>Cargando productos...</p> : <ItemList productos={productos} />}
    </div>
  );
};

export default ItemListContainer;
