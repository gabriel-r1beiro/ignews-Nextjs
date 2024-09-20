import { Metadata } from "next";
import styles from "./../style/home.module.sass";
import { SubscribeButton } from "@/components/SubscribeButton";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { stripe } from "@/services/stripe";

export const metadata: Metadata = {
    title: "Home | ig.news",
    description: "Generat",
}

export default function Home() {
  'use client'
  
  const [product, setProducts] = useState({})

  const getServer = async () => {
    const price = await stripe.prices.retrieve('price_1Q1EfJIKJqwpDFUQhpJ943Z0', {
      expand: ['product']
    }) 
    const products = {
      priceId: price.id,
      amount: (price.unit_amount! / 100),
    }
    setProducts(products)
  }

  return (
    <main className={styles.contentConteiner}>
      <section className={styles.hero}>
        <span>👏 Hey, Welcome</span>
        <h1>News about the <span>React</span> World.</h1>
        <p>
          Get access to all the publications <br />
          <span>for $9.90 month</span>
        </p>
        <SubscribeButton />
      </section>
      <img src="/images/avatar.svg" alt="Girl coding" />
    </main>
  );
};