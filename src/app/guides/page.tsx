import type { Metadata } from "next";
import { ContentHub } from "@/components/content/ContentHub";
import { guidesData } from "@/lib/data/hubs";

export const metadata: Metadata = {
  title: "Guides",
  description: "Practical Frostrail survival, crafting, combat, train, and co-op guides built from verified information.",
};

export default function GuidesPage() {
  return <ContentHub data={guidesData} />;
}
