 
export default function ProductLayout({ children }) {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <header>
          <h1>Bienvenido a la tienda de Nike</h1>
          <nav>
            <a href="/">Home</a> | <a href="/cart">Carrito</a>
          </nav>
        </header>
        <main>
          <h2>Detalles del Producto</h2>
          {children} {/* Aquí se renderiza el contenido de la página dinámica */}
        </main>
        <footer>
          <p>&copy; 2025 Nike Store</p>
        </footer>
      </div>
    );
  }
  