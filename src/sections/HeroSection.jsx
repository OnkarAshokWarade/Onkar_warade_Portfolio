import { ArrowUpRight, Check, ChevronDown, Code2, Network } from 'lucide-react'
import { personalInfo, socialLinks } from '../data/portfolioData'

function HeroCodeVisual() {
  return (
    <div className="hero-code-animation" aria-label="Animated code editor representing intelligent product engineering" role="img">
      <div className="code-animation-bar"><i /><i /><i /><span>intelligence.py</span><strong>RUNNING</strong></div>
      <div className="code-animation-body">
        <span><b>01</b><code><em>import</em> numpy <em>as</em> np</code></span>
        <span><b>02</b><code><em>from</em> sklearn <em>import</em> Pipeline</code></span>
        <span><b>03</b><code /></span>
        <span><b>04</b><code><em>class</em> <strong>IntelligentSystem</strong>:</code></span>
        <span><b>05</b><code>&nbsp;&nbsp;<em>def</em> <strong>build</strong>(self, data):</code></span>
        <span><b>06</b><code>&nbsp;&nbsp;&nbsp;&nbsp;features = self.transform(data)</code></span>
        <span><b>07</b><code>&nbsp;&nbsp;&nbsp;&nbsp;model = self.train(features)</code></span>
        <span><b>08</b><code>&nbsp;&nbsp;&nbsp;&nbsp;<em>return</em> model.predict()<i className="code-cursor" /></code></span>
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="hero" id="home"><div className="hero-inner"><div className="hero-copy">
      <div className="eyebrow"><span className="pulse-dot" aria-hidden="true" />{personalInfo.primaryRole.toUpperCase()} <i aria-hidden="true" /> {personalInfo.secondaryRole.toUpperCase()}</div>
      <h1>Building <em>intelligent products</em> for the real world.</h1>
      <p className="hero-text">I’m {personalInfo.name}, an {personalInfo.primaryRole} and {personalInfo.secondaryRole} focused on turning complex ideas into scalable, elegant digital experiences.</p>
      <div className="hero-actions"><a className="button button-primary" href="#contact">Let’s Connect <ArrowUpRight size={18} aria-hidden="true" /></a><a className="button button-quiet" href="#skills">Explore Skills <ChevronDown size={18} aria-hidden="true" /></a></div>
      <div className="social-row"><span>FIND ME ONLINE</span><a href={socialLinks.linkedin.url} target="_blank" rel="noreferrer" aria-label={`${personalInfo.name.split(' ')[0]} on LinkedIn`}><Network size={18} /></a><a href={socialLinks.github.url} target="_blank" rel="noreferrer" aria-label={`${personalInfo.name.split(' ')[0]} on GitHub`}><Code2 size={18} /></a></div>
      <div className="availability hero-availability"><span><Check size={14} /></span><p>Currently building with AI, ML &amp; modern web technologies.</p></div>
    </div><div className="hero-art hero-profile-area">
      <figure className="hero-profile-frame">
        <div className="hero-profile-crop"><img src="/onkar-profile.jpeg" alt={`${personalInfo.name}, AI and ML engineer and full stack developer`} width="1254" height="1254" fetchPriority="high" decoding="async" /></div>
      </figure>
      <HeroCodeVisual />
    </div></div></section>
  )
}

export default HeroSection
