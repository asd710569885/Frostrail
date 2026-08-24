import Image from "next/image";
import Link from "next/link";
import { AppFooter } from "@/components/layout/AppFooter";
import { AppHeader } from "@/components/layout/AppHeader";
import styles from "@/style/page/hub/content-hub.module.css";
import type { HubData } from "@/types/content";

export function ContentHub({ data }: { data: HubData }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <AppHeader />
      <main id="main-content" className={styles.main}>
        <section className={styles.hero}>
          <Image className={styles.heroImage} src={data.heroImage} alt={data.heroImageAlt} fill priority sizes="100vw" />
          <div className="container">
            <p className={styles.breadcrumb}><Link href="/">Home</Link><span>/</span>{data.breadcrumb}</p>
            <p className={styles.eyebrow}>{data.eyebrow}</p>
            <h1>{data.title}</h1>
            <div className={styles.intro}><p>{data.introduction}</p></div>
          </div>
        </section>
        <div className={`container ${styles.layout}`}>
          <div className={styles.topics}>
            {data.topics.map((topic, index) => (
              <section className={styles.topic} id={topic.id} key={topic.id}>
                <div className={styles.topicHeading}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p>{topic.label}</p>
                    <h2>{topic.href ? <Link href={topic.href}>{topic.title}</Link> : topic.title}</h2>
                  </div>
                </div>
                <p className={styles.topicDescription}>{topic.description}</p>
                <ul>
                  {topic.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
                {topic.href ? <Link className={styles.readMore} href={topic.href}>Open full entry <span>›</span></Link> : null}
                {topic.source ? (
                  <a className={styles.source} href={topic.source.href} target="_blank" rel="noreferrer">
                    {topic.source.tier ? `${topic.source.tier}: ` : ""}{topic.source.label} <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </section>
            ))}
          </div>
          <aside className={styles.sidebar}>
            <p className={styles.sidebarLabel}>Page status</p>
            <strong>{data.status}</strong>
            <p className={styles.verified}>Last verified: {data.verifiedAt}</p>
            <p>
              Confirmed statements include their source. Unreleased numerical values are shown as
              TBA instead of being copied from concept art, UI mockups, or speculation.
            </p>
            <Link href="/wiki#verification">Verification policy <span>›</span></Link>
          </aside>
        </div>
      </main>
      <AppFooter />
    </>
  );
}
