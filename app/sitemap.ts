import type { MetadataRoute } from "next";
import { packages } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/menu",
    "/gallery",
    "/about",
    "/contacts",
    "/location",
    ...packages.map((p) => `/menu/${p.slug}`),
  ].map((path) => ({
    url: `https://lafiesta.ge${path || "/"}`,
    changeFrequency: "monthly",
    priority: path ? 0.8 : 1,
  }));
}
