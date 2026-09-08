import React from 'react';
import SectionHeader from './common/SectionHeader';
import { LeetCodeIcon, ArrowUpRight } from './common/Icons';
import { DSA_DATA } from '../data/dsaData';

export default function ProblemSolving() {
  return (
    <section id="dsa" className="section">
      <div className="container">
        <SectionHeader
          label="Algorithms"
          title={DSA_DATA.title}
          subtitle="Practicing core data structures and algorithmic complexity patterns."
        />

        <div className="dsa-panel">
          <div className="dsa-stat-row">
            <div>
              <div className="dsa-count">{DSA_DATA.totalSolved}</div>
              <div className="dsa-count-label">{DSA_DATA.subtitle}</div>
            </div>

            <div>
              <a
                href={DSA_DATA.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <LeetCodeIcon size={16} />
                <span>View LeetCode Profile</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <h4
            style={{
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              color: '#64748B',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.85rem'
            }}
          >
            Practiced Topic Areas
          </h4>

          <div className="dsa-topics-list">
            {DSA_DATA.topics.map((t) => (
              <div key={t.name} className="dsa-topic-item">
                <div className="dsa-topic-title">{t.name}</div>
                <div className="dsa-topic-desc">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
