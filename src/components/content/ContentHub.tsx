import Image from "next/image";
import Link from "next/link";
import { playerFacingCopy } from "@/lib/content-copy";
import { PageJsonLd } from "@/seo/PageJsonLd";
import { getTdk } from "@/seo/tdk";
import styles from "@/style/page/hub/content-hub.module.css";
import { topicMedia } from "@/lib/media";
import type { HubData } from "@/types/content";

export function ContentHub({ data, canonical }: { data: HubData; canonical: string }) {
  const seo = getTdk(canonical);
  return (
    <main id="main-content" className={styles.main}>
      <PageJsonLd title={seo.title} description={seo.description} path={canonical} />
      <header className={styles.pageHead}>
        <div className={styles.hero}>
          <Image className={styles.heroImage} src={data.heroImage} alt={data.heroImageAlt} fill priority sizes="100vw" />
        </div>
        <div className={`container ${styles.headCopy}`}>
          <p className={styles.breadcrumb}><Link href="/">Home</Link><span>/</span>{data.breadcrumb}</p>
          <p className={styles.eyebrow}>{playerFacingCopy(data.eyebrow)}</p>
          <h1>{playerFacingCopy(data.title)}</h1>
          <p className={styles.intro}>{playerFacingCopy(data.introduction)}</p>
          <p className={styles.verified}>Updated {data.verifiedAt} · {playerFacingCopy(data.status)}</p>
        </div>
      </header>

      <div className={`container ${styles.layout}`}>
        <div className={styles.topics}>
          {data.topics.map((topic) => {
            const media = topicMedia(topic);
            return (
              <article className={styles.topic} id={topic.id} key={topic.id}>
                {topic.href ? (
                  <Link className={styles.topicMedia} href={topic.href}>
                    <Image src={media.src} alt={media.alt} fill sizes="(max-width: 900px) 100vw, 50vw" />
                    <span>{playerFacingCopy(topic.label)}</span>
                  </Link>
                ) : (
                  <div className={styles.topicMedia}>
                    <Image src={media.src} alt={media.alt} fill sizes="(max-width: 900px) 100vw, 50vw" />
                    <span>{playerFacingCopy(topic.label)}</span>
                  </div>
                )}
                <div className={styles.topicBody}>
                  <h2>{topic.href ? <Link href={topic.href}>{playerFacingCopy(topic.title)}</Link> : playerFacingCopy(topic.title)}</h2>
                  <p>{playerFacingCopy(topic.description)}</p>
                  <ul>
                    {topic.details.slice(0, 3).map((detail) => <li key={detail}>{playerFacingCopy(detail)}</li>)}
                  </ul>
                  {topic.href ? <Link className={styles.readMore} href={topic.href}>Open full entry <span>›</span></Link> : null}
                </div>
              </article>
            );
          })}
        </div>
        <aside className={styles.sidebar}>
          <p className={styles.sidebarLabel}>Before you use this page</p>
          <strong>{playerFacingCopy(data.status)}</strong>
          <p>
            Frostrail is still in development. Build-specific numbers are dated, and details that have not been shown yet are left open instead of guessed.
          </p>
          <nav aria-label="On this page">
            {data.topics.map((topic) => (
              <a href={`#${topic.id}`} key={topic.id}>{playerFacingCopy(topic.title)}</a>
            ))}
          </nav>
          <Link href="/wiki#verification">How we check information <span>›</span></Link>
        </aside>
      </div>
    </main>
  );
}
