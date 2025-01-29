export async function fetchProducts() {
    const res = await fetch('/api/products', { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Error al cargar productos');
    return res.json();
  }
  