import type { Metadata } from "next";
import { ContentHub } from "@/components/content/ContentHub";
import { updatesData } from "@/lib/data/hubs";
import { staticPageMetadata } from "@/seo/article-metadata";

export const metadata: Metadata = staticPageMetadata("/updates");

export default function UpdatesPage() {
  return <ContentHub data={updatesData} canonical="/updates" />;
}
