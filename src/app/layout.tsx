import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { siteConfig } from "@/lib/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/jsonld";
import "./globals.css";

// Body / UI font.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Monospace font (code, labels, numeric accents).
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Futuristic display font for headings and the brand mark.
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: "Talukder Abir Hasan" }],
  creator: "Talukder Abir Hasan",
  publisher: siteConfig.name,
  keywords: [
    "AI venture studio",
    "AI agents",
    "SaaS",
    "automation",
    "FrictionLab",
    "artificial intelligence",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

// Mobile/theme settings (separate from metadata in the Next.js App Router).
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060a16",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Global structured data for search engines. */}
        <JsonLd data={[organizationSchema(), websiteSchema()]} />

        {/* Keyboard skip link — first focusable element on the page. */}
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-lg bg-gold-500 px-4 py-2 text-sm font-medium text-ink-950 focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
        >
          Skip to content
        </a>

        <Navbar />
        <div id="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
