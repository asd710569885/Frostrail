import type { Metadata } from "next";
import { ContentHub } from "@/components/content/ContentHub";
import { trainData } from "@/lib/data/hubs";
import { staticPageMetadata } from "@/seo/article-metadata";

export const metadata: Metadata = staticPageMetadata("/train");

export default function TrainPage() {
  return <ContentHub data={trainData} canonical="/train" />;
}
