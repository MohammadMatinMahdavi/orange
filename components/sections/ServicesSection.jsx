export default function ServicesSection({ services }) {
  return (
    <section className="section services-section" id="services">
            <div className="section-heading"><div><div className="eyebrow"><span>01</span> / WHAT WE DO</div><h2>Good ideas.<br /><span className="muted">Better execution.</span></h2></div><p className="section-intro">One creative partner for the content and digital presence your brand needs to stand out.</p></div>
            <div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-top"><span>{service.number} / SERVICE</span><span className="service-icon">{service.icon}</span></div><div><div className="service-tag">{service.tag}</div><h3>{service.title}</h3><p>{service.description}</p></div><ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul><a className="card-link" href="#contact">Explore service <Arrow diagonal /></a></article>)}</div>
          </section>
  );
}
