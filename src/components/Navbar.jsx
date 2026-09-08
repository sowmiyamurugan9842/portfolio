import React, { useState, useEffect } from 'react';
import { Github, Linkedin, LeetCodeIcon, Menu, X } from './common/Icons';
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_ITEMS } from '../data/personalInfo';
import { useScrollSpy } from '../hooks/useScrollSpy';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = ['home', 'about', 'skills', 'projects', 'achievements', 'certifications', 'contact'];
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Brand */}
        <a href="#home" className="nav-brand" onClick={(e) => handleNavClick(e, '#home')}>
          <span className="nav-name">{PERSONAL_INFO.name}</span>
          <span className="nav-role-badge">{PERSONAL_INFO.role}</span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => {
              const targetId = item.href.replace('#', '');
              const isActive = activeSection === targetId;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Side Social Links */}
        <div className="nav-socials">
          <a
            href={SOCIAL_LINKS.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-btn"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <Github size={17} />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-btn"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={17} />
          </a>
          <a
            href={SOCIAL_LINKS.leetcode.url}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-btn"
            title="LeetCode Profile"
            aria-label="LeetCode Profile"
          >
            <LeetCodeIcon size={17} />
          </a>
        </div>

        {/* Mobile Menu Hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map((item) => {
          const targetId = item.href.replace('#', '');
          const isActive = activeSection === targetId;
          return (
            <a
              key={item.label}
              href={item.href}
              className={`mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          );
        })}
        <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.5rem' }}>
          <a
            href={SOCIAL_LINKS.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            style={{ flex: 1 }}
          >
            <Github size={15} /> GitHub
          </a>
          <a
            href={SOCIAL_LINKS.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            style={{ flex: 1 }}
          >
            <Linkedin size={15} /> LinkedIn
          </a>
          <a
            href={SOCIAL_LINKS.leetcode.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            style={{ flex: 1 }}
          >
            <LeetCodeIcon size={15} /> LeetCode
          </a>
        </div>
      </div>
    </header>
  );
}
