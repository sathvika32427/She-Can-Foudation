/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Target, Compass, Users, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
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

  const corePillars = [
    {
      id: 'pillar-1',
      title: 'Our Mission',
      description: 'To equip underprivileged young women and girls with comprehensive financial education resources, laptops, workspace access, and job mentorship pipelines to attain self-reliance.',
      icon: Target,
      color: 'bg-pink-500/10 text-pink-600 dark:text-pink-400'
    },
    {
      id: 'pillar-2',
      title: 'Our Core Vision',
      description: 'A global society where structural gender barriers are dismantled, allowing women to unleash their authentic potential as change-makers and technological leaders.',
      icon: Compass,
      color: 'bg-violet-500/10 text-violet-600 dark:text-violet-400'
    }
  ];

  const valueFeatures = [
    {
      title: 'Equal Agency',
      text: 'Every woman deserves equal voice, self-determination, and the liberty to co-create her destiny.'
    },
    {
      title: 'Lifelong Support',
      text: 'Our active scholarship programs transition seamlessly into corporate placements and lifetime mentoring.'
    },
    {
      title: 'Local Empowerment',
      text: 'Working at the community grassroots level to build strong circles of trust and mutual learning.'
    }
  ];

  return (
    <section 
      id="about" 
      className="py-24 px-4 md:px-8 bg-white dark:bg-slate-900 transition-colors duration-500 relative scroll-mt-10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* About Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-display font-semibold text-rose-600 dark:text-rose-400 text-sm tracking-wider uppercase">
            Transformative Impact
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-2 leading-tight">
            How She Can Foundation Alters Lives at the Grassroots
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visionary Graphics and Main Image */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/5 via-violet-500/5 to-transparent rounded-[2rem] transform rotate-3 scale-105 pointer-events-none" />
            
            <div className="relative group overflow-hidden rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-xl bg-slate-50 dark:bg-slate-950 p-3 sm:p-4">
              <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=700"
                  alt="Professional women collaborating in leadership meeting"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  id="about-primary-image"
                />
                {/* Floating overlay panel */}
                <div className="absolute bottom-6 right-6 left-6 glass-card border border-white/20 rounded-2xl p-5 flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center text-white">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-base text-slate-900 dark:text-white leading-tight">Community Driven</h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Empowering leaders together</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission description, pillars, values */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
            <div>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                Founded with a strong belief in gender-equal leadership, <span className="font-semibold text-rose-600 dark:text-rose-400">She Can Foundation</span> works directly with local organizations and communities to support underprivileged girls and women. Since our inception, we have helped transition individuals from challenging financial environments into highly skilled professional careers.
              </p>
            </div>

            {/* Pillar Cards (Mission & Vision) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {corePillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={pillar.id}
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 shadow-sm"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${pillar.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Short Bullet Values Stack */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white tracking-wide uppercase mb-4">
                Our Core Pillars
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {valueFeatures.map((val, idx) => (
                  <div key={idx} className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      <h5 className="font-sans font-bold text-sm text-slate-800 dark:text-slate-200">
                        {val.title}
                      </h5>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal pl-3">
                      {val.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Call for general support (One Button in webpage) */}
            <div className="pt-4">
              <button
                onClick={() => handleScrollTo('volunteer')}
                className="inline-flex items-center space-x-2 font-display font-bold text-sm text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 focus:outline-none group"
              >
                <span>Support Our Cause</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
