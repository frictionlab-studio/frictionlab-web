// Button — the primary call-to-action primitive for the brand.
// Renders a real <button> by default, or a Next.js <Link> when `href` is set,
// so the same styling works for actions and navigation.
import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "neon" | "glass" | "ghost";
type Size = "sm" | "md" | "lg";

// Shared base styles for every variant/size.
const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-neon-blue/70 focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-ink-900 disabled:opacity-50 disabled:pointer-events-none";

// Per-variant look. Gold = premium primary; neon = glowing accent.
const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-ink-950 hover:bg-gold-400 shadow-glow-gold hover:-translate-y-0.5",
  neon:
    "bg-neon-blue-strong/90 text-white hover:bg-neon-blue-strong " +
    "shadow-glow-blue hover:shadow-glow-purple hover:-translate-y-0.5",
  glass:
    "glass text-foreground hover:border-white/20 hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-muted hover:text-foreground hover:bg-white/5",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

// When `href` is present we render a link; otherwise a button.
type ButtonAsButton = CommonProps &
  Omit<React.ComponentPropsWithoutRef<"button">, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<React.ComponentPropsWithoutRef<typeof Link>, keyof CommonProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variantStyles[variant], sizeStyles[size], className);

  if ("href" in props && props.href) {
    return (
      <Link className={classes} {...(props as ButtonAsLink)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
