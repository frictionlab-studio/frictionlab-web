// Per-post social card. One image is generated for every post slug (Next.js
// reuses the page segment's generateStaticParams), so each article shares a
// card branded in its category's accent color.
import { getPostBySlug, postSlugs } from "@/data/posts";
import { getCategoryBySlug } from "@/data/blog-categories";
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "A FrictionLab article — notes on AI, automation, and SaaS";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

// Pre-render one card per post at build time (image routes don't inherit the
// page segment's params, so we enumerate the slugs here too).
export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

// Article titles run much longer than product names, so the headline is
// stepped down for longer titles to keep it inside the 1200x630 card.
function titleSizeFor(title: string): number {
  if (title.length > 55) return 58;
  if (title.length > 38) return 68;
  return 84;
}

// Trims the supporting line so it always fits under the headline, cutting at
// the last whole word rather than mid-word. Nothing in the current post set is
// long enough to hit this — it is a guard for future long excerpts.
function truncate(text: string, maxChars: number): string {
  if (text.length <= maxChars) return text;
  const cut = text.slice(0, maxChars);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd()}…`;
}

type ImageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Image({ params }: ImageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  // Fall back to a generic blog card if the slug is unknown.
  if (!post) {
    return renderOgImage({
      eyebrow: "The Blog",
      title: "Notes on AI, Automation & SaaS",
      subtitle:
        "Lessons, systems, and ideas from inside FrictionLab — AI agents, automation, and startup building.",
      accent: "purple",
    });
  }

  const category = getCategoryBySlug(post.categorySlug);

  return renderOgImage({
    eyebrow: "The Blog",
    title: post.title,
    titleSize: titleSizeFor(post.title),
    // Same copy as the page's <meta> description (identical fallback).
    subtitle: truncate(post.metaDescription ?? post.excerpt, 180),
    accent: category?.accent ?? "purple",
    badge: `${category?.name ?? "Article"} · ${post.readingMinutes} min read`,
  });
}
