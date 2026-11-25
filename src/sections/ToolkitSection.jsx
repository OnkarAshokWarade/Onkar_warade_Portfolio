import { useEffect, useRef, useState } from 'react'
import { Database } from 'lucide-react'
import { siteAssets, technologies, technologyCategories } from '../data/portfolioData'

function TechnologyIcon({ technology }) {
  if (!technology.logo) return <Database className="sql-tech-icon" aria-hidden="true" strokeWidth={1.65} />
  return <img src={technology.logo} alt="" aria-hidden="true" />
}

function ToolkitSection() {
  const sectionRef = useRef(null)
  const [activeTech, setActiveTech] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(motion.matches)
    update()
    motion.addEventListener('change', update)
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() }
    }, { rootMargin: '0px 0px -12% 0px' })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => { motion.removeEventListener('change', update); observer.disconnect() }
  }, [])

  return (
    <section className={`skills toolkit-section section-space ${videoFailed || reduceMotion ? 'video-fallback' : ''}`} id="skills" ref={sectionRef}>
      {!reduceMotion && !videoFailed && <video className="toolkit-video" autoPlay loop muted playsInline preload="metadata" aria-hidden="true" onError={() => setVideoFailed(true)}><source src={siteAssets.toolkitVideoUrl} type="video/webm" /></video>}
      <div className="toolkit-backdrop" aria-hidden="true"><span /><span /><span /></div>
      <div className="toolkit-content section-wrap">
        <div className="section-kicker">02 / SKILLS</div>
        <div className="toolkit-heading section-heading"><h2>Technology <span>stack</span></h2><p>A focused toolkit for building intelligent systems, reliable applications, and polished digital experiences.</p></div>
        <div className={`tech-constellation ${isVisible ? 'is-visible' : ''}`}>
          <div className="constellation-paths" aria-hidden="true"><i /><i /><i /><i /></div>
          <span className="constellation-orb" aria-hidden="true" />
          <div className="category-legend" aria-label="Technology categories">{technologyCategories.map((category) => <span className={`category-marker ${category.markerClass}`} key={category.name}>{category.label} / {String(technologies.filter((technology) => technology.category === category.name).length).padStart(2, '0')}</span>)}</div>
          <div className="tech-grid" role="group" aria-label="Technology stack">
            {technologies.map((technology, index) => {
              const isActive = activeTech === technology.name
              return <button type="button" className={`tech-card ${technology.featured ? 'is-featured' : ''} ${isActive ? 'is-active' : ''} ${technology.invert ? 'icon-invert' : ''} ${!technology.logo ? 'is-sql' : ''} float-${index % 4}`} key={technology.name} style={{ '--brand-color': technology.color, '--card-index': index }} aria-pressed={isActive} aria-label={`${technology.name}, ${technology.category}`} onClick={() => setActiveTech(technology.name)} onFocus={() => setActiveTech(technology.name)} onMouseEnter={() => setActiveTech(technology.name)}>
                <span className="tech-card-index">{String(index + 1).padStart(2, '0')}</span><span className="tech-icon"><TechnologyIcon technology={technology} /></span><strong>{technology.name}</strong><span className="tech-category">{technology.category}</span><i className="tech-signal" />
              </button>
            })}
          </div>
          <div className="toolkit-readout"><span>{String(technologies.length).padStart(2, '0')} TECHNOLOGIES</span><i /><span>{String(technologyCategories.length).padStart(2, '0')} DISCIPLINES</span><i /><span>SYSTEM / READY</span></div>
        </div>
      </div>
    </section>
  )
}

export default ToolkitSection
