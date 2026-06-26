// FounderVision — a cinematic mission statement attributed to the founder.
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { Aurora } from "@/components/visuals/Aurora";

export function FounderVision() {
  return (
    <Section id="vision" className="relative overflow-hidden">
      <Aurora className="opacity-50" />

      <div className="relative z-10">
        <GlassCard
          glow="purple"
          padding="lg"
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold-500">
            Founder Vision
          </p>

          <blockquote className="mt-6 font-display text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
            “We exist to{" "}
            <span className="text-gradient-neon">reduce the friction</span>{" "}
            between ideas, automation, and execution — so a small team can build
            like a{" "}
            <span className="text-gradient-gold">global company</span>.”
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-4">
            {/* Initials avatar */}
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#3b82f6,#7c3aed)] font-display text-sm font-bold text-white shadow-glow-purple">
              TA
            </span>
            <div className="text-left">
              <div className="text-sm font-semibold text-foreground">
                Talukder Abir Hasan
              </div>
              <div className="text-xs text-faint">Founder &amp; CEO, FrictionLab</div>
            </div>
          </div>
        </GlassCard>
      </div>
    </Section>
  );
}
