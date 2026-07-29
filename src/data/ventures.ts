// Ventures data — the FrictionLab portfolio of live products.
// This is the single source of truth rendered across the site (home, /ventures,
// and the generated /ventures/[slug] detail pages).
import type { Accent, VentureStatus } from "@/types/brand";

export type Venture = {
  // URL-safe identifier, e.g. used at /ventures/<slug>.
  slug: string;
  // Product name as shown in the UI.
  name: string;
  // Short one-line hook used on cards.
  tagline: string;
  // One plain-sentence description of what the product does and who it's for.
  description: string;
  // Optional longer description used only for SEO <meta> tags (target 150-160
  // chars). Falls back to `description` when omitted. Kept separate so the
  // visible card/detail copy stays short.
  metaDescription?: string;
  // schema.org applicationCategory for the SoftwareApplication JSON-LD.
  // "EducationalApplication" for study/learning tools, "BusinessApplication"
  // for everything else. Drives structured data only — never shown in the UI.
  applicationCategory: "EducationalApplication" | "BusinessApplication";
  // Numeric starting price (lowest PAID tier, in USD) used as the single
  // representative price point in the SoftwareApplication Offer schema.
  // Must match the live pricing page; verified against each product's pricing
  // page. Structured data only — the visible price string is `price` above.
  startingPriceUsd: number;
  // Bullet highlights shown on the venture detail page.
  highlights: string[];
  // Starting price, shown on product cards (e.g. "From $19/mo").
  price: string;
  // Link to the live product.
  liveUrl: string;
  // Link to the product's pricing page.
  pricingUrl: string;
  // Lifecycle status badge.
  status: VentureStatus;
  // Neon accent used for the card glow/tag.
  accent: Accent;
  // Linked blog category slug (see blog-categories.ts).
  categorySlug: string;
  // Whether to feature this venture prominently.
  featured: boolean;
  // External or internal link. Kept in sync with the live product URL.
  href: string | null;
};

export const ventures: Venture[] = [
  {
    slug: "scholarpilot",
    name: "ScholarPilot",
    tagline: "Study abroad planning with AI.",
    description:
      "Study abroad planning with AI university matching, SOP and CV help, and visa interview prep.",
    metaDescription:
      "ScholarPilot is an AI study-abroad planner for students, with university matching to your profile, SOP and CV drafting and review, and visa interview prep.",
    highlights: [
      "University matching based on your profile",
      "SOP and CV drafting and review",
      "Visa interview preparation",
    ],
    applicationCategory: "EducationalApplication",
    startingPriceUsd: 19,
    price: "From $19/mo",
    liveUrl: "https://scholarpilot.support",
    pricingUrl: "https://scholarpilot.support/pricing",
    status: "Live",
    accent: "gold",
    categorySlug: "education-technology",
    featured: true,
    href: "https://scholarpilot.support",
  },
  {
    slug: "propmate-ai",
    name: "PropMate AI",
    tagline: "Property management for landlords.",
    description:
      "Property management for landlords and small agencies.",
    metaDescription:
      "PropMate AI is property management software for landlords and small agencies, with tools to manage your own rental units and run daily operations in one place.",
    highlights: [
      "Tools for landlords managing their own units",
      "Built for small property agencies",
    ],
    applicationCategory: "BusinessApplication",
    startingPriceUsd: 49,
    price: "From $49/mo",
    liveUrl: "https://prop-mate-ai-frontend.vercel.app",
    pricingUrl: "https://prop-mate-ai-frontend.vercel.app/pricing",
    status: "Live",
    accent: "blue",
    categorySlug: "automation",
    featured: true,
    href: "https://prop-mate-ai-frontend.vercel.app",
  },
  {
    slug: "leadmate-ai",
    name: "LeadMate AI",
    tagline: "B2B lead generation and outreach.",
    description: "B2B lead generation and outreach.",
    highlights: [
      "Find B2B leads that fit your target market",
      "Run outreach campaigns from one place",
    ],
    applicationCategory: "BusinessApplication",
    startingPriceUsd: 49,
    price: "From $49/mo",
    liveUrl: "https://leadmate-ai-five.vercel.app",
    // The product has no standalone /pricing route (it 404s); pricing lives in
    // an on-page section anchored at #pricing.
    pricingUrl: "https://leadmate-ai-five.vercel.app/#pricing",
    status: "Live",
    accent: "purple",
    categorySlug: "automation",
    featured: true,
    href: "https://leadmate-ai-five.vercel.app",
  },
  {
    slug: "promptcraft",
    name: "PromptCraft",
    tagline: "Prompt builder and library.",
    description:
      "Prompt builder and library with categories for marketing, code, image, and video.",
    highlights: [
      "Build and save reusable prompts",
      "Categories for marketing, code, image, and video",
    ],
    applicationCategory: "BusinessApplication",
    startingPriceUsd: 9,
    price: "From $9/mo",
    liveUrl: "https://promptcraft-lyart.vercel.app",
    pricingUrl: "https://promptcraft-lyart.vercel.app/pricing",
    status: "Live",
    accent: "gold",
    categorySlug: "prompt-engineering",
    featured: true,
    href: "https://promptcraft-lyart.vercel.app",
  },
];

// Returns a single venture by its slug, or undefined if not found.
export function getVentureBySlug(slug: string): Venture | undefined {
  return ventures.find((venture) => venture.slug === slug);
}

// Returns only the ventures flagged as featured.
export function getFeaturedVentures(): Venture[] {
  return ventures.filter((venture) => venture.featured);
}

// Returns other ventures sharing the same category (for "related" sections).
export function getRelatedVentures(slug: string, limit = 3): Venture[] {
  const current = getVentureBySlug(slug);
  if (!current) return [];
  return ventures
    .filter(
      (venture) =>
        venture.slug !== slug &&
        venture.categorySlug === current.categorySlug,
    )
    .slice(0, limit);
}

// All venture slugs — used by generateStaticParams for /ventures/[slug].
export const ventureSlugs = ventures.map((venture) => venture.slug);
