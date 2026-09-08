import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import ProblemSolving from './components/ProblemSolving';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/common/Toast';

export default function App() {
  const [toast, setToast] = useState(null);

  const showToast = (title, message) => {
    setToast({ title, message });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const handleLinkClick = (url, label) => {
    if (!url || url.includes('_URL') || url === 'EMAIL_ADDRESS') {
      showToast(
        'Placeholder Link',
        `Replace "${url}" in src/data/projects.js with your active ${label} repository link.`
      );
      return;
    }

    if (url.startsWith('mailto:')) {
      window.location.href = url;
      return;
    }

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      {/* 1. Header / Navbar */}
      <Navbar />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Section */}
        <About />

        {/* 4. Skills Section */}
        <Skills />

        {/* 5. Selected Projects (Featured + Other) */}
        <Projects onLinkClick={handleLinkClick} />

        {/* 6. Achievements Section */}
        <Achievements />

        {/* 7. Certifications Section */}
        <Certifications onLinkClick={handleLinkClick} />

        {/* 8. Problem Solving / DSA Section */}
        <ProblemSolving />

        {/* 9. Contact Section */}
        <Contact showToast={showToast} />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Toast Notification Container */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
