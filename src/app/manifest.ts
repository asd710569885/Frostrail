import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Frostrail Wiki",
    short_name: "Frostrail Wiki",
    description: "Frostrail guides, weapons, train systems, co-op, locations, enemies, and release information.",
    start_url: "/",
    display: "standalone",
    background_color: "#07131c",
    theme_color: "#07131c",
    icons: [{ src: "/favicon.ico", sizes: "16x16 32x32 48x48 64x64 128x128 256x256", type: "image/x-icon" }],
  };
}
