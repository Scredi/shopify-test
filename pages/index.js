import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Products from '../components/Products'
import { getProducts, createCart } from './api/shopify'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  const [cart] = useState(props.cart)
  , [products] = useState(props.products)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.products}>
          <Products data={products} />
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps(context) {
  const products = await getProducts(); // Fetch products
  const cart = await createCart();
  //const infos = await client.shop.fetchInfo(); // Fetch shop Info if you think about SEO and title and ... to your page
  //const policies = await client.shop.fetchPolicies(); // fetch shop policy if you have any 
  return {
    props: {
      // infos: JSON.parse(JSON.stringify(infos)),
      // policies: JSON.parse(JSON.stringify(policies)),
      cart,
      products
    }
  }
}
