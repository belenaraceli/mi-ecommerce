## 🛍 E-commerce React

Este proyecto es una Single Page Application desarrollada con React JS para simular una tienda online. Fue realizada como entrega final del curso de React JS en Coderhouse.

## 🔧 Tecnologías utilizadas

- React JS
- React Router DOM
- Firebase (Firestore)
- Bootstrap
- SweetAlert2
- Vite

## ✨ Funcionalidades

- Visualización de productos
- Filtrado por categorías
- Detalle de cada producto
- Carrito de compras con Context API
- Checkout con formulario y generación de orden en Firestore
- Feedback visual con SweetAlert

## 📦 Firebase

- Firestore utilizado para cargar productos y guardar órdenes de compra.
- Conexión configurada en `src/firebase/config.js`.

## 📁 Estructura del proyecto

```plaintext
/src
├── assets
├── components
│   ├── /nav
│   ├── /products
│   ├── /productDetail
│   ├── /cart
│   ├── /checkout
│   └── /layout
├── pages
├── firebase
├── App.jsx
├── main.jsx
├── styles.css
