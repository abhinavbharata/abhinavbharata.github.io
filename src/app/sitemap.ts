import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site-config";
import { projects } from "@/data/projects";

/**
 * Dynamic sitemap. Static routes plus one entry per project case study.
 * `/cfd-agent` is intentionally omitted — it 308-redirects to the canonical
 * `/projects/cfd-agent` to avoid duplicate indexable URLs.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/experience",
    "/projects",
    "/skills",
    "/research",
    "/resume",
    "/contact",
    "/privacy",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p.featured ? 0.8 : 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
