import React from 'react';

export default function SectionHeader({ label, title, subtitle, centered = false }) {
  return (
    <div className={`section-header ${centered ? 'centered' : ''}`}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
