import type { Metadata } from "next";
import { seoArticles } from "@/lib/data/seo-articles";
import { FrostrailTopicPage } from "@/page/topic/FrostrailTopicPage";
import { articleMetadata } from "@/seo/article-metadata";

const data = seoArticles["frostrail-release-date"];
export const metadata: Metadata = articleMetadata(data, "/frostrail-release-date");
export default function ReleaseDatePage() { return <FrostrailTopicPage articleKey="frostrail-release-date" />; }
