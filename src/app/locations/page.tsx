import type { Metadata } from "next";
import { ContentHub } from "@/components/content/ContentHub";
import { locationsData } from "@/lib/data/hubs";
import { staticPageMetadata } from "@/seo/article-metadata";

export const metadata: Metadata = staticPageMetadata("/locations");

export default function LocationsPage() {
  return <ContentHub data={locationsData} canonical="/locations" />;
}
