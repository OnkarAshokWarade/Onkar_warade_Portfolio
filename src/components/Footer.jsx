import { ArrowUp, Mail, Phone } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <p className="site-footer-name">{personalInfo.name}</p>
          <p className="site-footer-note">Designing useful intelligence, one thoughtful system at a time.</p>
        </div>
        <ul className="site-footer-contact" aria-label="Contact">
          <li><a href={`mailto:${personalInfo.footerEmail}`}><Mail size={16} aria-hidden="true" />{personalInfo.footerEmail}</a></li>
          <li><a href={personalInfo.phoneLink}><Phone size={16} aria-hidden="true" />{personalInfo.phone}</a></li>
        </ul>
        <a className="site-footer-top" href="#home">Back to top <ArrowUp size={15} aria-hidden="true" /></a>
      </div>
    </footer>
  )
}

export default Footer
