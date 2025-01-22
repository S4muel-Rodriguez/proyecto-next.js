// components/Navbar.js
import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <img src="/img/logo.png" alt="Logo" className={styles.logoImage} />
          </a>
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/catalogo">
            <a className={styles.navLink}>Catálogo</a>
          </Link>
        </li>
        <li>
          <Link href="/carrito">
            <a className={styles.navLink}>Carrito</a>
          </Link>
        </li>
        <li>
          <Link href="/admin">
            <a className={styles.navLink}>Admin</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
