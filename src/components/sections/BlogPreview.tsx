// BlogPreview — three most recent posts, each tagged with its category.
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getRecentPosts } from "@/data/posts";
import { getCategoryBySlug } from "@/data/blog-categories";

// Formats an ISO date into a short, human-readable label.
function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogPreview() {
  const recent = getRecentPosts(3);

  return (
    <Section id="blog">
      <SectionHeading
        eyebrow="From the Blog"
        title={
          <>
            Notes on building with{" "}
            <span className="text-gradient-gold">AI</span>
          </>
        }
        description="Lessons, systems, and ideas from inside the venture studio."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {recent.map((post) => {
          const category = getCategoryBySlug(post.categorySlug);
          const accent = category?.accent ?? "blue";
          return (
            <GlassCard
              key={post.slug}
              glow={accent}
              padding="lg"
              className="flex flex-col"
            >
              <Badge accent={accent}>{category?.name ?? "Article"}</Badge>

              <h3 className="mt-5 text-lg font-semibold leading-snug text-foreground">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                {post.excerpt}
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs text-faint">
                <span>{formatDate(post.date)}</span>
                <span aria-hidden>·</span>
                <span>{post.readingMinutes} min read</span>
              </div>
            </GlassCard>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <Button href="/blog" size="md" variant="ghost">
          Read all articles →
        </Button>
      </div>
    </Section>
  );
}
