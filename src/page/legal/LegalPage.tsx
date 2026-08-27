import Link from "next/link";
import { PageJsonLd } from "@/seo/PageJsonLd";
import { getTdk } from "@/seo/tdk";
import styles from "@/style/page/article/article.module.css";
import type { LegalPageData } from "@/data/legal/legal-pages";

const legalLinks = [
  ["Privacy Policy", "/legal/privacy-policy"],
  ["Terms of Service", "/legal/terms-of-service"],
  ["Copyright", "/legal/copyright"],
  ["About Us", "/legal/about-us"],
  ["Contact Us", "/legal/contact-us"],
] as const;

export function LegalPage({ data }: { data: LegalPageData }) {
  const canonical = `/legal/${data.slug}`;
  const seo = getTdk(canonical);
  const pageType = data.slug === "about-us" ? "AboutPage" : data.slug === "contact-us" ? "ContactPage" : "WebPage";

  return (
    <main id="main-content" className={styles.main}>
      <PageJsonLd title={seo.title} description={seo.description} path={canonical} pageType={pageType} />
      <header className={styles.pageHead}>
        <div className="container">
          <p className={styles.breadcrumb}><Link href="/">Home</Link><span>/</span>Legal<span>/</span>{data.title}</p>
          <p className={styles.eyebrow}>{data.eyebrow}</p>
          <h1>{data.title}</h1>
          <p className={styles.lede}>{data.lede}</p>
          <div className={styles.meta}><time>Updated {data.updated}</time><span>Frostrail Wiki</span></div>
        </div>
      </header>
      <div className={`container ${styles.layout}`}>
        <article className={styles.article}>
          {data.sections.map((section) => (
            <section id={section.id} className={styles.block} key={section.id}>
              <h2>{section.title}</h2>
              <div className={styles.prose}>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
              </div>
            </section>
          ))}
        </article>
        <aside className={styles.infobox}>
          <p className={styles.boxLabel}>Legal</p>
          <nav aria-label="Legal pages">
            {legalLinks.map(([label, href]) => <Link href={href} rel="noopener noreferrer nofollow" key={href}>{label}</Link>)}
          </nav>
          <p className={styles.boxLabel}>Contact</p>
          <dl><div><dt>Email</dt><dd>wanghuan@frostrail.org</dd></div><div><dt>Website</dt><dd>frostrail.org</dd></div></dl>
        </aside>
      </div>
    </main>
  );
}
