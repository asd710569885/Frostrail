import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { trainArticleSlugs } from "@/lib/data/train";
import { weaponSlugs, wikiSectionSlugs } from "@/lib/data/wiki";

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
];

const routes = [
  ...staticRoutes,
  ...wikiSectionSlugs.map((slug) => `/wiki/${slug}`),
  ...weaponSlugs.map((slug) => `/wiki/weapons/${slug}`),
  ...trainArticleSlugs.map((slug) => `/train/${slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-08-22"),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route.split("/").length === 2 ? 0.85 : 0.72,
  }));
}
