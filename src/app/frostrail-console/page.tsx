import type { Metadata } from "next";
import { seoArticles } from "@/lib/data/seo-articles";
import { FrostrailTopicPage } from "@/page/topic/FrostrailTopicPage";
import { articleMetadata } from "@/seo/article-metadata";

const data = seoArticles["frostrail-console"];
export const metadata: Metadata = articleMetadata(data, "/frostrail-console");
export default function ConsolePage() { return <FrostrailTopicPage articleKey="frostrail-console" />; }
