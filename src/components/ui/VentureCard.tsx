// VentureCard — a linked portfolio card used on the /ventures grid.
// The whole card links to the venture's generated detail page.
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import type { Venture } from "@/data/ventures";
import { getCategoryBySlug } from "@/data/blog-categories";

type VentureCardProps = {
  venture: Venture;
};

export function VentureCard({ venture }: VentureCardProps) {
  const category = getCategoryBySlug(venture.categorySlug);

  return (
    <Link href={`/ventures/${venture.slug}`} className="group block h-full">
      <GlassCard
        glow={venture.accent}
        padding="lg"
        className="flex h-full flex-col"
      >
        <div className="flex items-center justify-between gap-3">
          <Badge accent={venture.accent}>{category?.name ?? "Venture"}</Badge>
          <Badge accent={venture.accent} dot>
            {venture.status}
          </Badge>
        </div>

        <h3 className="mt-6 text-xl font-semibold text-foreground">
          {venture.name}
        </h3>
        <p className="mt-2 text-sm font-medium text-muted">{venture.tagline}</p>
        <p className="mt-4 flex-1 text-sm leading-6 text-faint">
          {venture.description}
        </p>

        <span className="mt-6 text-sm font-medium text-foreground transition-transform group-hover:translate-x-1">
          View venture →
        </span>
      </GlassCard>
    </Link>
  );
}
