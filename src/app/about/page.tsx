// /about — the FrictionLab story, mission, and values.
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { Prose } from "@/components/ui/Prose";
import type { Accent } from "@/types/brand";

export const metadata: Metadata = {
  title: "About",
  description:
    "FrictionLab is an AI venture studio operating from Bangladesh on a US LLC foundation, building AI agents, SaaS products, and automation systems for the world.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — FrictionLab",
    description:
      "An AI venture studio built in Bangladesh, engineered for the world.",
    url: "/about",
  },
};

const values: { title: string; body: string; accent: Accent }[] = [
  {
    title: "Remove friction",
    body: "Every product exists to remove the gap between an idea and its execution.",
    accent: "gold",
  },
  {
    title: "Ship with intent",
    body: "We move fast, but every decision is deliberate, measured, and revenue-aware.",
    accent: "blue",
  },
  {
    title: "Build like a system",
    body: "Shared infrastructure turns one studio into a machine that builds companies.",
    accent: "purple",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="About FrictionLab"
        title={
          <>
            An AI venture studio built in{" "}
            <span className="text-gradient-gold">Bangladesh</span>, for the{" "}
            <span className="text-gradient-neon">world</span>
          </>
        }
        description="We design, build, and scale AI-first companies — pairing global reach with a lean, AI-powered execution engine."
      />

      <Section spacing="compact">
        <Prose>
          <h2>Our mission</h2>
          <p>
            FrictionLab exists to reduce the friction between ideas, automation,
            and execution through artificial intelligence. We believe a small,
            disciplined team — equipped with the right systems and AI — can build
            like a global company.
          </p>
          <h2>How we work</h2>
          <p>
            Rather than betting everything on one product, we operate as a venture
            studio: a portfolio of AI agents, SaaS products, and automation
            platforms that share design, infrastructure, and intelligence. Each
            new venture launches faster than the last.
          </p>
        </Prose>
      </Section>

      <Section spacing="compact">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-faint">
          What we value
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <GlassCard key={value.title} glow={value.accent} padding="lg">
              <h3 className="text-lg font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{value.body}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </main>
  );
}
