import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <tr>
      <td>{item.title}</td>
      <td className="text-end">${item.price.toFixed(2)}</td>
      <td className="text-center">
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => removeFromCart(item.id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
