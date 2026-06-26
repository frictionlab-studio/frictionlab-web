// Aurora — soft, slowly drifting neon gradient blobs used as a section backdrop.
// Purely decorative, so it is hidden from screen readers and ignores pointers.
import { cn } from "@/lib/cn";

type AuroraProps = {
  className?: string;
};

export function Aurora({ className }: AuroraProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {/* Blue blob */}
      <div className="animate-aurora absolute -left-24 top-[-10%] h-[28rem] w-[28rem] rounded-full bg-neon-blue-strong/30 blur-[120px]" />
      {/* Purple blob */}
      <div className="animate-aurora absolute right-[-8%] top-[10%] h-[32rem] w-[32rem] rounded-full bg-neon-purple/25 blur-[130px] [animation-delay:-6s]" />
      {/* Gold ember */}
      <div className="animate-aurora absolute bottom-[-15%] left-1/3 h-[24rem] w-[24rem] rounded-full bg-gold-500/15 blur-[120px] [animation-delay:-12s]" />
    </div>
  );
}
