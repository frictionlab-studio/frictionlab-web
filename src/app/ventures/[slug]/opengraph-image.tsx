// Per-venture social card. One image is generated for every venture slug
// (Next.js reuses the page segment's generateStaticParams), so each product
// page shares a card branded in that product's accent color.
import { getVentureBySlug, ventureSlugs } from "@/data/ventures";
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "A FrictionLab venture — AI SaaS product";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

// Pre-render one card per venture at build time (image routes don't inherit
// the page segment's params, so we enumerate the slugs here too).
export function generateStaticParams() {
  return ventureSlugs.map((slug) => ({ slug }));
}

type ImageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Image({ params }: ImageProps) {
  const { slug } = await params;
  const venture = getVentureBySlug(slug);

  // Fall back to a generic brand card if the slug is unknown.
  if (!venture) {
    return renderOgImage({
      eyebrow: "FrictionLab Venture",
      title: "FrictionLab",
      subtitle: "AI SaaS products and automation platforms.",
      accent: "gold",
    });
  }

  return renderOgImage({
    eyebrow: "FrictionLab Venture",
    title: venture.name,
    subtitle: venture.description,
    accent: venture.accent,
    badge: `${venture.status} · ${venture.price}`,
  });
}
