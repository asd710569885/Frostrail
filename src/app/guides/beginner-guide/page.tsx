import type { Metadata } from "next";
import { ArticlePage } from "@/components/content/ArticlePage";

export const metadata: Metadata = {
  title: "Beginner Guide",
  description: "Start preparing for Frostrail with a source-aware beginner guide to the train, expeditions, resources, and co-op survival.",
};

const data = {
  parent: { label: "Guides", href: "/guides" },
  eyebrow: "Start here",
  title: "Frostrail Beginner Guide",
  lede: "A practical orientation to Frostrail’s confirmed pillars—your train, expeditions, survival, crafting, and co-op—without pretending the unreleased game is already fully mapped.",
  image: "/images/guides/frozen-expedition.jpg",
  imageAlt: "Frostrail crew exploring a frozen level together",
  date: "Updated August 26, 2026",
  status: "Pre-beta edition",
  summary: [
    ["Players", "1–4"],
    ["Format", "Survival / crafting FPS"],
    ["Release", "Early Access planned Q4 2026"],
    ["Data policy", "Verified facts only"],
  ] as const,
  sections: [
    {
      id: "understand-the-loop",
      title: "Understand the journey",
      paragraphs: [
        "Frostrail is built around a train that acts as the crew’s mobile base while the surrounding frozen world supplies danger, resources, and places to explore. Official gameplay-trailer press copy describes the loop as scavenging, brutal combat, and upgrading the train. The safest mental model is a cycle: prepare aboard the train, leave with a clear purpose, return with what the crew needs, and improve the base before the next expedition.",
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
        "A preparation routine is more useful than an early tier list. Check the expedition objective, available supplies, crew plan, and a realistic point at which the group should turn back. This remains sound guidance even as individual item values change.",
        "You have a warmth bar that depletes outdoors. If it hits zero, health loss begins. Warmer clothing and certain foods mitigate cold; the train remains the reliable heat source. Do not invent insulation values from screenshots of coats.",
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
        "Points of interest hold abandoned places, junk, and salvageable objects. A crowbar is used on salvageable objects to recover better materials. The Closed Beta press kit also names old mining camps and villages as forage stops for food and materials, and subterranean vaults as interiors that hide powerful weapons and rewards—location types, not a loot table.",
        "April playtest coverage based on the official test brief reported that wildlife can be hunted for food. Steam’s mature-content note independently confirms hostile creatures including wolves. Exact drops remain TBA.",
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
        "Official store information confirms solo play and online co-op for up to four players. The founder interview says co-op is designed so crews can divide scavenging and train-defense tasks. The wiki does not assign invented character classes. Use lightweight responsibilities that can change with the situation: navigation, observation, carrying priorities, and train tasks.",
      ],
      bullets: ["Call out important finds before taking them", "Keep the return route understandable to everyone", "Reassign tasks when conditions change"],
      image: "/images/official/steam-current/screenshot-02.jpg",
      imageAlt: "Two players defending an open train carriage",
      caption: "Official screenshot of co-op train defense, a confirmed crew responsibility.",
    },
    {
      id: "verify",
      title: "Use changing information carefully",
      paragraphs: [
        "The first closed beta begins August 31, 2026, and development continues toward an Early Access window in Q4 2026. Lead designer Ez Jämsen described the project as entering its final development stages in the July press kit. Any strategy written around a beta build can become outdated. Check dates and build context before treating a number as current.",
      ],
      bullets: ["Prefer official announcements for dates and scope", "Prefer repeatable in-game tests for mechanics", "Treat mockup content and speculation as unverified"],
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
};

export default function BeginnerGuidePage() {
  return <ArticlePage data={data} />;
}
