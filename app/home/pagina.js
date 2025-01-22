import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const router = useRouter();

  // Obtener productos de la API
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // Función para añadir al carrito
  const addToCart = async (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    let updatedCart;

    if (existingProduct) {
      updatedCart = cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    // Enviar al servidor el carrito actualizado
    await fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'cart': JSON.stringify(updatedCart),
      },
      body: JSON.stringify({ product }),
    });
  };

  // Redirigir al checkout
  const goToCheckout = () => {
    router.push('/checkout');
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Carrito de Compras Nike</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.products}>
          {products.map((product) => (
            <div key={product.id} className={styles.product}>
              <img src={product.image} alt={product.name} className={styles.productImage} />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)} className={styles.addButton}>
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>

        <div className={styles.cart}>
          <h3>Tu Carrito</h3>
          {cart.length === 0 ? (
            <p>No tienes productos en tu carrito.</p>
          ) : (
            <>
              <ul>
                {cart.map((item, index) => (
                  <li key={index} className={styles.cartItem}>
                    {item.name} - ${item.price} x {item.quantity}
                  </li>
                ))}
              </ul>
              <button onClick={goToCheckout} className={styles.checkoutButton}>Ir a la compra</button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
