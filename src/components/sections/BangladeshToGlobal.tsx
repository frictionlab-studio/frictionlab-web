// BangladeshToGlobal — the origin narrative: built in Dhaka, shipped worldwide.
// Two-column layout with a glass "globe" visual and supporting stats.
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

const stats = [
  { value: "US LLC", label: "Global foundation" },
  { value: "Dhaka", label: "Built from Bangladesh" },
  { value: "8+", label: "Ventures in motion" },
  { value: "24/7", label: "AI-powered execution" },
];

export function BangladeshToGlobal() {
  return (
    <Section id="global" className="relative overflow-hidden">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Copy */}
        <div>
          <Badge accent="gold" dot>
            Bangladesh → Global
          </Badge>
          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
            Built in <span className="text-gradient-gold">Bangladesh</span>,
            engineered for the <span className="text-gradient-neon">world</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
            FrictionLab operates on a US LLC foundation while building from
            Dhaka — pairing a global market reach with a relentless,
            cost-efficient execution engine. Distance is just another form of
            friction, and AI removes it.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:max-w-md">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="font-display text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-faint">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Glass globe visual */}
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="animate-pulse-glow absolute inset-0 rounded-full bg-neon-purple/15 blur-3xl" />
          <GlassCard
            glow="none"
            padding="lg"
            className="relative flex h-full items-center justify-center rounded-full"
          >
            {/* Longitude/latitude rings */}
            <div className="animate-spin-slow absolute inset-[12%] rounded-full border border-white/10" />
            <div className="absolute inset-[12%] rounded-full border border-white/10 [transform:rotateY(70deg)]" />
            <div className="absolute inset-[12%] rounded-full border border-white/10 [transform:rotateX(70deg)]" />
            {/* Origin pin */}
            <span className="absolute left-[58%] top-[42%] h-3 w-3 -translate-x-1/2 rounded-full bg-gold-500 shadow-glow-gold" />
            <span className="relative font-mono text-xs uppercase tracking-[0.3em] text-faint">
              23.8°N · 90.4°E
            </span>
          </GlassCard>
        </div>
      </div>
    </Section>
  );
}
