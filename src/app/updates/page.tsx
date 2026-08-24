import type { Metadata } from "next";
import { ContentHub } from "@/components/content/ContentHub";
import { updatesData } from "@/lib/data/hubs";

export const metadata: Metadata = {
  title: "Development Updates",
  description: "A dated archive of verified Frostrail announcements, development updates, beta news, and release information.",
};

export default function UpdatesPage() {
  return <ContentHub data={updatesData} />;
}
