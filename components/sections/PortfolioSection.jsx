"use client";

import { useEffect, useRef, useState } from "react";
import Arrow from "@/components/ui/Arrow";

function ProjectVisual({ project, index, t }) {
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
  return <div className="project-peel"><div className="project-image" style={{ backgroundImage: `url('${project.image}')` }}>
    {project.video && !videoFailed && <video ref={videoRef} className="project-video" src={project.video} poster={project.image} autoPlay muted loop playsInline preload="metadata" aria-label={`${project.title} — ${t.projectPreview}`} onError={() => setVideoFailed(true)} />}
    <span className="project-number">0{index + 1}</span><span className="project-open"><Arrow diagonal /></span><span className="project-image-caption">{t.frame}</span>
    {project.video && !videoFailed && <button type="button" className={`project-sound-toggle ${muted ? "is-muted" : "is-unmuted"}`} onClick={toggleSound} aria-label={muted ? t.soundEnable : t.soundMute} aria-pressed={!muted}><span aria-hidden="true">{muted ? "♪̸" : "♪"}</span><span>{muted ? t.soundOff : t.soundOn}</span></button>}
  </div></div>;
}

export default function PortfolioSection({ projects, t }) {
  useEffect(() => {
    const cards = document.querySelectorAll(".portfolio-reveal");
    if (!("IntersectionObserver" in window)) { cards.forEach((card) => card.classList.add("is-visible")); return; }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.remove("is-visible"); void entry.target.offsetWidth; entry.target.classList.add("is-visible"); }
      else entry.target.classList.remove("is-visible");
    }), { threshold: 0.18, rootMargin: "0px 0px -6% 0px" });
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [projects]);
  return <section className="section work-section" id="work"><div className="section-heading"><div><div className="eyebrow"><span>{t.eyebrow.split(" / ")[0]}</span> / {t.eyebrow.split(" / ")[1]}</div><h2>{t.title1}<br /><span className="muted">{t.title2}</span></h2></div><p className="section-intro">{t.intro}</p></div>
    <div className="project-grid">{projects.map((project, i) => <article className={`project-card portfolio-reveal ${project.className || ""}`} key={project.title}><ProjectVisual project={project} index={i} t={t} /><div className="project-meta"><div><span className="project-category">{project.category}</span><h3>{project.title}</h3></div><span className="project-type">{project.type}</span></div></article>)}</div>
    <p className="work-note">{t.note} <span>— {t.noteTail}</span></p>
  </section>;
}
