import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { trainArticleSlugs } from "@/lib/data/train";
import { weaponSlugs, wikiSectionSlugs } from "@/lib/data/wiki";
import { legalSlugs } from "@/data/legal/legal-pages";

const staticRoutes = [
  "",
  "/wiki",
  "/train",
  "/guides",
  "/guides/beginner-guide",
  "/locations",
  "/enemies",
  "/updates",
  "/frostrail-closed-beta",
  "/frostrail-release-date",
  "/frostrail-system-requirements",
  "/frostrail-multiplayer",
  "/frostrail-console",
  "/about-frostrail",
  "/frostrail-faq",
  ...legalSlugs.map((slug) => `/legal/${slug}`),
];

const routes = [
  ...staticRoutes,
  ...wikiSectionSlugs.map((slug) => `/wiki/${slug}`),
  ...weaponSlugs.map((slug) => `/wiki/weapons/${slug}`),
  ...trainArticleSlugs.map((slug) => `/train/${slug}`),
];

// Keep these dates fixed between builds. Change only the route whose public page
// received a meaningful content, metadata, or policy update.
const lastModifiedByRoute: Record<string, string> = {
  "/": "2026-08-31",
  "/wiki": "2026-08-27",
  "/train": "2026-08-27",
  "/guides": "2026-08-27",
  "/guides/beginner-guide": "2026-08-31",
  "/locations": "2026-08-27",
  "/enemies": "2026-08-27",
  "/updates": "2026-08-31",
  "/frostrail-closed-beta": "2026-08-31",
  "/frostrail-release-date": "2026-08-31",
  "/frostrail-system-requirements": "2026-08-27",
  "/frostrail-multiplayer": "2026-08-27",
  "/frostrail-console": "2026-08-27",
  "/about-frostrail": "2026-08-27",
  "/frostrail-faq": "2026-08-31",
  "/legal/privacy-policy": "2026-08-27",
  "/legal/terms-of-service": "2026-08-27",
  "/legal/copyright": "2026-08-27",
  "/legal/about-us": "2026-08-27",
  "/legal/contact-us": "2026-08-27",
  "/wiki/weapons": "2026-08-27",
  "/wiki/items": "2026-08-27",
  "/wiki/resources": "2026-08-27",
  "/wiki/crafting": "2026-08-27",
  "/wiki/relics": "2026-08-27",
  "/wiki/clothing": "2026-08-27",
  "/wiki/food": "2026-08-27",
  "/wiki/stations": "2026-08-27",
  "/wiki/lore": "2026-08-27",
  "/wiki/weapons/pipe-rifle": "2026-08-27",
  "/wiki/weapons/bolt-action-rifle": "2026-08-27",
  "/train/eden-engine": "2026-08-27",
  "/train/upgrades": "2026-08-27",
  "/train/carriages": "2026-08-27",
  "/train/fuel": "2026-08-27",
  "/train/power": "2026-08-27",
  "/train/defense": "2026-08-27",
};

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => {
    const path = route || "/";
    const lastModified = lastModifiedByRoute[path];
    if (!lastModified) throw new Error(`Missing sitemap lastModified date for ${path}`);

    return {
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(lastModified),
      changeFrequency: index === 0 ? "weekly" : "monthly",
      priority: index === 0 ? 1 : route.split("/").length === 2 ? 0.85 : 0.72,
    };
  });
}
