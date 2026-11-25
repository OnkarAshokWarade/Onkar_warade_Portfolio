import { useEffect, useRef, useState } from 'react'
import { ArrowDownToLine, Menu, X } from 'lucide-react'
import { navigationItems, personalInfo, siteAssets } from '../data/portfolioData'

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef(null)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 900px)')
    const onBreakpoint = () => { if (desktop.matches) setMenuOpen(false) }
    desktop.addEventListener('change', onBreakpoint)
    return () => desktop.removeEventListener('change', onBreakpoint)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const focusable = [...navRef.current.querySelectorAll('a[href], button:not([disabled])')]
    window.requestAnimationFrame(() => focusable[0]?.focus())
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        window.requestAnimationFrame(() => toggleRef.current?.focus())
        return
      }
      if (event.key !== 'Tab' || focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`topbar ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-open' : ''}`}>
      <div className="topbar-inner">
        <a className="topbar-name" href="#home" onClick={closeMenu}>{personalInfo.name}</a>
        <nav ref={navRef} id="primary-navigation" className={`topbar-links ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
          {navigationItems.map(([label, id]) => <a href={`#${id}`} key={id} onClick={closeMenu}>{label}</a>)}
          <a className="topbar-resume topbar-resume-mobile" href={siteAssets.resumeUrl} download={siteAssets.resumeFileName} onClick={closeMenu}>Download resume <ArrowDownToLine size={17} aria-hidden="true" /></a>
        </nav>
        <a className="topbar-resume topbar-resume-desktop" href={siteAssets.resumeUrl} download={siteAssets.resumeFileName} aria-label={`Download ${personalInfo.name}'s resume`}>Resume <ArrowDownToLine size={15} aria-hidden="true" /></a>
        <button ref={toggleRef} className="topbar-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-controls="primary-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      </div>
    </header>
  )
}

export default Navigation
