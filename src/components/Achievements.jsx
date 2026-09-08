import React from 'react';
import SectionHeader from './common/SectionHeader';
import { ACHIEVEMENTS } from '../data/achievements';

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionHeader
          label="Milestones"
          title="Achievements"
          subtitle="Hackathon evaluations, innovation recognitions, and competitive problem solving milestones."
        />

        <div className="achievements-list">
          {ACHIEVEMENTS.map((item) => (
            <div key={item.id} className="achievement-row">
              <div>
                <div className="achievement-title">{item.title}</div>
                <div className="achievement-desc">{item.description}</div>
              </div>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#64748B',
                  background: '#F1F5F9',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '4px',
                  whiteSpace: 'nowrap',
                  alignSelf: 'flex-start'
                }}
              >
                {item.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
