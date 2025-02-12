import { useState } from "react";
import { uploadFile } from "@/lib/firebaseStorage";
import { createProduct } from "@/lib/firebaseDatabase";

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
