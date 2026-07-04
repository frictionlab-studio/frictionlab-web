// sitemap.ts — generates /sitemap.xml from static routes + data-driven pages.
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { ventureSlugs } from "@/data/ventures";
import { posts } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  // Static, hand-built routes.
  const staticRoutes = [
    "",
    "/ventures",
    "/blog",
    "/about",
    "/contact",
    "/careers",
    "/terms",
    "/privacy",
    "/refund-policy",
    "/cookie-policy",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  // One entry per venture detail page.
  const ventureRoutes = ventureSlugs.map((slug) => ({
    url: `${base}/ventures/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // One entry per blog post, using its publish date.
  const postRoutes = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...ventureRoutes, ...postRoutes];
}
