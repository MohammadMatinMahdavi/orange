"use client";

import { useState } from "react";

const letters = [
  { number: "01", service: "AI CONTENT", title: "A fresh creative perspective", quote: "The ideas felt original, the visuals were beautifully considered, and the whole campaign finally sounded like us.", person: "Maya Bennett", role: "Brand Director · Northstar Studio", initials: "MB", accent: "blue", icon: "✳", stamp: "CREATIVITY" },
  { number: "02", service: "REAL ADS", title: "Creative that gets noticed", quote: "The team found a clearer way to tell our story. The new ads gave our launch the confident look it needed.", person: "Ethan Cole", role: "Founder · Form & Field", initials: "EC", accent: "green", icon: "↗", stamp: "CAMPAIGNS" },
  { number: "03", service: "UGC STUDIO", title: "It feels genuinely human", quote: "The content felt natural rather than over-produced. It brought a warmer, more personal voice to our brand.", person: "Sofia Rivera", role: "Marketing Lead · Sunday Supply", initials: "SR", accent: "teal", icon: "◉", stamp: "CONNECTION" },
  { number: "04", service: "WEB DESIGN", title: "A more thoughtful experience", quote: "Every detail feels intentional. The new website makes it much easier for people to understand what we do.", person: "Oliver Hayes", role: "Co-founder · Atelier One", initials: "OH", accent: "teal", icon: "⌘", stamp: "EXPERIENCE" },
  { number: "05", service: "COLLABORATION", title: "A genuinely good process", quote: "Communication was clear, feedback was welcomed, and each stage felt like a creative partnership.", person: "Amelia Brooks", role: "Creative Director · Common Ground", initials: "AB", accent: "blue", icon: "✳", stamp: "PARTNERSHIP" },
  { number: "06", service: "THE OUTCOME", title: "The details made the difference", quote: "What stood out most was the care behind the work. The final result felt cohesive, polished, and unmistakably ours.", person: "Noah Williams", role: "Owner · The Good Habit", initials: "NW", accent: "green", icon: "↗", stamp: "RESULTS" },
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
                  <span className="letter-reveal-label">SAMPLE REVIEW · DEMO CONTENT</span>
                  <h3>{letter.title}</h3>
                  <p className="letter-review-quote">“{letter.quote}”</p>
                  <div className="letter-review-person">
                    <span className="letter-review-avatar">{letter.initials}</span>
                    <span className="letter-review-byline"><b>{letter.person}</b><i>{letter.role}</i></span>
                  </div>
                  <span className="letter-reveal-stamp">{letter.stamp} · {letter.number}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <p className="feedback-disclaimer">
        Demo content for layout preview only. Names and reviews are fictional placeholders and must be replaced with approved client testimonials before publishing.
      </p>
    </section>
  );
}
