import type { Metadata } from "next";
import { ContentHub } from "@/components/content/ContentHub";
import { enemiesData } from "@/lib/data/hubs";

export const metadata: Metadata = {
  title: "Enemies",
  description: "A source-aware Frostrail enemy index covering confirmed hostile categories and encounter guidance.",
};

export default function EnemiesPage() {
  return <ContentHub data={enemiesData} />;
}
