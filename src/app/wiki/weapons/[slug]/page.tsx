import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WeaponDetailPage } from "@/page/wiki/WeaponDetailPage";
import { weaponEntries, weaponSlugs } from "@/lib/data/wiki";
import { articleMetadata } from "@/seo/article-metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return weaponSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/wiki/weapons/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const data = weaponEntries[slug];
  if (!data) return {};
  return articleMetadata(data, `/wiki/weapons/${slug}`);
}

export default async function WeaponEntryPage({ params }: PageProps<"/wiki/weapons/[slug]">) {
  const { slug } = await params;
  const data = weaponEntries[slug];
  if (!data) notFound();
  return <WeaponDetailPage data={data} />;
}
