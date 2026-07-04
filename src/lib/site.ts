// Central place for site-wide constants (name, tagline, URLs).
// Import from "@/lib/site" anywhere instead of hardcoding these strings.

export const siteConfig = {
  name: "FrictionLab",
  // Short marketing tagline used in metadata and headers.
  tagline: "AI Venture Studio",
  // One-line description used for SEO and social sharing.
  description:
    "FrictionLab is an AI-first venture studio building AI agents, SaaS products, and automation systems. We reduce friction between ideas, automation, and execution.",
  // Public production URL. Override with NEXT_PUBLIC_SITE_URL in .env.local.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://frictionlabai.com",
} as const;

// Primary navigation links shared by the Navbar and Footer.
export const navLinks = [
  { label: "Ventures", href: "/ventures" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

// Legal + contact links shown in the footer.
export const legalLinks = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Contact", href: "/contact" },
] as const;

// Social / external links used in the footer.
// `icon` maps to an SVG in Footer.tsx; `label` is used for accessibility.
export const socialLinks = [
  { label: "X", icon: "x", href: "https://x.com/frictionlabai" },
  { label: "Facebook", icon: "facebook", href: "https://www.facebook.com/frictionlabai" },
  { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/frictionlab.ai" },
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/company/frictionlab-ai" },
  { label: "GitHub", icon: "github", href: "https://github.com/frictionlab-studio" },
] as const;
