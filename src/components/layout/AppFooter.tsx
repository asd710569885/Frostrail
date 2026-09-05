import Image from "next/image";
import Link from "next/link";
import { HomeIcon } from "@/components/icon/HomeIcon";
import { siteConfig } from "@/config/site";
import styles from "@/style/layout/app-footer.module.css";

export function AppFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandBlock}>
          <Image src="/images/logo.png" alt="Frostrail Wiki logo" width={1254} height={1254} sizes="58px" />
        </div>
        <nav aria-label="Legal navigation">
          <span>Legal</span>
          <Link href="/legal/privacy-policy" rel="noopener noreferrer nofollow">Privacy Policy</Link>
          <Link href="/legal/terms-of-service" rel="noopener noreferrer nofollow">Terms of Service</Link>
          <Link href="/legal/copyright" rel="noopener noreferrer nofollow">Copyright</Link>
          <Link href="/legal/about-us" rel="noopener noreferrer nofollow">About Us</Link>
          <Link href="/legal/contact-us" rel="noopener noreferrer nofollow">Contact Us</Link>
        </nav>
        <div className={styles.socials}>
          <a href={siteConfig.steamUrl} target="_blank" rel="noreferrer" aria-label="Frostrail on Steam">
            <Image src="/images/5ee480b1-76e2-46b2-ac5d-ac46aed15aa2.png" alt="" width={1254} height={1254} sizes="27px" />
          </a>
          <a href="https://www.youtube.com/watch?v=4IsBMv3UJQU" target="_blank" rel="noreferrer" aria-label="Official Closed Beta announcement">
            <HomeIcon name="youtube" />
          </a>
        </div>
        <p>
          Copyright © {currentYear} {siteConfig.name}. All rights reserved.<br />
          Frostrail Wiki is an independent fan site and is not affiliated with, endorsed by, or connected to FakeFish or Shiro Unlimited.
        </p>
      </div>
    </footer>
  );
}
