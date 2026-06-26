// NeuralOrb — a glowing 3D-inspired AI core: a luminous sphere wrapped in
// rotating orbital rings with drifting neon nodes. Pure CSS, decorative only.
import { cn } from "@/lib/cn";

type NeuralOrbProps = {
  className?: string;
};

export function NeuralOrb({ className }: NeuralOrbProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative aspect-square w-full max-w-md select-none",
        className,
      )}
    >
      {/* Ambient halo behind the orb */}
      <div className="animate-pulse-glow absolute inset-0 rounded-full bg-neon-blue/20 blur-3xl" />

      {/* Rotating outer ring with a node riding on it */}
      <div className="animate-spin-slow absolute inset-[8%] rounded-full border border-white/10">
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-neon-blue shadow-glow-blue" />
      </div>

      {/* Counter-rotating mid ring (tilted) with a purple node */}
      <div className="animate-spin-slow-reverse absolute inset-[20%] rounded-full border border-white/10 [transform:rotateX(64deg)]">
        <span className="absolute -right-1.5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-neon-purple shadow-glow-purple" />
      </div>

      {/* Inner tilted ring with a gold node */}
      <div className="animate-spin-slow absolute inset-[20%] rounded-full border border-white/10 [transform:rotateY(70deg)]">
        <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-gold-500 shadow-glow-gold" />
      </div>

      {/* The luminous core sphere (radial highlight = 3D shading) */}
      <div className="animate-float-slow absolute inset-[30%] rounded-full bg-[radial-gradient(circle_at_32%_28%,#bfe6ff_0%,#3b82f6_34%,#1e1b4b_72%,#0a1124_100%)] shadow-[0_0_60px_-6px_rgba(56,189,248,0.7),inset_0_0_40px_-10px_rgba(255,255,255,0.6)]">
        {/* Specular highlight */}
        <div className="absolute left-[22%] top-[18%] h-1/3 w-1/3 rounded-full bg-white/40 blur-md" />
      </div>
    </div>
  );
}
