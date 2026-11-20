const tickerItems = [
  ["AI CONTENT", "ticker-ai"],
  ["REAL ADS", "ticker-ads"],
  ["UGC STUDIO", "ticker-ugc"],
  ["WEB DESIGN", "ticker-web"],
  ["CREATIVE DIRECTION", "ticker-direction"],
];

export default function ServicesTicker() {
  return (
    <section className="ticker group relative overflow-hidden" aria-label="Our capabilities">
      <div className="ticker-track">
        {[0, 1, 2, 3].map((copy) => (
          <div className="ticker-group" key={copy} aria-hidden={copy > 0}>
            {tickerItems.map(([label, tone]) => (
              <span className={`ticker-item ${tone}`} key={label}>
                <span className="ticker-label">{label}</span>
                <span className="ticker-spark" aria-hidden="true">✳</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
