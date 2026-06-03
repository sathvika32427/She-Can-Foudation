/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Program {
  id: string;
  title: string;
  description: string;
  iconName: string; // Dynamic icon rendering based on Lucide name
  color: string; // Gradient or solid color class
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
}
