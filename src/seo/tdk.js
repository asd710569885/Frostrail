export const staticTdk = {
  "/": {
    title: "Frostrail - Guides, Weapons, Co-op & Release Info",
    description: "Explore Frostrail guides for the Eden Engine, weapons, crafting, co-op, locations, enemies, Closed Beta access, and the Q4 2026 Early Access release.",
  },
  "/guides": {
    title: "Frostrail Guides - Survive the Cold and Master Your Train",
    description: "Start with Frostrail beginner guides, then learn warmth, scavenging, combat, crafting, Eden Engine upkeep, train defense, and four-player co-op.",
  },
  "/wiki": {
    title: "Frostrail Wiki - Weapons, Items, Relics & Crafting",
    description: "Browse the Frostrail Wiki for weapons, items, resources, crafting, Relics, clothing, food, stations, enemies, locations, train systems, and game lore.",
  },
  "/train": {
    title: "Frostrail Train Guide - Eden Engine, Fuel & Upgrades",
    description: "Master Frostrail's Eden Engine with guides to fuel, heat, power, carriages, crafting stations, storage, structural upgrades, and defending the moving train.",
  },
  "/locations": {
    title: "Frostrail Locations - Tundra, Dungeons, Bunkers & Ruins",
    description: "Explore Frostrail locations across the frozen north, including tundra routes, settlements, mining camps, dungeons, bunkers, vaults, strongholds, and ruins.",
  },
  "/enemies": {
    title: "Frostrail Enemies - Revenants, Wolves & Train Defense",
    description: "Learn how Frostrail enemies pressure expeditions and the Eden Engine, from Revenants and wolves to Corrupted Soldiers, eldritch threats, and train attacks.",
  },
  "/updates": {
    title: "Frostrail Updates - Closed Beta, Playtests & Early Access",
    description: "Follow Frostrail updates covering the August 2026 Closed Beta, earlier playtests, gameplay changes, development milestones, and Q4 2026 Steam Early Access.",
  },
  "/legal/privacy-policy": {
    title: "Privacy Policy - Frostrail Wiki Legal Information",
    description: "Read the Frostrail Wiki Privacy Policy covering information this fan site handles, standard server logs, cookies, external links, and visitor privacy choices.",
  },
  "/legal/terms-of-service": {
    title: "Terms of Service - Frostrail Wiki Usage Rules",
    description: "Read the Frostrail Wiki Terms of Service covering acceptable use, informational accuracy, external links, intellectual property, disclaimers, and site changes.",
  },
  "/legal/copyright": {
    title: "Copyright Policy - Frostrail Wiki Content Rights",
    description: "Review the Frostrail Wiki Copyright Policy covering ownership notices, permitted fan-site use, takedown requests, attribution, trademarks, and screenshots.",
  },
  "/legal/about-us": {
    title: "About Us - Independent Frostrail Wiki Fan Community",
    description: "Learn why Frostrail Wiki exists, how this independent fan site writes player-first guides, checks game details, handles corrections, and stays transparent.",
  },
  "/legal/contact-us": {
    title: "Contact Us - Frostrail Wiki Corrections & Questions",
    description: "Contact Frostrail Wiki by email for factual corrections, copyright concerns, privacy questions, broken links, or feedback about this independent fan website.",
  },
};

export function getTdk(path) {
  const entry = staticTdk[path];
  if (!entry) throw new Error(`Missing TDK configuration for ${path}`);
  return entry;
}
