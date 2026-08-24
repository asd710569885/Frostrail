import trainContent from "@/data/game/train-articles.json";
import type { ArticleData } from "@/types/content";

export const trainArticles = trainContent as unknown as Record<string, ArticleData>;
export const trainArticleSlugs = Object.keys(trainArticles);
