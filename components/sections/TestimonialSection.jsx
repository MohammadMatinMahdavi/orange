"use client";

import { useState } from "react";

const letters = [
  {
    number: "01",
    service: "AI CONTENT",
    title: "A completely new perspective",
    quote: "Orange took a rough idea and turned it into a visual world that felt unmistakably like our brand. The speed was impressive, but the attention to detail made the real difference.",
    name: "Maya Bennett",
    role: "Brand Director · Northstar Studio",
    initials: "MB",
    accent: "blue",
    mark: "✳",
  },
  {
    number: "02",
    service: "REAL ADS",
    title: "Creative that gets noticed",
    quote: "The team understood what we needed our ads to do. The concepts felt fresh, the message was clear, and we finally had creative variations that gave our campaign room to grow.",
    name: "Ethan Cole",
    role: "Founder · Form & Field",
    initials: "EC",
    accent: "green",
    mark: "↗",
  },
  {
    number: "03",
    service: "UGC STUDIO",
    title: "It felt genuinely human",
    quote: "We wanted content that sounded like a real recommendation, not another polished advert. Orange found that balance and gave us a collection that felt natural from the first frame.",
    name: "Sofia Rivera",
    role: "Marketing Lead · Sunday Supply",
    initials: "SR",
    accent: "teal",
    mark: "◉",
  },
  {
    number: "04",
    service: "WEB DESIGN",
    title: "Our best first impression",
    quote: "The new website finally tells our story the way we always imagined. Every detail feels considered, the experience is effortless, and the whole brand feels more confident online.",
    name: "Oliver Hayes",
    role: "Co-founder · Atelier One",
    initials: "OH",
    accent: "teal",
    mark: "⌘",
  },
  {
    number: "05",
    service: "COLLABORATION",
    title: "A team that gets it",
    quote: "From the first conversation to the final delivery, the process felt thoughtful and collaborative. They listened, brought ideas of their own, and made every round feel like progress.",
    name: "Amelia Brooks",
    role: "Creative Director · Common Ground",
    initials: "AB",
    accent: "blue",
    mark: "✳",
  },
  {
    number: "06",
    service: "THE OUTCOME",
    title: "More than we expected",
    quote: "What stood out most was how everything came together. The work gave us a clearer story, a stronger presence, and the confidence to take our next step.",
    name: "Noah Williams",
    role: "Owner · The Good Habit",
    initials: "NW",
    accent: "green",
    mark: "↗",
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
          <h2>نظرات <span>شما</span></h2>
        </div>
        <div className="feedback-intro-copy">
          <p className="feedback-headline">Some words are worth opening.</p>
          <p>
            Six notes. Six perspectives. One shared creative journey.
            Choose a letter and discover the story inside.
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
              <span className="letter-index">
                LETTER {letter.number} <i>/ 06</i>
              </span>

              <button
                className="letter-trigger"
                type="button"
                aria-expanded={isOpen}
                aria-controls={`letter-reveal-${letter.number}`}
                aria-label={`${isOpen ? "Close" : "Open"} letter ${letter.number}: ${letter.service}`}
                onClick={() => toggleLetter(letter.number)}
              >
                <span className="letter-envelope" aria-hidden="true">
                  <span className="letter-envelope-back" />
                  <span className="letter-paper">
                    <span className="letter-paper-kicker">A NOTE FROM OUR JOURNEY</span>
                    <span className="letter-paper-title">{letter.title}</span>
                    <span className="letter-paper-lines"><i /><i /><i /></span>
                    <span className="letter-paper-sign">WITH APPRECIATION</span>
                  </span>
                  <span className="letter-envelope-front" />
                  <span className="letter-envelope-flap" />
                  <span className="letter-seal">{letter.mark}</span>
                  <span className="letter-envelope-glint" />
                </span>

                <span className="letter-card-meta">
                  <span className="letter-service">{letter.service}</span>
                  <span className="letter-open-hint">
                    {isOpen ? "CLOSE LETTER" : "OPEN LETTER"} <b aria-hidden="true">{isOpen ? "−" : "↗"}</b>
                  </span>
                </span>
              </button>

              <div
                className="letter-reveal"
                id={`letter-reveal-${letter.number}`}
                aria-hidden={!isOpen}
              >
                <div className="letter-reveal-inner">
                  <span className="letter-reveal-label">A FEW WORDS FROM THE OTHER SIDE</span>
                  <h3>{letter.title}</h3>
                  <p className="letter-review-quote">“{letter.quote}”</p>
                  <div className="letter-review-person">
                    <span className="letter-review-avatar" aria-hidden="true">{letter.initials}</span>
                    <span className="letter-review-byline">
                      <b>{letter.name}</b>
                      <i>{letter.role}</i>
                    </span>
                  </div>
                  <span className="letter-reveal-stamp">THANK YOU FOR TRUSTING ORANGE</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <p className="feedback-disclaimer">
        These are illustrative demo testimonials, not verified client reviews.
        They will be replaced with genuine, approved feedback before publication.
      </p>
    </section>
  );
}
