/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { programsData } from '../data';
import { DynamicIcon } from './DynamicIcon';

export const Programs: React.FC = () => {
  const handleScrollToRef = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const offsetPos = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth',
      });
    }
  };

  // Staggered Animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section 
      id="programs" 
      className="py-24 px-4 md:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 relative scroll-mt-10"
    >
      {/* Visual background details */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 dark:bg-rose-500/2 blur-2xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/5 dark:bg-violet-500/2 blur-2xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left max-w-2xl">
            <span className="font-display font-semibold text-rose-600 dark:text-rose-400 text-sm tracking-wider uppercase">
              What We Do
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-2 leading-tight">
              Our Core Strategic Programs
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl text-base leading-relaxed">
              We focus on building holistic pathways. From early scholarship aid to comprehensive digital skills workshops and corporate guidance placement.
            </p>
          </div>
          <div className="flex-shrink-0">
            <button
              onClick={() => handleScrollToRef('contact')}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-display font-bold text-sm text-white bg-royal-dark bg-gradient-to-r from-pink-500 to-rose-500 hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-md"
            >
              Collaborate With Us
            </button>
          </div>
        </div>

        {/* Animated Card Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          id="programs-cards-container"
        >
          {programsData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                boxShadow: '0 10px 30px -10px rgba(219,39,119,0.15)',
              }}
              className="group relative rounded-2xl border border-slate-150/40 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 flex flex-col justify-between overflow-hidden transition-all duration-300"
            >
              {/* Top Accent Gradient Border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />

              <div>
                {/* Dynamic Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-md shadow-pink-500/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <DynamicIcon name={item.iconName} className="w-7 h-7 stroke-[2]" />
                </div>

                {/* Program Title */}
                <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white mb-3 tracking-tight">
                  {item.title}
                </h3>

                {/* Program Description */}
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal mb-8">
                  {item.description}
                </p>
              </div>

              {/* Action Button within Program Card */}
              <button
                onClick={() => handleScrollToRef('contact')}
                className="inline-flex items-center space-x-2 text-xs font-bold tracking-wider uppercase text-slate-600 dark:text-slate-300 group-hover:text-rose-500 transition-colors cursor-pointer self-start focus:outline-none"
              >
                <span>Learn Eligibility</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Informative Grid Bottom Callout */}
        <div className="mt-16 text-center glass-card border border-rose-100/10 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white">
              Do you know a student who requires educational sponsorship?
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Refer her to our Education Scheme program. Applications reopen soon.
            </p>
          </div>
          <button
            onClick={() => handleScrollToRef('contact')}
            className="flex-shrink-0 inline-flex items-center justify-center px-5 py-3 rounded-xl border border-rose-200 dark:border-rose-900/50 text-rose-600 dark:text-rose-400 font-display font-bold text-sm bg-white dark:bg-slate-900 hover:bg-rose-50/50 dark:hover:bg-slate-800/50 transition-colors"
          >
            Apply for Aid
          </button>
        </div>

      </div>
    </section>
  );
};
