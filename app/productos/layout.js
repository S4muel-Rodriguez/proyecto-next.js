 
import React from 'react';

export default function CategoryLayout({ children }) {
  return (
    <div>
      <header>
        <h1>Catálogo de Productos</h1>
        <nav>
          <a href="/">Home</a> | <a href="/cart">Carrito</a>
        </nav>
      </header>
      <main>
        <h2>Explora nuestras categorías</h2>
      </main>
      <footer>
        <p>&copy; 2025 Nike Store</p>
      </footer>
    </div>
  );
}
