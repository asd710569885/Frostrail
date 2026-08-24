import type { Metadata } from "next";
import { ContentHub } from "@/components/content/ContentHub";
import { wikiData } from "@/lib/data/hubs";

export const metadata: Metadata = {
  title: "Game Database",
  description: "Explore the verified Frostrail wiki database for weapons, items, resources, relics, clothing, and game systems.",
};

export default function WikiPage() {
  return <ContentHub data={wikiData} />;
}
