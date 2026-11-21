export default function ServicesTicker({ t }) {
  return <section className="ticker group relative overflow-hidden" aria-label={t.label}><div className="ticker-track">{[0,1,2,3].map((copy) => <div className="ticker-group" key={copy} aria-hidden={copy > 0}>{t.items.map((label,index) => <span className={`ticker-item ticker-${["ai","ads","ugc","web","direction"][index]}`} key={label}><span className="ticker-label">{label}</span><span className="ticker-spark" aria-hidden="true">✳</span></span>)}</div>)}</div></section>;
}
