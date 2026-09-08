import React from 'react';
import { Github, ArrowUpRight, Shield, Database, Server, Terminal } from './common/Icons';
import { FEATURED_PROJECT } from '../data/projects';

export default function FeaturedProject({ onLinkClick }) {
  return (
    <div className="featured-box">
      <span className="featured-top-badge">{FEATURED_PROJECT.label}</span>

      <h3 className="featured-title">{FEATURED_PROJECT.title}</h3>

      <p className="featured-desc">{FEATURED_PROJECT.description}</p>

      {/* Tech Stack Pills */}
      <div className="featured-tech-row">
        {FEATURED_PROJECT.technology.map((tech) => (
          <span key={tech} className="featured-tech-pill">
            {tech}
          </span>
        ))}
      </div>

      {/* Button: GitHub Repository */}
      <div>
        <button
          className="btn btn-primary"
          onClick={() => onLinkClick(FEATURED_PROJECT.githubUrl, 'Healthcare GitHub')}
        >
          <Github size={16} />
          <span>GitHub Repository</span>
          <ArrowUpRight size={14} />
        </button>
      </div>

      {/* Details Grid: Key Contributions & Architecture Flow */}
      <div className="featured-details-grid">
        {/* Key Contributions */}
        <div>
          <h4 className="featured-contributions-title">Key Contributions</h4>
          <ul className="contributions-list">
            {FEATURED_PROJECT.keyContributions.map((contrib, idx) => (
              <li key={idx} className="contribution-item">
                <span className="contribution-bullet">•</span>
                <span>{contrib}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Layered Architecture Visual */}
        <div>
          <div className="arch-card">
            <div className="arch-card-header">
              <span>Backend Architecture & Flow</span>
              <span style={{ color: '#2563EB', fontSize: '0.7rem' }}>Layered Design</span>
            </div>

            <div className="arch-flow">
              <div className="arch-step">
                <span className="arch-step-title">CLIENT</span>
                <span className="arch-step-desc">Web / Mobile HTTP Requests (Bearer JWT)</span>
              </div>

              <div className="arch-arrow-down">↓</div>

              <div className="arch-step highlight">
                <span className="arch-step-title" style={{ color: '#1E40AF' }}>SPRING SECURITY + JWT</span>
                <span className="arch-step-desc">Stateless Auth Filter & Role Check</span>
              </div>

              <div className="arch-arrow-down">↓</div>

              <div className="arch-step">
                <span className="arch-step-title">REST CONTROLLER</span>
                <span className="arch-step-desc">@RestController & DTO Validation</span>
              </div>

              <div className="arch-arrow-down">↓</div>

              <div className="arch-step">
                <span className="arch-step-title">SERVICE LAYER</span>
                <span className="arch-step-desc">Business Logic & Lifecycle Validation</span>
              </div>

              <div className="arch-arrow-down">↓</div>

              <div className="arch-step">
                <span className="arch-step-title">REPOSITORY LAYER</span>
                <span className="arch-step-desc">Spring Data JPA / Hibernate ORM</span>
              </div>

              <div className="arch-arrow-down">↓</div>

              <div className="arch-step highlight">
                <span className="arch-step-title" style={{ color: '#1E40AF' }}>MYSQL DATABASE</span>
                <span className="arch-step-desc">Normalized Relational Schema</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
