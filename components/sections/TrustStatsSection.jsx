export default function TrustStatsSection({ t }) {
  return <section className="trust-section" id="impact" aria-labelledby="trust-heading">
    <div className="trust-heading"><div><div className="eyebrow"><span>{t.eyebrow.split(" / ")[0]}</span> / {t.eyebrow.split(" / ")[1]}</div><h2 id="trust-heading">{t.title1}<br /><span>{t.title2}</span></h2></div><p>{t.intro}</p></div>
    <div className="trust-stats-grid">{t.stats.map((stat) => <article className={`trust-stat trust-stat-${stat.tone}`} key={stat.label}><span className="trust-stat-index">ORANGE AI / {stat.tone === "blue" ? "01" : "02"}</span><strong>{stat.value}</strong><h3>{stat.label}</h3><p>{stat.detail}</p><span className="trust-stat-orb" aria-hidden="true" /></article>)}</div>
    <p className="trust-footnote">{t.note}</p>
  </section>;
}
