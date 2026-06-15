import type { MetadataRoute } from "next";
import { siteUrl, publicRoutes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return publicRoutes.map((route) => ({
    url: route === "/" ? siteUrl : `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : 0.5,
  }));
}
