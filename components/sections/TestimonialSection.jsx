"use client";

const feedbackCards = [
  {
    number: "01",
    service: "AI CONTENT",
    title: "The first impression",
    prompt: "What did you think when you first saw the final creative?",
    accent: "blue",
    icon: "✳",
  },
  {
    number: "02",
    service: "REAL ADS",
    title: "Made to make an impact",
    prompt: "How did the creative fit your campaign and its goals?",
    accent: "green",
    icon: "↗",
  },
  {
    number: "03",
    service: "UGC STUDIO",
    title: "A human connection",
    prompt: "Did the content feel natural to your brand and audience?",
    accent: "teal",
    icon: "◉",
  },
  {
    number: "04",
    service: "WEB DESIGN",
    title: "A better experience",
    prompt: "How did the new digital experience change the way you present your brand?",
    accent: "teal",
    icon: "⌘",
  },
  {
    number: "05",
    service: "COLLABORATION",
    title: "Good work, together",
    prompt: "How was the communication, creative process and delivery?",
    accent: "blue",
    icon: "✳",
  },
  {
    number: "06",
    service: "THE OUTCOME",
    title: "The part that matters",
    prompt: "What made the biggest difference to your project?",
    accent: "green",
    icon: "↗",
  },
];

export default function TestimonialSection() {
  return (
    <section className="testimonial-section feedback-section" id="testimonials">
      <div className="feedback-heading">
        <div>
          <div className="eyebrow"><span>06</span> / WHAT YOU SAY</div>
          <h2>نظرات <span>شما</span></h2>
        </div>
        <p>
          Every great collaboration leaves something behind. We make room for
          the voices, experiences and honest feedback that help us grow.
        </p>
      </div>

      <div className="feedback-grid">
        {feedbackCards.map((card) => (
          <article
            className={`feedback-card feedback-card-${card.accent}`}
            key={card.number}
          >
            <div className="feedback-card-top">
              <span className="feedback-number">{card.number} / 06</span>
              <span className="feedback-icon" aria-hidden="true">{card.icon}</span>
            </div>
            <div className="feedback-card-content">
              <span className="feedback-service">{card.service}</span>
              <div className="feedback-quote-mark" aria-hidden="true">“</div>
              <h3>{card.title}</h3>
              <p>{card.prompt}</p>
            </div>
            <div className="feedback-card-bottom">
              <span className="feedback-status-dot" />
              <span>YOUR FEEDBACK MATTERS</span>
              <span className="feedback-card-arrow" aria-hidden="true">↗</span>
            </div>
            <span className="feedback-card-watermark" aria-hidden="true">{card.number}</span>
          </article>
        ))}
      </div>
      <p className="feedback-disclaimer">
        We only publish genuine client feedback with permission. These six cards
        are designed slots, ready for verified testimonials.
      </p>
    </section>
  );
}
