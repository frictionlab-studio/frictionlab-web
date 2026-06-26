// Ventures data — the FrictionLab portfolio of products and platforms.
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
  // Fuller description for detail pages and SEO.
  description: string;
  // Bullet highlights shown on the venture detail page.
  highlights: string[];
  // Lifecycle status badge.
  status: VentureStatus;
  // Neon accent used for the card glow/tag.
  accent: Accent;
  // Linked blog category slug (see blog-categories.ts).
  categorySlug: string;
  // Whether to feature this venture prominently.
  featured: boolean;
  // External or internal link. null when no destination exists yet.
  href: string | null;
};

export const ventures: Venture[] = [
  {
    slug: "frictionlab",
    name: "FrictionLab",
    tagline: "The AI venture studio behind every product here.",
    description:
      "FrictionLab is the main AI venture studio website — the home base that builds, launches, and scales a portfolio of AI agents, SaaS products, and automation systems.",
    highlights: [
      "Shared design system and AI infrastructure across every venture",
      "Rapid 0-to-1 product development powered by AI",
      "US LLC foundation operating from Dhaka, Bangladesh",
    ],
    status: "In Development",
    accent: "gold",
    categorySlug: "startup-building",
    featured: true,
    href: "/",
  },
  {
    slug: "finmet-ai",
    name: "Finmet AI",
    tagline: "Finance, markets, and trading intelligence — automated.",
    description:
      "Finmet AI is an AI-powered finance, market intelligence, trading, and financial analysis platform that turns raw market data into clear, actionable decisions.",
    highlights: [
      "Real-time market intelligence and signal detection",
      "AI-assisted trading strategy and risk analysis",
      "Plain-language financial summaries for faster decisions",
    ],
    status: "In Development",
    accent: "blue",
    categorySlug: "finance-ai",
    featured: true,
    href: null,
  },
  {
    slug: "tube-command",
    name: "Tube Command",
    tagline: "Your AI command center for YouTube growth.",
    description:
      "Tube Command is an AI YouTube growth, video strategy, SEO, and creator command center that helps channels plan, optimize, and scale their content.",
    highlights: [
      "AI-driven video ideas, titles, and SEO optimization",
      "Channel analytics translated into a clear growth plan",
      "Content calendar and strategy in one command center",
    ],
    status: "Coming Soon",
    accent: "purple",
    categorySlug: "creator-economy",
    featured: true,
    href: null,
  },
  {
    slug: "leadmate-ai",
    name: "Leadmate AI",
    tagline: "AI lead generation, CRM, and sales on autopilot.",
    description:
      "Leadmate AI is an AI lead generation, CRM, outreach, and sales automation platform that finds, nurtures, and converts leads with minimal manual effort.",
    highlights: [
      "Automated lead sourcing and enrichment",
      "Personalized AI outreach at scale",
      "Built-in CRM with smart follow-up sequences",
    ],
    status: "Coming Soon",
    accent: "blue",
    categorySlug: "automation",
    featured: false,
    href: null,
  },
  {
    slug: "lumora",
    name: "Lumora",
    tagline: "Creative, brand, and visual intelligence in one studio.",
    description:
      "Lumora is an AI creative, brand, content, and visual intelligence platform that produces on-brand visuals and content at the speed of imagination.",
    highlights: [
      "On-brand image, video, and content generation",
      "Brand kits that keep every asset consistent",
      "Creative workflows tuned for marketing teams",
    ],
    status: "Coming Soon",
    accent: "purple",
    categorySlug: "creator-economy",
    featured: false,
    href: null,
  },
  {
    slug: "scholar-pilot",
    name: "Scholar Pilot",
    tagline: "AI co-pilot for study abroad and admissions.",
    description:
      "Scholar Pilot is an AI education consultancy platform for study abroad, IELTS, TOEFL, GRE, GMAT, and SAT prep, university guidance, scholarships, and admissions.",
    highlights: [
      "Personalized university and scholarship matching",
      "AI tutoring for IELTS, TOEFL, GRE, GMAT, and SAT",
      "Step-by-step admissions and application guidance",
    ],
    status: "Coming Soon",
    accent: "gold",
    categorySlug: "education-technology",
    featured: false,
    href: null,
  },
  {
    slug: "operator",
    name: "Operator",
    tagline: "Your personal AI operator for getting things done.",
    description:
      "Operator is a personal AI operator for productivity, habit tracking, workflow automation, business execution, and voice-agent style assistance.",
    highlights: [
      "Voice-agent style assistance for daily execution",
      "Habit tracking and automated workflows",
      "Turns goals into scheduled, actionable steps",
    ],
    status: "Coming Soon",
    accent: "blue",
    categorySlug: "ai-agents",
    featured: false,
    href: null,
  },
  {
    slug: "prom-craft",
    name: "Prom Craft",
    tagline: "Engineer, organize, and reuse world-class prompts.",
    description:
      "Prom Craft is a prompt engineering, AI workflow, and prompt library platform for designing, testing, and managing reusable prompts at scale.",
    highlights: [
      "Versioned, reusable prompt library",
      "Test and compare prompt performance",
      "Shareable AI workflows for teams",
    ],
    status: "Coming Soon",
    accent: "purple",
    categorySlug: "prompt-engineering",
    featured: false,
    href: null,
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
