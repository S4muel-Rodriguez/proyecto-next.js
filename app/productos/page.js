// app/product/cat/page.js
import { useState, useEffect } from 'react';
import Link from 'next/link';

 
const productsData = [
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
  
];

export default function CategoryPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
 
    setProducts(productsData);
  }, []);

  return (
    <div>
      <h2>Productos de la Categoría</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} style={{ width: '200px', height: '200px' }} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <Link href={`/product/${product.id}`}>
              <a>Ver detalles</a>
            </Link>
          </div>
        ))}
      </div>
      <style jsx>{`
        .product-list {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        .product-item {
          text-align: center;
          width: 200px;
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 8px;
        }
        .product-item img {
          width: 100%;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}


// app/products/page.js
export const revalidate = 60; // Revalidar cada 60 segundos

async function fetchProducts() {
  const res = await fetch('/api/products', { cache: 'force-cache' }); // Cache local
  return res.json();
}

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div>
      <h1>Catálogo</h1>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
