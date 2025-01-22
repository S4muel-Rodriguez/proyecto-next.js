// components/Footer.js
import styles from '../styles/Footer.module.css'; 

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>
          <img src="/img/logo pagina inicial.ico" alt="Logo Nike" className={styles.logoImage} />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="/about">Sobre Nosotros</a></li>
            <li><a href="/contact">Contacto</a></li>
            <li><a href="/privacy">Política de Privacidad</a></li>
            <li><a href="/terms">Términos de Servicio</a></li>
          </ul>
        </nav>
      </div>
      <div className={styles.copyRight}>
        <p>&copy; {new Date().getFullYear()} Nike Inc. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

  