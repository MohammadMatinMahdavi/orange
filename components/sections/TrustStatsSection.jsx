const stats = [
  { value: "XX+", label: "CLIENTS & PARTNERS", detail: "Brands that have trusted our creative work", tone: "blue" },
  { value: "XX+", label: "PROJECTS DELIVERED", detail: "Ideas turned into real-world experiences", tone: "green" },
];

export default function TrustStatsSection() {
  return (
    <section className="trust-section" id="impact" aria-labelledby="trust-heading">
      <div className="trust-heading">
        <div>
          <div className="eyebrow"><span>TRUST</span> / PROOF, NOT PROMISES</div>
          <h2 id="trust-heading">Built on trust.<br /><span>Measured by impact.</span></h2>
        </div>
        <p>Good creative work starts with a relationship — and earns its value through what gets delivered.</p>
      </div>
      <div className="trust-stats-grid">
        {stats.map((stat) => (
          <article className={`trust-stat trust-stat-${stat.tone}`} key={stat.label}>
            <span className="trust-stat-index">ORANGE AI / {stat.tone === "blue" ? "01" : "02"}</span>
            <strong>{stat.value}</strong>
            <h3>{stat.label}</h3>
            <p>{stat.detail}</p>
            <span className="trust-stat-orb" aria-hidden="true" />
          </article>
        ))}
      </div>
      <p className="trust-footnote">XX+ ARE PLACEHOLDERS — REPLACE WITH VERIFIED COMPANY TOTALS BEFORE LAUNCH.</p>
    </section>
  );
}
