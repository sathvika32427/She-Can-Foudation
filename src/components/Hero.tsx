/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

export const Hero: React.FC<HeroProps> = () => {
  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const offsetPos = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16 px-4 md:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-500"
    >
      {/* Decorative Gradient Blobs (Animated Backdrops) */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-pink-400/20 dark:bg-pink-900/10 blur-3xl animate-blob-1 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 sm:w-[450px] sm:h-[450px] rounded-full bg-violet-400/20 dark:bg-violet-900/10 blur-3xl animate-blob-2 pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(100,116,139,0.06)_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none dark:opacity-40" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Hero Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/40 border border-rose-200/50 dark:border-rose-900/30 text-rose-600 dark:text-rose-400 font-sans font-semibold text-xs tracking-wide uppercase shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 fill-rose-500/20" />
            <span>She Can Foundation</span>
          </motion.div>

          {/* Majestic Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-white leading-[1.1]"
          >
            Empower a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-violet-600 dark:from-pink-400 dark:via-rose-300 dark:to-violet-400">
              Woman
            </span>
            ,<br />
            Transform the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-rose-500 to-pink-500 dark:from-violet-400 dark:via-rose-300 dark:to-pink-400">
              Future
            </span>
            .
          </motion.h1>

          {/* Short Mission Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg lg:text-xl font-normal text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed"
          >
            We are dedicated to bridging the opportunity gap for women. Through scholarship education, digital skills training, community outreach, and mentorship networks, we believe when she rises, we all do.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
          >
            <button
              onClick={() => handleScrollTo('contact')}
              className="group inline-flex items-center justify-center px-8 py-4 rounded-xl font-display font-bold text-sm text-white bg-gradient-to-r from-pink-500 via-rose-500 to-violet-600 hover:from-pink-600 hover:via-rose-600 hover:to-violet-700 shadow-lg shadow-rose-200/50 dark:shadow-none hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              id="hero-cta-join"
            >
              Join Us Today
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => handleScrollTo('about')}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-display font-bold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850 hover:border-rose-200/50 dark:hover:border-rose-900/50 transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              id="hero-cta-explore"
            >
              Explore Our Vision
            </button>
          </motion.div>

          {/* Trust Social Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center space-x-3 pt-6 border-t border-slate-200 dark:border-slate-800 w-full lg:w-auto"
          >
            <div className="flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=64"
                alt="Beneficiary Avatar 1"
                className="w-8 h-8 rounded-full border-2 border-slate-50 dark:border-slate-950 object-cover"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=64"
                alt="Beneficiary Avatar 2"
                className="w-8 h-8 rounded-full border-2 border-slate-50 dark:border-slate-950 object-cover"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=64"
                alt="Beneficiary Avatar 3"
                className="w-8 h-8 rounded-full border-2 border-slate-50 dark:border-slate-950 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
              Join <span className="text-slate-700 dark:text-slate-200 font-bold">12,500+</span> empowered women on their transformation journey.
            </p>
          </motion.div>
        </div>

        {/* Hero Right Visual Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          {/* Glass Card Backdrop Decorative Element */}
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 to-violet-500/10 rounded-[2.5rem] blur-2xl transform -rotate-6 scale-105 pointer-events-none" />

          {/* Focal Image Card with Frame */}
          <div className="relative group overflow-hidden rounded-[2rem] border border-slate-200/50 dark:border-slate-800/80 shadow-2xl bg-white dark:bg-slate-900 p-3 sm:p-4 max-w-[400px] lg:max-w-full">
            <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=700"
                alt="Smiling Young Female Educator guiding student"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                id="hero-focal-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6" />
              
              {/* Dynamic Overlay Tag */}
              <div className="absolute bottom-5 left-5 right-5 glass-card rounded-2xl p-4 flex items-center space-x-3 text-slate-900 dark:text-white border-white/25">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center text-white">
                  <Heart className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm tracking-tight text-slate-900 dark:text-white">Active Mentorship</h4>
                  <p className="text-xs text-rose-600 dark:text-rose-300 font-semibold">Bridging gaps together</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
