import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

const Home: NextPage = () => {
  return (
    <div className="app">
      <Head>
        <title>Chahal Pahal Tea</title>
        <meta name="description" content="Chahal Pahal Tea" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container">
        <main>
          <section className={styles.allProducts}>
            <h2>All Products</h2>
            <div className={styles.mainProduct}>
              <picture>
                <img src="http://via.placeholder.com/400" alt="product-1" />
              </picture>
              <div className={styles.productDetails}>
                <form action="">
                  <label htmlFor="weight">Weight:</label>
                  <select name="weight" id="weight">
                    <option value="100gm">100gm</option>
                    <option value="250g">250gm</option>
                    <option value="500gm">500gm</option>
                    <option value="1kg">1kg</option>
                  </select>
                  <label htmlFor="quantity">Quantity:</label>
                  <select name="quantity" id="quantity">
                    <option value="100gm">1</option>
                    <option value="250g">2</option>
                    <option value="500gm">3</option>
                    <option value="1kg">4</option>
                  </select>
                </form>
                <p>
                  M.R.P.: <span className={styles.strikeThrough}>₹250</span>
                </p>
                <p>Price: ₹250</p>
                <p>You Save: ₹250 (45%) Inclusive of all taxes</p>
                <ul className={styles.productDetails}>About the product
                  <li>Detail 1</li>
                  <li>Detail 2</li>
                  <li>Detail 3</li>
                  <li>Detail 4</li>
                </ul>
              </div>
            </div>
          </section>
          <section className={styles.carousel}>Carousel</section>
          <section className={styles.popularActions}>
            <Card name="Tea Subscription" />
            <Card name="Top Selling Products" />
            <Card name="Sign In" />
            <Card name="Shop By Category" />
          </section>
          <section className={styles.dailyDeals}>
            Carousel for all daily deals
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;