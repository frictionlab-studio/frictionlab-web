// Social card for the /ventures portfolio index.
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "FrictionLab — AI SaaS products and automation platforms";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "The Portfolio",
    title: "AI SaaS Products & Automation Platforms",
    subtitle:
      "The FrictionLab portfolio — study-abroad planning, property management, lead generation, and prompt tools.",
    accent: "blue",
  });
}
