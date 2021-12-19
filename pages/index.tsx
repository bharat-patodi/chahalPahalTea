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
            <h1>चहल पहल चाय</h1>
            <div className={styles.mainProduct}>
              <picture>
                <img src="product-large.png" alt="product-1" />
              </picture>
              <div className={styles.productDetails}>
                <p>
                  चहल पहल चाय पसंद करने के लिए आपका धन्यवाद। चाय केवल एक पेय
                  नहीं है। चाय हर सुबह की ताज़गी का एक ज़रिया है। और हमारे दिन का
                  एक अभिन्न हिस्सा है।
                </p>
                <br />
                <p>
                  चहल पहल चाय में हैं चुनी हुई पत्तियाँ, जो अपने में संजोये हुए
                  हैं आपकी पसंदीदा ख़ुशबू और ज़ायका। चहल पहल चाय आप तक लाता है
                  जैन परिवार, इसीलिए आप हमारी सच्चाई और चाय की गुणवत्ता पर पूरा
                  विश्वास कर सकते हैं।
                </p>
                <br />
                <p>अपने आप को कुछ क्षणों का आराम दें, और चाय का आनंद लें।</p>
                {/* <p>
                  M.R.P.: <span className={styles.strikeThrough}>₹250</span>
                </p>
                <p>Price: ₹250</p>
                <p>You Save: ₹250 (45%) Inclusive of all taxes</p>
                <ul className={styles.productDetails}>
                  About the product
                  <li>Detail 1</li>
                  <li>Detail 2</li>
                  <li>Detail 3</li>
                  <li>Detail 4</li>
                </ul>
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
                  <input type="submit" value="खरीदें"></input>
                </form> */}
              </div>
            </div>
          </section>
          {/* <section className={styles.popularActions}>
            <Card name="Tea Subscription" />
            <Card name="Top Selling Products" />
            <Card name="Sign In" />
            <Card name="Shop By Category" />
          </section> */}
          {/* <section className={styles.dailyDeals}>
            <h2>Testimonials</h2>
          </section> */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
