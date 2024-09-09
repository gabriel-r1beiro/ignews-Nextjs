import { Metadata } from "next";
import styles from "./../style/home.module.sass";
import { SubscribeButton } from "@/components/SubscribeButton";

export const metadata: Metadata = {
    title: "Home | ig.news",
    description: "Generat",
}


export default function Home() {
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
