// /blog — article index, generated from the posts data file.
import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { posts } from "@/data/posts";
import { blogCategories, getCategoryBySlug } from "@/data/blog-categories";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Lessons, systems, and ideas from inside FrictionLab — covering AI, automation, SaaS, AI agents, prompt engineering, and startup building.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — FrictionLab",
    description:
      "Notes on building with AI from inside the FrictionLab venture studio.",
    url: "/blog",
  },
};

// Formats an ISO date into a short, human-readable label.
function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="From the Blog"
        title={
          <>
            Notes on building with{" "}
            <span className="text-gradient-gold">AI</span>
          </>
        }
        description="Practical lessons on AI, automation, and shipping software from inside the venture studio."
      />

      {/* Category chips (informational tags for now) */}
      <Section spacing="compact" className="pb-0">
        <div className="flex flex-wrap gap-2.5">
          {blogCategories.map((category) => (
            <Badge key={category.slug} accent={category.accent}>
              {category.name}
            </Badge>
          ))}
        </div>
      </Section>

      <Section spacing="compact">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((post) => {
            const category = getCategoryBySlug(post.categorySlug);
            const accent = category?.accent ?? "blue";
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block h-full"
              >
                <GlassCard
                  glow={accent}
                  padding="lg"
                  className="flex h-full flex-col"
                >
                  <Badge accent={accent}>{category?.name ?? "Article"}</Badge>
                  <h2 className="mt-5 text-lg font-semibold leading-snug text-foreground">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-xs text-faint">
                    <span>{formatDate(post.date)}</span>
                    <span aria-hidden>·</span>
                    <span>{post.readingMinutes} min read</span>
                  </div>
                </GlassCard>
              </Link>
            );
          })}
        </div>
      </Section>
    </main>
  );
}
