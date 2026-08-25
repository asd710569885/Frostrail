import type { Metadata } from "next";
import { ArticlePage } from "@/components/content/ArticlePage";

export const metadata: Metadata = {
  title: "Closed Beta Begins August 31, 2026",
  description: "Verified details about the Frostrail closed beta beginning August 31, 2026, including access, timing, and what participants should expect.",
};

const data = {
  parent: { label: "Updates", href: "/updates" },
  eyebrow: "Beta update",
  title: "Closed Beta Begins August 31",
  lede: "Frostrail’s first closed beta is scheduled for August 31, 2026. Here is the confirmed information, separated from assumptions about access or content.",
  image: "/images/official/news/closed-beta-august-31.jpg",
  imageAlt: "Official Frostrail closed beta announcement trailer image",
  date: "Published July 20, 2026",
  status: "Upcoming",
  summary: [
    ["Start", "August 31, 2026"],
    ["Access", "Registration / selection"],
    ["Players", "1–4"],
    ["Platform", "PC / Steam"],
  ] as const,
  sections: [
    {
      id: "confirmed",
      title: "What is confirmed",
      paragraphs: [
        "The development team announced that the first Frostrail closed beta will begin on August 31, 2026. Registration is open; people who already registered for the previous test do not need to register again.",
      ],
      bullets: ["Beta start: August 31, 2026", "Previous test registrations remain valid", "Registration does not guarantee selection", "The official Steam listing supports solo play and online co-op for up to four"],
    },
    {
      id: "not-confirmed",
      title: "What is not confirmed here",
      paragraphs: [
        "This article does not claim a precise test duration, server capacity, content list, or invitation schedule. Those details should only be added after the developers publish them directly.",
      ],
      bullets: ["No guaranteed invitation date", "No assumed carry-over of progress", "No final balance values", "No promise that beta content reaches Early Access unchanged"],
    },
    {
      id: "previous-playtest",
      title: "How this differs from the April playtest",
      paragraphs: [
        "The April 16–May 4 event was described as the first closed playtest and focused on the early gameplay loop. Its official content brief included the tutorial plus two exploration areas, train fueling and operation, scavenging, recycling, early equipment crafting, Revenant combat, and early-game dungeon raids. The August 31 event is announced as a Closed Beta; its exact content list has not been published in the July announcement.",
      ],
      facts: [["Earlier event", "Closed playtest"], ["Earlier dates", "April 16–May 4, 2026"], ["New event", "Closed Beta"], ["Closed Beta content list", "Not yet published"]],
    },
    {
      id: "prepare",
      title: "How to prepare",
      paragraphs: [
        "Use the official Steam page and announcement feed for registration and last-minute changes. Be cautious with third-party forms, access sales, or downloads that are not linked from an official Frostrail channel.",
      ],
      bullets: ["Wishlist or follow the official Steam page", "Verify registration links before sharing account information", "Expect unfinished systems and changes during testing"],
    },
    {
      id: "wiki-coverage",
      title: "Wiki coverage during the test",
      paragraphs: [
        "The wiki will attach build and date context to data gathered during the beta. Mutable statistics will not be treated as permanent, and entries will distinguish direct observation from developer statements.",
      ],
      bullets: ["Build-specific stats will be labeled", "Repeatable observations take priority", "Outdated details will be corrected as the game changes"],
    },
  ] as const,
  gallery: [
    { src: "/images/official/news/closed-beta-august-31.jpg", alt: "Official Frostrail Closed Beta announcement trailer image", caption: "Official announcement media for the Closed Beta beginning August 31, 2026." },
    { src: "/images/official/news/april-playtest-content.webp", alt: "Official Frostrail April playtest content graphic", caption: "The earlier closed playtest brief; this should not be treated as the August beta content list." },
    { src: "/images/official/news/spring-update-03.webp", alt: "Official Frostrail Spring Development Update rail landscape", caption: "Official development media released after the April test and before the August Closed Beta." },
  ] as const,
  sources: [
    { label: "Official Closed Beta registration announcement", href: "https://store.steampowered.com/news/app/3517740/view/671748851902711378?l=english", tier: "Official" },
    { label: "Official April playtest announcement archive", href: "https://steamcommunity.com/app/3517740/allnews/", tier: "Official" },
    { label: "Official Spring Development Update", href: "https://store.steampowered.com/news/app/3517740/view/664987745725186081?l=english", tier: "Official" },
  ] as const,
};

export default function ClosedBetaPage() {
  return <ArticlePage data={data} />;
}
