"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  segments: Array<
    | { kind: "count"; to: number }
    | { kind: "text"; value: string }
  >;
  suffix?: string;
  durationMs?: number;
};

export default function StatCounter({ segments, suffix, durationMs = 1500 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [animated, setAnimated] = useState(false);
  const [values, setValues] = useState<number[]>(() =>
    segments.map((s) => (s.kind === "count" ? 0 : 0))
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const animate = () => {
      if (prefersReduced) {
        setValues(segments.map((s) => (s.kind === "count" ? s.to : 0)));
        return;
      }
      const start = performance.now();
      const targets = segments.map((s) => (s.kind === "count" ? s.to : 0));
      const raf = (now: number) => {
        const t = Math.min(1, (now - start) / durationMs);
        const eased = 1 - Math.pow(1 - t, 3);
        setValues(targets.map((to) => Math.round(to * eased)));
        if (t < 1) requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
            animate();
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [animated, durationMs, segments]);

  return (
    <div
      ref={ref}
      className="font-display font-medium text-[color:var(--accent-primary)] text-[28px] md:text-[38px] leading-tight"
      style={{ letterSpacing: "-0.01em" }}
    >
      {segments.map((seg, i) =>
        seg.kind === "count" ? (
          <span key={i} style={{ fontVariantNumeric: "tabular-nums" }}>
            {values[i]}
          </span>
        ) : (
          <span key={i}>{seg.value}</span>
        )
      )}
      {suffix ? <span>{suffix}</span> : null}
    </div>
  );
}
