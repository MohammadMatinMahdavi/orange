"use client";

import { useState } from "react";

const services = [
  { name: "AI Content", code: "01", detail: "Visuals, concepts & campaigns", icon: "✳" },
  { name: "Real Ads", code: "02", detail: "Performance-led creative", icon: "↗" },
  { name: "UGC Studio", code: "03", detail: "Creator-style content", icon: "◉" },
  { name: "Web Design", code: "04", detail: "Digital experiences", icon: "⌘" },
  { name: "Something else", code: "05", detail: "A little different", icon: "＋" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function ContactSection() {
  const [selectedService, setSelectedService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const completedFields = Number(name.trim().length > 0) + Number(emailIsValid) + Number(Boolean(selectedService));
  const progress = Math.min(100, Math.round((completedFields / 3) * 90 + (message.trim() ? 10 : 0)));

  return (
    <section className="contact-section relative isolate overflow-hidden" id="contact">
      <div className="contact-glow" />
      <div className="eyebrow"><span>07</span> / YOUR NEXT MOVE</div>
      <div className="contact-layout">
        <div className="contact-intro">
          <span className="contact-overline">LET’S MAKE SOMETHING MATTER</span>
          <h2>Have a good<br />feeling about <span>this?</span></h2>
          <p className="contact-copy">Tell us what you’re dreaming up. We’ll bring the creative thinking, the tools and a plan to make it happen.</p>
          <a className="contact-email" href="mailto:hello@orangeai.studio">hello@orangeai.studio <Arrow /></a>
          <div className="contact-trust-note"><span className="contact-pulse" /> A GOOD IDEA STARTS WITH A CONVERSATION</div>
        </div>

        <form className="contact-form contact-form-asymmetric relative" action="mailto:hello@orangeai.studio" method="post" encType="text/plain">
          <div className="contact-form-top">
            <div className="form-card-heading">
              <div><span className="form-step">PROJECT INQUIRY · 01</span><h3>Let’s talk details.</h3></div>
              <span className="form-spark" aria-hidden="true">✳</span>
            </div>
            <div className="inquiry-progress" role="status" aria-live="polite" aria-label={`Inquiry ${progress}% complete`}>
              <div className="inquiry-progress-meta"><span>YOUR INQUIRY PROGRESS</span><b>{String(progress).padStart(2, "0")}%</b></div>
              <div className="inquiry-progress-track"><span style={{ width: `${progress}%` }} /></div>
              <div className="inquiry-progress-steps"><span className={name.trim() ? "is-complete" : ""}>YOUR NAME</span><span className={emailIsValid ? "is-complete" : ""}>EMAIL</span><span className={selectedService ? "is-complete" : ""}>SERVICE</span><span className={message.trim() ? "is-complete" : ""}>DETAILS</span></div>
            </div>
            <label>Your name<input name="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="How should we call you?" required /></label>
            <label>Email address<input name="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@company.com" required /></label>
          </div>
          <div className="contact-form-bottom">
            <fieldset className="service-picker">
              <legend>What do you need?</legend>
              <div className="service-picker-grid">
                {services.map((service) => (
                  <label className={`service-choice ${selectedService === service.name ? "is-selected" : ""}`} key={service.code}>
                    <input
                      type="radio"
                      name="service"
                      value={service.name}
                      checked={selectedService === service.name}
                      onChange={() => setSelectedService(service.name)}
                      required
                    />
                    <span className="service-choice-icon" aria-hidden="true">{service.icon}</span>
                    <span className="service-choice-copy"><b>{service.name}</b><small>{service.detail}</small></span>
                    <span className="service-choice-check" aria-hidden="true">✓</span>
                    <span className="service-choice-code">{service.code}</span>
                  </label>
                ))}
              </div>
              <span className="service-picker-hint">{selectedService ? `SELECTED · ${selectedService.toUpperCase()}` : "CHOOSE THE SERVICE THAT FITS YOUR IDEA"}</span>
            </fieldset>
            <label>Tell us a little about it<textarea name="message" rows="3" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="A few words about your project..." /></label>
            <button className="button button-primary form-submit group w-full justify-between rounded-lg shadow-lg shadow-sky-500/20 transition-all hover:-translate-y-1 hover:shadow-emerald-500/30" type="submit">Send your inquiry <Arrow /></button>
            <span className="form-note">By sending this, you’re taking the first step. We’ll take it from here.</span>
          </div>
        </form>
      </div>
    </section>
  );
}
