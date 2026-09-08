import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/personalInfo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-title">{PERSONAL_INFO.name}</div>
          <div className="footer-role">Computer Science Engineering | Backend Development</div>
        </div>

        <div className="footer-links">
          <a href={SOCIAL_LINKS.github.url} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <span>•</span>
          <a href={SOCIAL_LINKS.linkedin.url} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span>•</span>
          <a href={SOCIAL_LINKS.leetcode.url} target="_blank" rel="noopener noreferrer">
            LeetCode
          </a>
        </div>

        <div className="footer-copy">{PERSONAL_INFO.copyright}</div>
      </div>
    </footer>
  );
}
