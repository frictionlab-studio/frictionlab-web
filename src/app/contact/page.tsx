// /contact — ways to reach FrictionLab plus a simple inquiry form.
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with FrictionLab — partner on a venture, explore collaboration, or start a conversation about building with AI.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — FrictionLab",
    description: "Start a conversation with the FrictionLab venture studio.",
    url: "/contact",
  },
};

const channels = [
  { label: "Email", value: "info.frictionlab@gmail.com", href: "mailto:info.frictionlab@gmail.com" },
  { label: "Website", value: "frictionlabai.com", href: "https://frictionlabai.com" },
  { label: "Based in", value: "Dhaka, Bangladesh · US LLC", href: null },
];

export default function ContactPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build something{" "}
            <span className="text-gradient-gold">together</span>
          </>
        }
        description="Have an idea worth building, or want to partner with FrictionLab? Reach out — the fastest way to remove friction is to start."
      />

      <Section spacing="compact">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact channels */}
          <div className="space-y-4">
            {channels.map((channel) => (
              <div
                key={channel.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-faint">
                  {channel.label}
                </div>
                {channel.href ? (
                  <a
                    href={channel.href}
                    className="mt-2 block text-lg text-foreground transition-colors hover:text-gold-400"
                  >
                    {channel.value}
                  </a>
                ) : (
                  <div className="mt-2 text-lg text-foreground">
                    {channel.value}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Inquiry form (mailto-based; wire to a backend later) */}
          <GlassCard glow="blue" padding="lg">
            <form
              action="mailto:info.frictionlab@gmail.com"
              method="post"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="text-xs font-medium uppercase tracking-widest text-faint"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-faint focus:border-neon-blue/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-medium uppercase tracking-widest text-faint"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-faint focus:border-neon-blue/50"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-xs font-medium uppercase tracking-widest text-faint"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-faint focus:border-neon-blue/50"
                  placeholder="Tell us about your idea…"
                />
              </div>
              <Button type="submit" variant="primary" className="w-full">
                Send message
              </Button>
            </form>
          </GlassCard>
        </div>
      </Section>
    </main>
  );
}
