import Link from "next/link";
import { HomeIcon } from "@/components/icon/HomeIcon";
import { siteConfig } from "@/config/site";
import styles from "@/style/layout/app-footer.module.css";

export function AppFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandBlock}>
          <HomeIcon name="brand" />
          <span className={styles.srOnly}>Frostrail Wiki</span>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/about-frostrail">About</Link>
          <Link href="/frostrail-faq">FAQ</Link>
          <Link href="/about-frostrail#contact">Contact</Link>
          <Link href="/about-frostrail#privacy">Privacy Policy</Link>
          <Link href="/about-frostrail#terms">Terms</Link>
        </nav>
        <div className={styles.socials}>
          <a href={siteConfig.steamUrl} target="_blank" rel="noreferrer" aria-label="Frostrail on Steam">
            <HomeIcon name="brand" />
          </a>
          <a href="https://www.youtube.com/watch?v=4IsBMv3UJQU" target="_blank" rel="noreferrer" aria-label="Official Closed Beta announcement">
            <HomeIcon name="youtube" />
          </a>
        </div>
        <p>
          © 2026 Frostrail Wiki. Independent community wiki; not affiliated with FakeFish or Shiro Unlimited.
        </p>
      </div>
    </footer>
  );
}
