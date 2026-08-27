import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { legalPages, legalSlugs } from "@/data/legal/legal-pages";
import { LegalPage } from "@/page/legal/LegalPage";
import { staticPageMetadata } from "@/seo/article-metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return legalSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/legal/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  if (!legalPages[slug]) return {};
  return staticPageMetadata(`/legal/${slug}`);
}

export default async function LegalRoutePage({ params }: PageProps<"/legal/[slug]">) {
  const { slug } = await params;
  const data = legalPages[slug];
  if (!data) notFound();
  return <LegalPage data={data} />;
}
