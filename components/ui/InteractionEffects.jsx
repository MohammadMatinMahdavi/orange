"use client";

import { useEffect } from "react";

export default function InteractionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    let revealObserver;

    const clamp = (value, min, max) => Math.min(1, Math.max(0, (value - min) / (max - min)));

    const updateScrollAtmosphere = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        const firstIn = clamp(y, 180, 900);
        const firstOut = clamp(y, 1500, 2250);
        const secondIn = clamp(y, 2350, 3100);
        const secondOut = clamp(y, 3950, 4750);
        const firstBand = firstIn * (1 - firstOut);
        const secondBand = secondIn * (1 - secondOut);
        root.style.setProperty("--scroll-aura", Math.max(firstBand, secondBand).toFixed(3));
      });
    };

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!motionPreference.matches && "IntersectionObserver" in window) {
      const revealTargets = [
        ".section-heading",
        ".trust-stat",
        ".service-card",
        ".project-card",
        ".manifesto > p",
        ".process-item",
        ".letter-card",
        ".faq-item",
        ".contact-intro",
        ".contact-form",
      ];
      const elements = document.querySelectorAll(revealTargets.join(","));
      if (elements.length) {
        root.classList.add("motion-ready");
        revealObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12, rootMargin: "0px 0px -5% 0px" });
        elements.forEach((element, index) => {
          element.classList.add("motion-reveal");
          if (element.matches(".service-card, .project-card, .trust-stat, .process-item, .letter-card, .faq-item")) {
            element.style.setProperty("--reveal-delay", `${(index % 4) * 75}ms`);
          }
          revealObserver.observe(element);
        });
      }
    }

    const tiltCleanups = [];
    if (!motionPreference.matches && window.matchMedia("(pointer:fine)").matches) {
      document.querySelectorAll(".service-card, .project-card").forEach((card) => {
        card.classList.add("motion-tilt");
        const handlePointerMove = (event) => {
          const bounds = card.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width - 0.5;
          const y = (event.clientY - bounds.top) / bounds.height - 0.5;
          card.style.setProperty("--tilt-x", `${(x * 7).toFixed(2)}deg`);
          card.style.setProperty("--tilt-y", `${(y * -7).toFixed(2)}deg`);
        };
        const resetTilt = () => {
          card.style.setProperty("--tilt-x", "0deg");
          card.style.setProperty("--tilt-y", "0deg");
        };
        card.addEventListener("pointermove", handlePointerMove, { passive: true });
        card.addEventListener("pointerleave", resetTilt);
        tiltCleanups.push(() => {
          card.removeEventListener("pointermove", handlePointerMove);
          card.removeEventListener("pointerleave", resetTilt);
          card.classList.remove("motion-tilt");
          card.style.removeProperty("--tilt-x");
          card.style.removeProperty("--tilt-y");
        });
      });
    }

    updateScrollAtmosphere();
    window.addEventListener("scroll", updateScrollAtmosphere, { passive: true });
    window.addEventListener("resize", updateScrollAtmosphere);

    return () => {
      cancelAnimationFrame(frame);
      revealObserver?.disconnect();
      tiltCleanups.forEach((cleanup) => cleanup());
      root.classList.remove("motion-ready");
      window.removeEventListener("scroll", updateScrollAtmosphere);
      window.removeEventListener("resize", updateScrollAtmosphere);
      root.style.removeProperty("--scroll-aura");
    };
  }, []);

  return null;
}
