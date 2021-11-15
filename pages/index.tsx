import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chahal Pahal Tea</title>
        <meta name="description" content="Chahal Pahal Tea" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <header>
        <nav>
          <ul>
            <li>Logo</li>
            <li>Search Bar</li>
            <li>Login</li>
            <li>Cart</li>
          </ul>
        </nav>
        </header>
      <main className={styles.main}>
          <section>Carousel</section>
          <section>
            <div>Top Selling Products</div>
            <div>Tea Subscription</div>
            <div>Sign In</div>
            <div>Shop By Category</div>
          </section>
          <section className="todays-deals">Carousel for all daily deals</section>
          <section className="all-products">All Products</section>
        </main>
      <footer className={styles.footer}>
        Copyright and trademark owned by Chahal Pahal Tea
      </footer>
    </div>
  )
}

export default Home
