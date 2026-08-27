import type { Metadata } from "next";
import { ContentHub } from "@/components/content/ContentHub";
import { wikiData } from "@/lib/data/hubs";
import { staticPageMetadata } from "@/seo/article-metadata";

export const metadata: Metadata = staticPageMetadata("/wiki");

export default function WikiPage() {
  return <ContentHub data={wikiData} canonical="/wiki" />;
}
