import seoContent from "@/data/game/seo-articles.json";
import type { ArticleData } from "@/types/content";

export const seoArticles = seoContent as unknown as Record<string, ArticleData>;
