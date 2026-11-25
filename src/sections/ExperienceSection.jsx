import { currentRole } from '../data/portfolioData'

function ExperienceSection() {
  return (
    <section className="block block-experience" id="experience">
      <div className="block-inner focus-layout">
        <header className="block-head focus-head">
          <span className="block-label">Current focus</span>
          <h2>Building products at the intersection of <em>AI and full-stack engineering.</em></h2>
          <p>I currently work at {currentRole.company}, {currentRole.introduction}</p>
        </header>
        <article className="focus-timeline" aria-labelledby="current-role-title">
          <div className="focus-meta">
            <span className="role-live"><i aria-hidden="true" />Present</span>
            <span className="role-kind">Current role</span>
          </div>
          <h3 className="focus-title" id="current-role-title">{currentRole.title}</h3>
          <p className="role-company">{currentRole.company}</p>
          <p className="role-description">{currentRole.description}</p>
          <ol className="focus-areas" aria-label="Contribution areas">
            {currentRole.focusAreas.map((area, index) => (
              <li key={area}>
                <span className="focus-area-num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <span className="focus-area-name">{area}</span>
              </li>
            ))}
          </ol>
        </article>
      </div>
    </section>
  )
}

export default ExperienceSection
