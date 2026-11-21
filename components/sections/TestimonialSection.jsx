"use client";

import { useState } from "react";

const letters = [
  {
    number: "01", service: "AI CONTENT", title: "A completely new perspective",
    quote: "Orange took a rough idea and turned it into a visual world that felt unmistakably like our brand. The speed was impressive, but the attention to detail made the real difference.",
    name: "Maya Bennett", role: "Brand Director · Northstar Studio", initials: "MB", accent: "blue", mark: "✳",
  },
  {
    number: "02", service: "REAL ADS", title: "Creative that gets noticed",
    quote: "The team understood what we needed our ads to do. The concepts felt fresh, the message was clear, and we finally had creative variations that gave our campaign room to grow.",
    name: "Ethan Cole", role: "Founder · Form & Field", initials: "EC", accent: "green", mark: "↗",
  },
  {
    number: "03", service: "UGC STUDIO", title: "It felt genuinely human",
    quote: "We wanted content that sounded like a real recommendation, not another polished advert. Orange found that balance and gave us a collection that felt natural from the first frame.",
    name: "Sofia Rivera", role: "Marketing Lead · Sunday Supply", initials: "SR", accent: "teal", mark: "◉",
  },
  {
    number: "04", service: "WEB DESIGN", title: "Our best first impression",
    quote: "The new website finally tells our story the way we always imagined. Every detail feels considered, the experience is effortless, and the whole brand feels more confident online.",
    name: "Oliver Hayes", role: "Co-founder · Atelier One", initials: "OH", accent: "teal", mark: "⌘",
  },
  {
    number: "05", service: "COLLABORATION", title: "A team that gets it",
    quote: "From the first conversation to the final delivery, the process felt thoughtful and collaborative. They listened, brought ideas of their own, and made every round feel like progress.",
    name: "Amelia Brooks", role: "Creative Director · Common Ground", initials: "AB", accent: "blue", mark: "✳",
  },
  {
    number: "06", service: "THE OUTCOME", title: "More than we expected",
    quote: "What stood out most was how everything came together. The work gave us a clearer story, a stronger presence, and the confidence to take our next step.",
    name: "Noah Williams", role: "Owner · The Good Habit", initials: "NW", accent: "green", mark: "↗",
  },
];

export default function TestimonialSection() {
  const [openLetter, setOpenLetter] = useState(null);

  const toggleLetter = (number) => {
    setOpenLetter((current) => (current === number ? null : number));
  };

  return (
    <section className="testimonial-section feedback-section" id="testimonials">
      <div className="feedback-heading">
        <div>
          <div className="eyebrow"><span>06</span> / WORDS THAT MATTER</div>
          <h2>YOUR <span>COMMENTS</span></h2>
        </div>
        <div className="feedback-intro-copy">
          <p className="feedback-headline">A little appreciation goes a long way.</p>
          <p>
            Every project leaves a story behind. Hover over a letter to open it,
            or tap to read each note.
          </p>
        </div>
      </div>

      <div className="letter-grid">
        {letters.map((letter) => {
          const isOpen = openLetter === letter.number;

          return (
            <article
              className={`letter-card letter-card-${letter.accent}${isOpen ? " is-open" : ""}`}
              key={letter.number}
            >
              <span className="letter-index">LETTER {letter.number} <i>/ 06</i></span>

              <button
                className="letter-trigger"
                type="button"
                aria-expanded={isOpen}
                aria-controls={`letter-comment-${letter.number}`}
                aria-label={`Open comment letter ${letter.number}: ${letter.service}`}
                onClick={() => toggleLetter(letter.number)}
              >
                <span className="letter-stage" aria-hidden="true">
                  <span className="letter-plate">
                    <span className="letter-plate-rim" />
                    <span className="letter-plate-center" />
                    <span className="letter-plate-glint" />
                  </span>

                  <span className="letter-envelope-closed">
                    <span className="envelope-back" />
                    <span className="envelope-front" />
                    <span className="envelope-flap" />
                    <span className="envelope-seal">{letter.mark}</span>
                  </span>

                  <span className="letter-opened-paper">
                    <span className="opened-paper-topline">A NOTE FROM OUR JOURNEY</span>
                    <span className="opened-paper-title">{letter.title}</span>
                    <span className="opened-paper-rule" />
                    <span className="opened-paper-lines"><i /><i /><i /><i /></span>
                    <span className="opened-paper-sign">WITH APPRECIATION</span>
                  </span>
                </span>

                <span className="letter-card-meta">
                  <span className="letter-service">{letter.service}</span>
                  <span className="letter-open-hint">{isOpen ? "LETTER OPEN" : "HOVER TO OPEN"} <b>↗</b></span>
                </span>
              </button>

              <div className="letter-glass-panel" id={`letter-comment-${letter.number}`} aria-hidden={!isOpen}>
                <span className="letter-glass-kicker">A FEW WORDS FROM THE OTHER SIDE</span>
                <p className="letter-review-quote">“{letter.quote}”</p>
                <div className="letter-review-person">
                  <span className="letter-review-avatar" aria-hidden="true">{letter.initials}</span>
                  <span className="letter-review-byline">
                    <b>{letter.name}</b>
                    <i>{letter.role}</i>
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <p className="feedback-disclaimer">
        These are illustrative demo comments, not verified client reviews.
        They will be replaced with genuine, approved feedback before publication.
      </p>
    </section>
  );
}
