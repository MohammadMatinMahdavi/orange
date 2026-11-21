"use client";

import { useEffect, useState } from "react";

const locales = [{ code: "en", native: "English" }, { code: "es", native: "Español" }, { code: "fr", native: "Français" }];

function LanguageSwitcher({ locale, t }) {
  const [open, setOpen] = useState(false);
  const current = locales.find((item) => item.code === locale) || locales[0];
  useEffect(() => {
    const close = (event) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return <div className="language-switcher">
    <button type="button" className={`language-trigger ${open ? "language-trigger-open" : ""}`} onClick={() => setOpen((value) => !value)} aria-label={t.choose} aria-expanded={open} aria-haspopup="true">
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none"><circle cx="12" cy="12" r="9" /><path d="M3.5 12h17M12 3c2.3 2.4 3.4 5.4 3.4 9s-1.1 6.6-3.4 9c-2.3-2.4-3.4-5.4-3.4-9S9.7 5.4 12 3Z" /></svg><span>{current.code.toUpperCase()}</span><i aria-hidden="true">⌄</i>
    </button>
    {open && <div className="language-menu" role="menu" aria-label={t.choose}><span className="language-menu-kicker">{t.languageLabel}</span>
      {locales.map((item) => <a key={item.code} href={item.code === "en" ? "/" : `/${item.code}`} role="menuitem" aria-current={locale === item.code ? "page" : undefined} className={locale === item.code ? "language-option language-option-active" : "language-option"} onClick={() => setOpen(false)}><span className="language-option-code">{item.code.toUpperCase()}</span><span className="language-option-name">{item.native}</span>{locale === item.code && <span className="language-option-check">✓</span>}</a>)}
    </div>}
  </div>;
}
function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function SiteHeader({ locale = "en", t }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = [[t.links[0], "#impact"], [t.links[1], "#services"], [t.links[2], "#work"], [t.links[3], "#process"], [t.links[4], "#faq"]];
  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 28);
    updateHeader(); window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);
  return <header className={`site-header sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "site-header-scrolled" : ""}`}>
    <div className="header-inner mx-auto grid h-full max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-[5.5%]">
      <a className="brand brand-home shrink-0" href={locale === "en" ? "/" : `/${locale}`} aria-label={t.home}><span className="brand-mark">o<span>.</span></span><span>orange<span className="brand-light">ai</span></span></a>
      <button className={`menu-toggle group inline-flex items-center justify-center rounded-full transition-colors hover:bg-white/10 ${menuOpen ? "menu-toggle-open" : ""}`} onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? t.closeNav : t.openNav} aria-expanded={menuOpen} aria-controls="primary-navigation"><span /><span /></button>
      <nav id="primary-navigation" className={`nav-links nav-center ${menuOpen ? "nav-open" : ""}`}>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="mobile-nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>{t.start} <Arrow /></a></nav>
      <div className="header-actions"><LanguageSwitcher locale={locale} t={t} /><a className="nav-cta nav-cta-right inline-flex items-center justify-self-end gap-3 rounded-full transition-all duration-300" href="#contact">{t.talk} <Arrow /></a></div>
    </div>
  </header>;
}
