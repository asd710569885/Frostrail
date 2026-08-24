import type { Metadata } from "next";
import { ContentHub } from "@/components/content/ContentHub";
import { locationsData } from "@/lib/data/hubs";

export const metadata: Metadata = {
  title: "Locations",
  description: "Explore verified Frostrail locations, world types, dungeons, ruins, stations, and points of interest.",
};

export default function LocationsPage() {
  return <ContentHub data={locationsData} />;
}
