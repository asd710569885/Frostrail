import type { Metadata } from "next";
import { seoArticles } from "@/lib/data/seo-articles";
import { FrostrailTopicPage } from "@/page/topic/FrostrailTopicPage";
import { articleMetadata } from "@/seo/article-metadata";

const data = seoArticles["frostrail-multiplayer"];
export const metadata: Metadata = articleMetadata(data, "/frostrail-multiplayer");
export default function MultiplayerPage() { return <FrostrailTopicPage articleKey="frostrail-multiplayer" />; }
