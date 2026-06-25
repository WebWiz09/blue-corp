/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Page = 'home' | 'services' | 'about' | 'portfolio' | 'contact' | 'vision' | 'kudi';

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  detailedDescription: string;
  features: string[];
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  tag: string;
  description: string;
  detailedDescription: string;
  outcomes: string[];
  link: string;
}

export interface ContactSubmission {
  name: string;
  businessName: string;
  email: string;
  message: string;
  timestamp: string;
}
