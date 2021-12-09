import styles from '../styles/Header.module.css';
import Link from 'next/link';

const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul>
        <li><Link href="/"><a>Logo</a></Link></li>
        <li><Link href="/shop"><a>Shop</a></Link></li>
        <li><Link href="/testimonials"><a>Stories</a></Link></li>
        <li><Link href="/about"><a>About</a></Link></li>
      </ul>
      <ul>
        <li><Link href="/cart"><a>CartIcon</a></Link></li>
        <li><Link href="/login"><a>Login</a></Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
