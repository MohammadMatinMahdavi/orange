"use client";

import { useEffect } from "react";
import Arrow from "@/components/ui/Arrow";

export default function PortfolioSection({ projects }) {
  useEffect(() => {
    const cards = document.querySelectorAll(".portfolio-reveal");
    if (!("IntersectionObserver" in window)) {
      cards.forEach((card) => card.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.22, rootMargin: "0px 0px -8% 0px" }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [projects]);

  return (
    <section className="section work-section" id="work">
      <div className="section-heading">
        <div>
          <div className="eyebrow"><span>02</span> / SELECTED WORK</div>
          <h2>Made to make<br /><span className="muted">you look twice.</span></h2>
        </div>
        <p className="section-intro">A glimpse into the worlds we can build. Your brand could be the next one here.</p>
      </div>

      <div className="project-grid">
        {projects.map((project, i) => (
          <article className={`project-card portfolio-reveal ${project.className || ""}`} key={project.title}>
            <div className="project-peel">
              <div className="project-image" style={{ backgroundImage: `url('${project.image}')` }}>
                <span className="project-number">0{i + 1}</span>
                <span className="project-open"><Arrow diagonal /></span>
                <span className="project-image-caption">ORANGE AI / SELECTED FRAME</span>
              </div>
            </div>
            <div className="project-meta">
              <div>
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
              </div>
              <span className="project-type">{project.type}</span>
            </div>
          </article>
        ))}
      </div>
      <p className="work-note">A CURATED PREVIEW <span>— MORE GOOD THINGS IN THE MAKING</span></p>
    </section>
  );
}
