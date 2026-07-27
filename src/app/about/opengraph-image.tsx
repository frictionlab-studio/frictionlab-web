// Social card for the /about page.
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "About FrictionLab — an AI venture studio from Bangladesh";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "About",
    title: "Inside the AI Venture Studio",
    subtitle:
      "An AI venture studio operating from Bangladesh on a US LLC foundation — building AI agents, SaaS products, and automation for the world.",
    accent: "gold",
  });
}
