import styles from "../styles/Footer.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => (
  <footer className={styles.footer}>
    <nav className={styles.footerNav}>
      <ul className={styles.footerLinks}>
        <li>
          {/* <Link href="/credits">
            <a>Credits</a>
          </Link> */}
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/privacy">
            <a>Privacy Policy</a>
          </Link>
        </li>
        <li>
          <Link href="/returns">
            <a>Returns</a>
          </Link>
        </li>
        <li>
          <Link href="/delivery">
            <a>Delivery</a>
          </Link>
        </li>
        <li>
          <Link href="/terms">
            <a>Terms</a>
          </Link>
        </li>
      </ul>
      <ul className={styles.socialLinks}>
        <li>
          <Link href="/contact">
            <a>
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/chahal_pahal_tea/">
            <a>
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.facebook.com/chahalpahaltea/">
            <a>
            <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/showcase/chahal-pahal-tea/">
            <a>
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/channel/UCK1caBDPLiFVNqhcvP6DUOA">
            <a>
            <FontAwesomeIcon icon={["fab", "youtube"]} />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
    <p>© Copyright & trademark owned by Chahal Pahal Tea</p>
  </footer>
);

export default Footer;
