import styles from "../styles/Header.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = (e: any) => {
    // DOM is not available for manipulation like this with React
    console.log("clicked");
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.headerNav} ${styles.navBar}`}>
        <ul className={styles.headerNavUl}>
          <li>
            <Link href="/">
              <a>
                <img src="logo.png" alt="logo" className={styles.logo} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/shop">
              <a>Shop</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
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
      <nav className={`${styles.headerNav}`}>
        <ul className={styles.navHamburgerIcon}>
          <li>
            <Link href="/cart">
              <a>
                <FontAwesomeIcon icon="shopping-cart"></FontAwesomeIcon>
              </a>
            </Link>
          </li>
          <li>
            {/* <Link href="/">
              <a> */}
                <FontAwesomeIcon
                  icon="bars"
                  onClick={handleHamburgerClick}
                ></FontAwesomeIcon>
              {/* </a>
            </Link> */}
          </li>
          {isOpen ? <HamburgerNavComponent /> : null}
        </ul>
      </nav>
    </header>
  );
};

const HamburgerNavComponent = () => {
  return (
    <ul className={styles.navHamburger}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/shop">
          <a>Shop</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Stories</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
      <li>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </li>
    </ul>
  );
};

export default Header;
