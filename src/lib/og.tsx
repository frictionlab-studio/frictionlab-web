// Shared builder for branded 1200x630 Open Graph / Twitter card images.
// Every route's `opengraph-image` file calls this so each page gets its own
// social card while staying visually consistent. Rendered at build time by
// next/og (Satori) — no external image assets or fonts required.
import { ImageResponse } from "next/og";
import type { Accent } from "@/types/brand";

// Standard OG / Twitter card dimensions, exported so route files can re-use them.
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

// Maps each brand accent to an eyebrow tint and two background glow colors.
const ACCENT_COLORS: Record<
  Accent,
  { tint: string; blobA: string; blobB: string }
> = {
  gold: { tint: "#d4af37", blobA: "rgba(212,175,55,0.32)", blobB: "rgba(124,58,237,0.20)" },
  blue: { tint: "#38bdf8", blobA: "rgba(37,99,235,0.38)", blobB: "rgba(56,189,248,0.22)" },
  purple: { tint: "#a855f7", blobA: "rgba(124,58,237,0.38)", blobB: "rgba(168,85,247,0.22)" },
};

type OgImageOptions = {
  // Small uppercase label above the title (e.g. "The Portfolio").
  eyebrow: string;
  // Main headline — usually the page or product name.
  title: string;
  // One supporting sentence shown under the title.
  subtitle: string;
  // Brand accent color; defaults to gold.
  accent?: Accent;
  // Optional pill in the footer (e.g. a status + price).
  badge?: string;
};

// Builds the ImageResponse for a single page's social share card.
export function renderOgImage({
  eyebrow,
  title,
  subtitle,
  accent = "gold",
  badge,
}: OgImageOptions) {
  const colors = ACCENT_COLORS[accent];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#060a16",
          backgroundImage: `radial-gradient(800px 400px at 10% 0%, ${colors.blobA}, transparent), radial-gradient(700px 400px at 100% 100%, ${colors.blobB}, transparent)`,
        }}
      >
        {/* Top block: eyebrow, title, subtitle */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: colors.tint,
            }}
          >
            {eyebrow}
          </div>

          <div
            style={{
              marginTop: 24,
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#eef2fb",
            }}
          >
            {title}
          </div>

          <div
            style={{
              marginTop: 28,
              fontSize: 32,
              lineHeight: 1.3,
              color: "#9aa6c2",
              maxWidth: 960,
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Footer: FrictionLab wordmark + optional badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>
            <span style={{ color: "#d4af37" }}>Friction</span>
            <span style={{ color: "#eef2fb" }}>Lab</span>
          </div>

          {badge ? (
            <div
              style={{
                display: "flex",
                fontSize: 26,
                color: "#eef2fb",
                border: `1px solid ${colors.tint}`,
                borderRadius: 999,
                padding: "10px 26px",
              }}
            >
              {badge}
            </div>
          ) : null}
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
