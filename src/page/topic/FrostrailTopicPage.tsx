import { ArticlePage } from "@/components/content/ArticlePage";
import { seoArticles } from "@/lib/data/seo-articles";

export function FrostrailTopicPage({ articleKey }: { articleKey: string }) {
  return <ArticlePage data={seoArticles[articleKey]} />;
}
