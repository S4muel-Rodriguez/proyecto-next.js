// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/catalogo">Catálogo</Link></li>
          <li><Link href="/carrito">Carrito</Link></li>
          <li><Link href="/admin">Admin</Link></li>
        </ul>
      </nav>
    </header>
  );
}
