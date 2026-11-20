"use client";

import { useEffect, useRef, useState } from "react";
import Arrow from "@/components/ui/Arrow";

function ProjectVisual({ project, index }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [videoFailed, setVideoFailed] = useState(false);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !muted;
    video.muted = nextMuted;
    setMuted(nextMuted);
    if (!nextMuted) video.play().catch(() => setMuted(true));
  };

  return (
    <div className="project-peel">
      <div className="project-image" style={{ backgroundImage: `url('${project.image}')` }}>
        {project.video && !videoFailed && (
          <video
            ref={videoRef}
            className="project-video"
            src={project.video}
            poster={project.image}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`${project.title} project preview`}
            onError={() => setVideoFailed(true)}
          />
        )}
        <span className="project-number">0{index + 1}</span>
        <span className="project-open"><Arrow diagonal /></span>
        <span className="project-image-caption">ORANGE AI / SELECTED FRAME</span>
        {project.video && !videoFailed && (
          <button
            type="button"
            className={`project-sound-toggle ${muted ? "is-muted" : "is-unmuted"}`}
            onClick={toggleSound}
            aria-label={muted ? "Turn project video sound on" : "Mute project video"}
            aria-pressed={!muted}
          >
            <span aria-hidden="true">{muted ? "♪̸" : "♪"}</span>
            <span>{muted ? "SOUND OFF" : "SOUND ON"}</span>
          </button>
        )}
      </div>
    </div>
  );
}

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
            entry.target.classList.remove("is-visible");
            // Force a style recalculation so the CSS transition restarts on every re-entry.
            void entry.target.offsetWidth;
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -6% 0px" }
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
            <ProjectVisual project={project} index={i} />
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
