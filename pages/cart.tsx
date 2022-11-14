import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const Cart = () => {
  return (
    <>
      <Header />
      <main>
        <div>
          <h1>Cart</h1>
          <h2>Coming Soon</h2>
          {/* <p>This is the Cart</p>
          <Link href="/checkout">
            <a>
              <button>Checkout</button>
            </a>
          </Link> */}
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Cart;
