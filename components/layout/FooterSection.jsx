const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Selected work", href: "#work" },
  { label: "Our approach", href: "#process" },
  { label: "FAQs", href: "#faq" },
  { label: "Start a project", href: "#contact" },
];

export default function FooterSection() {
  return (
    <footer className="footer">
      <div className="footer-glow footer-glow-one" aria-hidden="true" />
      <div className="footer-glow footer-glow-two" aria-hidden="true" />
      <div className="footer-cta">
        <span className="footer-eyebrow"><i /> HAVE A GOOD ONE IN MIND?</span>
        <h2>LET’S MAKE<br /><span>IT MATTER.</span></h2>
        <a className="footer-cta-link" href="#contact">TELL US ABOUT IT <b>↗</b></a>
        <div className="footer-orbit" aria-hidden="true"><span>o.</span></div>
      </div>

      <div className="footer-main">
        <div className="footer-brand-block">
          <a className="brand footer-brand" href="#top" aria-label="Orange AI — back to top">
            <span className="brand-mark">o<span>.</span></span>
            <span>orange<span className="brand-light">ai</span></span>
          </a>
          <p>Ideas with an edge.<br />Made for what’s next.</p>
        </div>
        <div className="footer-nav-block">
          <span className="footer-label">EXPLORE</span>
          <nav className="footer-nav" aria-label="Footer navigation">
            {footerLinks.map((link) => <a key={link.label} href={link.href}>{link.label}<span>↗</span></a>)}
          </nav>
        </div>
        <div className="footer-connect">
          <span className="footer-label">GOOD THINGS START HERE</span>
          <a className="footer-email" href="mailto:hello@orangeai.studio">hello@orangeai.studio <span>↗</span></a>
          <span className="footer-location">INDEPENDENT BY NATURE. CREATIVE BY DESIGN.</span>
        </div>
      </div>

      <div className="footer-wordmark" aria-hidden="true">ORANGE<span>AI</span><i>.</i></div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} ORANGE AI STUDIO. ALL RIGHTS RESERVED.</span>
        <span>BUILT FOR WHAT’S NEXT <i>✳</i></span>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
