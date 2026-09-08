import React from 'react';
import SectionHeader from './common/SectionHeader';
import FeaturedProject from './FeaturedProject';
import ProjectCard from './ProjectCard';
import { OTHER_PROJECTS } from '../data/projects';

export default function Projects({ onLinkClick }) {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionHeader
          label="Portfolio"
          title="Selected Projects"
          subtitle="Backend systems, automation workflows, and AI-powered applications."
        />

        {/* Featured Project */}
        <FeaturedProject onLinkClick={onLinkClick} />

        {/* Other Projects */}
        <div className="other-projects-grid">
          {OTHER_PROJECTS.map((proj) => (
            <ProjectCard key={proj.id} project={proj} onLinkClick={onLinkClick} />
          ))}
        </div>
      </div>
    </section>
  );
}
