import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <span>PORTFOLIO</span>
        </div>
        
        <button 
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <div className="nav-links-container">
            <a href="#home" className="nav-link" onClick={closeMenu}>
              <span className="link-text">Home</span>
              <span className="link-underline"></span>
            </a>
            <a href="#about" className="nav-link" onClick={closeMenu}>
              <span className="link-text">About</span>
              <span className="link-underline"></span>
            </a>
            <a href="#skills" className="nav-link" onClick={closeMenu}>
              <span className="link-text">Skills</span>
              <span className="link-underline"></span>
            </a>
            <a href="#project" className="nav-link" onClick={closeMenu}>
              <span className="link-text">Project</span>
              <span className="link-underline"></span>
            </a>
            <a href="#contact" className="nav-link" onClick={closeMenu}>
              <span className="link-text">Say hii</span>
              <span className="link-underline"></span>
            </a>
          </div>
          
          <div className="social-icons">
  <a href="https://www.linkedin.com/in/onkar-warade-b1a558305" className="social-icon"  target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
     <a href="https://github.com/OnkarAshokWarade/"  className="social-icon"  target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
  <a href="https://twitter.com/your-twitter-username"  className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};


export default Header;
