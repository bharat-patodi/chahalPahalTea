import styles from '../styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => (
  <footer className={styles.footer}>
    Copyright and trademark owned by Chahal Pahal Tea
    <nav>
      <Link href="/credits">
        <a>Credits</a>
      </Link>
    </nav>
  </footer>
);

export default Footer;