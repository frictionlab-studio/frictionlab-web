// VentureUniverse — a constellation view of the whole portfolio orbiting the
// FrictionLab core. Orbital layout on large screens, a clean grid on mobile.
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Aurora } from "@/components/visuals/Aurora";
import { ventures } from "@/data/ventures";
import type { Accent } from "@/types/brand";

// Dot color per accent, reused for both layouts.
const dotColor: Record<Accent, string> = {
  blue: "bg-neon-blue shadow-glow-blue",
  purple: "bg-neon-purple shadow-glow-purple",
  gold: "bg-gold-500 shadow-glow-gold",
};

export function VentureUniverse() {
  const count = ventures.length;

  return (
    <Section id="universe" className="relative overflow-hidden">
      <Aurora className="opacity-60" />

      <div className="relative z-10">
        <SectionHeading
          eyebrow="Venture Universe"
          title={
            <>
              One studio, a{" "}
              <span className="text-gradient-neon">constellation</span> of
              companies
            </>
          }
          description="Every FrictionLab venture is a node in the same intelligent system — sharing infrastructure, design, and AI foundations."
        />

        {/* Orbital layout — large screens only */}
        <div className="relative mx-auto mt-16 hidden aspect-square w-full max-w-2xl lg:block">
          {/* Decorative orbit rings */}
          <div className="animate-spin-slow absolute inset-[6%] rounded-full border border-white/5" />
          <div className="animate-spin-slow-reverse absolute inset-[24%] rounded-full border border-white/5" />

          {/* Central core */}
          <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full glass text-center shadow-glow-gold">
            <span className="font-display text-sm font-bold">
              <span className="text-gradient-gold">Friction</span>Lab
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-widest text-faint">
              Core
            </span>
          </div>

          {/* Orbiting venture nodes */}
          {ventures.map((venture, index) => {
            const angle = (index / count) * Math.PI * 2 - Math.PI / 2;
            const radius = 42; // percent from center
            const left = 50 + radius * Math.cos(angle);
            const top = 50 + radius * Math.sin(angle);
            return (
              <div
                key={venture.slug}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full glass px-3 py-1.5"
                style={{ left: `${left}%`, top: `${top}%` }}
              >
                <span
                  className={`h-2 w-2 rounded-full ${dotColor[venture.accent]}`}
                />
                <span className="whitespace-nowrap text-xs font-medium text-foreground">
                  {venture.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Grid layout — mobile / tablet */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:hidden">
          {ventures.map((venture) => (
            <div
              key={venture.slug}
              className="flex items-center gap-2 rounded-full glass px-3 py-2"
            >
              <span
                className={`h-2 w-2 shrink-0 rounded-full ${dotColor[venture.accent]}`}
              />
              <span className="truncate text-xs font-medium text-foreground">
                {venture.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
