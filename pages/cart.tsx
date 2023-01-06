import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
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
  // console.log(
  //   cart.adrakChai.gm1000.price,
  //   cart.adrakChai.gm1000.quantity,
  //   typeof (
  //     cart.adrakChai.gm1000.price * cart.adrakChai.gm1000.quantity +
  //     cart.adrakChai.gm500.price * cart.adrakChai.gm500.quantity +
  //     cart.adrakChai.gm250.price * cart.adrakChai.gm250.quantity
  //   ),
  //   cart.adrakChai.gm1000.price * cart.adrakChai.gm1000.quantity +
  //     cart.adrakChai.gm500.price * cart.adrakChai.gm500.quantity +
  //     cart.adrakChai.gm250.price * cart.adrakChai.gm250.quantity, total, typeof total
  // );
  return (
    <div className="superContainer">
      <Header />
      <main className="container">
        <div>
          <h1>Cart</h1>
          <h2>Coming Soon</h2>
          <div className={styles.cartDashboard}>
            <section>
              <p>Total: {total}</p>
              {/* {Object.values(cart).map(val => {
                return <p key={1}>{val.name}</p>;
              })} */}
              {/* {Object.values(cart).filter((val) => val).map(val => {
                if(val.quantity > 0) {
                  return <p>Yes</p>
                } else return <p>No</p>
                })} */}
              {/* mine.filter(val => val.name === "Premium Tea") */}
              <p>Adrak 500 qtty: {cart.adrakChai.gm500.quantity}</p>
              <p>Adrak 500 price: {cart.adrakChai.gm500.price}</p>
              <p>
                Adrak 500 total:{" "}
                {cart.adrakChai.gm500.price * cart.adrakChai.gm500.quantity}
              </p>
              <p>Adrak 1000 qtty: {cart.adrakChai.gm1000.quantity}</p>
              <p>Adrak 1000 price: {cart.adrakChai.gm1000.price}</p>
              <p>
                Adrak 1000 total:{" "}
                {cart.adrakChai.gm1000.price * cart.adrakChai.gm1000.quantity}
              </p>
              {console.log(cart.adrakChai.gm250.price)}
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Cart;

{
  /* <div className={styles.cartDashboard}>
            <form className={styles.customerDetails}>
              <h3>Customer Details</h3>
              <label>Name</label>
              <input
                type="text"
                name=""
                id="name"
                placeholder="animesh jain"
                required
              />
              <label>Address</label>
              <textarea name="" id="message" cols={30} rows={10}></textarea>
              <label>Email</label>
              <input
                type="email"
                name=""
                id="email"
                placeholder="animesh@gmail.com"
                required
              />
              <label>Number</label>
              <input
                type="tel"
                name=""
                id="telephone"
                placeholder="9099090191"
                required
              />
              <input type="submit" value="Submit" />
            </form>
            <div className={styles.cart}>
              <h3>Cart</h3>
              <p>Product 1</p>
              <p>Product 2</p>
              <p>Product 3</p>
              <Link href="/checkout">
                <a>
                  <button>Pay Now</button>
                </a>
              </Link>
            </div>
          </div> */
}
{
  /* <p>This is the Cart</p>
          <Link href="/checkout">
            <a>
              <button>Checkout</button>
            </a>
          </Link> */
}
