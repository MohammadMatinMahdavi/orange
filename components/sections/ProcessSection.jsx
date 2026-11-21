import Arrow from "@/components/ui/Arrow";

export default function ProcessSection({ steps, t }) {
  return <section className="section process-section" id="process"><div className="section-heading"><div><div className="eyebrow"><span>{t.eyebrow.split(" / ")[0]}</span> / {t.eyebrow.split(" / ")[1]}</div><h2>{t.title1}<br /><span className="muted">{t.title2}</span></h2></div><p className="section-intro">{t.intro}</p></div><div className="process-list">{steps.map(([title, description], index) => <article className="process-item" key={title}><span className="process-number">0{index+1}</span><h3>{title}</h3><p>{description}</p><span className="process-arrow"><Arrow diagonal /></span></article>)}</div></section>;
}
