import Arrow from "@/components/ui/Arrow";
import HeroBackgroundVideo from "@/components/sections/HeroBackgroundVideo";

export default function HeroSection({ t }) {
  return <section className="hero">
    <HeroBackgroundVideo /><div className="hero-glow" />
    <div className="hero-kicker"><span className="kicker-line" /> {t.kicker} <span className="kicker-index">{t.est}</span></div>
    <h1>{t.line1}<br /><span className="hero-outline">{t.outline}</span> <span className="hero-accent">{t.accent}</span></h1>
    <div className="hero-bottom"><p className="hero-copy">{t.copy}</p><div className="hero-actions"><a className="button button-primary" href="#contact">{t.start} <Arrow diagonal /></a><a className="text-link" href="#work">{t.explore} <Arrow /></a></div></div>
    <div className="hero-foot"><span className="hero-foot-location"><i /> {t.foot} <b>·</b> {t.world}</span><span className="hero-foot-index">01 <em>/</em> 07</span></div>
  </section>;
}
