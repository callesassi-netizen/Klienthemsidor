// ── EXAMPLE CONFIG: Electrician ───────────────────────────────────────────
// Copy this to /config/site.config.ts to use.

import type { SiteConfig } from '@/types/site';

export const siteConfig: SiteConfig = {
  companyName: 'Sparks Elite Electrical',
  logo: '/logo.svg',
  contactEmail: 'info@sparkselite.com',
  phone: '(555) 123-4567',

  primaryColor: '#F59E0B',   // amber
  secondaryColor: '#1E293B', // slate-dark
  accentColor: '#0EA5E9',    // sky
  fontFamily: 'Inter',

  headline: 'Fast, Safe & Licensed Electrical Services — We Show Up On Time, Every Time.',
  subheadline:
    'Residential and commercial electrical work done right the first time. 15+ years serving the metro area.',
  heroImage: '/images/hero.jpg',
  ctaPrimary: 'Get a Free Quote',
  ctaSecondary: 'See Our Services',

  trustBadges: [
    'Licensed & Insured',
    '15+ Years Experience',
    'Same-Day Service',
    '100% Satisfaction Guarantee',
    '24/7 Emergency Calls',
  ],
  logoStrip: [],

  painPoints: [
    {
      title: 'Tired of Unreliable Electricians?',
      description: 'We show up on time, complete work as quoted, and never leave a mess behind.',
      icon: '⚡',
    },
    {
      title: 'Worried About Safety Risks?',
      description:
        'All work is code-compliant and fully inspected. We protect your home and family.',
      icon: '🛡️',
    },
    {
      title: 'Confused by Hidden Fees?',
      description: 'Clear, written quotes before any work begins. No surprises.',
      icon: '💰',
    },
  ],

  offers: [
    {
      name: 'Safety Inspection',
      priceText: 'From $99',
      bullets: ['Panel inspection', 'Outlet & wiring check', 'GFCI testing', 'Written report'],
      highlight: false,
    },
    {
      name: 'Home Upgrade Package',
      priceText: 'From $499',
      bullets: [
        'Everything in Safety Inspection',
        'Panel upgrade (200A)',
        '3 new circuits',
        'Smart switch install',
        'Priority scheduling',
      ],
      highlight: true,
    },
    {
      name: 'Commercial Service',
      priceText: 'Custom Quote',
      bullets: [
        'Code compliance',
        '3-phase systems',
        'Emergency lighting',
        'Maintenance plan',
        'Account manager',
      ],
      highlight: false,
    },
  ],

  steps: [
    { title: 'Request a Quote', description: 'Fill out our quick form. We respond within 2 hours.' },
    { title: 'Get Your Estimate', description: 'A licensed electrician provides a clear written quote.' },
    { title: 'We Get to Work', description: 'On time, clean, and efficient.' },
    { title: 'Peace of Mind', description: 'Backed by our 1-year workmanship warranty.' },
  ],

  cases: [
    {
      title: 'Victorian Home Panel Upgrade',
      problem: '60-year-old wiring causing breaker trips and fire risk.',
      solution: 'Full panel replacement and critical circuit rewiring.',
      result: 'Zero issues in 2 years. Insurance premium down 18%.',
    },
    {
      title: 'Restaurant Emergency Repair',
      problem: 'Saturday-night circuit failure shut down kitchen.',
      solution: 'Emergency response within 90 minutes.',
      result: 'Kitchen online in 3 hours. $12k lost revenue avoided.',
    },
    {
      title: 'Office Construction Fit-Out',
      problem: '10,000 sq ft on a 6-week deadline.',
      solution: 'Full install with smart lighting and EV charging.',
      result: 'Delivered 4 days early, within budget.',
    },
  ],

  testimonials: [
    {
      name: 'Sarah M.',
      role: 'Homeowner',
      company: 'Riverside District',
      text: 'Called at 8am, fixed by noon. Incredibly professional.',
      rating: 5,
    },
    {
      name: 'James T.',
      role: 'Operations Manager',
      company: 'Apex Restaurants',
      text: 'Saved our Saturday rush. Now on a maintenance contract.',
      rating: 5,
    },
    {
      name: 'Linda K.',
      role: 'Property Manager',
      company: 'Greenview Properties',
      text: 'Handles all our 40+ units. Reliable, on time, every time.',
      rating: 5,
    },
  ],

  faq: [
    { question: 'Are you licensed and insured?', answer: 'Yes — fully licensed, bonded, $2M liability insurance.' },
    { question: 'Do you do emergency work?', answer: '24/7 emergency service, response under 2 hours.' },
    { question: 'Are estimates free?', answer: 'Yes. Written quote before any work begins.' },
  ],

  showPricing: true,
  showCases: true,
  showLogoStrip: false,
};
