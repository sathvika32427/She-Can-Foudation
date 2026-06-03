/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Heart } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track page scroll progress and header background
  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Identify active section
      const sections = ['hero', 'about', 'programs', 'statistics', 'gallery', 'volunteer', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold for when item becomes active
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Programs', href: '#programs', id: 'programs' },
    { name: 'Impact', href: '#statistics', id: 'statistics' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetPos = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="app-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-lg border-b border-rose-100/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-pink-500 via-rose-500 to-violet-600 transition-all duration-100" 
        style={{ width: `${scrollProgress}%` }}
        id="scroll-progress-indicator"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center space-x-2 group focus:outline-none"
            id="nav-logo"
          >
            <img 
              src="/logo.png" 
              alt="She Can Foundation Logo" 
              className="w-10 h-10 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
            />
            <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-pink-600 via-rose-500 to-violet-600 dark:from-pink-400 dark:via-rose-300 dark:to-violet-400 bg-clip-text text-transparent">
              She Can Foundation
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`font-sans font-medium text-sm transition-colors duration-200 relative py-1 hover:text-rose-500 focus:outline-none ${
                  activeSection === link.id
                    ? 'text-rose-600 dark:text-rose-400'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-rose-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Actions: Theme Toggle + CTA Button + Mobile Hamburger */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-rose-50 dark:hover:bg-slate-800 transition-colors duration-200 border border-transparent hover:border-rose-100/50 focus:outline-none relative overflow-hidden group"
              aria-label="Toggle Theme Mode"
              id="theme-toggler"
            >
              <AnimatePresence mode="wait">
                {isDarkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ y: -20, opacity: 0, rotate: -45 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-5 h-5 text-amber-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ y: -20, opacity: 0, rotate: -45 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-5 h-5 text-indigo-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* CTA Join Us Button (Desktop) */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full font-display font-semibold text-xs tracking-wider uppercase text-white bg-gradient-to-r from-pink-500 via-rose-500 to-violet-600 hover:from-pink-600 hover:via-rose-600 hover:to-violet-700 shadow-md hover:shadow-lg shadow-rose-200 dark:shadow-none transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] focus:outline-none"
              id="cta-join-us-nav"
            >
              Join Us
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 md:hidden rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Mobile Menu"
              id="mobile-menu-toggler"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden glass-nav border-b border-rose-100/10 overflow-hidden"
            id="mobile-drawer"
          >
            <div className="px-5 pt-3 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                    activeSection === link.id
                      ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="w-full flex items-center justify-center px-4 py-3 rounded-xl font-display font-semibold text-sm text-white bg-gradient-to-r from-pink-500 to-rose-500 shadow-md"
                >
                  Join Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
