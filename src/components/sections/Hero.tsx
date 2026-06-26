"use client";

// Hero — the cinematic opening: aurora + particles + a neural orb that
// gently parallaxes with the mouse, headline, subheadline, and CTAs.
import { useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Aurora } from "@/components/visuals/Aurora";
import { LazyParticles } from "@/components/visuals/LazyParticles";
import { NeuralOrb } from "@/components/visuals/NeuralOrb";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  // Normalized mouse offset from center, range roughly -1..1 on each axis.
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Translate the mouse position into a subtle parallax offset.
  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setOffset({ x, y });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      className="relative flex min-h-[88vh] items-center overflow-hidden pt-16"
    >
      {/* Layered backdrop */}
      <Aurora
        className="transition-transform duration-300 ease-out"
        // Aurora drifts opposite the orb for depth.
      />
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <LazyParticles className="opacity-80" />

      <Container size="wide" className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold-500">
              AI Venture Studio · Bangladesh → Global
            </p>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl">
              Building the Future with{" "}
              <span className="text-shimmer-gold">Artificial Intelligence</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg lg:mx-0">
              FrictionLab is an AI Venture Studio building intelligent software,
              autonomous agents, SaaS products, and next-generation digital
              companies from Bangladesh for the world.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button href="/ventures" size="lg" variant="primary">
                Explore Ventures
              </Button>
              <Button href="/about" size="lg" variant="glass">
                The Vision
              </Button>
            </div>
          </div>

          {/* Neural orb with mouse parallax */}
          <div className="relative mx-auto flex w-full max-w-md justify-center lg:max-w-none">
            <div
              className="will-change-transform transition-transform duration-300 ease-out"
              style={{
                transform: `translate3d(${offset.x * 24}px, ${
                  offset.y * 24
                }px, 0)`,
              }}
            >
              <NeuralOrb />
            </div>
          </div>
        </div>
      </Container>

      {/* Fade into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-900" />
    </section>
  );
}
