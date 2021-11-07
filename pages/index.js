import Head from 'next/head'
import Image from 'next/image'
import { Hero } from '../components/Hero'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Justin Detail</title>
        <meta name="description" content="Eco Friendly, Mobile Car Detailing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />     
    </div>
  )
}
