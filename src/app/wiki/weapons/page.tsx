import type { Metadata } from "next";
import { WeaponsIndexPage } from "@/page/wiki/WeaponsIndexPage";
import { wikiSections } from "@/lib/data/wiki";
import { articleMetadata } from "@/seo/article-metadata";

const data = wikiSections.weapons;

export const metadata: Metadata = articleMetadata(data, "/wiki/weapons");

export default function WeaponsPage() {
  return <WeaponsIndexPage data={data} canonical="/wiki/weapons" />;
}
