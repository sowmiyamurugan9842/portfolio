import React from 'react';
import { Github, ArrowUpRight } from './common/Icons';

export default function ProjectCard({ project, onLinkClick }) {
  return (
    <div className="project-card">
      <div>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>

        {/* Tech tags */}
        <div className="project-card-tech">
          {project.tech.map((t) => (
            <span key={t} className="skill-tag">
              {t}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <ul className="project-highlights-list">
          {project.highlights.map((h, idx) => (
            <li key={idx} className="project-highlight-item">
              <span style={{ color: '#2563EB', fontWeight: 'bold' }}>•</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
        <button
          className="btn btn-secondary btn-sm"
          style={{ width: '100%' }}
          onClick={() => onLinkClick(project.githubUrl, `${project.title} GitHub`)}
        >
          <Github size={14} />
          <span>GitHub</span>
          <ArrowUpRight size={13} />
        </button>
      </div>
    </div>
  );
}
