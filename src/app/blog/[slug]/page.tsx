// /blog/[slug] — article page generated for every post in the data file.
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Aurora } from "@/components/visuals/Aurora";
import { postSlugs, getPostBySlug } from "@/data/posts";
import { getCategoryBySlug } from "@/data/blog-categories";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPostingSchema } from "@/lib/jsonld";
import { siteConfig } from "@/lib/site";

// Pre-render one static page per post at build time.
export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Formats an ISO date into a short, human-readable label.
function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// Per-article SEO metadata (uses the OpenGraph "article" type).
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: `${post.title} — ${siteConfig.name}`,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const category = getCategoryBySlug(post.categorySlug);
  const accent = category?.accent ?? "blue";

  return (
    <main className="flex-1">
      <JsonLd
        data={blogPostingSchema({
          title: post.title,
          description: post.excerpt,
          date: post.date,
          author: post.author,
          slug: post.slug,
        })}
      />

      {/* Article header */}
      <section className="relative overflow-hidden pt-28 pb-10 sm:pt-32">
        <Aurora className="opacity-50" />
        <Container size="narrow" className="relative z-10">
          <Link
            href="/blog"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            ← All articles
          </Link>

          <div className="mt-6">
            <Badge accent={accent}>{category?.name ?? "Article"}</Badge>
          </div>

          <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-faint">
            <span>{post.author}</span>
            <span aria-hidden>·</span>
            <span>{formatDate(post.date)}</span>
            <span aria-hidden>·</span>
            <span>{post.readingMinutes} min read</span>
          </div>
        </Container>
      </section>

      {/* Article body */}
      <Container size="narrow" className="pb-24">
        <article className="space-y-6">
          <p className="text-lg leading-8 text-muted">{post.excerpt}</p>
          {post.content.map((block, index) =>
            block.type === "heading" ? (
              <h2
                key={index}
                className="pt-4 text-2xl font-semibold text-foreground"
              >
                {block.text}
              </h2>
            ) : (
              <p key={index} className="leading-8 text-muted">
                {block.text}
              </p>
            ),
          )}
        </article>
      </Container>
    </main>
  );
}
