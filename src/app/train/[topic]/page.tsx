import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/content/ArticlePage";
import { trainArticles, trainArticleSlugs } from "@/lib/data/train";
import { articleMetadata } from "@/seo/article-metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return trainArticleSlugs.map((topic) => ({ topic }));
}

export async function generateMetadata({ params }: PageProps<"/train/[topic]">): Promise<Metadata> {
  const { topic } = await params;
  const data = trainArticles[topic];
  if (!data) return {};
  return articleMetadata(data, `/train/${topic}`);
}

export default async function TrainTopicPage({ params }: PageProps<"/train/[topic]">) {
  const { topic } = await params;
  const data = trainArticles[topic];
  if (!data) notFound();
  return <ArticlePage data={data} />;
}
