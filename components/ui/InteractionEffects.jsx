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

        // First orange passage: fade in, hold briefly, then return to dark.
        const firstIn = clamp(y, 260, 780);
        const firstOut = clamp(y, 1120, 1740);
        const firstBand = firstIn * (1 - firstOut);

        // Second orange passage further down the page.
        const secondIn = clamp(y, 2550, 3070);
        const secondOut = clamp(y, 3450, 4070);
        const secondBand = secondIn * (1 - secondOut);

        root.style.setProperty("--scroll-orange", Math.max(firstBand, secondBand).toFixed(3));
      });
    };

    updateScrollAtmosphere();
    window.addEventListener("scroll", updateScrollAtmosphere, { passive: true });
    window.addEventListener("resize", updateScrollAtmosphere);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScrollAtmosphere);
      window.removeEventListener("resize", updateScrollAtmosphere);
      root.style.removeProperty("--scroll-orange");
    };
  }, []);

  return null;
}
