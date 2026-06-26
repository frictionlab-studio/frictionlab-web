// /privacy-policy — how FrictionLab collects and handles personal data.
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Prose } from "@/components/ui/Prose";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How FrictionLab collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: June 25, 2026"
      />

      <Section spacing="compact">
        <Prose>
          <p>
            FrictionLab (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
            respects your privacy. This policy explains what information we
            collect, how we use it, and the choices you have. By using our
            website you agree to the practices described here.
          </p>

          <h2>Information we collect</h2>
          <p>
            We collect information you provide directly — such as your name and
            email when you contact us — and limited technical data (like device
            and usage information) collected automatically to operate and improve
            the site.
          </p>

          <h2>How we use information</h2>
          <ul>
            <li>To respond to your inquiries and provide our services.</li>
            <li>To operate, maintain, and improve our website and products.</li>
            <li>To send updates you have requested, where applicable.</li>
          </ul>

          <h2>Sharing</h2>
          <p>
            We do not sell your personal information. We may share data with
            trusted service providers who help us run our business, subject to
            appropriate safeguards, or where required by law.
          </p>

          <h2>Your rights</h2>
          <p>
            You may request access to, correction of, or deletion of your
            personal information by contacting us. We will respond in accordance
            with applicable law.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy? Email us at{" "}
            <a href="mailto:info.frictionlab@gmail.com">info.frictionlab@gmail.com</a>.
          </p>
        </Prose>
      </Section>
    </main>
  );
}
