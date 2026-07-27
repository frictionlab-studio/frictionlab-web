// Homepage — composes the full FrictionLab marketing experience.
// Each section is a self-contained component; this file just orders them.
// Navbar and Footer live in the root layout, shared by every page.
import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { VentureUniverse } from "@/components/sections/VentureUniverse";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { FeaturedVentures } from "@/components/sections/FeaturedVentures";
import { BangladeshToGlobal } from "@/components/sections/BangladeshToGlobal";
import { FounderVision } from "@/components/sections/FounderVision";
import { TechnologyStack } from "@/components/sections/TechnologyStack";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FinalCta } from "@/components/sections/FinalCta";

// Homepage SEO. `absolute` bypasses the root "%s — FrictionLab" title template
// so we control the full <title> string directly.
export const metadata: Metadata = {
  title: {
    absolute: "FrictionLab — Solo-Built AI Venture Studio, Bangladesh",
  },
  description:
    "FrictionLab is a solo-founder AI venture studio based in Bangladesh, building and operating a growing portfolio of AI SaaS products you can subscribe to today.",
  openGraph: {
    title: "FrictionLab — Solo-Built AI Venture Studio, Bangladesh",
    description:
      "FrictionLab is a solo-founder AI venture studio based in Bangladesh, building and operating a growing portfolio of AI SaaS products you can subscribe to today.",
    url: "/",
  },
};

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <VentureUniverse />
      <WhatWeBuild />
      <FeaturedVentures />
      <BangladeshToGlobal />
      <FounderVision />
      <TechnologyStack />
      <BlogPreview />
      <FinalCta />
    </main>
  );
}
