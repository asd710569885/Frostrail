import type { Metadata } from "next";
import { seoArticles } from "@/lib/data/seo-articles";
import { FrostrailTopicPage } from "@/page/topic/FrostrailTopicPage";
import { articleMetadata } from "@/seo/article-metadata";

const data = seoArticles["frostrail-faq"];
export const metadata: Metadata = articleMetadata(data, "/frostrail-faq");
export default function FaqPage() { return <FrostrailTopicPage articleKey="frostrail-faq" />; }
