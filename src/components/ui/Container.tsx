// Container — centers content and caps its width with consistent gutters.
// Use it to keep every section aligned to the same horizontal rhythm.
import { cn } from "@/lib/cn";

type ContainerProps = React.ComponentPropsWithoutRef<"div"> & {
  // Visual width. "default" suits most sections; "narrow" for prose/text blocks.
  size?: "default" | "narrow" | "wide";
};

const sizeStyles: Record<NonNullable<ContainerProps["size"]>, string> = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export function Container({
  size = "default",
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-10",
        sizeStyles[size],
        className,
      )}
      {...props}
    />
  );
}
