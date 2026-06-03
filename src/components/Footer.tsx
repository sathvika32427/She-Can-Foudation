/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Instagram, Twitter, Facebook, ArrowRight, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) {
      setError('Please write an email address');
      return;
    } else if (!/\S+@\S+\.\S+/.test(newsletterEmail)) {
      setError('Please provide a valid email');
      return;
    }

    setError('');
    setSubscribed(true);
    setNewsletterEmail('');
    
    setTimeout(() => {
      setSubscribed(false);
    }, 4500);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetPos = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth',
      });
    }
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' }
  ];

  const quickLinks = [
    { title: 'Who We Are', href: '#about' },
    { title: 'Active Programs', href: '#programs' },
    { title: 'Beneficiary Impact', href: '#statistics' },
    { title: 'Event Gallery', href: '#gallery' },
    { title: 'Initiate Contact', href: '#contact' }
  ];

  return (
    <footer 
      id="app-footer" 
      className="bg-slate-900 text-slate-405 border-t border-slate-800 pt-20 pb-8 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer deck */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          
          {/* Column 1: NGO Identity */}
          <div className="lg:col-span-5 text-left space-y-6">
            <a 
              href="#hero" 
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="flex items-center space-x-2.5"
            >
              <div className="w-9 h-9 rounded-full bg-rose-600 flex items-center justify-center text-white">
                <Heart className="w-4.5 h-4.5 fill-white" />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                She Can Foundation
              </span>
            </a>
            
            <p className="text-sm text-slate-400 font-normal leading-relaxed max-w-sm">
              An active registered non-profit organization dedicated to fostering structural agency, scholarships, computer education, and industrial mentors for girls and women. Registered in Hyderabad, TS, India.
            </p>

            {/* Social media handles */}
            <div className="flex items-center space-x-3.5 pt-2">
              {socialLinks.map((social) => {
                const IconComp = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-rose-600 hover:text-white text-slate-400 flex items-center justify-center transition-all duration-200 shadow-inner group"
                    aria-label={`Connect on ${social.name}`}
                  >
                    <IconComp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 text-left space-y-5">
            <h4 className="font-display font-bold text-sm text-white tracking-widest uppercase">
              Quick Navigation
            </h4>
            
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-slate-400 hover:text-rose-400 transition-colors duration-150 inline-flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-2 hover:bg-rose-500" />
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Newsletter Box */}
          <div className="lg:col-span-4 text-left space-y-5">
            <h4 className="font-display font-bold text-sm text-white tracking-widest uppercase">
              Keep Updated
            </h4>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Subscribe to compile major announcements, impact publications, and active scholarship invitations directly in your mail box.
            </p>

            <form onSubmit={handleSubscribe} className="relative mt-4">
              <AnimatePresence mode="wait">
                {subscribed ? (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="px-4 py-3 bg-emerald-950/40 border border-emerald-900 rounded-xl text-emerald-400 text-xs font-semibold flex items-center space-x-2"
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Subscribed! Check your mailbox soon</span>
                  </motion.div>
                ) : (
                  <div>
                    <div className="flex border border-slate-700/60 rounded-xl overflow-hidden focus-within:border-rose-500 bg-slate-950">
                      <input
                        type="email"
                        value={newsletterEmail}
                        onChange={(e) => {
                          setNewsletterEmail(e.target.value);
                          if (error) setError('');
                        }}
                        placeholder="Choose your email"
                        className="w-full px-4 py-3 bg-transparent text-sm focus:outline-none text-white placeholder-slate-500"
                      />
                      <button
                        type="submit"
                        className="px-4 bg-rose-600 hover:bg-rose-700 text-white flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
                        aria-label="Subscribe Newsletter"
                      >
                        <ArrowRight className="w-4.5 h-4.5" />
                      </button>
                    </div>
                    {error && (
                      <p className="text-xs text-rose-500 font-semibold mt-1.5">{error}</p>
                    )}
                  </div>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>

        {/* Bottom copyright banner */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs font-normal">
          <p>© {currentYear} She Can Foundation Trust. All Rights Reserved.</p>
          
          <div className="flex items-center space-x-1.5">
            <span>Delivered by She Can volunteers with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>in India</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
