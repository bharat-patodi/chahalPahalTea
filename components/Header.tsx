import styles from "../styles/Header.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => (
  <header className={styles.header}>
    <nav className={`${styles.headerNav} ${styles.navBar}`}>
      <ul className={styles.headerNavUl}>
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
      <ul className={styles.headerNavUl}>
        <li>Call us at: +91 90990-90191</li>
      </ul>
      <ul className={styles.headerNavUl}>
        <li>
          <Link href="/cart">
            <a>
              <FontAwesomeIcon icon="shopping-cart"></FontAwesomeIcon>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
      </ul>
    </nav>
    <nav
      className={`${styles.headerNav}`}
      // id="navHamburgerIcon"
      onClick={handleHamburgerClick}
    >
      <ul className={styles.navHamburgerIcon}>
        <li>
          <Link href="/">
            <a>
              <FontAwesomeIcon icon="shopping-cart"></FontAwesomeIcon>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <FontAwesomeIcon icon="bars"></FontAwesomeIcon>
            </a>
          </Link>
        </li>
      </ul>
      <ul className={styles.navHamburger}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Shop</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Stories</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Login</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

const handleHamburgerClick = (e: any) => {
  // DOM is not available for manipulation like this with React
  console.log(e.currentTarget);
};

export default Header;
