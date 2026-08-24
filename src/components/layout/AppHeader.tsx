import Image from "next/image";
import Link from "next/link";
import styles from "@/style/layout/app-header.module.css";

const navigation = [
  ["Guides", "/guides"],
  ["Wiki", "/wiki"],
  ["Train", "/train"],
  ["Locations", "/locations"],
  ["Enemies", "/enemies"],
  ["Updates", "/updates"],
] as const;

function Brand() {
  return (
    <Link className={styles.brand} href="/" aria-label="Frostrail Wiki home">
      <Image className={styles.logo} src="/images/brand/frostrail-logo.png" alt="" width={150} height={67} priority />
      <span className={styles.wiki}>WIKI</span>
    </Link>
  );
}

export function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Brand />
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navigation.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
        <Link className={styles.cta} href="/guides/beginner-guide">
          Beginner Guide <span aria-hidden="true">›</span>
        </Link>
        <details className={styles.mobileMenu}>
          <summary aria-label="Open navigation"><span /><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            {navigation.map(([label, href]) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
            <Link href="/guides/beginner-guide">Beginner Guide</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
