/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryData } from '../data';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Mentorship', 'Workshops', 'Skill-Building', 'Career'];

  // Filter products/images based on selection
  const filteredGallery = activeFilter === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category === activeFilter);

  const openLightbox = (id: string) => {
    const idx = galleryData.findIndex((item) => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? galleryData.length - 1 : prev! - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === galleryData.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <section 
      id="gallery" 
      className="py-24 px-4 md:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 relative scroll-mt-10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Gallery Title & Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-8">
          <div className="text-left">
            <span className="font-display font-semibold text-rose-600 dark:text-rose-400 text-sm tracking-wider uppercase">
              Visual Highlights
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-2 leading-tight">
              Honoring Our Shared Moments
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-xl text-sm leading-relaxed">
              Explore dynamic moments of direct engagement, mentorship workshops, software hackathons, and local health programs.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2" id="gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all focus:outline-none cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-200/40 dark:shadow-none'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          id="gallery-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer aspect-4/3 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-150/40 dark:border-slate-800/80 bg-slate-200 dark:bg-slate-900"
                onClick={() => openLightbox(item.id)}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  id={`gallery-img-${item.id}`}
                />
                
                {/* Micro hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  
                  {/* Category Pill */}
                  <span className="self-start text-[10px] font-bold tracking-wider uppercase bg-rose-600 text-white px-2 py-1 rounded-md mb-2">
                    {item.category}
                  </span>
                  
                  {/* Headline Title */}
                  <h3 className="font-display font-extrabold text-base sm:text-lg text-white mb-1.5 line-clamp-1">
                    {item.title}
                  </h3>

                  <div className="flex items-center space-x-1.5 text-xs text-rose-200 font-semibold mt-1">
                    <Eye className="w-4 h-4 text-rose-300" />
                    <span>View Fullscreen</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal Component */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={closeLightbox}
              id="gallery-lightbox-modal"
            >
              {/* Close Button */}
              <button 
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-150 focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Action Buttons (Left) */}
              <button
                onClick={handlePrev}
                className="absolute left-4 sm:left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-150 focus:outline-none"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Image Frame Grid Wrapper */}
              <div 
                className="max-w-4xl max-h-[80vh] flex flex-col items-center gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  key={lightboxIndex}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  src={galleryData[lightboxIndex].url}
                  alt={galleryData[lightboxIndex].title}
                  className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                
                {/* Label context info */}
                <div className="text-center text-white px-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-rose-400">
                    {galleryData[lightboxIndex].category}
                  </span>
                  <h4 className="font-display font-semibold text-lg sm:text-xl mt-1">
                    {galleryData[lightboxIndex].title}
                  </h4>
                </div>
              </div>

              {/* Navigation Action Buttons (Right) */}
              <button
                onClick={handleNext}
                className="absolute right-4 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-150 focus:outline-none"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
