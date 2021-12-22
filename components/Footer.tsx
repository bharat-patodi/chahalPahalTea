import styles from '../styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => (
  <footer className={styles.footer}>
    © Copyright and trademark owned by Chahal Pahal Tea
    <nav className={styles.footerNav}>
      <Link href="/credits">
        <a>Credits</a>
      </Link>
      <Link href="/contact">
        <a>Contact Us</a>
      </Link>
      <Link href="/contact">
        <a>Twitter</a>
      </Link>
      <Link href="https://www.instagram.com/chahal_pahal_tea/">
        <a>Instagram</a>
      </Link>
      <Link href="https://www.facebook.com/chahalpahaltea/">
        <a>Facebook</a>
      </Link>
      <Link href="https://www.linkedin.com/showcase/chahal-pahal-tea/">
        <a>LinkedIn</a>
      </Link>
      <Link href="/contact">
        <a>IndiaMart</a>
      </Link>
      <Link href="https://www.youtube.com/channel/UCK1caBDPLiFVNqhcvP6DUOA">
        <a>Youtube</a>
      </Link>
      <Link href="#">
        <a>Mail</a>
      </Link>
    </nav>
  </footer>
);

export default Footer;