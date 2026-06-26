// JSON-LD structured data builders.
// These produce schema.org objects that help search engines and social
// platforms understand the site. Rendered via the <JsonLd /> component.
import { siteConfig, socialLinks } from "@/lib/site";
import type { Venture } from "@/data/ventures";

// Stable @id for the Organization so other schemas can reference it.
const ORG_ID = `${siteConfig.url}/#organization`;

// Organization schema — the company behind the site.
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    founder: {
      "@type": "Person",
      name: "Talukder Abir Hasan",
      jobTitle: "Founder & CEO",
    },
    sameAs: socialLinks.map((link) => link.href),
  };
}

// WebSite schema — the site as a whole.
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { "@id": ORG_ID },
  };
}

// Product schema — a single venture/product in the portfolio.
export function productSchema(venture: Venture) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: venture.name,
    description: venture.description,
    url: `${siteConfig.url}/ventures/${venture.slug}`,
    brand: { "@type": "Brand", name: siteConfig.name },
    category: venture.categorySlug,
  };
}

// BlogPosting schema — a single article.
export function blogPostingSchema(input: {
  title: string;
  description: string;
  date: string;
  author: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    datePublished: input.date,
    author: { "@type": "Person", name: input.author },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: `${siteConfig.url}/blog/${input.slug}`,
    url: `${siteConfig.url}/blog/${input.slug}`,
  };
}
