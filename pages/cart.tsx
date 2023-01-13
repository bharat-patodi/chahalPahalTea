import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Cart.module.css";
import { CartItem, useCartContext } from "../context/XyzContext";

const Cart = () => {
  // const [cart, setCart] = useCartContext();
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
            {(Object.values(cart) as Array<CartItem>).map(
              (currChai: CartItem) => {
                let weights = ["gm250", "gm500", "gm1000"];
                for (let i = 0; i < 3; i++) {
                  if (currChai.gm250.quantity > 0) {
                    return (
                      <>
                        <hr />
                        <section className={styles.cartCard}>
                          <div className={styles.cartCardName}>
                            <img src={currChai.src} width="100px" />
                            <p>{currChai.name}</p>
                          </div>
                          <p>250 gm</p>
                          <p>{currChai.gm250.quantity}</p>
                          <p>
                            INR{" "}
                            {currChai.gm250.price *
                              currChai.gm250.quantity}
                          </p>
                        </section>
                      </>
                    );
                  }
                  if (currChai.gm500.quantity > 0) {
                    return (
                      <>
                        <hr />
                        <section className={styles.cartCard}>
                          <div className={styles.cartCardName}>
                            <img src={currChai.src} width="100px" />
                            <p>{currChai.name}</p>
                          </div>
                          <p>250 gm</p>
                          <p>{currChai.gm500.quantity}</p>
                          <p>
                            INR{" "}
                            {currChai.gm500.price *
                              currChai.gm500.quantity}
                          </p>
                        </section>
                      </>
                    );
                  }
                  if (currChai.gm1000.quantity > 0) {
                    return (
                      <>
                        <hr />
                        <section className={styles.cartCard}>
                          <div className={styles.cartCardName}>
                            <img src={currChai.src} width="100px" />
                            <p>{currChai.name}</p>
                          </div>
                          <p>250 gm</p>
                          <p>{currChai.gm1000.quantity}</p>
                          <p>
                            INR{" "}
                            {currChai.gm1000.price *
                              currChai.gm1000.quantity}
                          </p>
                        </section>
                      </>
                    );
                  }
                }
                return "";
              }
            )}
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
