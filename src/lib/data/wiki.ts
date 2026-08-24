import wikiContent from "@/data/wiki/wiki-articles.json";
import type { ArticleData } from "@/types/content";

type WikiContent = {
  sections: Record<string, ArticleData>;
  weapons: Record<string, ArticleData>;
};

const content = wikiContent as unknown as WikiContent;

export const wikiSections = content.sections;
export const weaponEntries = content.weapons;
export const wikiSectionSlugs = Object.keys(wikiSections);
export const weaponSlugs = Object.keys(weaponEntries);
