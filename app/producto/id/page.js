 
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

 
const productsData = [
  {
    id: 1,
    name: 'Nike Air Max 2021',
    price: 120,
    description: 'La última versión de las Nike Air Max con un diseño moderno y cómodo.',
    image: '/img/2da zapa de nike.jpg',
  },
  {
    id: 2,
    name: 'Nike ZoomX Vaporfly Next%',
    price: 250,
    description: 'Zapatillas de alto rendimiento para corredores profesionales.',
    image: '/img/zapatilla nike.jpeg',
  },
 
];

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
       
      const selectedProduct = productsData.find((item) => item.id === parseInt(id));
      setProduct(selectedProduct);
    }
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}
