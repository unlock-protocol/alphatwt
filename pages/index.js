import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AlphaTwt</title>
        <meta name="description" content="Generated by AlphaTwt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to AlphaTwt
        </h1>

        <p className={styles.description}><Link href='/p'>Publish your AlphaTwt ⚡️!</Link></p>
      </main>
    </div>
  )
}