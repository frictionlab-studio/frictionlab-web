// /privacy — Privacy Policy, rendered verbatim from content/privacy-policy.md.
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Markdown } from "@/components/ui/Markdown";
import { readLegalDoc } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How FrictionLab LLC collects, uses, and shares personal information across its products.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const source = readLegalDoc("privacy-policy.md");

  return (
    <main className="flex-1">
      <section className="pt-28 pb-16 sm:pt-32">
        <Container size="wide">
          <Markdown source={source} />
        </Container>
      </section>
    </main>
  );
}
