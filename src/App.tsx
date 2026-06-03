/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { ImpactStats } from './components/ImpactStats';
import { Gallery } from './components/Gallery';
import { Volunteer } from './components/Volunteer';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Read preference on initial render
    const savedTheme = localStorage.getItem('theme-preference');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Fallback to system preference (but default to light theme for clean accessibility)
    return false;
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevTheme) => {
      const newTheme = !prevTheme;
      localStorage.setItem('theme-preference', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans ${isDarkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* Navigation Desk */}
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <main id="main-content-layout">
        
        {/* Hero Section */}
        <Hero isDarkMode={isDarkMode} />
        
        {/* About Section */}
        <About />
        
        {/* Core strategic programs */}
        <Programs />
        
        {/* Quantifiable impact counters */}
        <ImpactStats />
        
        {/* Visual moments highlight gallery */}
        <Gallery />
        
        {/* Motivational invitation banner with Testimonials */}
        <Volunteer />
        
        {/* Interactive contact support form */}
        <Contact />

      </main>

      {/* Footer copyright and Newsletter desk */}
      <Footer />

      {/* Back to top scroll toggle button */}
      <BackToTop />

    </div>
  );
}
