// TechnologyStack — the core tools the studio builds on, grouped by layer.
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import type { Accent } from "@/types/brand";

const stack: { group: string; accent: Accent; tools: string[] }[] = [
  {
    group: "Intelligence",
    accent: "blue",
    tools: ["Claude API", "OpenAI", "LangChain", "Python"],
  },
  {
    group: "Product",
    accent: "purple",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    group: "Infrastructure",
    accent: "gold",
    tools: ["Supabase", "Node.js", "Make.com", "Stripe"],
  },
];

export function TechnologyStack() {
  return (
    <Section id="stack">
      <SectionHeading
        eyebrow="Technology Stack"
        title={
          <>
            A modern stack tuned for{" "}
            <span className="text-gradient-neon">speed</span>
          </>
        }
        description="Battle-tested tools that let one studio ship like a full engineering team."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {stack.map((layer) => (
          <GlassCard key={layer.group} glow={layer.accent} padding="lg">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-faint">
              {layer.group}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {layer.tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-foreground"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
