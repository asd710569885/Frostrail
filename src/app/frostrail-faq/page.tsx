import type { Metadata } from "next";
import { seoArticles } from "@/lib/data/seo-articles";
import { FrostrailTopicPage } from "@/page/topic/FrostrailTopicPage";
import { articleMetadata } from "@/seo/article-metadata";

const data = seoArticles["frostrail-faq"];
export const metadata: Metadata = articleMetadata(data, "/frostrail-faq");

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: data.sections.map((section) => ({
    "@type": "Question",
    name: section.title,
    acceptedAnswer: {
      "@type": "Answer",
      text: section.paragraphs.join(" "),
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replaceAll("<", "\\u003c") }}
      />
      <FrostrailTopicPage articleKey="frostrail-faq" />
    </>
  );
}
