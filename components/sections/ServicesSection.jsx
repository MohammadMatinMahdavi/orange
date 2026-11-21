import Arrow from "@/components/ui/Arrow";

export default function ServicesSection({ services, t }) {
  return <section className="section services-section" id="services">
    <div className="section-heading"><div><div className="eyebrow"><span>{t.eyebrow.split(" / ")[0]}</span> / {t.eyebrow.split(" / ")[1]}</div><h2>{t.title1}<br /><span className="muted">{t.title2}</span></h2></div><p className="section-intro">{t.intro}</p></div>
    <div className="service-grid">{services.map((service) => <article className={`service-card service-card-${service.number} relative isolate overflow-hidden rounded-2xl shadow-2xl transition-all duration-300`} key={service.number}><div className="service-top"><span>{service.number} / {t.serviceLabel}</span><span className="service-icon">{service.icon}</span></div><div><div className="service-tag">{service.tag}</div><h3>{service.title}</h3><p>{service.description}</p></div><ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul><a className="card-link" href="#contact">{t.link} <Arrow diagonal /></a></article>)}</div>
  </section>;
}
