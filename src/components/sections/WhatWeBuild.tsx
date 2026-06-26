// WhatWeBuild — four core capability cards describing what the studio ships.
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import type { Accent } from "@/types/brand";

// Each capability has a tiny inline SVG icon so there are no image requests.
const capabilities: {
  title: string;
  body: string;
  accent: Accent;
  icon: React.ReactNode;
}[] = [
  {
    title: "Autonomous Agents",
    body: "AI agents that plan, decide, and execute real workflows end to end — not scripted demos.",
    accent: "blue",
    icon: (
      <path d="M12 2v3m0 14v3m10-10h-3M5 12H2m15.5-5.5-2 2m-7 7-2 2m11 0-2-2m-7-7-2-2M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
    ),
  },
  {
    title: "SaaS Products",
    body: "Focused, beautiful software products shipped fast and refined directly with users.",
    accent: "purple",
    icon: <path d="M3 5h18v11H3zM3 16l3 3h12l3-3M9 9h6M9 12h4" />,
  },
  {
    title: "Automation Systems",
    body: "Pipelines that connect tools and remove the manual friction between idea and outcome.",
    accent: "gold",
    icon: (
      <path d="M4 7h10m-4-3 4 3-4 3M20 17H10m4 3-4-3 4-3M4 7v0m16 10v0" />
    ),
  },
  {
    title: "Digital Companies",
    body: "Whole AI-first companies — brand, product, and growth — built inside one venture studio.",
    accent: "blue",
    icon: <path d="M4 21V8l8-5 8 5v13M9 21v-6h6v6M9 11h.01M15 11h.01" />,
  },
];

export function WhatWeBuild() {
  return (
    <Section id="approach">
      <SectionHeading
        eyebrow="What FrictionLab Builds"
        title={
          <>
            Intelligent software, shipped with{" "}
            <span className="text-gradient-gold">intent</span>
          </>
        }
        description="Four building blocks power every venture in the portfolio."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((item) => (
          <GlassCard key={item.title} glow={item.accent} padding="md">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-foreground"
                aria-hidden
              >
                {item.icon}
              </svg>
            </span>
            <h3 className="mt-5 text-lg font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
