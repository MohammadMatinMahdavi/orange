"use client";

import { useEffect } from "react";

export default function InteractionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const updateScrollAtmosphere = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        // Warm up through the upper page, then gently return to the dark base.
        const fadeIn = Math.min(1, Math.max(0, (y - 260) / 520));
        const fadeOut = Math.min(1, Math.max(0, (y - 1120) / 620));
        const intensity = Math.max(0, fadeIn * (1 - fadeOut));
        root.style.setProperty("--scroll-orange", intensity.toFixed(3));
      });
    };

    const updatePointer = (event) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
      root.classList.add("has-pointer");
    };
    const clearPointer = () => root.classList.remove("has-pointer");

    updateScrollAtmosphere();
    window.addEventListener("scroll", updateScrollAtmosphere, { passive: true });
    window.addEventListener("resize", updateScrollAtmosphere);
    window.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("pointerleave", clearPointer);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScrollAtmosphere);
      window.removeEventListener("resize", updateScrollAtmosphere);
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("pointerleave", clearPointer);
      root.style.removeProperty("--scroll-orange");
      root.classList.remove("has-pointer");
    };
  }, []);

  return <div className="cursor-wave" aria-hidden="true" />;
}
