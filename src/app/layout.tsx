import type { Metadata } from "next";
import { Oswald, Roboto_Condensed } from "next/font/google";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/seo/JsonLd";
import "@/style/globals.css";

const bodyFont = Roboto_Condensed({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Frostrail Wiki | Guides, Train Systems & Game Database",
    template: "%s | Frostrail Wiki",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "Frostrail Wiki | Guides, Train Systems & Game Database",
    description: siteConfig.description,
    images: [{ url: "/images/home/frostrail-official-hero.jpg", width: 1438, height: 810, alt: "Official Frostrail key art" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frostrail Wiki",
    description: siteConfig.description,
    images: ["/images/home/frostrail-official-hero.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
