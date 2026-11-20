export default function FaqSection({ faqs, openFaq, setOpenFaq }) {
  return (
    <section className="section faq-section" id="faq">
            <div className="section-heading"><div><div className="eyebrow"><span>06</span> / GOOD TO KNOW</div><h2>Questions?<br /><span className="muted">We’ve got you.</span></h2></div><p className="section-intro">A few things you might be wondering before we get started.</p></div>
            <div className="faq-list">{faqs.map(([question, answer], index) => <article className={openFaq === index ? "faq-item faq-active" : "faq-item"} key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span className="faq-number">0{index + 1}</span><span>{question}</span><span className="faq-toggle">{openFaq === index ? "−" : "+"}</span></button>{openFaq === index && <p>{answer}</p>}</article>)}</div>
          </section>
  );
}
