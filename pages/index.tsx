import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from '../styles/Home.module.css'
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
          <section className={styles.allProducts}>
            <h2>All Products</h2>
            <div className={styles.allProductCards}>
              <Card name="Tea 1"/>
              <Card name="Tea 2"/>
              <Card name="Tea 3"/>
              <Card name="Tea 4"/>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
