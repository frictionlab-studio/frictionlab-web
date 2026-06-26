// Homepage — composes the full FrictionLab marketing experience.
// Each section is a self-contained component; this file just orders them.
// Navbar and Footer live in the root layout, shared by every page.
import { Hero } from "@/components/sections/Hero";
import { VentureUniverse } from "@/components/sections/VentureUniverse";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { FeaturedVentures } from "@/components/sections/FeaturedVentures";
import { BangladeshToGlobal } from "@/components/sections/BangladeshToGlobal";
import { FounderVision } from "@/components/sections/FounderVision";
import { TechnologyStack } from "@/components/sections/TechnologyStack";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FinalCta } from "@/components/sections/FinalCta";

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
