import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul>
        <li>Logo</li>
        <li>Search Bar</li>
        <li>Login</li>
        <li>Cart</li>
      </ul>
    </nav>
  </header>
);

export default Header;
