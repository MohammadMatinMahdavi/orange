"use client";

import { useState } from "react";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import SiteHeader from "@/components/layout/SiteHeader";
import ServicesTicker from "@/components/sections/ServicesTicker";
import ContactSection from "@/components/sections/ContactSection";

const services = [
  { number: "01", title: "AI Content", tag: "CONTENT THAT CONVERTS", description: "Scroll-stopping visuals, product films and campaign assets made with the speed of AI and the eye of a creative studio.", items: ["AI product photography", "Social-first video", "Creative campaign assets"], icon: "✳" },
  { number: "02", title: "Real Ads", tag: "PERFORMANCE CREATIVE", description: "Ad creatives built to earn attention, communicate value and give your next campaign more room to win.", items: ["Paid social creatives", "Ad variations & testing", "Product-led storytelling"], icon: "↗" },
  { number: "03", title: "UGC Studio", tag: "HUMAN-LED STORYTELLING", description: "Authentic creator-style content that feels native to the feed and makes people want to know more.", items: ["UGC-style videos", "Creator concepts & scripts", "Hooks and testimonials"], icon: "◉" },
  { number: "04", title: "Web Design", tag: "DIGITAL EXPERIENCES", description: "Distinctive, conversion-minded websites that turn a first impression into a lasting relationship.", items: ["Landing pages", "Brand websites", "Web design & development"], icon: "⌘" },
];

const projects = [
  { category: "AI CAMPAIGN", title: "Objects of desire.", type: "Product visuals", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1100&q=85", className: "project-tall" },
  { category: "REAL ADS", title: "Made to move.", type: "Performance creative", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1100&q=85", className: "" },
  { category: "DIGITAL EXPERIENCE", title: "A better first click.", type: "Web design", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1100&q=85", className: "" },
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

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main>
      <AnnouncementBar />
      <SiteHeader />

      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-kicker"><span className="kicker-line" /> CREATIVE STUDIO, REIMAGINED <span className="kicker-index">EST. FOR WHAT’S NEXT</span></div>
        <h1>Make something<br /><span className="hero-outline">worth</span> <span className="hero-accent">looking at.</span></h1>
        <div className="hero-bottom">
          <p className="hero-copy">We turn bold ideas into <strong>AI-powered content</strong> and digital experiences that move brands forward. Human creativity, amplified.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">Start a project <Arrow diagonal /></a><a className="text-link" href="#work">Explore our work <Arrow /></a></div>
        </div>
        <div className="hero-art" aria-label="Abstract orange creative artwork">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-core"><span>O</span></div>
          <div className="art-caption"><span>CREATIVITY, IN A NEW LIGHT</span><span>01 — 04</span></div>
          <span className="art-side-label">IDEAS IN MOTION / ORANGE AI</span>
        </div>
        <div className="hero-foot"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>BASED EVERYWHERE · WORKING WORLDWIDE</span></div>
      </section>

      <ServicesTicker />

      <section className="section services-section" id="services">
        <div className="section-heading"><div><div className="eyebrow"><span>01</span> / WHAT WE DO</div><h2>Good ideas.<br /><span className="muted">Better execution.</span></h2></div><p className="section-intro">One creative partner for the content and digital presence your brand needs to stand out.</p></div>
        <div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-top"><span>{service.number} / SERVICE</span><span className="service-icon">{service.icon}</span></div><div><div className="service-tag">{service.tag}</div><h3>{service.title}</h3><p>{service.description}</p></div><ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul><a className="card-link" href="#contact">Explore service <Arrow diagonal /></a></article>)}</div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading"><div><div className="eyebrow"><span>02</span> / SELECTED WORK</div><h2>Made to make<br /><span className="muted">you look twice.</span></h2></div><p className="section-intro">A glimpse into the worlds we can build. Your brand could be the next one here.</p></div>
        <div className="project-grid">{projects.map((project, i) => <article className={`project-card ${project.className}`} key={project.title}><div className="project-image" style={{ backgroundImage: `url('${project.image}')` }}><span className="project-number">0{i + 1}</span><span className="project-open"><Arrow diagonal /></span></div><div className="project-meta"><div><span className="project-category">{project.category}</span><h3>{project.title}</h3></div><span className="project-type">{project.type}</span></div></article>)}</div>
        <p className="work-note">A CURATED PREVIEW <span>— MORE GOOD THINGS IN THE MAKING</span></p>
      </section>

      <section className="manifesto">
        <div className="manifesto-orb" />
        <div className="eyebrow"><span>03</span> / THE ORANGE POINT OF VIEW</div>
        <p>AI is the tool.<br /> <span className="manifesto-highlight">Imagination</span> is the advantage.</p>
        <div className="manifesto-bottom"><span>WE BELIEVE THE FUTURE BELONGS TO BRANDS THAT THINK DIFFERENTLY.</span><span>HUMAN-LED. AI-POWERED. ALWAYS INTENTIONAL.</span></div>
      </section>

      <section className="section process-section" id="process">
        <div className="section-heading"><div><div className="eyebrow"><span>04</span> / HOW IT WORKS</div><h2>From first thought<br /><span className="muted">to final frame.</span></h2></div><p className="section-intro">A clear, collaborative process. No mystery, no unnecessary layers — just good work, done thoughtfully.</p></div>
        <div className="process-list">{steps.map(([number, title, description]) => <article className="process-item" key={number}><span className="process-number">{number}</span><h3>{title}</h3><p>{description}</p><span className="process-arrow"><Arrow diagonal /></span></article>)}</div>
      </section>

      <section className="testimonial-section">
        <div className="eyebrow"><span>05</span> / KIND WORDS</div>
        <div className="quote-mark">“</div>
        <blockquote>Great creative doesn’t just fill a feed. It gives people a reason to <span>care.</span></blockquote>
        <div className="quote-credit"><span className="quote-rule" /><span>THE ORANGE AI CREATIVE PHILOSOPHY</span></div>
        <p className="testimonial-note">We’re building the kind of partnerships that make ambitious work possible. Be one of our first collaborators.</p>
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-heading"><div><div className="eyebrow"><span>06</span> / GOOD TO KNOW</div><h2>Questions?<br /><span className="muted">We’ve got you.</span></h2></div><p className="section-intro">A few things you might be wondering before we get started.</p></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => <article className={openFaq === index ? "faq-item faq-active" : "faq-item"} key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span className="faq-number">0{index + 1}</span><span>{question}</span><span className="faq-toggle">{openFaq === index ? "−" : "+"}</span></button>{openFaq === index && <p>{answer}</p>}</article>)}</div>
      </section>

      <ContactSection />

      <footer className="footer"><div className="footer-main"><a className="brand footer-brand" href="#"><span className="brand-mark">o<span>.</span></span><span>orange<span className="brand-light">ai</span></span></a><p>Ideas with an edge.<br />Made for what’s next.</p><a className="back-top" href="#">BACK TO TOP ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} ORANGE AI STUDIO. ALL RIGHTS RESERVED.</span><span>INDEPENDENT BY NATURE. CREATIVE BY DESIGN.</span><a href="mailto:hello@orangeai.studio">SAY HELLO ↗</a></div></footer>
    </main>
  );
}
