import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Point the old legal routes at the current policy pages so there is a single
  // source of truth for each policy.
  async redirects() {
    return [
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      {
        source: "/terms-and-conditions",
        destination: "/terms",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
