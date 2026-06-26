"use client";

// Particles — a performant canvas field of slowly drifting, twinkling dots.
// Lightweight alternative to a 3D engine: a few dozen points on one canvas.
// Honors prefers-reduced-motion and pauses when the tab is hidden.
import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type ParticlesProps = {
  className?: string;
  // Approximate particle count at a 1280px width (scales with viewport).
  density?: number;
};

type Dot = {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  driftX: number;
  alpha: number;
  twinkle: number;
  hue: string;
};

const HUES = ["56, 189, 248", "168, 85, 247", "212, 175, 55"]; // blue, purple, gold

export function Particles({ className, density = 48 }: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Skip animation entirely for reduced-motion users.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let dots: Dot[] = [];
    let width = 0;
    let height = 0;
    let frameId = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // (Re)build the canvas size and particle set for the current viewport.
    const setup = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = rect?.width ?? window.innerWidth;
      height = rect?.height ?? window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round((density * width) / 1280);
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.6 + 0.4,
        speedY: Math.random() * 0.25 + 0.05,
        driftX: (Math.random() - 0.5) * 0.15,
        alpha: Math.random() * 0.5 + 0.2,
        twinkle: Math.random() * 0.02 + 0.005,
        hue: HUES[Math.floor(Math.random() * HUES.length)],
      }));
    };

    // Draw one frame and advance each dot.
    const render = () => {
      context.clearRect(0, 0, width, height);
      for (const dot of dots) {
        dot.y -= dot.speedY;
        dot.x += dot.driftX;
        dot.alpha += dot.twinkle;
        if (dot.alpha > 0.8 || dot.alpha < 0.15) dot.twinkle *= -1;

        // Wrap around when a dot drifts off an edge.
        if (dot.y < -5) dot.y = height + 5;
        if (dot.x < -5) dot.x = width + 5;
        if (dot.x > width + 5) dot.x = -5;

        context.beginPath();
        context.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(${dot.hue}, ${dot.alpha})`;
        context.shadowBlur = 8;
        context.shadowColor = `rgba(${dot.hue}, ${dot.alpha})`;
        context.fill();
      }
      frameId = window.requestAnimationFrame(render);
    };

    // Start/stop the loop based on tab visibility.
    const start = () => {
      if (prefersReducedMotion) {
        render(); // draw a single static frame
        window.cancelAnimationFrame(frameId);
        return;
      }
      frameId = window.requestAnimationFrame(render);
    };
    const stop = () => window.cancelAnimationFrame(frameId);
    const onVisibility = () =>
      document.hidden ? stop() : prefersReducedMotion ? undefined : start();

    setup();
    start();

    window.addEventListener("resize", setup);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      window.removeEventListener("resize", setup);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
    />
  );
}
