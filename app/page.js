"use client";

import { useEffect, useState } from "react";
import en from "@/messages/en.json";
import es from "@/messages/es.json";
import fr from "@/messages/fr.json";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import SiteHeader from "@/components/layout/SiteHeader";
import ServicesTicker from "@/components/sections/ServicesTicker";
import TrustStatsSection from "@/components/sections/TrustStatsSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ManifestoSection from "@/components/sections/ManifestoSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/layout/FooterSection";
import InteractionEffects from "@/components/ui/InteractionEffects";

const dictionaries = { en, es, fr };

export default function Home({ locale = "en" }) {
  const [openFaq, setOpenFaq] = useState(0);
  const t = dictionaries[locale] || dictionaries.en;

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = "ltr";
  }, [locale]);

  return (
    <main id="top">
      <InteractionEffects />
      <AnnouncementBar t={t.announcement} />
      <SiteHeader locale={locale} t={t.header} />
      <HeroSection t={t.hero} />
      <ServicesTicker t={t.ticker} />
      <TrustStatsSection t={t.trust} />
      <ServicesSection services={t.services.cards} t={t.services} />
      <PortfolioSection projects={t.portfolio.projects} t={t.portfolio} />
      <ManifestoSection t={t.manifesto} />
      <ProcessSection steps={t.process.steps} t={t.process} />
      <TestimonialSection t={t.testimonials} />
      <FaqSection faqs={t.faq.items} openFaq={openFaq} setOpenFaq={setOpenFaq} t={t.faq} />
      <ContactSection t={t.contact} />
      <FooterSection t={t.footer} />
    </main>
  );
}
