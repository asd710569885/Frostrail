export type ContentSource = {
  label: string;
  href: string;
  tier?: string;
};

export type HubTopic = {
  id: string;
  title: string;
  label: string;
  description: string;
  details: readonly string[];
  href?: string;
  image?: string;
  imageAlt?: string;
  source?: ContentSource;
};

export type HubData = {
  breadcrumb: string;
  title: string;
  eyebrow: string;
  introduction: string;
  heroImage: string;
  heroImageAlt: string;
  status: string;
  verifiedAt: string;
  topics: readonly HubTopic[];
};

export type ArticleSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  facts?: readonly (readonly [string, string])[];
  image?: string;
  imageAlt?: string;
  caption?: string;
};

export type ArticleRecord = {
  title: string;
  label: string;
  description: string;
  href?: string;
  image?: string;
  imageAlt?: string;
  facts: readonly (readonly [string, string])[];
};

export type ArticleImage = {
  src: string;
  alt: string;
  caption: string;
};

export type ArticleData = {
  slug?: string;
  parent: { label: string; href: string };
  eyebrow: string;
  title: string;
  lede: string;
  image?: string;
  imageAlt?: string;
  date: string;
  status: string;
  summary: readonly (readonly [string, string])[];
  records?: readonly ArticleRecord[];
  sections: readonly ArticleSection[];
  gallery?: readonly ArticleImage[];
  sources: readonly ContentSource[];
  related?: readonly { label: string; href: string; image?: string }[];
  seo?: { title: string; description: string };
};
