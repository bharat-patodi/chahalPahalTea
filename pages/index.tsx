import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from '../styles/Home.module.css'
import Header from "../components/Header";
import Footer from "../components/Footer";

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
          <section className={styles.carousel}>Carousel</section>
          <section className={styles.popularActions}>
            <div>Top Selling Products</div>
            <div>Tea Subscription</div>
            <div>Sign In</div>
            <div>Shop By Category</div>
          </section>
          <section className={styles.dailyDeals}>
            Carousel for all daily deals
          </section>
          <section className={styles.allProducts}>All Products</section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
