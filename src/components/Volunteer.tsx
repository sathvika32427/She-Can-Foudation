/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Users, HelpCircle, X, Check, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData } from '../data';

export const Volunteer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Form states for Volunteer action
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [preference, setPreference] = useState('Mentor');
  const [motivation, setMotivation] = useState('');
  
  // Submit feedback
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!name.trim()) errors.name = 'Full name is required';
    if (!email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please provide a valid email';
    }
    if (!motivation.trim()) errors.motivation = 'Brief motivation of why you want to support is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmitVolunteer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API pipeline
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess(true);
      
      // Reset form variables
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmissionSuccess(false);
        setName('');
        setEmail('');
        setMotivation('');
        setPreference('Mentor');
      }, 3000);
    }, 1500);
  };

  const rolesList = [
    { value: 'Mentor', label: 'Student Mentor' },
    { value: 'Educator', label: 'Technical Educator' },
    { value: 'Campout', label: 'Outreach & Distribution Advocate' },
    { value: 'Sponsor', label: 'Underwriting Sponsor' }
  ];

  return (
    <section 
      id="volunteer" 
      className="py-24 px-4 md:px-8 bg-slate-50 dark:bg-slate-900 transition-colors duration-500 relative overflow-hidden scroll-mt-10"
    >
      {/* Visual Accent Backdrops */}
      <div className="absolute top-1/2 left-3/4 w-80 h-80 rounded-full bg-violet-400/5 dark:bg-violet-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Testimonial Carousel and Invitation Content */}
        <div className="lg:col-span-6 text-left flex flex-col space-y-6">
          <span className="font-display font-semibold text-rose-600 dark:text-rose-400 text-sm tracking-wider uppercase">
            Stand With Us
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white leading-tight">
            Be the Catalyst for a Girl's Complete Freedom
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
            Whether you want to share your professional coding workspace experience, teach a computational skills class, volunteer for weekend community ration rallies, or underwrite high school scholarships, there is a place for you. Join the She Can collective circle.
          </p>

          {/* Testimonial Widget (Modern transition) */}
          <div className="relative glass-card border border-rose-100/10 rounded-2xl p-6 sm:p-8 mt-4 block">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col space-y-4"
              >
                {/* Author Info */}
                <div className="flex items-center space-x-3.5">
                  <img
                    src={testimonialsData[activeTestimonial].imageUrl}
                    alt={testimonialsData[activeTestimonial].name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-rose-500"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                      {testimonialsData[activeTestimonial].name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {testimonialsData[activeTestimonial].role}
                    </p>
                  </div>
                </div>

                {/* Quote details */}
                <p className="text-xs sm:text-sm italic text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  "{testimonialsData[activeTestimonial].quote}"
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls */}
            <div className="flex justify-end space-x-2 mt-4 pt-4 border-t border-slate-200/50 dark:border-slate-800/80">
              <button
                onClick={handlePrevTestimonial}
                className="p-1.5 rounded-full hover:bg-slate-105 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextTestimonial}
                className="p-1.5 rounded-full hover:bg-slate-105 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Action Banner Card */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="w-full max-w-lg rounded-3xl bg-gradient-to-tr from-pink-600 via-rose-500 to-violet-650 p-6 sm:p-10 text-white relative overflow-hidden shadow-2xl">
            {/* Visual overlay patterns */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col space-y-6">
              
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white text-xl">
                <Award className="w-6 h-6 animate-bounce" />
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight leading-snug">
                Volunteering with Us Empowers You, Too.
              </h3>
              
              <p className="text-rose-100 font-sans text-sm sm:text-base leading-relaxed">
                Connect with highly driven peers, acquire invaluable organizational leadership, and witness full system change. Let's create opportunities together that alter trajectories.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-display font-bold text-sm bg-white text-slate-900 border border-transparent hover:bg-rose-50 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none shadow-md"
                  id="trigger-volunteer-modal"
                >
                  <Heart className="w-4 h-4 text-rose-600 fill-rose-600 mr-2" />
                  Apply as Volunteer
                </button>
              </div>

              {/* Grid bullet lists */}
              <div className="grid grid-cols-2 gap-4 pt-6 mt-2 border-t border-white/20 text-xs text-rose-50/90 font-semibold uppercase tracking-wider">
                <div className="flex items-center space-x-1.5">
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Verified NGO Hours</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Mentorship Badges</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Volunteer Enlistment Modal overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
            id="volunteer-registration-modal-backdrop"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-md bg-white dark:bg-slate-950 rounded-2xl border border-slate-150 dark:border-slate-800 shadow-2xl p-6 sm:p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close icon */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-1 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-left">
                {/* Header info */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white leading-tight flex items-center">
                  <Users className="w-6 h-6 text-rose-500 mr-2" />
                  Join Our Circles
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  Choose your active volunteering profile and we'll connect you.
                </p>

                {/* Submitting Success visual */}
                {submissionSuccess ? (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center justify-center py-10 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="font-display font-medium text-lg text-slate-900 dark:text-white">Registration Submitted!</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xs mx-auto">
                        Thank you for your generosity. A volunteer coordinator will message you within 48 business hours.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  /* Standard Form flow */
                  <form onSubmit={handleSubmitVolunteer} className="mt-6 space-y-4">
                    {/* Fullname input */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rachel Green"
                        className={`w-full px-4 py-3 text-sm rounded-xl border bg-slate-50/50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/20 text-slate-900 dark:text-white ${
                          formErrors.name ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-rose-500'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-xs text-rose-500 font-semibold mt-1">{formErrors.name}</p>
                      )}
                    </div>

                    {/* Email input */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. rachel@example.com"
                        className={`w-full px-4 py-3 text-sm rounded-xl border bg-slate-50/50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/20 text-slate-900 dark:text-white ${
                          formErrors.email ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-rose-500'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-xs text-rose-500 font-semibold mt-1">{formErrors.email}</p>
                      )}
                    </div>

                    {/* Volunteering Role selector */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Volunteering Designation
                      </label>
                      <select
                        value={preference}
                        onChange={(e) => setPreference(e.target.value)}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 text-slate-900 dark:text-white"
                      >
                        {rolesList.map((role) => (
                          <option key={role.value} value={role.value}>
                            {role.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Motivation area */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Why do you want to join?
                      </label>
                      <textarea
                        value={motivation}
                        onChange={(e) => setMotivation(e.target.value)}
                        placeholder="Share your interest briefly..."
                        rows={3}
                        className={`w-full px-4 py-3 text-sm rounded-xl border bg-slate-50/50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/20 text-slate-900 dark:text-white ${
                          formErrors.motivation ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-rose-500'
                        }`}
                      />
                      {formErrors.motivation && (
                        <p className="text-xs text-rose-500 font-semibold mt-1">{formErrors.motivation}</p>
                      )}
                    </div>

                    {/* Button trigger */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-display font-bold text-sm text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 focus:outline-none shadow-md group border border-transparent mt-4"
                      id="submit-volunteer-btn"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center space-x-2">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          <span>Validating Credentials...</span>
                        </span>
                      ) : (
                        <span>Enlist Registration</span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
