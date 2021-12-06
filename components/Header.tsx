import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul>
        <li>Logo</li>
        <li>Shop</li>
        <li>Stories</li>
        <li>About</li>
      </ul>
      <ul>
        <li>CartIcon</li>
        <li>Login</li>
      </ul>
    </nav>
  </header>
);

export default Header;
