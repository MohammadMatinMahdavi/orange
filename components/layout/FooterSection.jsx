export default function FooterSection({ t }) {
  const links = ["#services","#work","#process","#faq","#contact"];
  return <footer className="footer">
    <div className="footer-glow footer-glow-one" aria-hidden="true" /><div className="footer-glow footer-glow-two" aria-hidden="true" />
    <div className="footer-cta"><span className="footer-eyebrow"><i /> {t.eyebrow}</span><h2>{t.title1}<br /><span>{t.title2}</span></h2><a className="footer-cta-link" href="#contact">{t.cta} <b>↗</b></a><div className="footer-orbit" aria-hidden="true"><span>o.</span></div></div>
    <div className="footer-main"><div className="footer-brand-block"><a className="brand footer-brand" href="#top" aria-label={t.homeLabel}><span className="brand-mark">o<span>.</span></span><span>orange<span className="brand-light">ai</span></span></a><p>{t.brand}<br />{t.brand2}</p></div>
      <div className="footer-nav-block"><span className="footer-label">{t.explore}</span><nav className="footer-nav" aria-label="Footer navigation">{t.links.map((label,index) => <a key={label} href={links[index]}>{label}<span>↗</span></a>)}</nav></div>
      <div className="footer-connect"><span className="footer-label">{t.connect}</span><a className="footer-email" href="mailto:hello@orangeai.studio">hello@orangeai.studio <span>↗</span></a><span className="footer-location">{t.location}</span></div>
    </div>
    <div className="footer-wordmark" aria-hidden="true">ORANGE<span>AI</span><i>.</i></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {t.copyright}</span><span>{t.bottom} <i>✳</i></span><a href="#top">{t.back} ↑</a></div>
  </footer>;
}
