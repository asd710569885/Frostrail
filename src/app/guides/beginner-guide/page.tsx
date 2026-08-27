import { ArticlePage } from "@/components/content/ArticlePage";
import { articleMetadata } from "@/seo/article-metadata";

const data = {
  parent: { label: "Guides", href: "/guides" },
  eyebrow: "Start here",
  title: "Frostrail Beginner Guide",
  lede: "Learn the rhythm of a Frostrail run: prepare aboard the Eden Engine, leave with a clear objective, watch warmth and ammunition, then return with enough supplies to keep the crew moving north.",
  image: "/images/guides/frozen-expedition.jpg",
  imageAlt: "Frostrail crew exploring a frozen level together",
  date: "Updated August 26, 2026",
  status: "Pre-beta edition",
  summary: [
    ["Players", "1–4"],
    ["Format", "Survival / crafting FPS"],
    ["Release", "Early Access planned Q4 2026"],
    ["Guide status", "Pre-release basics"],
  ] as const,
  sections: [
    {
      id: "understand-the-loop",
      title: "Understand the journey",
      paragraphs: [
        "Frostrail is built around a train that acts as the crew’s mobile base while the frozen world supplies danger, resources, and places to explore. Think in cycles: prepare aboard the train, leave with a purpose, return with what the crew needs, and improve the base before the next expedition.",
        "The world is a sequence of levels heading north. At the end of a level, the crew uses a tunnel to pick the next route; farther north, the world gets colder and harder. Founder Aku Jauhiainen said a thorough visit to every point of interest can take two hours or more—that is a development-time estimate, not a published mission timer.",
      ],
      bullets: ["Treat the train as the center of planning", "Stop at points of interest to scavenge, then return", "Bring recovered resources back into the next preparation cycle"],
      image: "/images/official/steam-current/screenshot-11.jpg",
      imageAlt: "Frostrail locomotive pulling carriages through the tundra",
      caption: "Official screenshot of the moving-base journey that structures every run.",
    },
    {
      id: "prepare",
      title: "Prepare before departure",
      paragraphs: [
        "A preparation routine matters more than an early tier list. Check the objective, available supplies, crew plan, and the point where the group will turn back. Those habits remain useful even when individual item values change.",
        "Warmth falls while you are outside. Once it reaches zero, health starts to drain. Warmer clothing and certain foods can extend an expedition, but the train remains the crew’s reliable heat source.",
      ],
      bullets: ["Agree on the objective and stopping condition", "Watch warmth as well as ammunition", "Leave room for useful finds", "Know how the group will regroup if separated"],
      image: "/images/official/steam-current/screenshot-03.jpg",
      imageAlt: "Eden Engine cab showing heat, speed, and consumption gauges",
      caption: "Official cab screenshot: heat and train operation stay part of the preparation loop.",
    },
    {
      id: "expeditions",
      title: "What to do at a stop",
      paragraphs: [
        "Points of interest hold abandoned buildings, junk, and objects that can be broken down for better materials with a crowbar. Old mining camps and villages offer food and supplies, while underground vaults promise greater danger and stronger rewards.",
        "Wildlife can provide food, but wolves are also hostile. Exact drops and spawn patterns have not been published, so treat every stop as a risk rather than a guaranteed shopping list.",
      ],
      bullets: ["Scavenge settlements, wreckage, camps, and dungeons", "Use a crowbar on salvageable objects", "Do not linger: cold and Revenants both punish delay", "Engine noise is described as drawing Revenants—keep the train in the plan"],
      image: "/images/official/steam-current/screenshot-07.jpg",
      imageAlt: "Player exploring an underground dungeon with a torch",
      caption: "Official screenshot of dungeon exploration and the objective “The Trial Below.”",
    },
    {
      id: "co-op",
      title: "Coordinate the crew",
      paragraphs: [
        "Frostrail supports solo play and online co-op for up to four. A crew can divide scavenging and train-defense work without locking anyone into a fixed class. Use flexible responsibilities that change with the situation: navigation, observation, carrying priorities, and train tasks.",
      ],
      bullets: ["Call out important finds before taking them", "Keep the return route understandable to everyone", "Reassign tasks when conditions change"],
      image: "/images/official/steam-current/screenshot-02.jpg",
      imageAlt: "Two players defending an open train carriage",
      caption: "Official screenshot of co-op train defense, a confirmed crew responsibility.",
    },
    {
      id: "verify",
      title: "Check the build before following a stat",
      paragraphs: [
        "The Closed Beta begins August 31, 2026, ahead of the planned Q4 2026 Early Access launch. Balance can move quickly between these builds, so check the page date before spending resources or planning around an exact number.",
      ],
      bullets: ["Check the latest announcement for dates and test scope", "Use repeatable in-game behavior when comparing mechanics", "Ignore values shown only in mockups"],
      image: "/images/official/news/closed-beta-august-31.jpg",
      imageAlt: "Official Closed Beta announcement artwork",
      caption: "The Closed Beta beginning August 31, 2026 is the next dated public test.",
    },
  ] as const,
  gallery: [
    { src: "/images/guides/frozen-expedition.jpg", alt: "Frostrail crew exploring a frozen level together", caption: "Treat expeditions as timed loops back to the Eden Engine, not open-ended wandering." },
    { src: "/images/official/steam-current/screenshot-06.jpg", alt: "Three crew members running toward a frozen chapel", caption: "Official screenshot of a shared expedition outside the train." },
    { src: "/images/train/eden-engine-cab.jpg", alt: "Inside the Eden Engine locomotive cab", caption: "The train remains the crew’s heat source, workshop, and fail state." },
  ],
  sources: [
    { label: "Official Frostrail page on Steam", href: "https://store.steampowered.com/app/3517740/Frostrail/", tier: "Official" },
    { label: "IndieGames interview with FakeFish founder", href: "https://www.indie-games.eu/frostrail-in-depth-overview-with-fakefish-founder/", tier: "Developer interview" },
    { label: "Official Closed Beta press kit", href: "https://www.gamespress.com/Frostrails-Closed-Beta-Arrives-August-31", tier: "Official press" },
    { label: "Official FAQ", href: "https://store.steampowered.com/news/app/3517740/view/520837698904129747", tier: "Official" },
  ],
  related: [
    { label: "Official FAQ", href: "/frostrail-faq" },
    { label: "Train systems", href: "/train" },
    { label: "World & lore", href: "/wiki/lore" },
    { label: "Closed Beta", href: "/frostrail-closed-beta" },
  ],
  seo: {
    title: "Frostrail Beginner Guide - First Run, Train & Co-op",
    description: "Prepare for your first Frostrail run with practical tips on warmth, the Eden Engine, scavenging, weapons, crafting, expeditions, and four-player co-op roles.",
  },
};

export const metadata = articleMetadata(data, "/guides/beginner-guide");

export default function BeginnerGuidePage() {
  return <ArticlePage data={data} canonical="/guides/beginner-guide" />;
}
