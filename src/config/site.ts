export const siteConfig = {
  name: "Frostrail Wiki",
  description:
    "An independent Frostrail wiki covering verified train systems, survival mechanics, locations, enemies, guides, and development updates.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  steamUrl: "https://store.steampowered.com/app/3517740/Frostrail/",
} as const;
