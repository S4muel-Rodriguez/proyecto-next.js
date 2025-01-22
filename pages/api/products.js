// Simula una base de datos de productos
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

export default function handler(req, res) {
  // Se maneja una petición GET
  if (req.method === 'GET') {
    res.status(200).json(products); // Devuelve la lista de productos
  }

  // Se puede agregar más métodos POST, PUT, DELETE si se quiere gestionar el carrito o productos
}

