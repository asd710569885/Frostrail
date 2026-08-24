import type { Metadata } from "next";
import type { ArticleData } from "@/types/content";

export function articleMetadata(data: ArticleData, canonical: string): Metadata {
  const images = data.image ? [{ url: data.image, alt: data.imageAlt ?? data.title }] : [];
  return {
    title: data.seo?.title ?? data.title,
    description: data.seo?.description ?? data.lede,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: data.seo?.title ?? data.title,
      description: data.seo?.description ?? data.lede,
      images,
    },
    twitter: {
      card: data.image ? "summary_large_image" : "summary",
      title: data.seo?.title ?? data.title,
      description: data.seo?.description ?? data.lede,
      images: data.image ? [data.image] : [],
    },
  };
}
