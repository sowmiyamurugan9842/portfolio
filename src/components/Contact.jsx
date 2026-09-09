import React, { useState } from 'react';
import SectionHeader from './common/SectionHeader';
import { Mail, Linkedin, Github, LeetCodeIcon, ArrowUpRight, Copy, Check, Download } from './common/Icons';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/personalInfo';

export default function Contact({ showToast }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email.address);
    setCopiedEmail(true);
    if (showToast) {
      showToast('Email Copied', SOCIAL_LINKS.email.address);
    }
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <SectionHeader
          label="Contact"
          title="Let's Connect"
          subtitle={PERSONAL_INFO.contactIntro}
        />

        <div className="contact-grid">
          {/* Left Column: Direct Channels */}
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Direct Channels
            </h3>

            <div className="contact-card-list">
              {/* Email */}
              <div className="contact-card-item">
                <div className="contact-card-left">
                  <Mail size={18} color="#0F294A" />
                  <div>
                    <div className="contact-card-label">Email</div>
                    <div className="contact-card-val">{SOCIAL_LINKS.email.address}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={handleCopyEmail}
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={13} color="#166534" /> : <Copy size={13} />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                  <a
                    href={`mailto:${SOCIAL_LINKS.email.address}`}
                    className="btn btn-primary btn-sm"
                    title="Send Email"
                  >
                    <span>Mail</span>
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="contact-card-item">
                <div className="contact-card-left">
                  <Linkedin size={18} color="#0F294A" />
                  <div>
                    <div className="contact-card-label">LinkedIn</div>
                    <div className="contact-card-val">{SOCIAL_LINKS.linkedin.handle}</div>
                  </div>
                </div>
                <a
                  href={SOCIAL_LINKS.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <span>Profile</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>

              {/* GitHub */}
              <div className="contact-card-item">
                <div className="contact-card-left">
                  <Github size={18} color="#0F294A" />
                  <div>
                    <div className="contact-card-label">GitHub</div>
                    <div className="contact-card-val">{SOCIAL_LINKS.github.handle}</div>
                  </div>
                </div>
                <a
                  href={SOCIAL_LINKS.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <span>Repositories</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>

              {/* LeetCode */}
              <div className="contact-card-item">
                <div className="contact-card-left">
                  <LeetCodeIcon size={18} color="#0F294A" />
                  <div>
                    <div className="contact-card-label">LeetCode</div>
                    <div className="contact-card-val">{SOCIAL_LINKS.leetcode.handle}</div>
                  </div>
                </div>
                <a
                  href={SOCIAL_LINKS.leetcode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <span>Problems</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Let's Connect Card */}
          <div className="contact-form-panel">
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Let's Connect
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Interested in software engineering opportunities, backend development, or collaborating on meaningful projects?
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
              <a
                href="/Sowmiya_M_Resume.pdf"
                download="Sowmiya_M_Resume.pdf"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                title="Download Sowmiya M Resume"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>

              <a
                href={`mailto:${SOCIAL_LINKS.email.address}`}
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
                title="Email Sowmiya M"
              >
                <Mail size={16} color="#0F294A" />
                <span>Email Me</span>
              </a>
            </div>

            {/* Open to Opportunities Section */}
            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-navy)', marginBottom: '0.75rem' }}>
                Open to opportunities
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {[
                  'Software Engineering',
                  'Backend Development',
                  'Internship Opportunities',
                  'Collaborative Projects'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: '#2563EB', fontWeight: 'bold' }}>•</span>
                    <span>{item}</span>
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
