function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function ContactSection() {
  return (
    <section className="contact-section relative isolate overflow-hidden" id="contact">
      <div className="contact-glow" />
      <div className="eyebrow"><span>07</span> / YOUR NEXT MOVE</div>
      <div className="contact-layout">
        <div className="contact-intro">
          <span className="contact-overline">LET’S MAKE SOMETHING MATTER</span>
          <h2>Have a good<br />feeling about <span>this?</span></h2>
          <p className="contact-copy">Tell us what you’re dreaming up. We’ll bring the creative thinking, the tools and a plan to make it happen.</p>
          <a className="contact-email" href="mailto:hello@orangeai.studio">hello@orangeai.studio <Arrow /></a>
          <div className="contact-trust-note"><span className="contact-pulse" /> A GOOD IDEA STARTS WITH A CONVERSATION</div>
        </div>

        <form className="contact-form relative rounded-2xl border border-white/10 bg-[#171411]/90 p-6 shadow-2xl shadow-orange-950/30 backdrop-blur-xl sm:p-8" action="mailto:hello@orangeai.studio" method="post" encType="text/plain">
          <div className="form-card-heading">
            <div><span className="form-step">PROJECT INQUIRY · 01</span><h3>Let’s talk details.</h3></div>
            <span className="form-spark" aria-hidden="true">✳</span>
          </div>
          <label>Your name<input name="name" placeholder="How should we call you?" required /></label>
          <label>Email address<input name="email" type="email" placeholder="you@company.com" required /></label>
          <label>What do you need?<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>AI Content</option><option>Real Ads</option><option>UGC Studio</option><option>Web Design</option><option>Something else</option></select></label>
          <label>Tell us a little about it<textarea name="message" rows="3" placeholder="A few words about your project..." /></label>
          <button className="button button-primary form-submit group w-full justify-between rounded-lg shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-1 hover:shadow-orange-500/30" type="submit">Send your inquiry <Arrow /></button>
          <span className="form-note">By sending this, you’re taking the first step. We’ll take it from here.</span>
        </form>
      </div>
    </section>
  );
}
