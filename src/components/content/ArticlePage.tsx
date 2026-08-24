import Image from "next/image";
import Link from "next/link";
import { AppFooter } from "@/components/layout/AppFooter";
import { AppHeader } from "@/components/layout/AppHeader";
import styles from "@/style/page/article/article.module.css";
import type { ArticleData } from "@/types/content";

export function ArticlePage({ data }: { data: ArticleData }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <AppHeader />
      <main id="main-content" className={styles.main}>
        <header className={styles.hero}>
          <Image
            className={styles.heroImage}
            src={data.image ?? "/images/home/frostrail-official-hero.jpg"}
            alt={data.imageAlt ?? "Official Frostrail game artwork"}
            fill
            priority
            sizes="100vw"
          />
          <div className="container">
            <p className={styles.breadcrumb}>
              <Link href="/">Home</Link><span>/</span>
              <Link href={data.parent.href}>{data.parent.label}</Link><span>/</span>{data.title}
            </p>
            <p className={styles.eyebrow}>{data.eyebrow}</p>
            <h1>{data.title}</h1>
            <p className={styles.lede}>{data.lede}</p>
            <div className={styles.meta}><time>{data.date}</time><span>{data.status}</span></div>
          </div>
        </header>
        <div className={`container ${styles.layout}`}>
          <article className={styles.article}>
            {data.records?.length ? (
              <section id="records">
                <h2>Verified records</h2>
                <div className={styles.recordGrid}>
                  {data.records.map((record) => (
                    <article className={styles.record} key={record.title}>
                      <p className={styles.recordLabel}>{record.label}</p>
                      <h3>{record.href ? <Link href={record.href}>{record.title}</Link> : record.title}</h3>
                      <p>{record.description}</p>
                      <dl>
                        {record.facts.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}
                      </dl>
                      {record.href ? <Link className={styles.recordLink} href={record.href}>View entry <span>›</span></Link> : null}
                    </article>
                  ))}
                </div>
              </section>
            ) : null}
            {data.sections.map((section) => (
              <section id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
                {section.facts ? <dl className={styles.factTable}>{section.facts.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl> : null}
              </section>
            ))}
            <div className={styles.sourceBox}>
              <span>Sources used</span>
              <div>
                {data.sources.map((source) => (
                  <a href={source.href} target="_blank" rel="noreferrer" key={source.href}>
                    {source.tier ? `${source.tier}: ` : ""}{source.label} ↗
                  </a>
                ))}
              </div>
            </div>
            {data.related?.length ? <nav className={styles.related} aria-label="Related pages"><strong>Continue reading</strong>{data.related.map((item) => <Link href={item.href} key={item.href}>{item.label} <span>›</span></Link>)}</nav> : null}
          </article>
          <aside className={styles.summary}>
            <p>Article summary</p>
            <dl>
              {data.summary.map(([term, value]) => (
                <div key={term}><dt>{term}</dt><dd>{value}</dd></div>
              ))}
            </dl>
            <nav aria-label="On this page">
              <strong>On this page</strong>
              {data.records?.length ? <a href="#records">Verified records</a> : null}
              {data.sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.title}</a>)}
            </nav>
          </aside>
        </div>
      </main>
      <AppFooter />
    </>
  );
}
