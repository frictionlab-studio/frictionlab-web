// FinalCta — the closing, high-impact call to action before the footer.
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Aurora } from "@/components/visuals/Aurora";
import { LazyParticles } from "@/components/visuals/LazyParticles";

export function FinalCta() {
  return (
    <Section id="contact" spacing="loose" className="relative overflow-hidden">
      <Aurora />
      <LazyParticles className="opacity-60" density={32} />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
          Let&apos;s build the{" "}
          <span className="text-shimmer-gold">future</span> together
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
          Have an idea worth building, or want to partner with FrictionLab? The
          fastest way to remove friction is to start.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" size="lg" variant="primary">
            Start a Conversation
          </Button>
          <Button href="/ventures" size="lg" variant="glass">
            Explore Ventures
          </Button>
        </div>
      </div>
    </Section>
  );
}
