// Prose — consistent typographic styling for long-form text (legal pages,
// policies). Styles nested headings, paragraphs, and lists via Tailwind.
import { cn } from "@/lib/cn";

type ProseProps = {
  children: React.ReactNode;
  className?: string;
};

export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={cn(
        "max-w-3xl text-muted",
        "[&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground",
        "[&_p]:mt-4 [&_p]:leading-7",
        "[&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6",
        "[&_a]:text-neon-blue [&_a]:underline [&_a]:underline-offset-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
