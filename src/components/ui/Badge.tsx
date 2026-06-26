// Badge — small pill for statuses and category tags, tinted by accent.
import { cn } from "@/lib/cn";
import type { Accent } from "@/types/brand";

type BadgeProps = React.ComponentPropsWithoutRef<"span"> & {
  accent?: Accent;
  // Show a small leading dot (used for status pills like "Coming Soon").
  dot?: boolean;
};

// Per-accent tint: subtle background, readable text, hairline border.
const accentStyles: Record<Accent, string> = {
  blue: "bg-neon-blue/10 text-neon-blue border-neon-blue/20",
  purple: "bg-neon-purple/10 text-neon-purple border-neon-purple/20",
  gold: "bg-gold-500/10 text-gold-400 border-gold-500/20",
};

const dotStyles: Record<Accent, string> = {
  blue: "bg-neon-blue",
  purple: "bg-neon-purple",
  gold: "bg-gold-500",
};

export function Badge({
  accent = "blue",
  dot = false,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        accentStyles[accent],
        className,
      )}
      {...props}
    >
      {dot && (
        <span className={cn("h-1.5 w-1.5 rounded-full", dotStyles[accent])} />
      )}
      {children}
    </span>
  );
}
