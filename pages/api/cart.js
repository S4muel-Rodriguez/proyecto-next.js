// api/cart.js
export default function handler(req, res) {
  // Obtiene el carrito de productos desde el localStorage
  if (req.method === 'GET') {
    const cart = JSON.parse(req.headers.cart || '[]'); // Usar cart pasado en los headers
    res.status(200).json(cart); // Retorna el carrito
  }

  // Si es un POST, puede servir para añadir productos al carrito
  if (req.method === 'POST') {
    const { product } = req.body;
    const cart = JSON.parse(req.headers.cart || '[]');
    
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      res.status(200).json(updatedCart); // Devuelve carrito actualizado
    } else {
      const newProduct = { ...product, quantity: 1 };
      const updatedCart = [...cart, newProduct];
      res.status(200).json(updatedCart); // Devuelve carrito con nuevo producto
    }
  }
}
