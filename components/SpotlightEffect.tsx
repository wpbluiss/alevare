"use client";

import { useEffect } from "react";

/**
 * Drives the `.spotlight-card` cursor-following glow (CSS does the painting;
 * this only writes --spot-x/--spot-y on the hovered card).
 */
export default function SpotlightEffect() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const target = e.target as Element | null;
      const card = target?.closest?.(".spotlight-card");
      if (!(card instanceof HTMLElement)) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}
