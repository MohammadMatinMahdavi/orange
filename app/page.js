"use client";

import { useState } from "react";
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

const services = [
  { number: "01", title: "AI Content", tag: "CONTENT THAT CONVERTS", description: "Scroll-stopping visuals, product films and campaign assets made with the speed of AI and the eye of a creative studio.", items: ["AI product photography", "Social-first video", "Creative campaign assets"], icon: "✳" },
  { number: "02", title: "Real Ads", tag: "PERFORMANCE CREATIVE", description: "Ad creatives built to earn attention, communicate value and give your next campaign more room to win.", items: ["Paid social creatives", "Ad variations & testing", "Product-led storytelling"], icon: "↗" },
  { number: "03", title: "UGC Studio", tag: "HUMAN-LED STORYTELLING", description: "Authentic creator-style content that feels native to the feed and makes people want to know more.", items: ["UGC-style videos", "Creator concepts & scripts", "Hooks and testimonials"], icon: "◉" },
  { number: "04", title: "Web Design", tag: "DIGITAL EXPERIENCES", description: "Distinctive, conversion-minded websites that turn a first impression into a lasting relationship.", items: ["Landing pages", "Brand websites", "Web design & development"], icon: "⌘" },
];

const projects = [
  { category: "AI CAMPAIGN", title: "Objects of desire.", type: "Product visuals", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1100&q=85", className: "project-tall", video: "/videos/project-01.mp4" },
  { category: "REAL ADS", title: "Made to move.", type: "Performance creative", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1100&q=85", className: "", video: "/videos/project-02.mp4" },
  { category: "DIGITAL EXPERIENCE", title: "A better first click.", type: "Web design", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1100&q=85", className: "", video: "/videos/project-03.mp4" },
];

const steps = [
  ["01", "Tell us the brief", "Share your goals, audience and the kind of content you need. A rough idea is more than enough to start."],
  ["02", "We shape the concept", "We turn your brief into a clear creative direction, with the right format, style and deliverables."],
  ["03", "Made by Orange", "Our creative process blends human direction, AI tools and thoughtful craft to bring the idea to life."],
  ["04", "Ready for the world", "Review, refine and receive polished assets built to work across the channels that matter."],
];

const faqs = [
  ["What kind of content can Orange AI create?", "From AI product imagery and short-form video to UGC-style content, paid ad creatives and complete website experiences. If you have a format in mind, tell us about it."],
  ["Do I need to have a clear brief?", "Not at all. A product, a goal or even a rough idea is enough. We can help shape the direction and recommend the right deliverables."],
  ["How long does a project take?", "Timelines depend on scope and deliverables. Once we understand your brief, we’ll share a realistic timeline before work begins."],
  ["Can I request revisions?", "Yes. Every project includes a review stage so we can align the final work with your direction. The exact revision scope is agreed in your proposal."],
  ["How do I get a quote?", "Use the inquiry form below to tell us what you’re looking for. We’ll review the details and get back to you with next steps."],
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main>
      <InteractionEffects />
      <AnnouncementBar />
      <SiteHeader />

      <HeroSection />
      <ServicesTicker />
      <TrustStatsSection />

      <ServicesSection services={services} />

      <PortfolioSection projects={projects} />

      <ManifestoSection />

      <ProcessSection steps={steps} />

      <TestimonialSection />

      <FaqSection faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />

      <ContactSection />

      <FooterSection />
    </main>
  );
}
