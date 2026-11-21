export default function ManifestoSection({ t }) {
  return <section className="manifesto"><div className="manifesto-orb" /><div className="eyebrow"><span>{t.eyebrow.split(" / ")[0]}</span> / {t.eyebrow.split(" / ")[1]}</div><p>{t.before}<br /><span className="manifesto-highlight">{t.highlight}</span> {t.after}</p><div className="manifesto-bottom"><span>{t.bottom1}</span><span>{t.bottom2}</span></div></section>;
}
