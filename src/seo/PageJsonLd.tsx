import { siteConfig } from "@/config/site";

type Breadcrumb = {
  name: string;
  path: string;
};

type PageJsonLdProps = {
  title: string;
  description: string;
  path: string;
  pageType?: "WebPage" | "Article" | "CollectionPage" | "AboutPage" | "ContactPage";
  breadcrumbs?: readonly Breadcrumb[];
  dateModified?: string;
};

function isoDate(value?: string) {
  if (!value) return undefined;
  const parsed = new Date(value.replace(/^(Verified|Updated)\s+/i, ""));
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString();
}

export function PageJsonLd({ title, description, path, pageType = "WebPage", breadcrumbs, dateModified }: PageJsonLdProps) {
  const url = `${siteConfig.url}${path}`;
  const trail = breadcrumbs ?? (path === "/" ? [{ name: "Home", path: "/" }] : [{ name: "Home", path: "/" }, { name: title, path }]);
  const modified = isoDate(dateModified);
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": pageType,
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: "en",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#game` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/images/og-image.png`,
          width: 1737,
          height: 908,
        },
        ...(pageType === "Article" ? {
          headline: title,
          ...(modified ? { dateModified: modified } : {}),
          author: { "@type": "Organization", name: "Frostrail Wiki Editorial Team", url: siteConfig.url },
          publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
        } : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: trail.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${siteConfig.url}${item.path}`,
        })),
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replaceAll("<", "\\u003c") }} />;
}
