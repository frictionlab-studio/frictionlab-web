// /refund-policy — Refund & Cancellation Policy, rendered verbatim from
// content/refund-policy.md.
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Markdown } from "@/components/ui/Markdown";
import { readLegalDoc } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Refunds, cancellations, and the 14-day money-back guarantee for FrictionLab LLC products.",
  alternates: { canonical: "/refund-policy" },
  robots: { index: true, follow: true },
};

export default function RefundPolicyPage() {
  const source = readLegalDoc("refund-policy.md");

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
