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
  date: "Updated August 24, 2026",
  status: "Pre-beta edition",
  summary: [
    ["Players", "1–4"],
    ["Format", "Survival / crafting"],
    ["Release", "Early Access planned Q4 2026"],
    ["Data policy", "Verified facts only"],
  ] as const,
  sections: [
    {
      id: "understand-the-loop",
      title: "Understand the journey",
      paragraphs: [
        "Frostrail is built around a train that acts as the crew’s mobile base while the surrounding frozen world supplies danger, resources, and places to explore. The safest mental model is a cycle: prepare aboard the train, leave with a clear purpose, return with what the crew needs, and improve the base before the next expedition.",
        "Exact costs, timers, capacities, and optimal routes are deliberately absent from this edition. Those values can change during testing and should only be published with a reproducible build reference.",
      ],
      bullets: ["Treat the train as the center of planning", "Choose a clear objective for each expedition", "Bring recovered resources back into the next preparation cycle"],
    },
    {
      id: "prepare",
      title: "Prepare before departure",
      paragraphs: [
        "A preparation routine is more useful than an early tier list. Check the expedition objective, available supplies, crew plan, and a realistic point at which the group should turn back. This remains sound guidance even as individual item values change.",
      ],
      bullets: ["Agree on the objective and stopping condition", "Leave room for useful finds", "Avoid consuming scarce supplies without crew awareness", "Know how the group will regroup if separated"],
    },
    {
      id: "co-op",
      title: "Coordinate the crew",
      paragraphs: [
        "Official store information confirms solo play and online co-op for up to four players. The wiki does not assign invented character classes. Instead, use lightweight responsibilities that can change with the situation: navigation, observation, carrying priorities, and train tasks.",
      ],
      bullets: ["Call out important finds before taking them", "Keep the return route understandable to everyone", "Reassign tasks when conditions change"],
    },
    {
      id: "verify",
      title: "Use changing information carefully",
      paragraphs: [
        "The first closed beta begins August 31, 2026, and development continues toward an Early Access window in Q4 2026. Any strategy written around a beta build can become outdated. Check dates and build context before treating a number as current.",
      ],
      bullets: ["Prefer official announcements for dates and scope", "Prefer repeatable in-game tests for mechanics", "Treat mockup content and speculation as unverified"],
    },
  ] as const,
  sources: [{
    label: "Official Frostrail page on Steam",
    href: "https://store.steampowered.com/app/3517740/Frostrail/",
    tier: "Official",
  }],
};

export default function BeginnerGuidePage() {
  return <ArticlePage data={data} />;
}
