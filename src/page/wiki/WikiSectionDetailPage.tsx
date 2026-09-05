import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { playerFacingCopy } from "@/lib/content-copy";
import { recordMedia, relatedMedia, sectionMedia } from "@/lib/media";
import { PageJsonLd } from "@/seo/PageJsonLd";
import styles from "@/style/page/wiki/weapons-index.module.css";
import type { ArticleData, ArticleRecord } from "@/types/content";

const statIcons = ["◆", "▥", "⚙", "◎"] as const;

function anchorForRecord(record: ArticleRecord, index: number) {
  const slug = record.title
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return `entry-${slug || index + 1}`;
}

function sectionName(data: ArticleData) {
  return data.title.replace(/^Frostrail\s+/i, "");
}

export function WikiSectionDetailPage({ data, canonical }: { data: ArticleData; canonical: string }) {
  const records = data.records ?? [];
  const name = sectionName(data);

  return (
    <main id="main-content" className={styles.main}>
      <PageJsonLd
        title={data.seo?.title ?? data.title}
        description={data.seo?.description ?? data.lede}
        path={canonical}
        pageType="CollectionPage"
        dateModified={data.date}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Wiki", path: "/wiki" },
          { name, path: canonical },
        ]}
      />
      {records.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "@id": `${siteConfig.url}${canonical}#entries`,
              name: `${name} entries in Frostrail`,
              numberOfItems: records.length,
              itemListElement: records.map((record, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: record.title,
                url: `${siteConfig.url}${canonical}#${anchorForRecord(record, index)}`,
              })),
            }).replaceAll("<", "\\u003c"),
          }}
        />
      )}

      <section className={styles.hero} aria-labelledby="wiki-section-title">
        <Image
          className={styles.heroImage}
          src={data.image ?? "/images/home/frostrail-official-hero.jpg"}
          alt={data.imageAlt ?? `${name} in Frostrail`}
          fill
          priority
          sizes="100vw"
        />
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.breadcrumb}>
            <Link href="/">Home</Link><span>/</span><Link href="/wiki">Wiki</Link><span>/</span>{name}
          </p>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{playerFacingCopy(data.eyebrow)}</p>
            <h1 id="wiki-section-title">{name}<span>{playerFacingCopy(data.status)}</span></h1>
            <p>{playerFacingCopy(data.lede)}</p>
          </div>
        </div>

        <div className={`container ${styles.statRail}`} aria-label={`${name} quick facts`}>
          {data.summary.slice(0, 4).map(([term, value], index) => (
            <div key={term}>
              <span aria-hidden="true">{statIcons[index]}</span>
              <strong>{playerFacingCopy(term)}</strong>
              <p>{playerFacingCopy(value)}</p>
            </div>
          ))}
        </div>
      </section>

      <div className={`container ${styles.databaseLayout}`}>
        <aside className={styles.filters} aria-label={`${name} page navigation`}>
          <h2>Explore {name}</h2>
          <nav>
            {records.length > 0 && <a href="#known-entries"><span>Known entries</span><b>{records.length}</b></a>}
            {data.sections.map((section) => (
              <a href={`#${section.id}`} key={section.id}><span>{playerFacingCopy(section.title)}</span><b>›</b></a>
            ))}
            <a href="#source-notes"><span>Source notes</span><b>{data.sources.length}</b></a>
          </nav>
          <dl>
            {data.summary.map(([term, value]) => (
              <div key={term}><dt>{playerFacingCopy(term)}</dt><dd>{playerFacingCopy(value)}</dd></div>
            ))}
          </dl>
          <Link href="/wiki">← Back to Frostrail Wiki</Link>
        </aside>

        <div className={styles.results}>
          {records.length > 0 && (
            <section id="known-entries" aria-labelledby="known-entries-title">
              <div className={styles.sectionHeading}>
                <h2 id="known-entries-title">Known {name} Entries</h2>
                <span>{records.length} currently documented</span>
              </div>
              <div className={styles.categoryGrid}>
                {records.map((record, index) => {
                  const media = recordMedia(record);
                  return (
                    <article className={styles.categoryCard} id={anchorForRecord(record, index)} key={record.title}>
                      {media && <div><Image src={media.src} alt={media.alt} fill sizes="(max-width: 768px) 100vw, 30vw" /></div>}
                      <h3>{playerFacingCopy(record.title)}</h3>
                      <strong>{playerFacingCopy(record.label)}</strong>
                      <p>{playerFacingCopy(record.description)}</p>
                      <dl>
                        {record.facts.map(([term, value]) => (
                          <div key={term}><dt>{playerFacingCopy(term)}</dt><dd>{playerFacingCopy(value)}</dd></div>
                        ))}
                      </dl>
                      {record.href && <Link href={record.href}>View details <span>›</span></Link>}
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          {records.length > 1 && (
            <section className={styles.comparison} aria-labelledby="entry-comparison-title">
              <h2 id="entry-comparison-title">{name} Quick Comparison <span>published details only</span></h2>
              <div className={styles.tableWrap}>
                <table>
                  <thead><tr><th>Entry</th><th>Category</th><th>Key detail</th><th>Additional detail</th></tr></thead>
                  <tbody>
                    {records.map((record) => (
                      <tr key={record.title}>
                        <th>{playerFacingCopy(record.title)}</th>
                        <td>{playerFacingCopy(record.label)}</td>
                        <td>{record.facts[0] ? `${playerFacingCopy(record.facts[0][0])}: ${playerFacingCopy(record.facts[0][1])}` : "Not published"}</td>
                        <td>{record.facts[1] ? `${playerFacingCopy(record.facts[1][0])}: ${playerFacingCopy(record.facts[1][1])}` : "Not published"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          <section className={styles.research} aria-labelledby="section-guide-title">
            <div className={styles.sectionHeading}>
              <h2 id="section-guide-title">How {name} Works</h2>
              <span>{data.date.replace(/^Verified /, "Updated ")}</span>
            </div>
            <div className={styles.researchGrid}>
              {data.sections.map((section, index) => {
                const media = sectionMedia(data, section, index);
                return (
                  <article id={section.id} key={section.id}>
                    {media && (
                      <figure>
                        <Image src={media.src} alt={media.alt} fill sizes="(max-width: 1024px) 100vw, 24vw" />
                        {media.caption && <figcaption>{media.caption}</figcaption>}
                      </figure>
                    )}
                    <h3>{playerFacingCopy(section.title)}</h3>
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{playerFacingCopy(paragraph)}</p>)}
                    {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{playerFacingCopy(bullet)}</li>)}</ul>}
                    {section.facts && (
                      <dl>{section.facts.map(([term, value]) => <div key={term}><dt>{playerFacingCopy(term)}</dt><dd>{playerFacingCopy(value)}</dd></div>)}</dl>
                    )}
                  </article>
                );
              })}
            </div>
            <div className={styles.sourceLinks} id="source-notes">
              {data.sources.map((source) => (
                <a href={source.href} target="_blank" rel="noopener noreferrer" key={source.href}>
                  <span>{source.tier ?? "Source"}</span>{source.label}<b aria-hidden="true">↗</b>
                </a>
              ))}
            </div>
          </section>

          <div className={styles.notice}>
            <strong>Pre-release data note</strong>
            <p>Frostrail is still in development. Names and values shown here are tied to published game material, while unfinished recipes, drop rates, costs, and balance numbers stay marked as unpublished until players can verify them in a live build.</p>
          </div>
        </div>
      </div>

      {data.related && data.related.length > 0 && (
        <section className={`container ${styles.related}`} aria-labelledby="related-wiki-title">
          <div className={styles.sectionHeading}>
            <h2 id="related-wiki-title">Related Frostrail Pages</h2>
            <Link href="/wiki">View all sections <span>›</span></Link>
          </div>
          <div>
            {data.related.map((item) => {
              const media = relatedMedia(item);
              return (
                <Link href={item.href} key={item.href}>
                  <span className={styles.relatedImage}><Image src={media.src} alt={media.alt} fill sizes="(max-width: 768px) 40vw, 18vw" /></span>
                  <span><strong>{item.label}</strong><small>Open the full {item.label.toLowerCase()} page</small></span>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
