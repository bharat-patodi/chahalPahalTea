import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const Checkout = () => {
  return (
    <>
      <Header />
      <main>
        <div>
          <h1>Checkout</h1>
          <p>This is the Checkout page</p>
          <Link href="https://rzp.io/i/lLY1KwyYG">
            <a target="_blank">
              <button>Buy Now</button>
            </a>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Checkout;
