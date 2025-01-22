import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Checkout.module.css';

export default function Checkout() {
  const router = useRouter();
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const updateQuantity = (productId, action) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        if (action === 'increase') {
          item.quantity += 1;
        } else if (action === 'decrease' && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const getTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Resumen de Compra</h1>
      </header>
      
      <main className={styles.main}>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            <div className={styles.cartItems}>
              {cart.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <img src={item.image} alt={item.name} className={styles.productImage} />
                  <div className={styles.productDetails}>
                    <h2>{item.name}</h2>
                    <p>${item.price} x {item.quantity}</p>
                    <div className={styles.quantityButtons}>
                      <button onClick={() => updateQuantity(item.id, 'increase')} className={styles.quantityButton}>+</button>
                      <button onClick={() => updateQuantity(item.id, 'decrease')} className={styles.quantityButton}>-</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.total}>
              <h3>Total: ${getTotal()}</h3>
            </div>
            <button onClick={() => router.push('/')} className={styles.continueShopping}>Seguir comprando</button>
            <button className={styles.checkoutButton}>Confirmar compra</button>
          </>
        )}
      </main>
    </div>
  );
}

