"use client";

import { useState } from "react";
import { uploadFile } from "@/lib/firebaseStorage";
import { createProduct } from "@/lib/firebaseDatabase";
import { addProduct } from "@/lib/firebaseCrud"; // Asegúrate de que este archivo esté configurado
import styles from "../../styles/Admin.module.css";

export default function AdminPage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Nike Air Max 2021",
      price: 120,
      image: "/img/2da zapa de nike.jpg",
    },
    {
      id: 2,
      name: "Nike ZoomX Vaporfly Next%",
      price: 250,
      image: "/img/zapatilla nike.jpeg",
    },
    {
      id: 3,
      name: "Nike React Infinity Run",
      price: 160,
      image: "/img/gorra nike.jpeg",
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleAddProduct = async () => {
    const productToAdd = {
      ...newProduct,
      price: parseFloat(newProduct.price),
    };

    try {
      // Agregar producto a Firestore
      await addProduct(productToAdd);

      // Actualizar el estado local
      const updatedProducts = [
        ...products,
        { ...productToAdd, id: products.length + 1 },
      ];
      setProducts(updatedProducts);
      setNewProduct({ name: "", price: "", image: "" });

      alert("Producto agregado con éxito");
    } catch (error) {
      console.error("Error al agregar el producto:", error);
      alert("Hubo un error al agregar el producto. Intenta de nuevo.");
    }
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
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


export default function AdminPage() {
  const [product, setProduct] = useState({ name: "", price: "", image: null });

  const handleSubmit = async () => {
    try {
      if (product.image) {
        const imageUrl = await uploadFile(product.image, "products");
        await createProduct({ ...product, image: imageUrl });
        alert("Producto creado");
      }
    } catch (error) {
      console.error("Error al crear producto:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <div>
      <h1>Admin</h1>
      <input type="text" name="name" onChange={handleChange} placeholder="Nombre" />
      <input type="number" name="price" onChange={handleChange} placeholder="Precio" />
      <input type="file" name="image" onChange={handleChange} />
      <button onClick={handleSubmit}>Crear Producto</button>
    </div>
  );
}

