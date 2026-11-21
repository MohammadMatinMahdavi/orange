"use client";

import { useState } from "react";

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function ContactSection({ t }) {
  const [selectedService,setSelectedService] = useState("");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const completedFields = Number(name.trim().length > 0) + Number(emailIsValid) + Number(Boolean(selectedService));
  const progress = Math.min(100,Math.round((completedFields/3)*90+(message.trim()?10:0)));
  return <section className="contact-section relative isolate overflow-hidden" id="contact">
    <div className="contact-glow" /><div className="eyebrow"><span>{t.eyebrow.split(" / ")[0]}</span> / {t.eyebrow.split(" / ")[1]}</div>
    <div className="contact-layout"><div className="contact-intro"><span className="contact-overline">{t.overline}</span><h2>{t.title1}<br />{t.title2} <span>{t.title3}</span></h2><p className="contact-copy">{t.copy}</p><a className="contact-email" href="mailto:hello@orangeai.studio">hello@orangeai.studio <Arrow /></a><div className="contact-trust-note"><span className="contact-pulse" /> {t.trust}</div></div>
      <form className="contact-form contact-form-asymmetric relative" action="mailto:hello@orangeai.studio" method="post" encType="text/plain">
        <div className="contact-form-top"><div className="form-card-heading"><div><span className="form-step">{t.formStep}</span><h3>{t.formTitle}</h3></div><span className="form-spark" aria-hidden="true">✳</span></div>
          <div className="inquiry-progress" role="status" aria-live="polite" aria-label={`${t.progress} ${progress}%`}><div className="inquiry-progress-meta"><span>{t.progress}</span><b>{String(progress).padStart(2,"0")}%</b></div><div className="inquiry-progress-track"><span style={{width:`${progress}%`}} /></div><div className="inquiry-progress-steps">{t.steps.map((step,index)=><span key={step} className={[(name.trim()),emailIsValid,selectedService,message.trim()][index]?"is-complete":""}>{step}</span>)}</div></div>
          <label>{t.name}<input name="name" value={name} onChange={(event)=>setName(event.target.value)} placeholder={t.namePlaceholder} required /></label>
          <label>{t.email}<input name="email" type="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder={t.emailPlaceholder} required /></label>
        </div>
        <div className="contact-form-bottom"><fieldset className="service-picker"><legend>{t.serviceLegend}</legend><div className="service-picker-grid">{t.services.map((service,index)=><label className={`service-choice ${selectedService===service.name?"is-selected":""}`} key={index}><input type="radio" name="service" value={service.name} checked={selectedService===service.name} onChange={()=>setSelectedService(service.name)} required /><span className="service-choice-icon" aria-hidden="true">{service.icon}</span><span className="service-choice-copy"><b>{service.name}</b><small>{service.detail}</small></span><span className="service-choice-check" aria-hidden="true">✓</span><span className="service-choice-code">0{index+1}</span></label>)}</div><span className="service-picker-hint">{selectedService?`${t.selected} · ${selectedService.toUpperCase()}`:t.serviceHint}</span></fieldset>
          <label>{t.message}<textarea name="message" rows="3" value={message} onChange={(event)=>setMessage(event.target.value)} placeholder={t.messagePlaceholder} /></label>
          <button className="button button-primary form-submit group w-full justify-between rounded-lg shadow-lg shadow-sky-500/20 transition-all hover:-translate-y-1 hover:shadow-emerald-500/30" type="submit">{t.submit} <Arrow /></button><span className="form-note">{t.note}</span>
        </div>
      </form>
    </div>
  </section>;
}
