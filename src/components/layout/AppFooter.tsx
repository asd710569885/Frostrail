import Link from "next/link";
import { HomeIcon } from "@/components/icon/HomeIcon";
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
          <Link href="/about-frostrail#contact">Contact</Link>
          <Link href="/about-frostrail#privacy">Privacy Policy</Link>
          <Link href="/about-frostrail#terms">Terms</Link>
        </nav>
        <div className={styles.socials} aria-label="Community channels">
          <HomeIcon name="discord" /><HomeIcon name="reddit" /><HomeIcon name="youtube" /><HomeIcon name="twitter" />
        </div>
        <p>
          © 2026 Frostrail Wiki. Independent community wiki; not affiliated with FakeFish or Shiro Unlimited.
        </p>
      </div>
    </footer>
  );
}
