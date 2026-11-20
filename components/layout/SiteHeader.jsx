"use client";

import { useEffect, useState } from "react";

const links = [
  ["What we do", "#services"],
  ["Selected work", "#work"],
  ["Our process", "#process"],
  ["FAQs", "#faq"],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 28);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={`site-header sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "site-header-scrolled" : ""}`}>
      <div className="header-inner mx-auto flex h-full max-w-[1440px] items-center justify-between px-[7.2%]">
        <a className="brand shrink-0" href="#" aria-label="Orange AI home">
          <span className="brand-mark">o<span>.</span></span>
          <span>orange<span className="brand-light">ai</span></span>
        </a>

        <button
          className={`menu-toggle group inline-flex items-center justify-center rounded-full transition-colors hover:bg-white/10 ${menuOpen ? "menu-toggle-open" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span /><span />
        </button>

        <nav id="primary-navigation" className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="mobile-nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Start a project <Arrow /></a>
        </nav>

        <a className="nav-cta inline-flex items-center gap-3 rounded-full transition-all duration-300" href="#contact">
          Let’s talk <Arrow />
        </a>
      </div>
    </header>
  );
}
