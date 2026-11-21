"use client";

import { useState } from "react";

export default function TestimonialSection({ t }) {
  const [openLetter, setOpenLetter] = useState(null);
  const toggleLetter = (number) => setOpenLetter((current) => current === number ? null : number);
  return <section className="testimonial-section feedback-section" id="testimonials">
    <div className="feedback-heading"><div><div className="eyebrow"><span>{t.eyebrow.split(" / ")[0]}</span> / {t.eyebrow.split(" / ")[1]}</div><h2>{t.title}</h2></div><div className="feedback-intro-copy"><p className="feedback-headline">{t.headline}</p><p>{t.intro}</p></div></div>
    <div className="letter-grid">{t.letters.map((letter,index) => {
      const number = String(index+1).padStart(2,"0");
      const isOpen = openLetter === number;
      return <article className={`letter-card letter-card-${letter.accent}${isOpen ? " is-open" : ""}`} key={number}>
        <span className="letter-index">{t.letterLabel} {number} <i>/ 06</i></span>
        <button className="letter-trigger" type="button" aria-expanded={isOpen} aria-controls={`letter-comment-${number}`} aria-label={`${t.open}: ${letter.service}`} onClick={() => toggleLetter(number)}>
          <span className="letter-stage" aria-hidden="true"><span className="letter-plate"><span className="letter-plate-rim" /><span className="letter-plate-center" /><span className="letter-plate-glint" /></span><span className="letter-envelope-closed"><span className="envelope-back" /><span className="envelope-front" /><span className="envelope-flap" /><span className="envelope-seal">{letter.mark}</span></span><span className="letter-opened-paper"><span className="opened-paper-topline">{t.paper}</span><span className="opened-paper-title">{letter.title}</span><span className="opened-paper-rule" /><span className="opened-paper-lines"><i /><i /><i /><i /></span><span className="opened-paper-sign">{t.paperSign}</span></span></span>
          <span className="letter-card-meta"><span className="letter-service">{letter.service}</span><span className="letter-open-hint">{isOpen ? t.opened : t.open} <b>↗</b></span></span>
        </button>
        <div className="letter-glass-panel" id={`letter-comment-${number}`} aria-hidden={!isOpen}><span className="letter-glass-kicker">{t.panel}</span><p className="letter-review-quote">“{letter.quote}”</p><div className="letter-review-person"><span className="letter-review-avatar" aria-hidden="true">{letter.initials}</span><span className="letter-review-byline"><b>{letter.name}</b><i>{letter.role}</i></span></div></div>
      </article>;
    })}</div>
    <p className="feedback-disclaimer">{t.disclaimer}</p>
  </section>;
}
