import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Cart.module.css";
import { useCartContext } from "../context/XyzContext";

/* Forms don't have headings??? */

const Cart = () => {
  const [cart, setCart] = useCartContext();
  console.log(cart);
  let total =
    cart.adrakChai.gm1000.price * cart.adrakChai.gm1000.quantity +
    cart.adrakChai.gm500.price * cart.adrakChai.gm500.quantity +
    cart.adrakChai.gm250.price * cart.adrakChai.gm250.quantity;
  return (
    <div className="superContainer">
      <Header />
      <main className="container">
        <div>
          <h1>Cart</h1>
          <section className={styles.cartDashboard}>
            <section className={styles.cartCard}>
              <p>Product</p>
              <p>Weight</p>
              <p>Quantity</p>
              <p>Price (INR)</p>
            </section>
            {Object.values(cart).map((currChai) => {
              let weights = ["gm250", "gm500", "gm1000"];
              for(let i = 0; i < 3; i++) {
                if (currChai[weights[i]].quantity > 0) {
                  return (
                    <>
                      <hr/>
                    <section className={styles.cartCard}>
                      <div className={styles.cartCardName}>
                        <img src={currChai.src} width="100px" />
                        <p>{currChai.name}</p>
                      </div>
                      <p>250 gm</p>
                      <p>{currChai[weights[i]].quantity}</p>
                      <p>
                        INR {currChai[weights[i]].price * currChai[weights[i]].quantity}
                      </p>
                    </section>
                    </>
                  );
                }
              }
                return "";
              })}
            <section className={styles.cartCard}>
              <p>Total</p>
              <p>INR {}</p>
            </section>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Cart;