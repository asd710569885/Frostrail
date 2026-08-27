import type { Metadata } from "next";
import { ContentHub } from "@/components/content/ContentHub";
import { guidesData } from "@/lib/data/hubs";
import { staticPageMetadata } from "@/seo/article-metadata";

export const metadata: Metadata = staticPageMetadata("/guides");

export default function GuidesPage() {
  return <ContentHub data={guidesData} canonical="/guides" />;
}
