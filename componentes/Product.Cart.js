// components/ProductCart.js
import { useState, useEffect } from 'react';

export default function ProductCart({ item, removeItem, updateQuantity }) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
    updateQuantity(item.id, newQuantity);
  };

  const handleRemove = () => {
    removeItem(item.id);
  };

  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>${item.price} x </p>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={handleQuantityChange}
          className="quantity-input"
        />
        <p>Total: ${item.price * quantity}</p>
        <button onClick={handleRemove} className="remove-btn">Eliminar</button>
      </div>
    </div>
  );
}
