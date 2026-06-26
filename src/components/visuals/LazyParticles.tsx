"use client";

// LazyParticles — defers loading the canvas particle field until the client,
// keeping it out of the server-rendered HTML and the initial JS bundle.
// The field is purely decorative, so there is nothing to render on the server.
import dynamic from "next/dynamic";

const Particles = dynamic(
  () => import("./Particles").then((mod) => mod.Particles),
  { ssr: false },
);

type LazyParticlesProps = {
  className?: string;
  density?: number;
};

export function LazyParticles(props: LazyParticlesProps) {
  return <Particles {...props} />;
}
