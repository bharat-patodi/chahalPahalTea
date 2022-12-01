import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import styles from "../styles/Cart.module.css";

/* Forms don't have headings??? */

const Cart = () => {
  return (
    <div className="superContainer">
      <Header />
      <main className="container">
        <div>
          <h1>Cart</h1>
          <h2>Coming Soon</h2>
          {/* <div className={styles.cartDashboard}>
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
          </div> */}
          {/* <p>This is the Cart</p>
          <Link href="/checkout">
            <a>
              <button>Checkout</button>
            </a>
          </Link> */}
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Cart;
