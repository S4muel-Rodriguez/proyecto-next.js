 
import { useState } from 'react';
import styles from '../../styles/Admin.module.scss';

export default function AdminPage() {
  const [products, setProducts] = useState([
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
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  });

  const handleAddProduct = () => {
    const updatedProducts = [
      ...products,
      {
        ...newProduct,
        id: products.length + 1,
        price: parseFloat(newProduct.price),
      },
    ];
    setProducts(updatedProducts);
    setNewProduct({ name: '', price: '', image: '' });
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Panel de Administración</h1>

      <div className={styles.productForm}>
        <h2>Agregar Producto</h2>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleChange}
          placeholder="Nombre del producto"
          className={styles.input}
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          placeholder="Precio"
          className={styles.input}
        />
        <input
          type="text"
          name="image"
          value={newProduct.image}
          onChange={handleChange}
          placeholder="Ruta de la imagen"
          className={styles.input}
        />
        <button onClick={handleAddProduct} className={styles.addButton}>
          Agregar Producto
        </button>
      </div>

      <div className={styles.productList}>
        <h2>Productos en el Catálogo</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id} className={styles.productItem}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.productImage}
              />
              <div className={styles.productDetails}>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
              <button
                onClick={() => handleDeleteProduct(product.id)}
                className={styles.deleteButton}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
