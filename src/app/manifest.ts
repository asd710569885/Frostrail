import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Frostrail Wiki",
    short_name: "Frostrail Wiki",
    description: "Verified Frostrail guides and game database.",
    start_url: "/",
    display: "standalone",
    background_color: "#07131c",
    theme_color: "#07131c",
  };
}
