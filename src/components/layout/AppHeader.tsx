"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/style/layout/app-header.module.css";

const navigation = [
  ["Home", "/"],
  ["Guides", "/guides"],
  ["Wiki", "/wiki"],
  ["Train", "/train"],
  ["Locations", "/locations"],
  ["Enemies", "/enemies"],
  ["Updates", "/updates"],
] as const;

const wikiLinks = [
  ["Weapons", "/wiki/weapons"],
  ["Items", "/wiki/items"],
  ["Train", "/train"],
  ["Enemies", "/enemies"],
  ["Locations", "/locations"],
  ["Lore", "/wiki/lore"],
  ["FAQ", "/frostrail-faq"],
] as const;

function Brand() {
  return (
    <Link className={styles.brand} href="/" aria-label="Frostrail home">
      <Image className={styles.logo} src="/images/logo.png" alt="Frostrail logo" width={1254} height={1254} priority sizes="52px" />
      <span className={styles.wiki}>Frostrail</span>
    </Link>
  );
}

export function AppHeader() {
  const pathname = usePathname();
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
        <details className={styles.mobileMenu} key={pathname}>
          <summary aria-label="Open navigation"><span /><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            {navigation.map(([label, href]) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
            {wikiLinks.map(([label, href]) => (
              <Link key={`m-${href}`} href={href}>{label}</Link>
            ))}
            <Link href="/guides/beginner-guide">Beginner Guide</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
