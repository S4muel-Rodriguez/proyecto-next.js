// pages/catalogo.js
import { products } from '../mockData';
import Link from 'next/link';
import styles from '../styles/Catalogo.module.scss';

export default function Catalogo() {
  return (
    <div className={styles.container}>
      <h1>Catálogo de Productos</h1>
      <div className={styles.products}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <Link href={`/producto/${product.id}`} className={styles.productLink}>Ver detalle</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

