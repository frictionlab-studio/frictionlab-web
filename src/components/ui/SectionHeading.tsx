// SectionHeading — consistent eyebrow + title + optional description block.
// Keeps every section's header styling identical across the homepage.
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  // Small uppercase label above the title.
  eyebrow?: string;
  // Main heading text (can include highlighted spans via children-like nodes).
  title: React.ReactNode;
  // Optional supporting paragraph under the title.
  description?: React.ReactNode;
  // Text alignment; centered is the default for marketing sections.
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold-500">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
