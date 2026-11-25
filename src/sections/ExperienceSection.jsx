import { currentRole } from '../data/portfolioData'

function ExperienceSection() {
  return (
    <section className="block block-experience" id="experience">
      <div className="block-inner">
        <header className="block-head">
          <span className="block-label">Current focus</span>
          <h2>Building products at the intersection of <em>AI and full-stack engineering.</em></h2>
          <p>I currently work at {currentRole.company}, {currentRole.introduction}</p>
        </header>
        <article className="role-sheet" aria-labelledby="current-role-title">
          <div className="role-when">
            <span className="role-live"><i aria-hidden="true" />Present</span>
            <span className="role-kind">Current role</span>
          </div>
          <div className="role-main">
            <h3 id="current-role-title">{currentRole.title}</h3>
            <p className="role-company">{currentRole.company}</p>
            <p className="role-description">{currentRole.description}</p>
          </div>
          <ul className="role-focus" aria-label="Contribution areas">
            {currentRole.focusAreas.map((area, index) => <li key={area}><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>{area}</li>)}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default ExperienceSection
