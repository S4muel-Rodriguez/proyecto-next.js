// app/products/cat/page.js
import ProductList from "./ProductList";

export default async function CategoryPage() {
  // Fetch de datos desde el servidor (Server Component)
  const response = await fetch("https://your-firebase-api/products", {
    cache: "no-store", // Evitar datos en caché para garantizar datos actualizados
  });
  const products = await response.json();

  return (
    <div>
      <h1>Categorías de Productos</h1>
      <ProductList products={products} />
    </div>
  );
}
