import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'Nike Air Max 2021',
    price: 120,
    image: '/img/2da zapa de nike.jpg',
  },
  {
    id: 2,
    name: 'Nike ZoomX Vaporfly Next%',
    price: 250,
    image: '/img/zapatilla nike.jpeg',
  },
  {
    id: 3,
    name: 'Nike React Infinity Run',
    price: 160,
    image: '/img/gorra nike.jpeg',
  },
  {
    id: 4,
    name: 'Nike Media',
    price: 90,
    image: '/img/media nike.webp',
  },
  {
    id: 5,
    name: 'Musculosa para Mujer Nike',
    price: 55,
    image: '/img/musculosa para mujer.webp',
  },
  {
    id: 6,
    name: 'Pantalón de Moda Mujer Nike',
    price: 80,
    image: '/img/pantalon de modda mujer.webp',
  },
  {
    id: 7,
    name: 'Remera Manga Larga Nike',
    price: 70,
    image: '/img/remera manga larga.webp',
  },
  {
    id: 8,
    name: 'Más Gorras Nike',
    price: 50,
    image: '/img/mas gorras nike.png',
  },
];

export default function Home() {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  // Función para añadir al carrito
  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      const newProduct = { ...product, quantity: 1 };
      const updatedCart = [...cart, newProduct];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
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

 

