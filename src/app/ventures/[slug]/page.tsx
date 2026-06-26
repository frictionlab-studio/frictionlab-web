// /ventures/[slug] — detail page generated for every venture in the data file.
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { VentureCard } from "@/components/ui/VentureCard";
import { Aurora } from "@/components/visuals/Aurora";
import {
  ventureSlugs,
  getVentureBySlug,
  getRelatedVentures,
} from "@/data/ventures";
import { getCategoryBySlug } from "@/data/blog-categories";
import { JsonLd } from "@/components/seo/JsonLd";
import { productSchema } from "@/lib/jsonld";
import { siteConfig } from "@/lib/site";

// Pre-render one static page per venture at build time.
export function generateStaticParams() {
  return ventureSlugs.map((slug) => ({ slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Per-venture SEO metadata.
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const venture = getVentureBySlug(slug);
  if (!venture) return { title: "Venture not found" };

  return {
    title: venture.name,
    description: venture.description,
    alternates: { canonical: `/ventures/${venture.slug}` },
    openGraph: {
      title: `${venture.name} — ${siteConfig.name}`,
      description: venture.description,
      url: `/ventures/${venture.slug}`,
      type: "website",
    },
  };
}

export default async function VentureDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const venture = getVentureBySlug(slug);
  if (!venture) notFound();

  const category = getCategoryBySlug(venture.categorySlug);
  const related = getRelatedVentures(venture.slug);

  return (
    <main className="flex-1">
      <JsonLd data={productSchema(venture)} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32">
        <Aurora className="opacity-60" />
        <Container size="wide" className="relative z-10">
          <Link
            href="/ventures"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            ← All ventures
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Badge accent={venture.accent}>{category?.name ?? "Venture"}</Badge>
            <Badge accent={venture.accent} dot>
              {venture.status}
            </Badge>
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            {venture.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{venture.tagline}</p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-faint">
            {venture.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/contact" size="md" variant="primary">
              Work with us on this
            </Button>
            {venture.href && venture.href !== "/" && (
              <Button href={venture.href} size="md" variant="glass">
                Visit product
              </Button>
            )}
          </div>
        </Container>
      </section>

      {/* Highlights */}
      <Section spacing="compact">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-faint">
          What it delivers
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {venture.highlights.map((highlight) => (
            <div
              key={highlight}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm leading-6 text-muted"
            >
              {highlight}
            </div>
          ))}
        </div>
      </Section>

      {/* Related ventures */}
      {related.length > 0 && (
        <Section spacing="compact">
          <h2 className="text-xl font-semibold text-foreground">
            Related ventures
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <VentureCard key={item.slug} venture={item} />
            ))}
          </div>
        </Section>
      )}
    </main>
  );
}
