// Blog category data — the topics FrictionLab publishes under.
// Each category has a URL-safe slug, a label, a short description, and an accent.
import type { Accent } from "@/types/brand";

export type BlogCategory = {
  // URL-safe identifier, e.g. used at /blog/category/<slug>.
  slug: string;
  // Display name shown in tags and filters.
  name: string;
  // One-line description for category pages and SEO.
  description: string;
  // Neon accent used for the category tag/glow.
  accent: Accent;
};

export const blogCategories: BlogCategory[] = [
  {
    slug: "ai",
    name: "AI",
    description: "Applied artificial intelligence, models, and real-world use.",
    accent: "blue",
  },
  {
    slug: "automation",
    name: "Automation",
    description: "Workflows, pipelines, and systems that remove manual work.",
    accent: "purple",
  },
  {
    slug: "saas",
    name: "SaaS",
    description: "Building, launching, and scaling software products.",
    accent: "blue",
  },
  {
    slug: "ai-agents",
    name: "AI Agents",
    description: "Autonomous agents that plan, act, and execute real tasks.",
    accent: "purple",
  },
  {
    slug: "prompt-engineering",
    name: "Prompt Engineering",
    description: "Designing prompts, context, and reliable AI workflows.",
    accent: "gold",
  },
  {
    slug: "startup-building",
    name: "Startup Building",
    description: "Founder lessons on shipping, growth, and venture studios.",
    accent: "gold",
  },
  {
    slug: "education-technology",
    name: "Education Technology",
    description: "AI in learning, study abroad, and admissions guidance.",
    accent: "blue",
  },
  {
    slug: "finance-ai",
    name: "Finance AI",
    description: "AI for markets, trading, and financial intelligence.",
    accent: "gold",
  },
  {
    slug: "creator-economy",
    name: "Creator Economy",
    description: "Content, brand, and growth tooling for modern creators.",
    accent: "purple",
  },
];

// Returns a single category by its slug, or undefined if not found.
export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return blogCategories.find((category) => category.slug === slug);
}
