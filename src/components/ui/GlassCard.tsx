// GlassCard — a frosted glassmorphism panel for features, stats, products.
// Built on the .glass utility from globals.css; add a neon glow on hover.
import { cn } from "@/lib/cn";

type GlassCardProps = React.ComponentPropsWithoutRef<"div"> & {
  // Accent glow shown on hover. "none" keeps it flat.
  glow?: "blue" | "purple" | "gold" | "none";
  // Inner padding density.
  padding?: "sm" | "md" | "lg";
};

const glowStyles: Record<NonNullable<GlassCardProps["glow"]>, string> = {
  none: "",
  blue: "hover:shadow-glow-blue",
  purple: "hover:shadow-glow-purple",
  gold: "hover:shadow-glow-gold",
};

const paddingStyles: Record<NonNullable<GlassCardProps["padding"]>, string> = {
  sm: "p-5",
  md: "p-7",
  lg: "p-9",
};

export function GlassCard({
  glow = "blue",
  padding = "md",
  className,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl transition-all duration-300 hover:-translate-y-1",
        paddingStyles[padding],
        glowStyles[glow],
        className,
      )}
      {...props}
    />
  );
}
