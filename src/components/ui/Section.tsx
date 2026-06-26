// Section — a vertical page band with consistent spacing.
// Wraps its content in a Container by default so sections stay aligned.
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

type SectionProps = React.ComponentPropsWithoutRef<"section"> & {
  // Pass an id to make the section a scroll anchor (e.g. "products").
  id?: string;
  // Vertical padding density.
  spacing?: "default" | "compact" | "loose";
  // Container width forwarded to the inner Container.
  containerSize?: "default" | "narrow" | "wide";
  // Set false to render children full-bleed without the inner Container.
  contained?: boolean;
};

const spacingStyles: Record<NonNullable<SectionProps["spacing"]>, string> = {
  compact: "py-14 sm:py-16",
  default: "py-20 sm:py-28",
  loose: "py-28 sm:py-40",
};

export function Section({
  spacing = "default",
  containerSize = "default",
  contained = true,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("relative", spacingStyles[spacing], className)}
      {...props}
    >
      {contained ? (
        <Container size={containerSize}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
