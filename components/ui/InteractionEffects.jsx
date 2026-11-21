"use client";

import { useEffect } from "react";

export default function InteractionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const clamp = (value, min, max) => Math.min(1, Math.max(0, (value - min) / (max - min)));

    const updateScrollAtmosphere = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;

        // First blue-green passage: fade in, hold briefly, then return to dark.
        const firstIn = clamp(y, 180, 900);
        const firstOut = clamp(y, 1500, 2250);
        const firstBand = firstIn * (1 - firstOut);

        // Second blue-green passage further down the page.
        const secondIn = clamp(y, 2350, 3100);
        const secondOut = clamp(y, 3950, 4750);
        const secondBand = secondIn * (1 - secondOut);

        root.style.setProperty("--scroll-aura", Math.max(firstBand, secondBand).toFixed(3));
      });
    };

    updateScrollAtmosphere();
    window.addEventListener("scroll", updateScrollAtmosphere, { passive: true });
    window.addEventListener("resize", updateScrollAtmosphere);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScrollAtmosphere);
      window.removeEventListener("resize", updateScrollAtmosphere);
      root.style.removeProperty("--scroll-aura");
    };
  }, []);

  return null;
}
