// Social card for the /careers page.
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Careers at FrictionLab — work with an AI-first venture studio";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Careers",
    title: "Work With an AI-First Studio",
    subtitle:
      "Help build intelligent software from Bangladesh for the world. Explore roles and ways to collaborate with FrictionLab.",
    accent: "blue",
  });
}
