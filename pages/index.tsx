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

      <main className={styles.main}>
        <h1>Chahal Pahal Tea</h1>
      </main>

      <footer className={styles.footer}>
        Copyright and trademark owned by Chahal Pahal Tea
      </footer>
    </div>
  )
}

export default Home
