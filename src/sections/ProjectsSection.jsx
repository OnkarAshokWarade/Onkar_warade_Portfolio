import { projects } from '../data/portfolioData'

function ProjectsSection() {
  return (
    <section className="block block-projects" id="projects">
      <div className="block-inner">
        <header className="block-head">
          <span className="block-label">Selected work</span>
          <h2>Selected concepts, thoughtfully <em>in progress.</em></h2>
          <p>A curated preview of explorations across intelligent products, systems thinking, and modern web experiences.</p>
        </header>
        <ol className="work-index">
          {projects.map((project, index) => (
            <li className={`work-row work-${project.variant}`} key={project.title}>
              <span className="work-num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div className="work-copy">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <ul className="work-tags" aria-label={`${project.title} topics`}>
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <span className="work-status">Case study in development</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ProjectsSection
