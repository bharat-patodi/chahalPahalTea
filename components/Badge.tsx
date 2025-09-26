import styles from "../styles/Badge.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartContext } from "./../context/XyzContext";
import { CSSProperties } from "react";

interface BadgeProps {
  cartColor: CSSProperties["color"];
}

const Badge = ({ cartColor }: BadgeProps) => {
  const [cart, setCart] = useCartContext();

  return (
    <div className={styles.badge} style={{ color: cartColor }}>
      <FontAwesomeIcon icon="shopping-cart"></FontAwesomeIcon>
    </div>
  );
};

export default Badge;
