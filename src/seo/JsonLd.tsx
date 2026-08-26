import { siteConfig } from "@/config/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: "en",
      about: { "@id": `${siteConfig.url}/#game` },
    },
    {
      "@type": "VideoGame",
      "@id": `${siteConfig.url}/#game`,
      name: "Frostrail",
      url: siteConfig.steamUrl,
      gamePlatform: "PC",
      playMode: ["SinglePlayer", "MultiPlayer"],
      genre: ["Action", "Adventure", "Survival", "Simulation"],
      numberOfPlayers: { minValue: 1, maxValue: 4 },
      author: { "@type": "Organization", name: "FakeFish" },
      publisher: { "@type": "Organization", name: "Shiro Unlimited" },
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replaceAll("<", "\\u003c") }}
    />
  );
}
