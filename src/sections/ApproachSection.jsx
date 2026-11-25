import { capabilities } from '../data/portfolioData'

function ApproachSection() {
  return (
    <section className="block block-approach" id="about">
      <div className="block-inner">
        <header className="block-head">
          <span className="block-label">The approach</span>
          <h2>Engineering ideas into <em>intelligent experiences.</em></h2>
          <p>I combine AI/ML problem-solving with full-stack web development to create useful, scalable software that feels considered from the first interaction to the last line of code.</p>
        </header>
        <ol className="principles">
          {capabilities.map((item) => (
            <li className="principle" key={item.number}>
              <span className="principle-num" aria-hidden="true">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ApproachSection
