export default function ProcessSection({ steps }) {
  return (
    <section className="section process-section" id="process">
            <div className="section-heading"><div><div className="eyebrow"><span>04</span> / HOW IT WORKS</div><h2>From first thought<br /><span className="muted">to final frame.</span></h2></div><p className="section-intro">A clear, collaborative process. No mystery, no unnecessary layers — just good work, done thoughtfully.</p></div>
            <div className="process-list">{steps.map(([number, title, description]) => <article className="process-item" key={number}><span className="process-number">{number}</span><h3>{title}</h3><p>{description}</p><span className="process-arrow"><Arrow diagonal /></span></article>)}</div>
          </section>
  );
}
