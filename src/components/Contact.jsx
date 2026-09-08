import React, { useState } from 'react';
import SectionHeader from './common/SectionHeader';
import { Mail, Linkedin, Github, LeetCodeIcon, ArrowUpRight, Copy, Check } from './common/Icons';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/personalInfo';

export default function Contact({ showToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email.address);
    setCopiedEmail(true);
    if (showToast) {
      showToast('Email Copied', SOCIAL_LINKS.email.address);
    }
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setFormStatus({ type: 'error', message: 'Please provide your name.' });
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setFormStatus({ type: 'error', message: 'Please provide a valid email address.' });
      return;
    }
    if (!formData.message.trim() || formData.message.length < 5) {
      setFormStatus({ type: 'error', message: 'Please write a message (at least 5 characters).' });
      return;
    }

    setFormStatus({
      type: 'success',
      message: `Thank you, ${formData.name}! Your message has been validated on the frontend. You can also send this directly via your email client below.`
    });
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${SOCIAL_LINKS.email.address}?subject=${subject}&body=${body}`;
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

          {/* Right Column: Contact Form */}
          <div className="contact-form-panel">
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
              Send a Message
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              Client-side validated form.
            </p>

            {formStatus && (
              <div className={`form-alert ${formStatus.type}`}>
                {formStatus.message}
              </div>
            )}

            <form onSubmit={handleFormSubmit}>
              <div className="form-field">
                <label className="form-field-label" htmlFor="name-input">
                  Name
                </label>
                <input
                  id="name-input"
                  type="text"
                  className="form-field-input"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-field">
                <label className="form-field-label" htmlFor="email-input">
                  Email
                </label>
                <input
                  id="email-input"
                  type="email"
                  className="form-field-input"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-field">
                <label className="form-field-label" htmlFor="message-input">
                  Message
                </label>
                <textarea
                  id="message-input"
                  className="form-field-textarea"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button type="submit" className="btn btn-primary" style={{ flex: '1 1 auto' }}>
                  Send Message
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleMailtoFallback}
                  title="Open Default Mail App"
                >
                  <Mail size={15} />
                  <span>Mail App</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
