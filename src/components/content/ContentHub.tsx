import Image from "next/image";
import Link from "next/link";
import styles from "@/style/page/hub/content-hub.module.css";
import { topicMedia } from "@/lib/media";
import type { HubData } from "@/types/content";

export function ContentHub({ data }: { data: HubData }) {
  return (
    <main id="main-content" className={styles.main}>
      <header className={`container ${styles.pageHead}`}>
        <div className={styles.hero}>
          <Image className={styles.heroImage} src={data.heroImage} alt={data.heroImageAlt} fill priority sizes="(max-width: 900px) 100vw, 46vw" />
        </div>
        <div className={styles.headCopy}>
          <p className={styles.breadcrumb}><Link href="/">Home</Link><span>/</span>{data.breadcrumb}</p>
          <p className={styles.eyebrow}>{data.eyebrow}</p>
          <h1>{data.title}</h1>
          <p className={styles.intro}>{data.introduction}</p>
          <p className={styles.verified}>Last verified {data.verifiedAt} · {data.status}</p>
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
                    <span>{topic.label}</span>
                  </Link>
                ) : (
                  <div className={styles.topicMedia}>
                    <Image src={media.src} alt={media.alt} fill sizes="(max-width: 900px) 100vw, 50vw" />
                    <span>{topic.label}</span>
                  </div>
                )}
                <div className={styles.topicBody}>
                  <h2>{topic.href ? <Link href={topic.href}>{topic.title}</Link> : topic.title}</h2>
                  <p>{topic.description}</p>
                  <ul>
                    {topic.details.slice(0, 3).map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                  {topic.href ? <Link className={styles.readMore} href={topic.href}>Open full entry <span>›</span></Link> : null}
                </div>
              </article>
            );
          })}
        </div>
        <aside className={styles.sidebar}>
          <p className={styles.sidebarLabel}>How this wiki works</p>
          <strong>{data.status}</strong>
          <p>
            Confirmed statements include their source. Unreleased numerical values stay TBA instead of being copied from concept art or speculation.
          </p>
          <nav aria-label="On this page">
            {data.topics.map((topic) => (
              <a href={`#${topic.id}`} key={topic.id}>{topic.title}</a>
            ))}
          </nav>
          <Link href="/wiki#verification">Verification policy <span>›</span></Link>
        </aside>
      </div>
    </main>
  );
}
