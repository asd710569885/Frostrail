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

export function WeaponDetailPage({ data }: { data: ArticleData }) {
  const overview = section(data, "overview");
  const stats = section(data, "stats");
  const crafting = section(data, "crafting") ?? section(data, "acquisition");
  const acquisition = section(data, "acquisition");
  const isPipeRifle = data.slug === "pipe-rifle";
  const type = data.summary.find(([term]) => term === "Type")?.[1] ?? "Rifle";

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
              <div><span>◎</span><p>Damage<strong>TBA</strong></p></div>
              <div><span>▥</span><p>Ammo<strong>TBA</strong></p></div>
              <div><span>◆</span><p>Rarity<strong>TBA</strong></p></div>
            </div>
          </div>
        </header>

        <nav className={`container ${styles.tabs}`} aria-label="Weapon page sections">
          <a href="#weapon-overview">Overview</a><a href="#detailed-stats">Stats</a><a href="#how-to-get">How to get</a><a href="#crafting">Crafting</a><a href="#mods">Mods</a><a href="#tips">Sources</a>
        </nav>

        <div className={`container ${styles.layout}`}>
          <article className={styles.article}>
            <section id="weapon-overview" className={styles.overview}>
              <div><h2>Overview</h2>{overview?.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              <div className={styles.overviewImage}><Image src="/images/guides/coop-train-defense.jpg" alt="Frostrail survivor carrying a firearm in the frozen world" fill sizes="45vw" /></div>
            </section>

            <section id="detailed-stats">
              <h2>Detailed Stats</h2>
              <p className={styles.sectionIntro}>Publicly verifiable numeric combat values have not been released. Fields are retained so beta and Early Access data can be added without changing the page structure.</p>
              <dl className={styles.statGrid}>
                {(stats?.facts ?? [["Damage", "TBA"], ["Fire rate", "TBA"], ["Reload speed", "TBA"], ["Range", "TBA"], ["Durability", "TBA"], ["Ammo type", "TBA"], ["Magazine size", "TBA"], ["Weight", "TBA"]]).map(([term, value], index) => <div key={term}><span aria-hidden="true">{["✦","◴","↻","◎","⬟","▥","▤","▲"][index % 8]}</span><dt>{term}</dt><dd>{value}</dd></div>)}
              </dl>
            </section>

            <section id="how-to-get">
              <h2>How to Get</h2>
              <p className={styles.sectionIntro}>No public source identifies a world spawn, dungeon, enemy drop, trader, price, or unlock requirement for this weapon.</p>
              <div className={styles.acquireGrid}>
                <article><span>Confirmed context</span><strong>{isPipeRifle ? "Early-game weapon" : "Modular rifle example"}</strong><p>{isPipeRifle ? "The developer places the Pipe Rifle in early progression, without stating the exact acquisition method." : "The Bolt-Action Rifle was used to explain changing firearm parts at a weapon-modifying station."}</p><small>Developer interview ›</small></article>
                <article><span>Crafting plan</span><strong>All guns craftable</strong><p>Craftable guns are a stated design goal. This weapon&apos;s station, ingredients, time, and unlock remain TBA.</p><small>Exact recipe not published ›</small></article>
                <article><span>Not confirmed</span><strong>No drop or vendor table</strong><p>World loot, enemy drops, merchant stock, rarity, and prices must wait for an authoritative build.</p><small>Awaiting build data ›</small></article>
              </div>
            </section>

            <section id="crafting">
              <h2>Crafting & Modular Parts</h2>
              {crafting?.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <dl className={styles.evidenceGrid}>
                <div><dt>Gun crafting</dt><dd>Confirmed design plan</dd></div>
                <div><dt>Weapon-modifying station</dt><dd>{isPipeRifle ? "System confirmed; compatibility TBA" : "Directly tied to this rifle example"}</dd></div>
                <div><dt>Recipe / ingredient counts</dt><dd>TBA — not published</dd></div>
                <div><dt>Craft time / station tier</dt><dd>TBA — not published</dd></div>
              </dl>
            </section>

            <section id="mods">
              <h2>Known Modification Status</h2>
              <div className={styles.modStatus}>
                <strong>{isPipeRifle ? "General modular-gun system confirmed" : "Modular parts confirmed for the example"}</strong>
                <p>No official source names a barrel, optic, stock, receiver, slot count, quality tier, compatible component, or stat modifier for {data.title}. Those rows will be added only when a public or permitted build exposes them.</p>
              </div>
            </section>

            <section id="tips">
              <h2>Verification Notes & Sources</h2>
              {acquisition?.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <ul>{acquisition?.bullets?.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              <div className={styles.sources}>{data.sources.map((source) => <a href={source.href} target="_blank" rel="noreferrer" key={source.href}><span>{source.tier ?? "Source"}</span><strong>{source.label}</strong><b>↗</b></a>)}</div>
            </section>
          </article>

          <aside className={styles.sidebar}>
            <section className={styles.summary}>
              <h2>Weapon Summary</h2>
              <div className={styles.summaryImage}><Image src={data.image ?? "/images/weapons/weapon-assembly-station.jpg"} alt="" fill sizes="360px" /><span>Verified</span></div>
              <dl>{data.summary.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}<div><dt>Data status</dt><dd>Pre-release</dd></div></dl>
              <blockquote>Numerical fields intentionally remain TBA until they can be verified in a public or permitted build.</blockquote>
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
