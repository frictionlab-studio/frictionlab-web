// FeaturedVentures — spotlight cards for the flagship ventures, pulled from
// the ventures data and tagged with their status and blog category.
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getFeaturedVentures } from "@/data/ventures";
import { getCategoryBySlug } from "@/data/blog-categories";

export function FeaturedVentures() {
  const featured = getFeaturedVentures();

  return (
    <Section id="ventures">
      <SectionHeading
        eyebrow="Featured Ventures"
        title={
          <>
            The products leading the{" "}
            <span className="text-gradient-neon">portfolio</span>
          </>
        }
        description="A look at the ventures currently in active development inside FrictionLab."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {featured.map((venture) => {
          const category = getCategoryBySlug(venture.categorySlug);
          return (
            <GlassCard
              key={venture.slug}
              glow={venture.accent}
              padding="lg"
              className="flex flex-col"
            >
              <div className="flex items-center justify-between gap-3">
                <Badge accent={venture.accent}>
                  {category?.name ?? "Venture"}
                </Badge>
                <Badge accent={venture.accent} dot>
                  {venture.status}
                </Badge>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {venture.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-muted">
                {venture.tagline}
              </p>
              <p className="mt-4 flex-1 text-sm leading-6 text-faint">
                {venture.description}
              </p>

              <div className="mt-6">
                {venture.href ? (
                  <Button href={venture.href} size="sm" variant="glass">
                    Learn more
                  </Button>
                ) : (
                  <span className="text-xs font-medium uppercase tracking-widest text-faint">
                    Coming soon
                  </span>
                )}
              </div>
            </GlassCard>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <Button href="/ventures" size="md" variant="ghost">
          View the full venture universe →
        </Button>
      </div>
    </Section>
  );
}
