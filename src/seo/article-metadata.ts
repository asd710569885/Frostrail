import type { Metadata } from "next";
import type { ArticleData } from "@/types/content";
import { getTdk } from "@/seo/tdk";

const socialImage = {
  url: "/images/og-image.png",
  width: 1737,
  height: 908,
  alt: "Armored steam train crossing the frozen wasteland",
};

function sharedMetadata(title: string, description: string, canonical: string, type: "website" | "article"): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      type,
      title,
      description,
      url: canonical,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage.url],
    },
  };
}

export function staticPageMetadata(canonical: string): Metadata {
  const { title, description } = getTdk(canonical);
  return sharedMetadata(title, description, canonical, "website");
}

export function articleMetadata(data: ArticleData, canonical: string): Metadata {
  const title = data.seo?.title ?? data.title;
  const description = data.seo?.description ?? data.lede;
  return sharedMetadata(title, description, canonical, "article");
}
