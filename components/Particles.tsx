"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  r: number;
  vy: number;
  vx: number;
  opacity: number;
  drift: number;
  phase: number;
};

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let running = true;
    let raf = 0;

    const COUNT = 14;

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const makeParticle = (initial = false): Particle => ({
      x: rand(0, width),
      y: initial ? rand(0, height) : height + rand(0, 40),
      r: rand(0.6, 1.8),
      vy: rand(0.12, 0.32),
      vx: rand(-0.04, 0.04),
      opacity: rand(0.08, 0.2),
      drift: rand(0.3, 0.7),
      phase: rand(0, Math.PI * 2),
    });

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      resize();
      particles = Array.from({ length: COUNT }, () => makeParticle(true));
    };

    const draw = (t: number) => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        p.y -= p.vy;
        p.x += p.vx + Math.sin((t / 1400) + p.phase) * 0.12 * p.drift;

        if (p.y < -8) {
          particles[i] = makeParticle(false);
          return;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(184, 152, 99, ${p.opacity})`;
        ctx.fill();

        if (p.r > 1.2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 2.6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(184, 152, 99, ${p.opacity * 0.18})`;
          ctx.fill();
        }
      });

      raf = requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        raf = requestAnimationFrame(draw);
      }
    };

    init();
    raf = requestAnimationFrame(draw);

    window.addEventListener("resize", init);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", init);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full pointer-events-none"
    />
  );
}
