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
  };
}
