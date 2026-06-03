/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Program, Stat, GalleryItem, Testimonial } from './types';

export const programsData: Program[] = [
  {
    id: 'prog-1',
    title: 'Education Support',
    description: 'Providing comprehensive academic scholarships, study materials, school kits, and tutoring support to underprivileged girls.',
    iconName: 'GraduationCap',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'prog-2',
    title: 'Skill Development',
    description: 'Empowering women with technical training, digital literacy, vocational certifications, and computational classes to secure jobs.',
    iconName: 'Laptop',
    color: 'from-violet-500 to-indigo-500'
  },
  {
    id: 'prog-3',
    title: 'Career Guidance',
    description: 'Matching students and professionals with experienced women mentors, offering resume building, mock interviews, and employment pipelines.',
    iconName: 'Briefcase',
    color: 'from-fuchsia-500 to-purple-500'
  },
  {
    id: 'prog-4',
    title: 'Community Outreach',
    description: 'Conducting ground rallies, health camps, awareness drives, and distribution initiatives for sanitization and nutritional support.',
    iconName: 'HeartHandshake',
    color: 'from-rose-500 to-orange-500'
  }
];

export const statsData: Stat[] = [
  {
    id: 'stat-1',
    label: 'Women Empowered',
    value: 12500,
    suffix: '+',
    iconName: 'Sparkles'
  },
  {
    id: 'stat-2',
    label: 'Active Volunteers',
    value: 1400,
    suffix: '+',
    iconName: 'Users'
  },
  {
    id: 'stat-3',
    label: 'Workshops Conducted',
    value: 380,
    suffix: '+',
    iconName: 'BookOpen'
  },
  {
    id: 'stat-4',
    label: 'Communities Reached',
    value: 95,
    suffix: '+',
    iconName: 'MapPin'
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: 'gal-1',
    url: 'https://images.unsplash.com/photo-1573498813004-9a57378ec3aa?auto=format&fit=crop&q=80&w=800',
    title: 'Leadership Circle Mentoring',
    category: 'Mentorship'
  },
  {
    id: 'gal-2',
    url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
    title: 'Confidence and Self-Belief Forum',
    category: 'Workshops'
  },
  {
    id: 'gal-3',
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    title: 'Software Development Bootcamps',
    category: 'Skill-Building'
  },
  {
    id: 'gal-4',
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    title: 'University Career Seminars',
    category: 'Career'
  },
  {
    id: 'gal-5',
    url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
    title: 'Community Uplift Networking',
    category: 'Workshops'
  },
  {
    id: 'gal-6',
    url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800',
    title: 'Collaborative Student Support',
    category: 'Mentorship'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Ananya Sharma',
    role: 'Software Engineer, Tech Corp (Beneficiary)',
    quote: 'The She Can Foundation gave me the guidance and technical training I needed. The laptop scholarship changed my career trajectory entirely.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-2',
    name: 'Pooja Hegde',
    role: 'Skill-Building Coordinator (Volunteer)',
    quote: 'Teaching at the local coding bootcamps is the most rewarding part of my week. Watching these young minds build apps and gain confidence is pure joy.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-3',
    name: 'Dr. Meera Sen',
    role: 'Public Health Advocate (Supporter)',
    quote: 'Health awareness workshops empower women at the grassroots level. She Can Foundation executes community outreach with utmost transparency and detail.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150'
  }
];
