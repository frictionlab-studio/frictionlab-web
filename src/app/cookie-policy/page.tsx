// /cookie-policy — how FrictionLab uses cookies and similar technologies.
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Prose } from "@/components/ui/Prose";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How FrictionLab uses cookies and similar technologies, and how you can manage them.",
  alternates: { canonical: "/cookie-policy" },
  robots: { index: true, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Legal"
        title="Cookie Policy"
        description="Last updated: June 25, 2026"
      />

      <Section spacing="compact">
        <Prose>
          <p>
            This Cookie Policy explains how FrictionLab uses cookies and similar
            technologies when you visit our website.
          </p>

          <h2>What are cookies?</h2>
          <p>
            Cookies are small text files stored on your device that help websites
            function and remember information about your visit.
          </p>

          <h2>How we use cookies</h2>
          <ul>
            <li>
              <strong>Essential cookies</strong> — required for the site to work
              correctly.
            </li>
            <li>
              <strong>Analytics cookies</strong> — help us understand how the
              site is used so we can improve it.
            </li>
            <li>
              <strong>Preference cookies</strong> — remember your settings and
              choices.
            </li>
          </ul>

          <h2>Managing cookies</h2>
          <p>
            You can control or delete cookies through your browser settings.
            Disabling some cookies may affect how the site functions.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about our use of cookies? Email{" "}
            <a href="mailto:support@frictionlabai.com">support@frictionlabai.com</a>.
          </p>
        </Prose>
      </Section>
    </main>
  );
}
