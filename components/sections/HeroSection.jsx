import Arrow from "@/components/ui/Arrow";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="hero-kicker"><span className="kicker-line" /> CREATIVE STUDIO, REIMAGINED <span className="kicker-index">EST. FOR WHAT’S NEXT</span></div>
      <h1>Make something<br /><span className="hero-outline">worth</span> <span className="hero-accent">looking at.</span></h1>
      <div className="hero-bottom">
        <p className="hero-copy">We turn bold ideas into <strong>AI-powered content</strong> and digital experiences that move brands forward. Human creativity, amplified.</p>
        <div className="hero-actions"><a className="button button-primary" href="#contact">Start a project <Arrow diagonal /></a><a className="text-link" href="#work">Explore our work <Arrow /></a></div>
      </div>
      <div className="hero-art" aria-label="Abstract orange creative artwork">
        <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-core"><span>O</span></div>
        <div className="art-caption"><span>CREATIVITY, IN A NEW LIGHT</span><span>01 — 04</span></div>
        <span className="art-side-label">IDEAS IN MOTION / ORANGE AI</span>
      </div>
      <div className="hero-foot">
        <span className="hero-foot-location"><i /> INDEPENDENT CREATIVE STUDIO <b>·</b> WORKING WORLDWIDE</span>
        <span className="hero-foot-index">01 <em>/</em> 07</span>
      </div>
    </section>
  );
}
