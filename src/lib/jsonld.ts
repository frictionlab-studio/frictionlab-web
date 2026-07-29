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

// SoftwareApplication schema — a single venture described as a web app.
// Deliberately minimal: no aggregateRating, review, or offers/pricing fields,
// because we have no real review or rating data yet and publishing fabricated
// values would be misleading structured data (and risk Google penalties).
export function softwareApplicationSchema(venture: Venture) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: venture.name,
    // Reuse the page's own meta description verbatim (same fallback as the
    // <meta> tag) — no new marketing copy is invented here.
    description: venture.metaDescription ?? venture.description,
    // The product's own live URL, not the FrictionLab detail page.
    url: venture.liveUrl,
    applicationCategory: venture.applicationCategory,
    operatingSystem: "Web",
  };
}

// BreadcrumbList schema — the Home > Ventures > <Product> trail for a detail
// page, using the site's real URLs.
export function breadcrumbSchema(venture: Venture) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Ventures",
        item: `${siteConfig.url}/ventures`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: venture.name,
        item: `${siteConfig.url}/ventures/${venture.slug}`,
      },
    ],
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
