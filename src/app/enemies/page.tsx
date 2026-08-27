import type { Metadata } from "next";
import { ContentHub } from "@/components/content/ContentHub";
import { enemiesData } from "@/lib/data/hubs";
import { staticPageMetadata } from "@/seo/article-metadata";

export const metadata: Metadata = staticPageMetadata("/enemies");

export default function EnemiesPage() {
  return <ContentHub data={enemiesData} canonical="/enemies" />;
}
