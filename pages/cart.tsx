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
  let result = Object.values(cart);
  const checkQuantity = (cart: {
    [key: string]: {
      name: string;
      details: string;
      src: string;
      shipping: number;
      gm250: { price: number; quantity: number };
      gm500: { price: number; quantity: number };
      gm1000: { price: number; quantity: number };
    };
  }): {
    name: string;
    details: string;
    src: string;
    shipping: number;
    gm250: { price: number; quantity: number };
    gm500: { price: number; quantity: number };
    gm1000: { price: number; quantity: number };
  }[] => {
    return Object.values(cart).filter((chai) => {
      return Object.values(chai)
        .filter((val) => typeof val === "object")
        .some((weight) => weight?.quantity > 0);
    });
  };
  console.log(
    "hi",
    Object.values(cart).map((chai) => {
      return Object.values(chai)
        .filter((val) => typeof val === "object")
        .some((weight) => weight.quantity > 0);
    })
  );
  console.log(result);
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
          <section className={styles.cartDashboard}>
            <section className={styles.cartCard}>
              <p>Product</p>
              <p>Weight</p>
              <p>Quantity</p>
              <p>Price (INR)</p>
            </section>
            {/* <p>Total: {total}</p> */}
            {console.log(
              Object.values(cart).filter((chai) => {
                return Object.values(chai)
                  .filter((val) => typeof val === "object")
                  .some((weight) => weight.quantity > 0);
              })
            )}
            {Object.values(cart)
              .filter((chai) => {
                return Object.values(chai)
                  .filter((val) => typeof val === "object")
                  .some((weight) => weight.quantity > 0);
              })
              .map((currChai) => {
                if (currChai.gm250.quantity > 0) {
                  return (
                    <section className={styles.cartCard}>
                      <div className={styles.cartCardName}>
                        <img src={currChai.src} width="100px" />
                        <p>{currChai.name}</p>
                      </div>
                      <p>250 gm</p>
                      <p>{currChai.gm250.quantity}</p>
                      <p>
                        INR {currChai.gm250.price * currChai.gm250.quantity}
                      </p>
                    </section>
                  );
                }
                if (currChai.gm500.quantity > 0) {
                  return (
                    <section className={styles.cartCard}>
                      <img src={currChai.src} width="100px" />
                      <p>{currChai.name}</p>
                      <p>500 gm</p>
                      <p>{currChai.gm500.quantity}</p>
                      <p>
                        INR {currChai.gm500.price * currChai.gm500.quantity}
                      </p>
                    </section>
                  );
                }
                if (currChai.gm1000.quantity > 0) {
                  return (
                    <section className={styles.cartCard}>
                      <img src={currChai.src} width="100px" />
                      <p>{currChai.name}</p>
                      <p>1000 gm</p>
                      <p>{currChai.gm1000.quantity}</p>
                      <p>
                        INR {currChai.gm1000.price * currChai.gm1000.quantity}
                      </p>
                    </section>
                  );
                }
                return "";
              })}
            {/* {Object.values(cart).map(val => {
                return <p key={1}>{val.name}</p>;
              })} */}
            {/* {Object.values(cart).filter((val) => val).map(val => {
                if(val.quantity > 0) {
                  return <p>Yes</p>
                } else return <p>No</p>
                })} */}
            {/* mine.filter(val => val.name === "Premium Tea") */}
            {/* <p>Adrak 500 qtty: {cart.adrakChai.gm500.quantity}</p>
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
              {console.log(cart.adrakChai.gm250.price)} */}
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
