import type { Metadata } from "next";
import { Oswald, Roboto_Condensed } from "next/font/google";
import { AppFooter } from "@/components/layout/AppFooter";
import { AppHeader } from "@/components/layout/AppHeader";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/seo/JsonLd";
import { getTdk } from "@/seo/tdk";
import "@/style/globals.css";

const homeTdk = getTdk("/");

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
    default: homeTdk.title,
    template: "%s",
  },
  description: homeTdk.description,
  applicationName: siteConfig.name,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Games",
  referrer: "strict-origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: homeTdk.title,
    description: homeTdk.description,
    url: "/",
    images: [{ url: "/images/og-image.png", width: 1737, height: 908, alt: "Armored steam train crossing the frozen wasteland" }],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTdk.title,
    description: homeTdk.description,
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>
        <JsonLd />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
