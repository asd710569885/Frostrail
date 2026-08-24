import type { Metadata } from "next";
import { seoArticles } from "@/lib/data/seo-articles";
import { FrostrailTopicPage } from "@/page/topic/FrostrailTopicPage";
import { articleMetadata } from "@/seo/article-metadata";

const data = seoArticles["frostrail-system-requirements"];
export const metadata: Metadata = articleMetadata(data, "/frostrail-system-requirements");
export default function SystemRequirementsPage() { return <FrostrailTopicPage articleKey="frostrail-system-requirements" />; }
