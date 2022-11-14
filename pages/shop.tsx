import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Shop.module.css";
import Link from "next/link";
import Image from "next/image";

const Shop = () => {
  return (
    <>
      <Header />
      <main>
        <div>
          <h1>Shop</h1>
          <h2>Coming Soon</h2>
        </div>
        {/* <section className={styles.productDashboard}>
          <ProductView name="tea-bag" />
          <ProductView name="tea-bag" />
        </section> */}
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
        <img
          src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1921&q=80"
          width="20%"
        />
        <p>Product Details</p>
        <label htmlFor="">
          Weight
          <select name="quantity" id="">
            <option value="250gm">250gm</option>
            <option value="500gm">500gm</option>
            <option value="1kg">1kg</option>
          </select>
        </label>
        <label>
          Quantity
          <input type="text" />
        </label>
        <Link href="/cart">
          <a>
            <button>Add to Cart</button>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Shop;
