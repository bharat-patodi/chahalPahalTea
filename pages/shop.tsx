import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Shop.module.css";
import Link from "next/link";
import Image from "next/image";

const Shop = () => {
  return (
    <>
      <Header />
      <main className={styles.shopPage}>
        <div>
          <h1>Shop</h1>
          {/* <h2>Coming Soon</h2> */}
        </div>
        <section className={styles.productDashboard}>
          <ProductView
            name="Premium Tea"
            src="premium-tea.png"
            details="Assam tea leaves. Strong aroma and taste. No artificial flavours. All natural ingredients."
            href="https://rzp.io/i/Q79HQ5ux"
            price={330}
            weight="1kg"
            shipping={50}
          />
          <ProductView
            name="Elaichi Tea"
            src="elaichi-tea.png"
            details="Assam tea leaves. Strong aroma and taste. No artificial flavours. All natural ingredients."
            href="https://rzp.io/i/MEaTQqS"
            price={125}
            weight="250gm"
            shipping={50}
          />
          <ProductView
            name="Adrak Tea"
            src="adrak-tea.png"
            details="Assam tea leaves. Strong aroma and taste. No artificial flavours. All natural ingredients."
            href="https://rzp.io/i/6r0t0s9"
            price={120}
            weight="250gm"
            shipping={50}
          />
          <ProductView
            name="Masala Tea"
            src="masala-tea.png"
            details="Assam tea leaves. Strong aroma and taste. No artificial flavours. All natural ingredients."
            href="https://rzp.io/i/TzZAvbE"
            price={125}
            weight="250gm"
            shipping={50}
          />
          <ProductView
            name="All Flavours in One"
            src="all-flavours.png"
            details=""
            href="https://rzp.io/i/Nsl9maW18"
            price={508}
            weight="250gm x 4 = 1 kg"
            shipping={0}
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

const ProductView = (props: any) => {
  return (
    <>
      <div className={styles.productView}>
        <h3>{props.name}</h3>
        <img src={props.src} className={styles.productImage} />
        <p>{props.details}</p>
        <p>
          <span className={styles.highlightText}>Price:</span> {props.price}
        </p>
        <p>
          <span className={styles.highlightText}>Shipping:</span>{" "}
          {props.shipping}
        </p>
        <p>
          <span className={styles.highlightText}>Total:</span>{" "}
          {props.shipping + props.price}
        </p>
        <label htmlFor="">
          <span className={styles.highlightText}>Weight:</span>{" "}
          {/* <select name="quantity" id="">
            <option value="250gm">250gm</option>
            <option value="500gm">500gm</option>
            <option value="1kg">1kg</option>
          </select> */}
          {props.weight}
        </label>
        {/* <label>
          Quantity
          <input type="text" />
        </label> */}
        {/* <Link href="/cart"> */}
        <a href={props.href} target="_blank" rel="noreferrer">
          <button className={styles.productPurchaseBtn}>Purchase</button>
          {/* <button>Add to Cart</button> */}
        </a>
        {/* </Link> */}
        <p className={styles.disclaimer}>
          *After payment, please whatsapp/message your complete postal address
          on this number: +91 90990-90191
        </p>
      </div>
    </>
  );
};

export default Shop;
