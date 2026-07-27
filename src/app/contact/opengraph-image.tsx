// Social card for the /contact page.
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Contact FrictionLab — partner on an AI venture";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Contact",
    title: "Let's Build Something",
    subtitle:
      "Partner on a venture, explore collaboration, or start a conversation about building with AI — get in touch with FrictionLab.",
    accent: "gold",
  });
}
