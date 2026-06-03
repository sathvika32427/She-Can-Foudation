/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const tempErrors: typeof errors = {};
    if (!name.trim()) {
      tempErrors.name = 'Full name is required';
    } else if (name.trim().length < 3) {
      tempErrors.name = 'Name must be at least 3 characters long';
    }

    if (!email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = 'Please specify a valid email address';
    }

    if (!message.trim()) {
      tempErrors.message = 'Please write a brief message or query';
    } else if (message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API Submission network latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      
      // Reset inputs after delay
      setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
        setSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-4 md:px-8 bg-white dark:bg-slate-950 transition-colors duration-500 relative scroll-mt-10"
    >
      {/* Decorative Blur Background details */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-pink-500/5 dark:bg-pink-900/5 blur-3xl pointer-events-none" />
      <div className="absolute top-12 left-12 w-80 h-80 rounded-full bg-indigo-500/5 dark:bg-indigo-900/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display font-semibold text-rose-600 dark:text-rose-400 text-sm tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-1 leading-snug">
            We Would Love to Hear From You
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-3 max-w-lg mx-auto leading-relaxed">
            Have questions about scholarship eligibility, wish to collaborate on skill-building programs, or register a donation campaign? Reach out.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Left Column: NGO Information details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-gradient-to-br from-pink-500/5 to-violet-500/5 dark:from-slate-900/40 dark:to-slate-900/20 border border-slate-100 dark:border-slate-900 rounded-3xl p-8 sm:p-10 text-left">
            
            <div className="space-y-6">
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight">
                Our Head Office
              </h3>
              
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                Visit or message our physical desk in Hyderabad. We answer email inquiries and coordinates calls within 24 business hours.
              </p>

              {/* Direct Info list parameters */}
              <div className="space-y-4 pt-4">
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-slate-950 dark:text-white">Physical Address</h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                      Ground Floor, Block B, HiTech City Metro Station, Madhapur, Hyderabad, Telangana, 500081
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-slate-950 dark:text-white">Email Communications</h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5 hover:text-rose-500 transition-colors">
                      <a href="mailto:info@shecanngo.org">info@shecanngo.org</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-slate-950 dark:text-white">Direct Phone Lines</h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5 hover:text-rose-500 transition-colors">
                      <a href="tel:+91409021200">+91 40 9021 1200</a>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social handles branding */}
            <div className="pt-6 border-t border-slate-200/50 dark:border-slate-800/80">
              <h4 className="font-display font-semibold text-xs text-slate-600 dark:text-slate-450 uppercase tracking-widest mb-3">
                Emergency Hotline Callouts
              </h4>
              <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed leading-snug">
                For urgent safety counseling, domestic violence help, or physical distress help, utilize our state desk number 24/7 directly.
              </p>
            </div>

          </div>

          {/* Right Column: Contact interactive form */}
          <div className="lg:col-span-7 flex flex-col justify-center border border-slate-100 dark:border-slate-900 rounded-3xl p-8 sm:p-10 shadow-lg bg-slate-50/50 dark:bg-slate-950/20">
            <AnimatePresence mode="wait">
              {success ? (
                /* Success splash layout */
                <motion.div 
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                  id="contact-form-success"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <CheckCircle className="w-8 h-8 stroke-[3]" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white">
                      Message Received!
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                      Thank you for contacting us, <span className="font-semibold text-slate-900 dark:text-white">{name}</span>. Our desk team has safely compiled your inquiry and will revert within 24 hours.
                    </p>
                  </div>

                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/25 border border-emerald-100 dark:border-emerald-900/50 rounded-full text-[10px] sm:text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Inquiry Ticket #SC-{Math.floor(1000 + Math.random() * 9000)}</span>
                  </div>
                </motion.div>
              ) : (
                /* Interactive Form module */
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                  id="contact-submission-form"
                >
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder="e.g. Maya Angelou"
                      className={`w-full px-4 py-3.5 text-sm rounded-xl border bg-white dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-rose-500/20 text-slate-900 dark:text-white ${
                        errors.name ? 'border-rose-500 focus:border-rose-500 bg-rose-50/5' : 'border-slate-200 dark:border-slate-800 focus:border-rose-500'
                      }`}
                      id="form-input-name"
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-500 font-semibold mt-1" id="error-name">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      placeholder="e.g. maya@example.com"
                      className={`w-full px-4 py-3.5 text-sm rounded-xl border bg-white dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-rose-500/20 text-slate-900 dark:text-white ${
                        errors.email ? 'border-rose-500 focus:border-rose-500 bg-rose-50/5' : 'border-slate-200 dark:border-slate-800 focus:border-rose-500'
                      }`}
                      id="form-input-email"
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500 font-semibold mt-1" id="error-email">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Your Message
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                      }}
                      placeholder="How can we collaborates or help you today?"
                      rows={5}
                      className={`w-full px-4 py-3.5 text-sm rounded-xl border bg-white dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-rose-500/20 text-slate-900 dark:text-white ${
                        errors.message ? 'border-rose-500 focus:border-rose-500 bg-rose-50/5' : 'border-slate-200 dark:border-slate-800 focus:border-rose-500'
                      }`}
                      id="form-input-message"
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-500 font-semibold mt-1" id="error-message">{errors.message}</p>
                    )}
                  </div>

                  {/* Submission Button triggers */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl font-display font-bold text-sm text-white bg-gradient-to-r from-pink-500 via-rose-500 to-violet-650 hover:from-pink-600 hover:via-rose-600 hover:to-violet-750 transition-all shadow-md focus:outline-none border border-transparent group hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                      id="form-submit-button"
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
                        <span className="flex items-center space-x-2">
                          <span>Transmit Message</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                        </span>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
