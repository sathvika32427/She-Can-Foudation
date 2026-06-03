/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { statsData } from '../data';
import { DynamicIcon } from './DynamicIcon';

interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  iconName: string;
}

const CounterItem: React.FC<{ stat: Stat }> = ({ stat }) => {
  const [currentVal, setCurrentVal] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const end = stat.value;
    const duration = 1800; // 1.8 seconds duration
    let startTime: number | null = null;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);
      
      // Easing out quadratic function
      const easeProgress = progressPercentage * (2 - progressPercentage);
      
      const currentNumber = Math.floor(easeProgress * (end - start) + start);
      setCurrentVal(currentNumber);

      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCurrentVal(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [hasAnimated, stat.value]);

  // Format value to comma separated
  const formatValue = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div 
      ref={containerRef}
      className="flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-2xl glass-card border border-white/10 relative overflow-hidden group shadow-lg shadow-rose-500/2 dark:shadow-none bg-white/40 dark:bg-slate-900/40"
    >
      {/* Background visual flair */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 dark:bg-rose-500/2 blur-2xl rounded-full scale-110 group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

      {/* Counter Icon */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-pink-500 to-rose-600 flex items-center justify-center text-white mb-4 shadow-sm group-hover:rotate-6 transition-transform">
        <DynamicIcon name={stat.iconName} className="w-6 h-6" />
      </div>

      {/* Incrementing Number */}
      <h3 className="font-mono font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white flex items-center tracking-tight">
        <span id={`counter-${stat.id}`}>
          {formatValue(currentVal)}
        </span>
        <span className="text-rose-500 ml-0.5">{stat.suffix}</span>
      </h3>

      {/* Label */}
      <p className="font-sans font-semibold text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 tracking-wide uppercase">
        {stat.label}
      </p>
    </div>
  );
};

export const ImpactStats: React.FC = () => {
  return (
    <section 
      id="statistics" 
      className="py-24 px-4 md:px-8 bg-white dark:bg-slate-900/60 transition-colors duration-500 relative scroll-mt-10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Statistics Headings */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display font-semibold text-rose-600 dark:text-rose-400 text-sm tracking-wider uppercase">
            Quantifiable Change
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-1">
            Our Growing Impact Record
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
            Our strategic programs are backed by measurable performance, transparency, and a committed collective team striving to double empowerment every year.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8" id="statistics-counters-grid">
          {statsData.map((stat) => (
            <CounterItem key={stat.id} stat={stat} />
          ))}
        </div>

        {/* Additional Quote Callout */}
        <div className="mt-16 text-center max-w-3xl mx-auto border-t border-slate-100 dark:border-slate-800/80 pt-10">
          <p className="italic text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            "By empowering a single girl, we can alter the trajectory of an entire family, enabling a multi-generational cycle of independence and prosperity."
          </p>
          <p className="text-xs sm:text-sm font-semibold text-rose-600 dark:text-rose-400 font-display mt-3 uppercase tracking-wider">
            — She Can Foundation Council
          </p>
        </div>

      </div>
    </section>
  );
};
