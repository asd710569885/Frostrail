import Image from "next/image";
import Link from "next/link";
import { AppFooter } from "@/components/layout/AppFooter";
import { AppHeader } from "@/components/layout/AppHeader";
import styles from "@/style/page/home/home.module.css";

const facts = [
  ["1–4", "Players", "Solo & online co-op"],
  ["400K", "Wishlists", "Official April milestone"],
  ["AUG 31", "Closed Beta", "First beta begins"],
  ["Q4 2026", "Early Access", "Official Steam window"],
] as const;

const updates = [
  {
    tag: "Beta",
    title: "Closed Beta Begins August 31",
    text: "Registration is open, and previous test registrations remain valid.",
    date: "Jul 20, 2026",
    href: "/frostrail-closed-beta",
    image: "/images/official/news/closed-beta-august-31.jpg",
  },
  {
    tag: "Dev Update",
    title: "Spring Development Update",
    text: "New tutorial, persistent progression, multiple exits, Relics, and train defense.",
    date: "May 13, 2026",
    href: "/updates#spring-development-update",
    image: "/images/official/news/spring-update-03.webp",
  },
  {
    tag: "Milestone",
    title: "400,000 Steam Wishlists",
    text: "The official milestone is a wishlist count—not sales or active players.",
    date: "Apr 28, 2026",
    href: "/updates#400k-wishlists",
    image: "/images/official/news/wishlist-400k.webp",
  },
] as const;

const guideStarts = [
  ["▣", "Beginner Guide", "Get started on your journey", "/guides/beginner-guide"],
  ["♨", "Survival Guide", "Stay alive in the frozen world", "/guides#survival"],
  ["▰", "Train Guide", "Understand your mobile base", "/train"],
  ["⚒", "Crafting Guide", "Prepare tools and essentials", "/guides#crafting"],
  ["◎", "Combat Guide", "Weapons, tactics, and threats", "/guides#combat"],
  ["◆", "Co-op Guide", "Plan a crew of up to four", "/guides#co-op"],
] as const;

const wikiCards = [
  ["Weapons", "2 named guns and 5 confirmed families", "/wiki/weapons", "/images/weapons/weapon-assembly-station.jpg"],
  ["Items", "Equipment, ammo, repair, and supplies", "/wiki/items", "/images/items/fuel-and-train.jpg"],
  ["Resources", "Metal, cloth, plastic, logs, and fuel", "/wiki/resources", "/images/train/logs-and-locomotive.jpg"],
  ["Relics", "Dungeon finds with temporary buffs", "/wiki/relics", "/images/wiki/relic-activation.jpg"],
  ["Clothing", "Warmth and cold-mitigation equipment", "/wiki/clothing", "/images/guides/frozen-expedition.jpg"],
  ["Stations", "Crafting, refining, repair, and cooking", "/wiki/stations", "/images/train/onboard-workstation.jpg"],
] as const;

const trainSystems = [
  ["Eden Engine", "Heat, movement, power, and survival", "/train/eden-engine"],
  ["Upgrades", "Walls, hatches, doors, and facilities", "/train/upgrades"],
  ["Fuel", "Branches, logs, and charcoal", "/train/fuel"],
  ["Carriages", "Expand your moving base", "/train/carriages"],
  ["Train Defense", "Revenant attacks and mounted weapons", "/train/defense"],
  ["Power", "Supply onboard systems", "/train/power"],
] as const;

const locations = [
  ["Tundra", "Frozen terrain beyond the rails", "/locations#tundra", "/images/locations/frozen-rail-route.jpg"],
  ["Strongholds", "Ruined fortified locations", "/locations#strongholds", "/images/locations/frozen-stronghold.jpg"],
  ["Dungeons", "Dangerous underground expeditions", "/locations#dungeons", "/images/locations/underground-dungeon.jpg"],
  ["Ruins", "Remnants of the frozen empire", "/locations#strongholds", "/images/locations/overgrown-ruins.jpg"],
  ["Level Routes", "Multiple exits and branching travel", "/locations#level-routes", "/images/train/carriages-in-tundra.jpg"],
] as const;

const enemies = [
  ["Revenants", "Zombified melee enemies in larger groups", "/enemies#revenants", "/images/enemies/revenant-close-combat.jpg"],
  ["Wolves", "Confirmed hostile creature", "/enemies#wolves", "/images/guides/frozen-expedition.jpg"],
  ["Corrupted Soldiers", "Planned ranged faction with smarter AI", "/enemies#corrupted-soldiers", "/images/enemies/ruins-encounter.jpg"],
  ["Eldritch Horrors", "Threats beyond Revenants", "/enemies#eldritch-horrors", "/images/train/defense-encounter.jpg"],
] as const;

const popularGuides = [
  ["Weapons", "Confirmed Weapons & Gun Types", "Pipe Rifle, Bolt-Action Rifle, modular guns.", "/wiki/weapons", "/images/weapons/weapon-assembly-station.jpg"],
  ["Train", "Understanding the Eden Engine", "Fuel, heat, power, failure, and progression.", "/train/eden-engine", "/images/train/eden-engine-cab.jpg"],
  ["Co-op", "Frostrail Multiplayer", "Verified player count and unknown network features.", "/frostrail-multiplayer", "/images/guides/coop-train-defense.jpg"],
  ["PC", "Official System Requirements", "What is confirmed—and what remains TBA.", "/frostrail-system-requirements", "/images/locations/frozen-rail-route.jpg"],
  ["Release", "Frostrail Release Date", "Q4 2026 window, price, and Early Access plan.", "/frostrail-release-date", "/images/home/frostrail-official-hero.jpg"],
] as const;

function SectionTitle({ id, title, href, link }: { id: string; title: string; href: string; link: string }) {
  return (
    <div className={styles.sectionTitle}>
      <h2 id={id}>{title}</h2>
      <Link href={href}>{link} <span aria-hidden="true">›</span></Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <AppHeader />
      <main id="main-content">
        <section className={styles.hero} aria-labelledby="hero-title">
          <Image
            className={styles.heroImage}
            src="/images/home/frostrail-official-hero.jpg"
            alt="Official Frostrail key art showing Penitent Gardeners beside the armored train"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
          />
          <div className={`container ${styles.heroContent}`}>
            <div className={styles.heroCopy}>
              <h1 id="hero-title">FROSTRAIL WIKI</h1>
              <p>Weapons, train upgrades, relics, crafting,<br className={styles.desktopBreak} /> enemies, locations, and survival guides.</p>
              <div className={styles.heroActions}>
                <Link className={styles.goldButton} href="/wiki">Explore Wiki <span>›</span></Link>
                <Link className={styles.darkButton} href="/guides/beginner-guide">Start Here <span>›</span></Link>
              </div>
            </div>
          </div>
          <div className={`container ${styles.factRail}`}>
            {facts.map(([value, title, description], index) => (
              <div className={styles.fact} key={title}>
                <span className={styles.factGlyph} aria-hidden="true">{index === 0 ? "◔" : index === 1 ? "♙" : index === 2 ? "❄" : "✦"}</span>
                <div><strong>{value} <em>{title}</em></strong><small>{description}</small></div>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.content}>
          <section className={`container ${styles.section}`} aria-labelledby="latest-updates">
            <SectionTitle id="latest-updates" title="Latest Updates" href="/updates" link="View all updates" />
            <div className={styles.updatesGrid}>
              {updates.map((item) => (
                <article className={styles.updateCard} key={item.title}>
                  <div className={styles.updateMedia}>
                    <Image src={item.image} alt="" fill sizes="(max-width: 767px) 100vw, 33vw" />
                  </div>
                  <div className={styles.updateBody}>
                    <span>{item.tag}</span>
                    <h3><Link href={item.href}>{item.title}</Link></h3>
                    <p>{item.text}</p>
                    <time>{item.date}</time>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={`container ${styles.section}`} aria-labelledby="start-here">
            <SectionTitle id="start-here" title="Start Here" href="/guides" link="View all guides" />
            <div className={styles.startGrid}>
              {guideStarts.map(([icon, title, description, href]) => (
                <Link className={styles.startCard} href={href} key={title}>
                  <span aria-hidden="true">{icon}</span><strong>{title}</strong><small>{description}</small>
                </Link>
              ))}
            </div>
          </section>

          <section className={`container ${styles.section}`} aria-labelledby="explore-wiki">
            <SectionTitle id="explore-wiki" title="Explore the Wiki" href="/wiki" link="Browse all" />
            <div className={styles.wikiGrid}>
              {wikiCards.map(([title, description, href, image]) => (
                <Link className={styles.wikiCard} href={href} key={title}>
                  <Image className={styles.cardImage} src={image} alt="" fill sizes="(max-width: 767px) 50vw, 17vw" />
                  <span className={styles.wikiCaption}><strong>{title}</strong><small>{description}</small></span>
                </Link>
              ))}
            </div>
          </section>

          <section className={`container ${styles.trainPanel}`} aria-labelledby="master-your-train">
            <div className={styles.trainCopy}>
              <h2 id="master-your-train">Master Your Train</h2>
              <p>Your train is your lifeline. Upgrade, defend, and organize your moving base to survive the endless cold.</p>
              <Link className={styles.goldButton} href="/train">View Train Wiki <span>›</span></Link>
            </div>
            <div className={styles.trainGrid}>
              {trainSystems.map(([title, description, href], index) => (
                <Link href={href} key={title}>
                  <span aria-hidden="true">0{index + 1}</span>
                  <strong>{title}</strong><small>{description}</small>
                </Link>
              ))}
            </div>
          </section>

          <div className={`container ${styles.splitRow}`}>
            <section className={styles.section} aria-labelledby="frozen-world">
              <SectionTitle id="frozen-world" title="Frozen World" href="/locations" link="Explore all locations" />
              <div className={styles.locationGrid}>
                {locations.map(([title, description, href, image]) => (
                  <Link className={styles.portraitCard} href={href} key={title}>
                    <Image className={styles.cardImage} src={image} alt="" fill sizes="(max-width: 767px) 50vw, 12vw" />
                    <span><strong>{title}</strong><small>{description}</small></span>
                  </Link>
                ))}
              </div>
            </section>
            <section className={styles.section} aria-labelledby="know-your-enemies">
              <SectionTitle id="know-your-enemies" title="Know Your Enemies" href="/enemies" link="View all enemies" />
              <div className={styles.enemyGrid}>
                {enemies.map(([title, description, href, image]) => (
                  <Link className={styles.portraitCard} href={href} key={title}>
                    <Image className={styles.cardImage} src={image} alt="" fill sizes="(max-width: 767px) 50vw, 12vw" />
                    <span><strong>{title}</strong><small>{description}</small></span>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <section className={`container ${styles.section}`} aria-labelledby="popular-guides">
            <SectionTitle id="popular-guides" title="Popular Guides" href="/guides" link="Browse all articles" />
            <div className={styles.guidesGrid}>
              {popularGuides.map(([tag, title, description, href, image]) => (
                <article className={styles.guideCard} key={title}>
                  <div className={styles.guideImage}><Image src={image} alt="" fill sizes="(max-width: 767px) 100vw, 20vw" /></div>
                  <div><span>{tag}</span><h3><Link href={href}>{title}</Link></h3><p>{description}</p></div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
      <AppFooter />
    </>
  );
}
