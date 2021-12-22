import styles from "../styles/Header.module.css";
import Link from "next/link";

const NavLinks = () => (
  <>

  </>
);

const Header = () => (
  <header className={styles.header}>
    <nav className={`${styles.headerNav} ${styles.navBar}`}>
      <ul>
        <li>
          <Link href="/">
            <a>Logo</a>
          </Link>
        </li>
        <li>
          <Link href="/shop">
            <a>Shop</a>
          </Link>
        </li>
        <li>
          <Link href="/testimonials">
            <a>Stories</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
      <ul>
        <li>Call us at: +91 90990-90191</li>
      </ul>
      <ul>
        <li>
          <Link href="/cart">
            <a>CartIcon</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
      </ul>
    </nav>
    <nav className={`${styles.headerNav} ${styles.navHamburger}`}>
      <ul>
        <li>
          <Link href="/">
            <a>Logo</a>
          </Link>
        </li>
        <li>
          <Link href="/shop">
            <a>Shop</a>
          </Link>
        </li>
        <li>
          <Link href="/testimonials">
            <a>Stories</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
      <ul>
        <li>Call us at: +91 90990-90191</li>
      </ul>
      <ul>
        <li>
          <Link href="/cart">
            <a>CartIcon</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);



export default Header;
