// Social card for the /blog index.
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "The FrictionLab blog — notes on AI, automation, and SaaS";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "The Blog",
    title: "Notes on AI, Automation & SaaS",
    subtitle:
      "Lessons, systems, and ideas from inside FrictionLab — AI agents, prompt engineering, automation, and startup building.",
    accent: "purple",
  });
}
