// pages/api/products.js
import { productsData } from '../../data/products'; // Suponiendo que tienes una estructura de mock data en un archivo separado

let products = [...productsData]; // Inicializamos los productos con los datos del archivo mock

// Función para obtener todos los productos
const getProducts = () => {
  return products;
};

// Función para crear un nuevo producto
const createProduct = (newProduct) => {
  const id = products.length ? products[products.length - 1].id + 1 : 1; // Generamos un nuevo ID para el producto
  const product = { id, ...newProduct };
  products.push(product);
  return product;
};

// Función para eliminar un producto por ID
const deleteProduct = (id) => {
  products = products.filter((product) => product.id !== id);
};

export default function handler(req, res) {
  if (req.method === 'GET') {
    
    res.status(200).json(getProducts());
  } else if (req.method === 'POST') {
     
    const { name, price, image } = req.body;

    if (!name || !price || !image) {
      return res.status(400).json({ error: 'Faltan datos necesarios' });
    }

    const newProduct = createProduct({ name, price, image });
    res.status(201).json(newProduct);
  } else if (req.method === 'DELETE') {
     
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: 'ID del producto requerido' });
    }

    deleteProduct(Number(id));
    res.status(204).end();  
  } else {
    res.status(405).json({ error: 'Método no permitido' });  
  }
}
