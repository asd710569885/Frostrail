import Image from "next/image";
import Link from "next/link";
import { HomeIcon, type HomeIconName } from "@/components/icon/HomeIcon";
import { PageJsonLd } from "@/seo/PageJsonLd";
import { getTdk } from "@/seo/tdk";
import styles from "@/style/page/home/home.module.css";

const facts = [
  ["gauge", "1–4", "Players", "Solo & online co-op"],
  ["relic", "~500K", "Wishlists", "July 2026 press kit"],
  ["crew", "AUG 31", "Closed Beta", "Official scheduled date"],
  ["snowflake", "Q4 2026", "Early Access", "Official Steam window"],
] as const satisfies ReadonlyArray<readonly [HomeIconName, string, string, string]>;

const updates = [
  {
    tag: "Beta",
    title: "Closed Beta: August 31 Access Status",
    text: "Steam still shows Request Access; prior registrations remain valid, but access is invite-based.",
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
    title: "Almost 500,000 Steam Wishlists",
    text: "Lead designer Ez Jämsen cited almost 500,000 wishlists in the Closed Beta press kit—not sales or active players.",
    date: "Jul 22, 2026",
    href: "/updates#500k-wishlists",
    image: "/images/official/news/closed-beta-august-31.jpg",
  },
] as const;

const guideStarts = [
  ["book", "Beginner Guide", "Get started on your journey", "/guides/beginner-guide", "/images/guides/frozen-expedition.jpg"],
  ["campfire", "Survival Guide", "Stay alive in the frozen world", "/guides#survival", "/images/guides/frozen-expedition.jpg"],
  ["train", "Train Guide", "Understand your mobile base", "/train", "/images/train/eden-engine-cab.jpg"],
  ["tools", "Crafting Guide", "Prepare tools and essentials", "/guides#crafting", "/images/wiki/weapons-crafting.jpg"],
  ["target", "Combat Guide", "Weapons, tactics, and threats", "/guides#combat", "/images/enemies/revenant-close-combat.jpg"],
  ["crew", "Co-op Guide", "Plan a crew of up to four", "/guides#co-op", "/images/guides/coop-train-defense.jpg"],
] as const satisfies ReadonlyArray<readonly [HomeIconName, string, string, string, string]>;

const wikiCards = [
  ["weapons", "Weapons", "Named rifles, gun types, stats, and crafting", "/wiki/weapons", "/images/weapons/weapon-assembly-station.jpg"],
  ["items", "Items", "Hammer, wrench, torch, crowbar, and supplies", "/wiki/items", "/images/train/onboard-workstation.jpg"],
  ["resources", "Resources", "Fuel, metal, cloth, plastic, and refining", "/wiki/resources", "/images/official/steam-current/screenshot-05.jpg"],
  ["medallion", "Relics", "Dungeon finds with temporary buffs", "/wiki/relics", "/images/locations/underground-dungeon.jpg"],
  ["clothing", "World & lore", "Penitent Gardeners, the Void, and the north", "/wiki/lore", "/images/home/frostrail-official-hero.jpg"],
  ["station", "Stations", "Crafting, refining, repair, and cooking", "/wiki/stations", "/images/train/onboard-workstation.jpg"],
] as const satisfies ReadonlyArray<readonly [HomeIconName, string, string, string, string]>;

const trainSystems = [
  ["engine", "Eden Engine", "Heat, movement, power, and survival", "/train/eden-engine"],
  ["upgrade", "Upgrades", "Walls, hatches, doors, and facilities", "/train/upgrades"],
  ["fuel", "Fuel", "Branches, logs, charcoal for the Eden Engine", "/train/fuel"],
  ["carriage", "Carriages", "Expand your moving base", "/train/carriages"],
  ["defense", "Train Defense", "Revenant attacks and mounted weapons", "/train/defense"],
  ["engine", "Power", "Onboard systems, heat, and machinery", "/train/power"],
] as const satisfies ReadonlyArray<readonly [HomeIconName, string, string, string]>;

const locations = [
  ["Tundra", "Frozen terrain beyond the rails", "/locations#tundra", "/images/locations/frozen-rail-route.jpg"],
  ["Mining camps", "Forage stops named in the Closed Beta press kit", "/locations#mining-camps", "/images/locations/frozen-rail-route.jpg"],
  ["Strongholds", "Ruined fortified locations", "/locations#strongholds", "/images/locations/overgrown-ruins.jpg"],
  ["Dungeons", "Dangerous underground expeditions", "/locations#dungeons", "/images/locations/underground-dungeon.jpg"],
  ["Vaults", "Subterranean interiors with high-risk rewards", "/locations#vaults", "/images/locations/underground-dungeon.jpg"],
] as const;

const enemies = [
  ["Revenants", "Zombified melee enemies drawn by engine noise", "/enemies#revenants", "/images/enemies/revenant-close-combat.jpg"],
  ["Wolves", "Confirmed hostile creature", "/enemies#wolves", "/images/locations/frozen-rail-route.jpg"],
  ["Corrupted Soldiers", "Planned ranged faction with smarter AI", "/enemies#corrupted-soldiers", "/images/enemies/ruins-encounter.jpg"],
  ["Eldritch Horrors", "Threats beyond Revenants", "/enemies#eldritch-horrors", "/images/train/defense-encounter.jpg"],
] as const;

const popularGuides = [
  ["Weapons", "Frostrail Weapons & Gun Types", "Pipe Rifle, Bolt-Action Rifle, and modular guns.", "/wiki/weapons", "/images/weapons/weapon-assembly-station.jpg"],
  ["Lore", "World, Void & Penitent Gardeners", "The frozen empire and the journey north.", "/wiki/lore", "/images/home/frostrail-official-hero.jpg"],
  ["Train", "Understanding the Eden Engine", "Fuel, heat, power, failure, and progression.", "/train/eden-engine", "/images/train/eden-engine-cab.jpg"],
  ["FAQ", "Questions Players Are Asking", "Players, price, mods, platforms, and controllers.", "/frostrail-faq", "/images/official/store/steam-header.jpg"],
  ["Release", "Frostrail Release Date", "Q4 2026, price status, and beta timing.", "/frostrail-release-date", "/images/home/frostrail-official-hero.jpg"],
] as const;

const homeFaq = [
  {
    question: "When is Frostrail coming out?",
    answer: "Frostrail is scheduled to enter Steam Early Access in Q4 2026. An exact day and launch price have not been announced.",
    href: "/frostrail-release-date",
    link: "Release date details",
  },
  {
    question: "Is Frostrail multiplayer or can you play solo?",
    answer: "Both. Frostrail is designed for one player or an online co-op crew of up to four, with everyone sharing the work of exploring and keeping the Eden Engine alive.",
    href: "/frostrail-multiplayer",
    link: "How co-op works",
  },
  {
    question: "Is Frostrail coming to PS5 or Xbox?",
    answer: "No console version is announced. PC and Steam are the Early Access priority, while console ports may be evaluated for version 1.0 and beyond.",
    href: "/frostrail-console",
    link: "Platform status",
  },
  {
    question: "How do I join the Frostrail Closed Beta?",
      answer: "FakeFish scheduled the Closed Beta for August 31, 2026. Steam still shows Request Access, so registration is public but an invitation is not guaranteed.",
    href: "/frostrail-closed-beta",
    link: "Closed Beta guide",
  },
  {
    question: "What are the Frostrail PC requirements?",
    answer: "Steam currently requires a 64-bit processor and operating system. The CPU, GPU, RAM, storage, and recommended specification have not been published yet.",
    href: "/frostrail-system-requirements",
    link: "System requirements",
  },
  {
    question: "Is Frostrail free to play?",
    answer: "The price has not been announced, and the developers have not described Frostrail as free to play. The final Early Access price will be shared closer to launch.",
    href: "/frostrail-faq#price",
    link: "Price and FAQ",
  },
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
  const seo = getTdk("/");
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main id="main-content">
        <PageJsonLd title={seo.title} description={seo.description} path="/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replaceAll("<", "\\u003c") }}
        />
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
              <p className={styles.kicker}>Built for the journey north</p>
              <h1 id="hero-title">FROSTRAIL WIKI <span>Guides, Weapons &amp; Train Systems</span></h1>
              <p>Prepare for your first run, learn how the Eden Engine works,<br className={styles.desktopBreak} /> and find clear answers on combat, crafting, co-op, and Early Access.</p>
              <div className={styles.heroActions}>
                <Link className={styles.goldButton} href="/wiki">Explore Wiki <span>›</span></Link>
                <Link className={styles.darkButton} href="/guides/beginner-guide">Start Here <span>›</span></Link>
              </div>
            </div>
          </div>
          <div className={`container ${styles.factRail}`}>
            {facts.map(([icon, value, title, description]) => (
              <div className={styles.fact} key={title}>
                <span className={styles.factGlyph}><HomeIcon name={icon} /></span>
                <div><strong>{value} <em>{title}</em></strong><small>{description}</small></div>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.content}>
          <section className={`container ${styles.feature}`} aria-labelledby="featured-guide">
            <div className={styles.featureMedia}>
              <Image src="/images/guides/frozen-expedition.jpg" alt="Frostrail crew exploring a frozen level together" fill sizes="(max-width: 900px) 100vw, 52vw" />
            </div>
            <div className={styles.featureCopy}>
              <p>Featured guide</p>
              <h2 id="featured-guide">Frostrail Beginner Guide</h2>
              <p>Prepare aboard the Eden Engine, leave with a clear objective, and return before warmth and Revenants catch the crew. This is the practical start page for the closed beta and Early Access window.</p>
              <dl>
                <div><dt>Players</dt><dd>1–4</dd></div>
                <div><dt>Core loop</dt><dd>Train · scavenge · craft</dd></div>
                <div><dt>Next test</dt><dd>Closed Beta Aug 31</dd></div>
              </dl>
              <Link className={styles.goldButton} href="/guides/beginner-guide">Read the guide <span>›</span></Link>
            </div>
          </section>

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
              {guideStarts.map(([icon, title, description, href, image]) => (
                <Link className={styles.startCard} href={href} key={title}>
                  <span className={styles.startMedia}><Image src={image} alt="" fill sizes="180px" /></span>
                  <span className={styles.startIcon}><HomeIcon name={icon} /></span>
                  <strong>{title}</strong>
                  <small>{description}</small>
                </Link>
              ))}
            </div>
          </section>

          <section className={`container ${styles.section}`} aria-labelledby="explore-wiki">
            <SectionTitle id="explore-wiki" title="Explore the Wiki" href="/wiki" link="Browse all" />
            <div className={styles.wikiGrid}>
              {wikiCards.map(([icon, title, description, href, image]) => (
                <Link className={styles.wikiCard} href={href} key={title}>
                  <Image className={styles.cardImage} src={image} alt="" fill sizes="(max-width: 767px) 50vw, 17vw" />
                  <span className={styles.wikiCaption}><HomeIcon name={icon} /><span><strong>{title}</strong><small>{description}</small></span></span>
                </Link>
              ))}
            </div>
          </section>

          <section className={`container ${styles.trainPanel}`} aria-labelledby="master-your-train">
            <div className={styles.trainVisual}>
              <Image src="/images/train/eden-engine-cab.jpg" alt="" fill sizes="(max-width: 767px) 100vw, 48vw" />
              <div className={styles.trainCopy}>
                <h2 id="master-your-train">Master Your Train</h2>
                <p>Your train is your lifeline. Upgrade, defend, and organize your moving base to survive the endless cold.</p>
                <Link className={styles.goldButton} href="/train">View Train Wiki <span>›</span></Link>
              </div>
            </div>
            <div className={styles.trainGrid}>
              {trainSystems.map(([icon, title, description, href]) => (
                <Link href={href} key={title}>
                  <HomeIcon name={icon} />
                  <span><strong>{title}</strong><small>{description}</small></span>
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

          <section className={`container ${styles.aboutPanel}`} aria-labelledby="about-frostrail-home">
            <div className={styles.aboutMedia}>
              <Image src="/images/official/steam-current/screenshot-11.jpg" alt="The Eden Engine crossing Frostrail's frozen wasteland" fill sizes="(max-width: 767px) 100vw, 43vw" />
            </div>
            <div className={styles.aboutCopy}>
              <p>About the game</p>
              <h2 id="about-frostrail-home">What is Frostrail?</h2>
              <p>Frostrail is a survival-crafting FPS from FakeFish, the studio behind Barotrauma. You travel north through a frozen former empire aboard the Eden Engine—part locomotive, part shelter, and the one source of heat your crew cannot afford to lose.</p>
              <p>This wiki is organized around the decisions players actually face: when to leave the train, what to bring back, how to spend scarce ammunition, and how fuel, power, crafting, and defense keep a run moving. Pre-release details are dated so you can tell current information from systems that may still change.</p>
              <div className={styles.aboutLinks}>
                <Link href="/about-frostrail">About Frostrail <span>›</span></Link>
                <Link href="/train/eden-engine">Meet the Eden Engine <span>›</span></Link>
              </div>
            </div>
          </section>

          <section className={`container ${styles.section}`} aria-labelledby="frostrail-faq-home">
            <SectionTitle id="frostrail-faq-home" title="Frostrail FAQ" href="/frostrail-faq" link="Read the full FAQ" />
            <p className={styles.faqIntro}>Quick answers to the questions players ask before wishlisting, joining a test, or planning a crew.</p>
            <div className={styles.faqGrid}>
              {homeFaq.map((item) => (
                <article className={styles.faqCard} key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                  <Link href={item.href}>{item.link} <span aria-hidden="true">›</span></Link>
                </article>
              ))}
            </div>
          </section>
        </div>
    </main>
  );
}
