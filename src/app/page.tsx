import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
    <div className={styles.card}>
      <h1 className={styles.title}>Welcome to Your Next.js App</h1>
      <p className={styles.subtitle}>
        Build amazing projects with the power of Next.js and TypeScript.
      </p>
      <div className={styles.buttonGroup}>
        <a href="/books" className={styles.button}>
          Our books
        </a>
      </div>
    </div>
  </main>
  );
}


