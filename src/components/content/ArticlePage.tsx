import Image from "next/image";
import Link from "next/link";
import { playerFacingCopy } from "@/lib/content-copy";
import { PageJsonLd } from "@/seo/PageJsonLd";
import styles from "@/style/page/article/article.module.css";
import { articleCover, recordMedia, relatedMedia, sectionMedia } from "@/lib/media";
import type { ArticleData } from "@/types/content";

export function ArticlePage({ data, canonical, pageType = "Article" }: { data: ArticleData; canonical: string; pageType?: "WebPage" | "Article" | "AboutPage" | "ContactPage" }) {
  const cover = articleCover(data);
  const updatedLabel = data.date.replace(/^Verified /, "Updated ");
  const seoTitle = data.seo?.title ?? data.title;
  const seoDescription = data.seo?.description ?? data.lede;

  return (
    <main id="main-content" className={styles.main}>
      <PageJsonLd
        title={seoTitle}
        description={seoDescription}
        path={canonical}
        pageType={pageType}
        dateModified={data.date}
        breadcrumbs={[{ name: "Home", path: "/" }, { name: data.parent.label, path: data.parent.href }, { name: data.title, path: canonical }]}
      />
      <header className={styles.pageHead}>
        <div className="container">
          <p className={styles.breadcrumb}>
            <Link href="/">Home</Link><span>/</span>
            <Link href={data.parent.href}>{playerFacingCopy(data.parent.label)}</Link><span>/</span>{playerFacingCopy(data.title)}
          </p>
          <p className={styles.eyebrow}>{playerFacingCopy(data.eyebrow)}</p>
          <h1>{playerFacingCopy(data.title)}</h1>
          <p className={styles.lede}>{playerFacingCopy(data.lede)}</p>
          <div className={styles.meta}>
            <time>{updatedLabel}</time>
            <span>{playerFacingCopy(data.status)}</span>
          </div>
        </div>
      </header>

      <div className={`container ${styles.layout}`}>
        <article className={styles.article}>
          {data.records?.length ? (
            <section id="records" className={styles.block}>
              <h2>Known entries</h2>
              <div className={styles.recordGrid}>
                {data.records.map((record) => {
                  const media = recordMedia(record);
                  return (
                    <article className={styles.record} key={record.title}>
                      {media ? (
                        <div className={styles.recordMedia}>
                          <Image src={media.src} alt={media.alt} fill sizes="(max-width: 900px) 100vw, 280px" />
                        </div>
                      ) : null}
                      <div className={styles.recordBody}>
                        <p className={styles.recordLabel}>{playerFacingCopy(record.label)}</p>
                        <h3>{record.href ? <Link href={record.href}>{playerFacingCopy(record.title)}</Link> : playerFacingCopy(record.title)}</h3>
                        <p>{playerFacingCopy(record.description)}</p>
                        <dl>
                          {record.facts.map(([term, value]) => <div key={term}><dt>{playerFacingCopy(term)}</dt><dd>{playerFacingCopy(value)}</dd></div>)}
                        </dl>
                        {record.href ? <Link className={styles.recordLink} href={record.href}>View entry <span>›</span></Link> : null}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ) : null}

          {data.sections.map((section, index) => {
            const media = sectionMedia(data, section, index);
            return (
              <section id={section.id} className={styles.block} key={section.id}>
                <h2>{playerFacingCopy(section.title)}</h2>
                <div className={media ? (index % 2 === 1 ? styles.splitReverse : styles.split) : undefined}>
                  <div className={styles.prose}>
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{playerFacingCopy(paragraph)}</p>)}
                    {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{playerFacingCopy(bullet)}</li>)}</ul> : null}
                    {section.facts ? (
                      <dl className={styles.factTable}>
                        {section.facts.map(([term, value]) => <div key={term}><dt>{playerFacingCopy(term)}</dt><dd>{playerFacingCopy(value)}</dd></div>)}
                      </dl>
                    ) : null}
                  </div>
                  {media ? (
                    <figure className={styles.inlineFigure}>
                      <div>
                        <Image src={media.src} alt={media.alt} fill sizes="(max-width: 900px) 100vw, 380px" />
                      </div>
                      {media.caption ? <figcaption>{playerFacingCopy(media.caption)}</figcaption> : null}
                    </figure>
                  ) : null}
                </div>
              </section>
            );
          })}

          {data.gallery?.length ? (
            <section id="official-gallery" className={styles.block}>
              <h2>In-game screenshots</h2>
              <p className={styles.galleryNote}>These screenshots show a pre-release build, so interfaces, item values, and visual details may change before Early Access.</p>
              <div className={styles.gallery}>
                {data.gallery.map((item) => (
                  <figure key={item.src}>
                    <div><Image src={item.src} alt={item.alt} fill sizes="(max-width: 767px) 100vw, 40vw" /></div>
                    <figcaption>{playerFacingCopy(item.caption)}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ) : null}

          {data.sources.length ? <div className={styles.sourceBox}>
            <span>Announcements &amp; interviews</span>
            <div>
              {data.sources.map((source) => (
                <a href={source.href} target="_blank" rel="noreferrer" key={source.href}>
                  {source.tier ? `${source.tier}: ` : ""}{source.label} ↗
                </a>
              ))}
            </div>
          </div> : null}
        </article>

        <aside className={styles.infobox}>
          <figure className={styles.cover}>
            <div>
              <Image src={cover.src} alt={cover.alt} fill sizes="340px" priority />
            </div>
            <figcaption>{cover.caption}</figcaption>
          </figure>
          <p className={styles.boxLabel}>Quick facts</p>
          <dl>
              {data.summary.map(([term, value]) => (
              <div key={term}><dt>{playerFacingCopy(term)}</dt><dd>{playerFacingCopy(value)}</dd></div>
            ))}
          </dl>
          <nav aria-label="On this page">
            <strong>On this page</strong>
            {data.records?.length ? <a href="#records">Known entries</a> : null}
            {data.sections.map((section) => <a href={`#${section.id}`} key={section.id}>{playerFacingCopy(section.title)}</a>)}
            {data.gallery?.length ? <a href="#official-gallery">Screenshots</a> : null}
          </nav>
        </aside>
      </div>

      {data.related?.length ? (
        <section className={`container ${styles.related}`} aria-label="Related pages">
          <h2>Continue reading</h2>
          <div className={styles.relatedGrid}>
            {data.related.map((item) => {
              const media = relatedMedia(item);
              return (
                <Link href={item.href} key={item.href}>
                  <span className={styles.relatedImage}>
                    <Image src={media.src} alt="" fill sizes="220px" />
                  </span>
                    <strong>{playerFacingCopy(item.label)}</strong>
                </Link>
              );
            })}
          </div>
        </section>
      ) : null}
    </main>
  );
}
