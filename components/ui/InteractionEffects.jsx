"use client";

import { useEffect } from "react";

export default function InteractionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    let targets = [];

    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

    const updateScrollAtmosphere = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;

        // First warm section near the top of the page.
        const firstIn = clamp((y - 260) / 520, 0, 1);
        const firstOut = clamp((y - 1120) / 620, 0, 1);
        const firstBand = firstIn * (1 - firstOut);

        // A second, separate orange passage further down the page.
        const secondIn = clamp((y - 2550) / 520, 0, 1);
        const secondOut = clamp((y - 3450) / 620, 0, 1);
        const secondBand = secondIn * (1 - secondOut);

        root.style.setProperty("--scroll-orange", Math.max(firstBand, secondBand).toFixed(3));
      });
    };

    const resetTarget = (element) => {
      element.style.translate = "";
      element.style.rotate = "";
      element.classList.remove("is-magnetic-active");
    };

    const handlePointerMove = (event) => {
      const element = event.currentTarget;
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const dx = (x - 0.5) * 2;
      const dy = (y - 0.5) * 2;
      const strength = element.matches(".magnetic-strong") ? 7 : 3.5;

      element.style.translate = `${(dx * strength).toFixed(2)}px ${(dy * strength).toFixed(2)}px`;
      element.style.rotate = `${(-dy).toFixed(2)} ${dx.toFixed(2)} 0 1deg`;
      element.style.setProperty("--magnetic-x", `${(x * 100).toFixed(1)}%`);
      element.style.setProperty("--magnetic-y", `${(y * 100).toFixed(1)}%`);
      element.classList.add("is-magnetic-active");
    };

    const handlePointerLeave = (event) => resetTarget(event.currentTarget);

    const attachMagneticTargets = () => {
      targets = Array.from(document.querySelectorAll(
        ".button, .nav-cta, .service-card, .project-peel, .process-item"
      ));
      targets.forEach((element) => {
        element.addEventListener("pointermove", handlePointerMove);
        element.addEventListener("pointerleave", handlePointerLeave);
        element.addEventListener("pointercancel", handlePointerLeave);
      });
    };

    updateScrollAtmosphere();
    attachMagneticTargets();
    window.addEventListener("scroll", updateScrollAtmosphere, { passive: true });
    window.addEventListener("resize", updateScrollAtmosphere);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScrollAtmosphere);
      window.removeEventListener("resize", updateScrollAtmosphere);
      targets.forEach((element) => {
        element.removeEventListener("pointermove", handlePointerMove);
        element.removeEventListener("pointerleave", handlePointerLeave);
        element.removeEventListener("pointercancel", handlePointerLeave);
        resetTarget(element);
      });
      root.style.removeProperty("--scroll-orange");
    };
  }, []);

  return null;
}
