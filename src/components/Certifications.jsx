import React from 'react';
import SectionHeader from './common/SectionHeader';
import { ExternalLink } from './common/Icons';
import { CERTIFICATIONS } from '../data/certifications';

export default function Certifications({ onLinkClick }) {
  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <SectionHeader
          label="Credentials"
          title="Certifications"
          subtitle="Cloud infrastructure and foundational AI certifications."
        />

        <div className="cert-row-grid">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.id} className="cert-card-clean">
              <h3 className="cert-card-title">{cert.title}</h3>
              <div className="cert-card-credential">{cert.credential}</div>
              <div className="cert-card-meta">
                Issuer: {cert.issuer} • Status: {cert.year}
              </div>

              {cert.certificateUrl && (
                <div style={{ marginTop: '1rem' }}>
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => onLinkClick(cert.certificateUrl, `${cert.title} Certificate`)}
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={13} />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
