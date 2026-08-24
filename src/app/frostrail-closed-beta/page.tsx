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
  sources: [{
    label: "Official Closed Beta registration announcement",
    href: "https://store.steampowered.com/news/app/3517740/view/671748851902711378?l=english",
    tier: "Official",
  }],
};

export default function ClosedBetaPage() {
  return <ArticlePage data={data} />;
}
