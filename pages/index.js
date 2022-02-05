import Head from "next/head";
import Hero from "../components/hero";
import Search from "../components/search";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Azeez Shaik - Realtor-Texas</title>
        <meta
          name="description"
          content="The professional page for Realtor-Texas Azeez Shaik"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />

        <Search />
      </main>
    </div>
  );
}
