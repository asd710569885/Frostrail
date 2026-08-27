import type { Metadata } from "next";
import { staticPageMetadata } from "@/seo/article-metadata";

export const metadata: Metadata = staticPageMetadata("/");

export { default } from "@/page/home/HomePage";
