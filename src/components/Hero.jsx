import React from 'react';
import { Github, Linkedin, LeetCodeIcon, ArrowUpRight, Server, Shield, Database, Terminal, Code2 } from './common/Icons';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/personalInfo';

export default function Hero() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section" style={{ paddingTop: '4.5rem', paddingBottom: '4.5rem' }}>
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Headline & Intro */}
          <div className="hero-left">
            <span className="hero-tag">{PERSONAL_INFO.heroLabel}</span>

            <h1 className="hero-heading">{PERSONAL_INFO.heroHeading}</h1>

            <p className="hero-intro">{PERSONAL_INFO.heroSubheading}</p>

            <div className="hero-actions">
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={(e) => scrollToSection(e, 'projects')}
              >
                <span>View Projects</span>
                <ArrowUpRight size={15} />
              </a>
              <a
                href="#contact"
                className="btn btn-secondary"
                onClick={(e) => scrollToSection(e, 'contact')}
              >
                <span>Get In Touch</span>
              </a>
            </div>

            <div className="hero-socials">
              <span className="hero-social-label">Connect:</span>
              <a
                href={SOCIAL_LINKS.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <Github size={17} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
              <a
                href={SOCIAL_LINKS.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                title="LeetCode Profile"
                aria-label="LeetCode"
              >
                <LeetCodeIcon size={17} />
              </a>
            </div>
          </div>

          {/* Right Column: Minimal Developer Info Card */}
          <div className="dev-card">
            <div className="dev-card-header">
              <div className="dev-card-title">
                <Terminal size={14} color="#0F294A" />
                <span>Backend Engineering Stack</span>
              </div>
              <span className="dev-card-badge">Production Ready</span>
            </div>

            <div className="dev-card-body">
              <div className="dev-stack-list">
                <div className="dev-stack-item">
                  <div>
                    <div className="dev-stack-name">Java 17 / 21</div>
                    <div className="dev-stack-role">Core Language & OOP Architecture</div>
                  </div>
                  <Code2 size={16} color="#64748B" />
                </div>

                <div className="dev-stack-item">
                  <div>
                    <div className="dev-stack-name">Spring Boot 3</div>
                    <div className="dev-stack-role">Layered Architecture & REST Services</div>
                  </div>
                  <Server size={16} color="#64748B" />
                </div>

                <div className="dev-stack-item">
                  <div>
                    <div className="dev-stack-name">Spring Security 6 + JWT</div>
                    <div className="dev-stack-role">Stateless Auth & Role-Based Access</div>
                  </div>
                  <Shield size={16} color="#64748B" />
                </div>

                <div className="dev-stack-item">
                  <div>
                    <div className="dev-stack-name">Spring Data JPA / Hibernate</div>
                    <div className="dev-stack-role">ORM & Transaction Management</div>
                  </div>
                  <Terminal size={16} color="#64748B" />
                </div>

                <div className="dev-stack-item">
                  <div>
                    <div className="dev-stack-name">MySQL</div>
                    <div className="dev-stack-role">Normalized Relational Schema & Indexing</div>
                  </div>
                  <Database size={16} color="#64748B" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
