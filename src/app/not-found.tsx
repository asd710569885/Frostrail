import Link from "next/link";
import styles from "@/style/page/not-found/not-found.module.css";

export default function NotFound() {
  return (
    <main id="main-content" className={styles.main}>
      <div className={styles.panel}>
        <p>Signal lost · 404</p>
        <h1>This rail ends here</h1>
        <span>The page may have moved, or the record has not been published.</span>
        <div>
          <Link href="/">Return home</Link>
          <Link href="/wiki">Explore the wiki</Link>
        </div>
      </div>
    </main>
  );
}
