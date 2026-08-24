import type { Metadata } from "next";
import { seoArticles } from "@/lib/data/seo-articles";
import { FrostrailTopicPage } from "@/page/topic/FrostrailTopicPage";
import { articleMetadata } from "@/seo/article-metadata";

const data = seoArticles["about-frostrail"];
export const metadata: Metadata = articleMetadata(data, "/about-frostrail");
export default function AboutFrostrailPage() { return <FrostrailTopicPage articleKey="about-frostrail" />; }
