// /careers — how to work with FrictionLab and current openings.
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Accent } from "@/types/brand";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join FrictionLab — an AI venture studio building intelligent software from Bangladesh for the world. Explore roles and ways to collaborate.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers — FrictionLab",
    description: "Build the future of AI-first companies with FrictionLab.",
    url: "/careers",
  },
};

const roles: {
  title: string;
  type: string;
  body: string;
  accent: Accent;
}[] = [
  {
    title: "AI Engineer",
    type: "Remote · Contract",
    body: "Design and ship autonomous agents and AI features across the portfolio.",
    accent: "blue",
  },
  {
    title: "Full-Stack Developer",
    type: "Remote · Contract",
    body: "Build SaaS products end to end with Next.js, TypeScript, and Supabase.",
    accent: "purple",
  },
  {
    title: "Growth & Content",
    type: "Remote · Part-time",
    body: "Grow the FrictionLab audience and tell the story of each venture.",
    accent: "gold",
  },
];

export default function CareersPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Careers"
        title={
          <>
            Build the future of{" "}
            <span className="text-gradient-neon">AI-first</span> companies
          </>
        }
        description="FrictionLab is an early, fast-moving studio. We work with curious builders who want ownership, speed, and real impact."
      />

      <Section spacing="compact">
        <div className="grid gap-6 md:grid-cols-3">
          {roles.map((role) => (
            <GlassCard
              key={role.title}
              glow={role.accent}
              padding="lg"
              className="flex flex-col"
            >
              <Badge accent={role.accent}>{role.type}</Badge>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {role.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted">
                {role.body}
              </p>
              <div className="mt-6">
                <Button href="/contact" size="sm" variant="glass">
                  Apply
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>

        <p className="mt-10 text-sm text-faint">
          Don&apos;t see your role? We&apos;re always open to exceptional
          builders —{" "}
          <a
            href="/contact"
            className="text-neon-blue underline underline-offset-4"
          >
            introduce yourself
          </a>
          .
        </p>
      </Section>
    </main>
  );
}
