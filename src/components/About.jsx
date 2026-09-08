import React from 'react';
import SectionHeader from './common/SectionHeader';
import { PERSONAL_INFO } from '../data/personalInfo';

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <SectionHeader
          label="Background"
          title="About Me"
          subtitle="Engineering backend services with clean architecture, robust security, and relational database integrity."
        />

        <div className="about-grid">
          {/* Left Column: Narrative & Education */}
          <div className="about-left">
            <p className="about-p">{PERSONAL_INFO.aboutLead}</p>
            <p className="about-p">{PERSONAL_INFO.aboutSecondary}</p>

            {/* Education Card */}
            <div className="education-card">
              <div className="education-degree">{PERSONAL_INFO.education.degree}</div>
              <div className="education-meta">
                {PERSONAL_INFO.education.institution} • {PERSONAL_INFO.education.location}
              </div>
              <div className="education-meta" style={{ marginTop: '0.2rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                Academic Period: {PERSONAL_INFO.education.period}
              </div>
            </div>
          </div>

          {/* Right Column: Focus Areas Panel */}
          <div>
            <div className="focus-panel">
              <h3 className="focus-panel-title">Focus Areas</h3>
              <ul className="focus-list">
                {PERSONAL_INFO.focusAreas.map((area) => (
                  <li key={area} className="focus-item">
                    <span className="focus-item-dot" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
