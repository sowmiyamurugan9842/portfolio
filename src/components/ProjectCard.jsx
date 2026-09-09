import React from 'react';

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
    </div>
  );
}
