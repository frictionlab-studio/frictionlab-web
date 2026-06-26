// opengraph-image — a branded 1200x630 social share image, generated at build
// time with next/og. Next uses this as the default Open Graph AND Twitter image
// for every route that doesn't define its own. No external image assets needed.
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#060a16",
          backgroundImage:
            "radial-gradient(800px 400px at 10% 0%, rgba(37,99,235,0.35), transparent), radial-gradient(700px 400px at 100% 100%, rgba(124,58,237,0.30), transparent)",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#d4af37",
          }}
        >
          AI Venture Studio
        </div>

        <div
          style={{
            marginTop: 24,
            fontSize: 110,
            fontWeight: 700,
            lineHeight: 1.05,
            color: "#eef2fb",
            display: "flex",
          }}
        >
          <span style={{ color: "#d4af37" }}>Friction</span>
          <span>Lab</span>
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 34,
            lineHeight: 1.3,
            color: "#9aa6c2",
            maxWidth: 900,
          }}
        >
          Building the future with Artificial Intelligence — from Bangladesh for
          the world.
        </div>
      </div>
    ),
    { ...size },
  );
}
