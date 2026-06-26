// /terms-and-conditions — the rules for using the FrictionLab website.
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Prose } from "@/components/ui/Prose";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms and conditions governing your use of the FrictionLab website and services.",
  alternates: { canonical: "/terms-and-conditions" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Last updated: June 25, 2026"
      />

      <Section spacing="compact">
        <Prose>
          <p>
            These Terms &amp; Conditions govern your access to and use of the
            FrictionLab website. By using this site, you agree to these terms. If
            you do not agree, please do not use the site.
          </p>

          <h2>Use of the site</h2>
          <p>
            You agree to use the site lawfully and not to misuse it, disrupt its
            operation, or attempt unauthorized access to any part of it.
          </p>

          <h2>Intellectual property</h2>
          <p>
            All content on this site — including text, branding, and design — is
            owned by FrictionLab or its licensors and is protected by applicable
            intellectual property laws. You may not reproduce it without
            permission.
          </p>

          <h2>Disclaimer</h2>
          <p>
            The site and its content are provided &quot;as is&quot; without
            warranties of any kind. We do not guarantee that the site will be
            uninterrupted, error-free, or free of harmful components.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, FrictionLab is not liable for
            any indirect or consequential damages arising from your use of the
            site.
          </p>

          <h2>Changes</h2>
          <p>
            We may update these terms from time to time. Continued use of the site
            after changes take effect constitutes acceptance of the revised terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Email{" "}
            <a href="mailto:info.frictionlab@gmail.com">info.frictionlab@gmail.com</a>.
          </p>
        </Prose>
      </Section>
    </main>
  );
}
