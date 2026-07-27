// /ventures — the full portfolio grid, generated from the ventures data file.
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { VentureCard } from "@/components/ui/VentureCard";
import { ventures } from "@/data/ventures";

export const metadata: Metadata = {
  title: "AI SaaS Products and Automation Platforms",
  description:
    "Browse the FrictionLab portfolio of AI SaaS products and automation platforms, from study-abroad planning to property management, lead generation, and prompts.",
  alternates: { canonical: "/ventures" },
  openGraph: {
    title: "AI SaaS Products and Automation Platforms — FrictionLab",
    description:
      "Browse the FrictionLab portfolio of AI SaaS products and automation platforms, from study-abroad planning to property management, lead generation, and prompts.",
    url: "/ventures",
  },
};

export default function VenturesPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="The Portfolio"
        title={
          <>
            A growing universe of{" "}
            <span className="text-gradient-neon">AI ventures</span>
          </>
        }
        description="Every product below is built on shared FrictionLab infrastructure, design, and AI foundations — so each venture launches faster than the last."
      />

      <Section spacing="compact">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ventures.map((venture) => (
            <VentureCard key={venture.slug} venture={venture} />
          ))}
        </div>
      </Section>
    </main>
  );
}
