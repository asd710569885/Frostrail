import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { wikiSections, wikiSectionSlugs } from "@/lib/data/wiki";
import { WikiSectionDetailPage } from "@/page/wiki/WikiSectionDetailPage";
import { articleMetadata } from "@/seo/article-metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return wikiSectionSlugs.filter((section) => section !== "weapons").map((section) => ({ section }));
}

export async function generateMetadata({ params }: PageProps<"/wiki/[section]">): Promise<Metadata> {
  const { section } = await params;
  const data = wikiSections[section];
  if (!data) return {};
  return articleMetadata(data, `/wiki/${section}`);
}

export default async function WikiSectionPage({ params }: PageProps<"/wiki/[section]">) {
  const { section } = await params;
  const data = wikiSections[section];
  if (!data || section === "weapons") notFound();
  return <WikiSectionDetailPage data={data} canonical={`/wiki/${section}`} />;
}
