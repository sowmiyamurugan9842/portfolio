import React from 'react';
import SectionHeader from './common/SectionHeader';
import { SKILL_CATEGORIES } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader
          label="Expertise"
          title="Technical Skills"
          subtitle="Categorized proficiency in backend systems, languages, databases, and engineering tools."
        />

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.category} className="skill-card">
              <h3 className="skill-category-title">{cat.category}</h3>
              <div className="skill-tags">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
