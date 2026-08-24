import Link from "next/link";
import { AppFooter } from "@/components/layout/AppFooter";
import { AppHeader } from "@/components/layout/AppHeader";
import styles from "@/style/page/not-found/not-found.module.css";

export default function NotFound() {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
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
      <AppFooter />
    </>
  );
}
