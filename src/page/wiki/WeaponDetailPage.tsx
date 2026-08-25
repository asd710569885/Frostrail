import Image from "next/image";
import Link from "next/link";
import { AppFooter } from "@/components/layout/AppFooter";
import { AppHeader } from "@/components/layout/AppHeader";
import styles from "@/style/page/wiki/weapon-detail.module.css";
import type { ArticleData, ArticleSection } from "@/types/content";

const relatedWeapons = [
  ["Pipe Rifle", "Named", "/wiki/weapons/pipe-rifle"],
  ["Bolt-Action Rifle", "Named", "/wiki/weapons/bolt-action-rifle"],
  ["Pistols", "Confirmed family", "/wiki/weapons#all-weapons"],
  ["Shotguns", "Confirmed family", "/wiki/weapons#all-weapons"],
] as const;

function section(data: ArticleData, id: string): ArticleSection | undefined {
  return data.sections.find((item) => item.id === id);
}

function factValue(sectionData: ArticleSection | undefined, names: readonly string[]): string | undefined {
  return sectionData?.facts?.find(([term]) => names.includes(term))?.[1];
}

export function WeaponDetailPage({ data }: { data: ArticleData }) {
  const overview = section(data, "overview");
  const stats = section(data, "stats");
  const crafting = section(data, "crafting") ?? section(data, "acquisition");
  const acquisition = section(data, "acquisition");
  const mods = section(data, "mods");
  const tips = section(data, "tips");
  const type = data.summary.find(([term]) => term === "Type")?.[1] ?? "Rifle";
  const damage = factValue(stats, ["Projectile damage", "Damage"]) ?? "TBA";
  const clipSize = factValue(stats, ["Clip size", "Magazine size"]) ?? "TBA";
  const dataStatus = data.summary.find(([term]) => term === "Data status")?.[1] ?? "Pre-release";

  return (
    <>
      <a className="skip-link" href="#weapon-overview">Skip to weapon details</a>
      <AppHeader />
      <main className={styles.main}>
        <header className={styles.hero}>
          <Image className={styles.heroImage} src={data.image ?? "/images/weapons/weapon-assembly-station.jpg"} alt={data.imageAlt ?? data.title} fill priority sizes="100vw" />
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.breadcrumb}><Link href="/">Home</Link><span>/</span><Link href="/wiki">Wiki</Link><span>/</span><Link href="/wiki/weapons">Weapons</Link><span>/</span>{data.title}</p>
            <div className={styles.heroCopy}>
              <p>{data.eyebrow}</p>
              <h1>{data.title}</h1>
              <p>{data.lede}</p>
            </div>
            <div className={styles.heroStats}>
              <div><span>⚔</span><p>Type<strong>{type}</strong></p></div>
              <div><span>◎</span><p>Damage<strong>{damage}</strong></p></div>
              <div><span>▥</span><p>Clip Size<strong>{clipSize}</strong></p></div>
              <div><span>◆</span><p>Data<strong>{dataStatus}</strong></p></div>
            </div>
          </div>
        </header>

        <nav className={`container ${styles.tabs}`} aria-label="Weapon page sections">
          <a href="#weapon-overview">Overview</a><a href="#detailed-stats">Stats</a><a href="#how-to-get">How to get</a><a href="#crafting">Crafting</a><a href="#mods">Mods</a><a href="#verification">Sources</a>
        </nav>

        <div className={`container ${styles.layout}`}>
          <article className={styles.article}>
            <section id="weapon-overview" className={styles.overview}>
              <div><h2>Overview</h2>{overview?.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              <div className={styles.overviewImage}><Image src="/images/guides/coop-train-defense.jpg" alt="Frostrail survivor carrying a firearm in the frozen world" fill sizes="45vw" /></div>
            </section>

            <section id="detailed-stats">
              <h2>Detailed Stats</h2>
              {stats?.paragraphs.map((paragraph) => <p className={styles.sectionIntro} key={paragraph}>{paragraph}</p>)}
              <dl className={styles.statGrid}>
                {(stats?.facts ?? [["Damage", "TBA"], ["Fire rate", "TBA"], ["Reload speed", "TBA"], ["Range", "TBA"], ["Durability", "TBA"], ["Ammo type", "TBA"], ["Magazine size", "TBA"], ["Weight", "TBA"]]).map(([term, value], index) => <div key={term}><span aria-hidden="true">{["✦","◴","↻","◎","⬟","▥","▤","▲"][index % 8]}</span><dt>{term}</dt><dd>{value}</dd></div>)}
              </dl>
            </section>

            <section id="how-to-get">
              <h2>How to Get</h2>
              {acquisition?.paragraphs.map((paragraph) => <p className={styles.sectionIntro} key={paragraph}>{paragraph}</p>)}
              {acquisition?.facts?.length ? <dl className={styles.evidenceGrid}>{acquisition.facts.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl> : null}
              {acquisition?.bullets?.length ? <ul>{acquisition.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
            </section>

            <section id="crafting">
              <h2>Crafting & Modular Parts</h2>
              {crafting?.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {crafting?.facts?.length ? <dl className={styles.evidenceGrid}>{crafting.facts.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl> : null}
              {crafting?.bullets?.length ? <ul>{crafting.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
            </section>

            <section id="mods">
              <h2>Known Modification Status</h2>
              <div className={styles.modStatus}>
                <strong>{mods?.title ?? "Modular weapon system"}</strong>
                {mods?.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {mods?.facts?.length ? <dl className={styles.evidenceGrid}>{mods.facts.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl> : null}
              {mods?.bullets?.length ? <ul>{mods.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
            </section>

            {tips ? <section id="tips"><h2>{tips.title}</h2>{tips.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{tips.facts?.length ? <dl className={styles.evidenceGrid}>{tips.facts.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl> : null}{tips.bullets?.length ? <ul>{tips.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}</section> : null}

            <section id="verification">
              <h2>Official Media & Sources</h2>
              {data.gallery?.length ? <div className={styles.weaponGallery}>{data.gallery.map((item) => <figure key={item.src}><div><Image src={item.src} alt={item.alt} fill sizes="(max-width: 620px) 100vw, 38vw" /></div><figcaption>{item.caption}</figcaption></figure>)}</div> : null}
              <div className={styles.sources}>{data.sources.map((source) => <a href={source.href} target="_blank" rel="noreferrer" key={source.href}><span>{source.tier ?? "Source"}</span><strong>{source.label}</strong><b>↗</b></a>)}</div>
            </section>
          </article>

          <aside className={styles.sidebar}>
            <section className={styles.summary}>
              <h2>Weapon Summary</h2>
              <div className={styles.summaryImage}><Image src={data.image ?? "/images/weapons/weapon-assembly-station.jpg"} alt="" fill sizes="360px" /><span>Verified</span></div>
              <dl>{data.summary.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl>
              <blockquote>Screenshot values are labeled as pre-release evidence and may change before Early Access.</blockquote>
            </section>
            <section className={styles.sidePanel}><h2>Related Weapons</h2>{relatedWeapons.map(([title, status, href]) => <Link href={href} key={title}><span className={styles.weaponThumb}><Image src="/images/weapons/weapon-assembly-station.jpg" alt="" fill sizes="90px" /></span><span><strong>{title}</strong><small>{status}</small></span></Link>)}<Link className={styles.viewAll} href="/wiki/weapons">View all weapons <span>›</span></Link></section>
            <section className={styles.sidePanel}><h2>Related Guides</h2><Link href="/wiki/crafting"><b>⚙</b><span><strong>Crafting database</strong><small>Stations, parts, and repair</small></span></Link><Link href="/train/defense"><b>◎</b><span><strong>Train defense</strong><small>Threats and mounted weapons</small></span></Link><Link href="/guides/beginner-guide"><b>▤</b><span><strong>Beginner guide</strong><small>Start surviving the rails</small></span></Link></section>
          </aside>
        </div>

        <section className={`container ${styles.moreWeapons}`} aria-labelledby="more-weapons">
          <h2 id="more-weapons">More Frostrail Weapons</h2>
          <div>{relatedWeapons.map(([title, status, href]) => <Link href={href} key={title}><span><Image src="/images/weapons/weapon-assembly-station.jpg" alt="" fill sizes="24vw" /></span><strong>{title}</strong><small>{status} · Stats TBA</small></Link>)}</div>
        </section>
      </main>
      <AppFooter />
    </>
  );
}
