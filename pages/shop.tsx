import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Shop.module.css";
import Link from "next/link";

const Shop = () => {
  return (
    <>
      <Header />
      <main>
        <div>
          <h1>Shop</h1>
          <p>This is the Shop page</p>
        </div>
        <section className={styles.productDashboard}>
          <ProductView name="tea-bag" />
          <ProductView name="tea-bag" />
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
        <p>Product Details</p>
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
