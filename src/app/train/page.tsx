import type { Metadata } from "next";
import { ContentHub } from "@/components/content/ContentHub";
import { trainData } from "@/lib/data/hubs";

export const metadata: Metadata = {
  title: "Train Systems",
  description: "Learn about Frostrail train systems, upgrades, fuel, power, carriages, defense, and storage.",
};

export default function TrainPage() {
  return <ContentHub data={trainData} />;
}
