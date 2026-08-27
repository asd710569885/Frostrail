import Image from "next/image";
import Link from "next/link";
import { playerFacingCopy } from "@/lib/content-copy";
import { PageJsonLd } from "@/seo/PageJsonLd";
import styles from "@/style/page/wiki/weapons-index.module.css";
import type { ArticleData, ArticleRecord } from "@/types/content";

const categoryCards = [
  ["Rifles", "2 named weapons", "Precision, modular parts, and early-game firearms", "/images/weapons/weapon-assembly-station.jpg"],
  ["Shotguns", "Weapon family", "Close-range firearms; individual models are not published", "/images/official/steam-current/screenshot-04.jpg"],
  ["Pistols", "Weapon family", "WWI-influenced sidearms; names and stats are not published", "/images/official/steam-current/screenshot-07.jpg"],
] as const;

const weaponCards = [
  ["Pipe Rifle", "Named firearm", "Rifle", "Not published", "/wiki/weapons/pipe-rifle", "/images/enemies/graveyard-revenants.jpg"],
  ["Bolt-Action Rifle", "Screenshot stat set", "Rifle", "27.0 damage / 5 clip", "/wiki/weapons/bolt-action-rifle", "/images/weapons/weapon-assembly-station.jpg"],
  ["Pistols", "Weapon family", "Firearm", "Not published", "/wiki/weapons#how-weapons-work", "/images/official/steam-current/screenshot-07.jpg"],
  ["Shotguns", "Weapon family", "Firearm", "Not published", "/wiki/weapons#how-weapons-work", "/images/official/steam-current/screenshot-04.jpg"],
  ["Machine Guns", "Weapon family", "Firearm", "Not published", "/wiki/weapons#how-weapons-work", "/images/train/defense-encounter.jpg"],
  ["Basic Melee", "Weapon family", "Melee", "Not published", "/wiki/weapons#how-weapons-work", "/images/official/steam-current/screenshot-03.jpg"],
] as const;

const relatedSections = [
  ["Items", "Equipment, ammunition, supplies", "/wiki/items", "/images/train/onboard-workstation.jpg"],
  ["Resources", "Metal, cloth, plastic, and fuel", "/wiki/resources", "/images/official/steam-current/screenshot-05.jpg"],
  ["Crafting", "Stations, repair, and modular parts", "/wiki/crafting", "/images/wiki/weapons-crafting.jpg"],
  ["Train Defense", "Protect the Eden Engine", "/train/defense", "/images/train/defense-encounter.jpg"],
  ["Enemies", "Threats on and beyond the rails", "/enemies", "/images/enemies/revenant-close-combat.jpg"],
] as const;

function getRecord(data: ArticleData, title: string): ArticleRecord | undefined {
  return data.records?.find((record) => record.title === title);
}

export function WeaponsIndexPage({ data, canonical }: { data: ArticleData; canonical: string }) {
  const namedRecords = [getRecord(data, "Pipe Rifle"), getRecord(data, "Bolt-Action Rifle")].filter(Boolean) as ArticleRecord[];

  return (
      <main id="main-content" className={styles.main}>
        <PageJsonLd title={data.seo?.title ?? data.title} description={data.seo?.description ?? data.lede} path={canonical} pageType="Article" />
        <section className={styles.hero} aria-labelledby="weapon-page-title">
          <Image className={styles.heroImage} src={data.image ?? "/images/weapons/weapon-assembly-station.jpg"} alt={data.imageAlt ?? "Frostrail weapons"} fill priority sizes="100vw" />
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.breadcrumb}><Link href="/">Home</Link><span>/</span><Link href="/wiki">Wiki</Link><span>/</span>Weapons</p>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{playerFacingCopy(data.eyebrow)}</p>
              <h1 id="weapon-page-title">Frostrail Weapons <span>Guns, Stats &amp; Crafting</span></h1>
              <p>{playerFacingCopy(data.lede)}</p>
            </div>
          </div>
          <div className={`container ${styles.statRail}`}>
            <div><span aria-hidden="true">⚔</span><strong>2</strong><p>Named weapons<small>Publicly identified</small></p></div>
            <div><span aria-hidden="true">▥</span><strong>5</strong><p>Weapon families<small>Ranged and melee</small></p></div>
            <div><span aria-hidden="true">⚙</span><strong>Yes</strong><p>Modular crafting<small>Parts and stations</small></p></div>
            <div><span aria-hidden="true">◎</span><strong>1 Set</strong><p>Combat data<small>Pre-release screenshot values</small></p></div>
          </div>
        </section>

        <div className={`container ${styles.databaseLayout}`} id="weapon-database">
          <aside className={styles.filters} aria-label="Weapon filters">
            <h2>Filter Weapons</h2>
            <label className={styles.searchLabel}>Search
              <span><input type="search" placeholder="Search weapons..." /><b aria-hidden="true">⌕</b></span>
            </label>
            <fieldset>
              <legend>Weapon Type</legend>
              {[["All types", true], ["Rifles", false], ["Shotguns", false], ["Pistols", false], ["Machine guns", false], ["Melee", false]].map(([label, checked]) => (
                <label key={String(label)}><input type="checkbox" defaultChecked={Boolean(checked)} /> <span>{label}</span></label>
              ))}
            </fieldset>
            <fieldset>
              <legend>Entry Type</legend>
              <label><input type="checkbox" defaultChecked /> <span>All entries</span></label>
              <label><input type="checkbox" /> <span>Named weapons</span></label>
              <label><input type="checkbox" /> <span>Weapon families</span></label>
            </fieldset>
            <fieldset>
              <legend>Stat Availability</legend>
              <label><input type="checkbox" defaultChecked /> <span>Shown values</span></label>
              <label><input type="checkbox" /> <span>Not published</span></label>
            </fieldset>
            <label className={styles.rangeLabel}>Available stat detail
              <span><b>Not shown</b><b>Beta / EA</b></span>
              <input type="range" min="0" max="100" defaultValue="0" />
            </label>
            <label className={styles.sortLabel}>Sort By
              <select defaultValue="status"><option value="status">Entry type</option><option value="name">Name A–Z</option><option value="type">Weapon family</option></select>
            </label>
            <button type="reset">↻ Reset filters</button>
          </aside>

          <div className={styles.results}>
            <section aria-labelledby="weapon-categories">
              <div className={styles.sectionHeading}><h2 id="weapon-categories">Weapon Categories</h2><a href="#all-weapons">View all types <span>›</span></a></div>
              <div className={styles.categoryGrid}>
                {categoryCards.map(([title, count, description, image]) => (
                  <article className={styles.categoryCard} key={title}>
                    <div><Image src={image} alt="" fill sizes="(max-width: 900px) 100vw, 30vw" /></div>
                    <h3>{title}</h3><p>{description}</p><strong>{count} <span>›</span></strong>
                  </article>
                ))}
              </div>
            </section>

            <section id="all-weapons" aria-labelledby="all-weapons-title">
              <div className={styles.sectionHeading}><h2 id="all-weapons-title">Known Weapons &amp; Types</h2><span>Showing 6 entries</span></div>
              <div className={styles.weaponGrid}>
                {weaponCards.map(([title, status, type, stats, href, image], index) => (
                  <article className={styles.weaponCard} key={title}>
                    <div className={styles.weaponImage}>
                      <Image src={image} alt="" fill sizes="(max-width: 767px) 50vw, 16vw" />
                      <span className={index < 2 ? styles.named : styles.confirmed}>{index < 2 ? "Named" : "Type"}</span>
                    </div>
                    <div className={styles.weaponBody}>
                      <h3>{title}</h3><p>{type}</p>
                      <dl><div><dt>Status</dt><dd>{status}</dd></div><div><dt>Stats</dt><dd>{stats}</dd></div></dl>
                      <Link href={href}>View details <span>›</span></Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.comparison} aria-labelledby="comparison-title">
              <h2 id="comparison-title">Named Weapon Comparison <span>(current pre-release details)</span></h2>
              <div className={styles.tableWrap}><table><thead><tr><th>Weapon</th><th>Type</th><th>Progression</th><th>Crafting / mods</th><th>Numeric stats</th></tr></thead>
                <tbody>{namedRecords.map((record) => <tr key={record.title}><th>{record.title}</th><td>Rifle</td><td>{record.title === "Pipe Rifle" ? "Early game" : "Later than Pipe Rifle"}</td><td>{record.title === "Bolt-Action Rifle" ? "Recipe + stock options shown" : "Craftable — planned"}</td><td>{record.title === "Bolt-Action Rifle" ? "27.0 projectile damage / 5 clip / 200 durability" : "Not published"}</td></tr>)}</tbody>
              </table></div>
            </section>

            <section className={styles.research} aria-labelledby="weapon-research-title">
              <div className={styles.sectionHeading}><h2 id="weapon-research-title">How Frostrail Weapons Work</h2><span>{data.date.replace(/^Verified /, "Updated ")}</span></div>
              <div className={styles.researchGrid}>
                {data.sections.map((item) => (
                  <article id={item.id} key={item.id}>
                    <h3>{playerFacingCopy(item.title)}</h3>
                    {item.paragraphs.map((paragraph) => <p key={paragraph}>{playerFacingCopy(paragraph)}</p>)}
                    {item.bullets && <ul>{item.bullets.map((bullet) => <li key={bullet}>{playerFacingCopy(bullet)}</li>)}</ul>}
                    {item.facts && <dl>{item.facts.map(([term, value]) => <div key={term}><dt>{playerFacingCopy(term)}</dt><dd>{playerFacingCopy(value)}</dd></div>)}</dl>}
                  </article>
                ))}
              </div>
              <div className={styles.sourceLinks}>
                {data.sources.map((source) => <a href={source.href} target="_blank" rel="noreferrer" key={source.href}><span>{source.tier ?? "Source"}</span>{source.label}<b>↗</b></a>)}
              </div>
            </section>

            <div className={styles.notice}><strong>Before comparing weapons</strong><p>The Bolt-Action Rifle values belong to a pre-release screen. Damage, ammunition, rarity, recipes, and drop rates that have not been shown are left unpublished instead of being copied from mockups or unrelated guns.</p></div>
          </div>
        </div>

        <section className={`container ${styles.related}`} aria-labelledby="related-wiki">
          <div className={styles.sectionHeading}><h2 id="related-wiki">Related Wiki Sections</h2><Link href="/wiki">View all sections <span>›</span></Link></div>
          <div>{relatedSections.map(([title, description, href, image]) => <Link href={href} key={title}><span className={styles.relatedImage}><Image src={image} alt="" fill sizes="20vw" /></span><span><strong>{title}</strong><small>{description}</small></span></Link>)}</div>
        </section>
      </main>
  );
}
