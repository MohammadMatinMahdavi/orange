"use client";

import { useState } from "react";

const letters = [
  { number: "01", service: "AI CONTENT", title: "The first impression", prompt: "What did you think when you first saw the final creative?", accent: "blue", icon: "✳", stamp: "IDEAS" },
  { number: "02", service: "REAL ADS", title: "Made to make an impact", prompt: "How did the creative fit your campaign and its goals?", accent: "green", icon: "↗", stamp: "IMPACT" },
  { number: "03", service: "UGC STUDIO", title: "A human connection", prompt: "Did the content feel natural to your brand and audience?", accent: "teal", icon: "◉", stamp: "PEOPLE" },
  { number: "04", service: "WEB DESIGN", title: "A better experience", prompt: "How did the new digital experience change the way you present your brand?", accent: "teal", icon: "⌘", stamp: "DIGITAL" },
  { number: "05", service: "COLLABORATION", title: "Good work, together", prompt: "How was the communication, creative process and delivery?", accent: "blue", icon: "✳", stamp: "TOGETHER" },
  { number: "06", service: "THE OUTCOME", title: "The part that matters", prompt: "What made the biggest difference to your project?", accent: "green", icon: "↗", stamp: "RESULTS" },
];

export default function TestimonialSection() {
  const [openLetter, setOpenLetter] = useState(null);

  return (
    <section className="testimonial-section feedback-section" id="testimonials">
      <div className="feedback-heading">
        <div>
          <div className="eyebrow"><span>06</span> / WORDS THAT MATTER</div>
          <h2>نظرات <span>شما</span></h2>
        </div>
        <div className="feedback-intro-copy">
          <p className="feedback-headline">Some words are worth opening.</p>
          <p>Six notes. Six perspectives. One shared creative journey. Pick a letter and discover the story inside.</p>
        </div>
      </div>

      <div className="letter-grid">
        {letters.map((letter) => {
          const isOpen = openLetter === letter.number;
          return (
            <article className={`letter-card letter-card-${letter.accent}${isOpen ? " is-open" : ""}`} key={letter.number}>
              <button
                className="letter-trigger"
                type="button"
                aria-expanded={isOpen}
                aria-label={`${isOpen ? "Close" : "Open"} ${letter.service} letter`}
                onClick={() => setOpenLetter(isOpen ? null : letter.number)}
              >
                <span className="letter-index">{letter.number} <i>/ 06</i></span>
                <span className="letter-envelope" aria-hidden="true">
                  <span className="letter-paper">
                    <span className="letter-paper-kicker">A NOTE ON THE JOURNEY</span>
                    <span className="letter-paper-title">{letter.title}</span>
                    <span className="letter-paper-lines"><i /><i /><i /></span>
                    <span className="letter-paper-sign">WITH APPRECIATION</span>
                  </span>
                  <span className="letter-envelope-back" />
                  <span className="letter-envelope-flap" />
                  <span className="letter-envelope-front" />
                  <span className="letter-seal"><span>{letter.icon}</span></span>
                  <span className="letter-envelope-glint" />
                </span>
                <span className="letter-card-meta">
                  <span className="letter-service">{letter.service}</span>
                  <span className="letter-open-hint">{isOpen ? "CLOSE LETTER" : "OPEN LETTER"} <b>{isOpen ? "−" : "↗"}</b></span>
                </span>
              </button>
              <div className="letter-reveal" aria-hidden={!isOpen}>
                <div className="letter-reveal-inner">
                  <span className="letter-reveal-label">A QUESTION FOR OUR COMMUNITY</span>
                  <h3>{letter.title}</h3>
                  <p>{letter.prompt}</p>
                  <span className="letter-reveal-stamp">{letter.stamp} · {letter.number}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <p className="feedback-disclaimer">
        These are invitation letters, not published testimonials. We only share genuine client feedback with permission.
      </p>
    </section>
  );
}
