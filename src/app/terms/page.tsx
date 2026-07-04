// /terms — Terms of Service, rendered verbatim from content/terms-of-service.md.
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Markdown } from "@/components/ui/Markdown";
import { readLegalDoc } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of FrictionLab LLC software products and websites.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  const source = readLegalDoc("terms-of-service.md");

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
