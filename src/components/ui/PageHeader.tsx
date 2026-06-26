// PageHeader — the standard top band for inner pages (eyebrow + title + intro).
// Includes an aurora backdrop and clears the sticky navbar with top padding.
import { Container } from "@/components/ui/Container";
import { Aurora } from "@/components/visuals/Aurora";

type PageHeaderProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16">
      <Aurora className="opacity-60" />
      <div className="bg-grid pointer-events-none absolute inset-0" />

      <Container size="wide" className="relative z-10">
        {eyebrow && (
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold-500">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
