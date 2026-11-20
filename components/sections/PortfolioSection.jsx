export default function PortfolioSection({ projects }) {
  return (
    <section className="section work-section" id="work">
            <div className="section-heading"><div><div className="eyebrow"><span>02</span> / SELECTED WORK</div><h2>Made to make<br /><span className="muted">you look twice.</span></h2></div><p className="section-intro">A glimpse into the worlds we can build. Your brand could be the next one here.</p></div>
            <div className="project-grid">{projects.map((project, i) => <article className={`project-card ${project.className}`} key={project.title}><div className="project-image" style={{ backgroundImage: `url('${project.image}')` }}><span className="project-number">0{i + 1}</span><span className="project-open"><Arrow diagonal /></span></div><div className="project-meta"><div><span className="project-category">{project.category}</span><h3>{project.title}</h3></div><span className="project-type">{project.type}</span></div></article>)}</div>
            <p className="work-note">A CURATED PREVIEW <span>— MORE GOOD THINGS IN THE MAKING</span></p>
          </section>
  );
}
