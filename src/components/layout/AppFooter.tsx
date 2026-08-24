import Image from "next/image";
import Link from "next/link";
import styles from "@/style/layout/app-footer.module.css";

export function AppFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandBlock}>
          <Image src="/images/brand/frostrail-logo.png" alt="Frostrail" width={170} height={75} />
          <span>WIKI</span>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/about-frostrail">About Frostrail</Link>
          <Link href="/wiki">Wiki</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/updates">Updates</Link>
          <a href="https://store.steampowered.com/app/3517740/Frostrail/" rel="noreferrer" target="_blank">Official Steam page ↗</a>
        </nav>
        <p>
          Independent community wiki. Official game media © FakeFish and Shiro Unlimited. Not affiliated with the developers.
        </p>
      </div>
    </footer>
  );
}
