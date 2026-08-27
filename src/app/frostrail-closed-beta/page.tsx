import { ArticlePage } from "@/components/content/ArticlePage";
import { articleMetadata } from "@/seo/article-metadata";

const data = {
  parent: { label: "Updates", href: "/updates" },
  eyebrow: "Beta update",
  title: "Closed Beta Begins August 31",
  lede: "Frostrail’s first Closed Beta begins August 31, 2026. Sign up through Steam, keep an eye on your account and email, and remember that registration does not guarantee access.",
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
      title: "Start date and registration",
      paragraphs: [
        "The first Frostrail Closed Beta begins August 31, 2026. Registration is open through Steam, and people who signed up for the previous test do not need to register again.",
        "In the accompanying press kit, lead designer Ez Jämsen said the community around Frostrail had been astounding, that the game had gained almost 500,000 Steam wishlists since reveal, and that the team was heading into the final stages of development.",
      ],
      bullets: ["Beta start: August 31, 2026", "Previous test registrations remain valid", "Wishlists cited: almost 500,000", "Registration does not guarantee selection", "The official Steam listing supports solo play and online co-op for up to four"],
      image: "/images/official/news/closed-beta-august-31.jpg",
      imageAlt: "Official Closed Beta announcement artwork",
      caption: "Official announcement for the Closed Beta beginning August 31, 2026.",
    },
    {
      id: "press-loop",
      title: "How the press kit describes the loop",
      paragraphs: [
        "The Closed Beta press copy describes traveling a blizzard-ravaged world aboard a locomotive, stopping at remnants of civilization, foraging old mining camps and villages for food and materials, and entering subterranean vaults for powerful weapons and rewards. Revenants concealed by swirling snow attack travelers who linger. After returning, scavenged materials are used to upgrade arsenals, build defenses, and improve the train.",
        "The July announcement did not provide a complete map or feature list for the August build, so these activities should not be read as a guarantee that every shown system will be available on day one.",
      ],
      bullets: ["Mining camps and villages offer food and materials", "Subterranean vaults are described as high-reward interiors", "Cold and Revenants punish crews that linger", "The complete Closed Beta map and feature list are not published"],
      image: "/images/locations/frozen-rail-route.jpg",
      imageAlt: "Abandoned wooden buildings along a frozen rail line",
      caption: "Press-kit loop: stop at remnants of civilization, forage, then return to upgrade the train.",
    },
    {
      id: "not-confirmed",
      title: "What remains unknown",
      paragraphs: [
        "This article does not claim a precise test duration, server capacity, content list, or invitation schedule. Those details should only be added after the developers publish them directly.",
      ],
      bullets: ["No guaranteed invitation date", "No assumed carry-over of progress", "No final balance values", "No promise that beta content reaches Early Access unchanged"],
      image: "/images/official/store/steam-header.jpg",
      imageAlt: "Official Frostrail Steam header",
      caption: "Closed Beta registration details on the official Steam page.",
    },
    {
      id: "previous-playtest",
      title: "How this differs from the April playtest",
      paragraphs: [
        "The April 16–May 4 event was described as the first closed playtest and focused on the early gameplay loop. Its official content brief included the tutorial plus two exploration areas, train fueling and operation, scavenging, recycling, early equipment crafting, Revenant combat, and early-game dungeon raids. The August 31 event is announced as a Closed Beta; its exact content list has not been published in the July announcement.",
      ],
      facts: [["Earlier event", "Closed playtest"], ["Earlier dates", "April 16–May 4, 2026"], ["New event", "Closed Beta"], ["Closed Beta content list", "Not yet published"]],
      image: "/images/official/news/april-playtest-content.webp",
      imageAlt: "Official April playtest content graphic",
      caption: "Official April playtest content brief.",
    },
    {
      id: "prepare",
      title: "How to sign up and download the beta safely",
      paragraphs: [
        "Register through the Frostrail Steam page. If you are selected, access should appear through Steam or an email tied to that process; do not buy invitations or run downloads offered through unrelated forms, file hosts, or direct messages.",
      ],
      bullets: ["Wishlist or follow the official Steam page", "Verify registration links before sharing account information", "Expect unfinished systems and changes during testing"],
      image: "/images/official/store/steam-header.jpg",
      imageAlt: "Official Frostrail Steam page artwork",
      caption: "Use the official Steam page and announcement feed for registration and last-minute changes.",
    },
    {
      id: "wiki-coverage",
      title: "Expect beta details to change",
      paragraphs: [
        "Damage, recipes, spawn behavior, and performance can change between the beta and Early Access. Check the build date on a guide before relying on an exact value, especially when planning upgrades or spending scarce materials.",
      ],
      bullets: ["Check the build date beside exact stats", "Prefer repeatable in-game behavior over one-off impressions", "Recheck old routes and recipes after major updates"],
      image: "/images/wiki/weapons-crafting.jpg",
      imageAlt: "Modular weapon crafting interface",
      caption: "Beta observations will be labeled with build and date context rather than treated as final.",
    },
  ] as const,
  gallery: [
    { src: "/images/official/news/closed-beta-august-31.jpg", alt: "Official Frostrail Closed Beta announcement trailer image", caption: "Official announcement media for the Closed Beta beginning August 31, 2026." },
    { src: "/images/official/news/april-playtest-content.webp", alt: "Official Frostrail April playtest content graphic", caption: "Official April playtest content brief." },
    { src: "/images/official/news/spring-update-03.webp", alt: "Official Frostrail Spring Development Update rail landscape", caption: "Official development media released after the April test and before the August Closed Beta." },
  ] as const,
  sources: [
    { label: "Official Closed Beta registration announcement", href: "https://store.steampowered.com/news/app/3517740/view/671748851902711378?l=english", tier: "Official" },
    { label: "Official Closed Beta press kit", href: "https://www.gamespress.com/Frostrails-Closed-Beta-Arrives-August-31", tier: "Official press" },
    { label: "Official April playtest announcement archive", href: "https://steamcommunity.com/app/3517740/allnews/", tier: "Official" },
    { label: "Official Spring Development Update", href: "https://store.steampowered.com/news/app/3517740/view/664987745725186081?l=english", tier: "Official" },
  ] as const,
  seo: {
    title: "Frostrail Closed Beta - August 31 Sign-Up & Access",
    description: "The Frostrail Closed Beta starts August 31, 2026. Learn how Steam registration works, whether earlier sign-ups count, and which access details remain open.",
  },
};

export const metadata = articleMetadata(data, "/frostrail-closed-beta");

export default function ClosedBetaPage() {
  return <ArticlePage data={data} canonical="/frostrail-closed-beta" />;
}
