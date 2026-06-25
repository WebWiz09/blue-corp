/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Step, Project } from './types';

export const SERVICES: Service[] = [
  {
    id: 'systems',
    title: 'Systems That Think',
    tagline: 'Intelligent decision engines for your operations',
    description: 'We map how your business runs and rebuild the parts that slow you down with custom cognitive layers.',
    detailedDescription: 'Our smart systems sit quietly alongside your current tech stack, translating raw inputs into structured decisions. We help you transition from reacting to events to orchestrating outcomes automatically.',
    features: [
      'Automatic inventory & resource allocation',
      'Real-time anomaly detection',
      'Intelligent routing of client requests',
      'Cognitive search across internal documents'
    ]
  },
  {
    id: 'workflows',
    title: 'Workflows That Move',
    tagline: 'End-to-end automation connecting team and tools',
    description: 'End-to-end processes connecting your tools, your team, and your customers without manual effort.',
    detailedDescription: 'Manual handoffs are where speed goes to die. We design integrated pipelines that pass data between CRMs, databases, messaging apps, and client portals securely and instantaneously.',
    features: [
      'Multi-app data synchronisation',
      'Autonomous reporting & email generation',
      'Client onboarding pipelines',
      'Trigger-based internal alerts'
    ]
  },
  {
    id: 'agents',
    title: 'Agents That Work',
    tagline: 'Always-on digital workers for repetitive tasks',
    description: 'Always-on digital workers handling the repetitive so your people handle the meaningful.',
    detailedDescription: 'Give your team their time back. Our custom AI agents handle complex, multi-step actions such as reviewing contracts, extracting financial data, or drafting contextual customer responses based on your base guidelines.',
    features: [
      'Custom document extraction & reading',
      'Automated customer support drafting',
      'Financial receipt parsing',
      'Multi-source data synthesis'
    ]
  }
];

export const STEPS: Step[] = [
  {
    number: 1,
    title: 'We Listen',
    description: 'Every business is different. We start by understanding yours deeply. No generic solutions, just focused listening to locate friction.'
  },
  {
    number: 2,
    title: 'We Build',
    description: 'Custom code, clean APIs, resilient intelligence. We do not do templates. We write bespoke systems designed for your exact business rules.'
  },
  {
    number: 3,
    title: 'You Grow',
    description: 'More headspace, zero data leaks, a business that works while you sleep. Scale output without scaling overhead.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'kudi',
    title: 'Kudi — AI CFO for African SMEs',
    tag: 'FinTech',
    description: 'Every business deserves a CFO. Kudi manages invoices, tracks cash flow, and monitors financial health directly through natural inputs.',
    detailedDescription: 'Kudi acts as a digital accountant. SMEs use WhatsApp or web interfaces to log receipts, request draft invoices, and receive weekly health summaries. No complicated spreadsheets needed.',
    outcomes: [
      'Over 400 SMEs onboarded',
      'Average of 12 hours saved weekly per business owner',
      'Instant invoice drafting via natural language'
    ],
    link: '/kudi'
  }
];
