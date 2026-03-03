// ── EXAMPLE CONFIG: Marketing Consultant ─────────────────────────────────
// Copy this to /config/site.config.ts to use.

import type { SiteConfig } from '@/types/site';

export const siteConfig: SiteConfig = {
  companyName: 'Elevate Growth Co.',
  logo: '/logo.svg',
  contactEmail: 'hello@elevategrowth.co',
  phone: '(555) 987-6543',

  primaryColor: '#6366F1',   // indigo
  secondaryColor: '#0F172A', // slate-900
  accentColor: '#F59E0B',    // amber
  fontFamily: 'Poppins',

  headline: 'Stop Guessing. Start Growing. Data-Driven Marketing That Fills Your Pipeline.',
  subheadline:
    'We help service businesses generate consistent leads through proven digital marketing strategies — without the fluff.',
  heroImage: '/images/hero.jpg',
  ctaPrimary: 'Book a Free Strategy Call',
  ctaSecondary: 'See Case Studies',

  trustBadges: [
    '200+ Clients Scaled',
    'Average 4.2x ROI',
    'Google Partner Agency',
    'No Long-Term Contracts',
    'Results in 90 Days',
  ],

  logoStrip: [
    { name: 'Forbes', src: '/logos/forbes.svg' },
    { name: 'HubSpot', src: '/logos/hubspot.svg' },
    { name: 'Google', src: '/logos/google.svg' },
    { name: 'Clutch', src: '/logos/clutch.svg' },
  ],

  painPoints: [
    {
      title: 'Wasting Budget on Ads That Don\'t Convert?',
      description:
        'We audit your existing spend and fix the leaks before adding a single new dollar.',
      icon: '📉',
    },
    {
      title: 'No Time to Manage Marketing?',
      description:
        'We run everything end-to-end — strategy, creative, execution, reporting. You stay in your lane.',
      icon: '⏰',
    },
    {
      title: 'Struggling to Stand Out?',
      description:
        'We craft differentiated positioning and messaging that speaks directly to your ideal buyers.',
      icon: '🎯',
    },
  ],

  offers: [
    {
      name: 'Growth Audit',
      priceText: '$497',
      bullets: [
        'Full funnel analysis',
        'Competitor gap review',
        'Ad account audit',
        'Actionable 30-day roadmap',
      ],
      highlight: false,
    },
    {
      name: 'Done-For-You Growth',
      priceText: 'From $2,500/mo',
      bullets: [
        'Everything in Growth Audit',
        'Paid ads management',
        'Landing page optimisation',
        'Monthly reporting',
        'Dedicated strategist',
      ],
      highlight: true,
    },
    {
      name: 'Revenue Partner',
      priceText: 'Custom',
      bullets: [
        'Full-funnel ownership',
        'Content + SEO',
        'Email nurture sequences',
        'CRO testing',
        'Revenue-share available',
      ],
      highlight: false,
    },
  ],

  steps: [
    { title: 'Book a Call', description: 'Free 30-minute strategy session to understand your goals.' },
    { title: 'Get Your Roadmap', description: 'We deliver a custom growth plan within 5 business days.' },
    { title: 'We Execute', description: 'Campaigns go live. You track results in your live dashboard.' },
    { title: 'Scale & Repeat', description: 'We optimise monthly and compound your growth.' },
  ],

  cases: [
    {
      title: 'Law Firm — 3x Lead Volume',
      problem: 'Spending $5k/mo on Google Ads with a 1.1% conversion rate.',
      solution: 'Rebuilt campaign structure, rewrote ad copy, and rebuilt the landing page.',
      result: '3.8% conversion rate in 60 days. Cost-per-lead dropped by 64%.',
    },
    {
      title: 'SaaS Startup — First 100 Customers',
      problem: 'No repeatable acquisition channel. Relying on referrals.',
      solution: 'Built a LinkedIn outbound + content engine from scratch.',
      result: '100 paying customers in 90 days. $180k ARR added.',
    },
    {
      title: 'Landscaping Company — Local Dominance',
      problem: 'Invisible on Google despite 8 years in business.',
      solution: 'Local SEO + Google Business Profile + review generation campaign.',
      result: '#1 ranked for 12 target keywords. 220% more inbound calls in 6 months.',
    },
  ],

  testimonials: [
    {
      name: 'Marcus R.',
      role: 'CEO',
      company: 'Summit Legal Group',
      text: 'We were burning budget for years. In 60 days they turned our ads into our best lead source.',
      rating: 5,
    },
    {
      name: 'Priya S.',
      role: 'Founder',
      company: 'Luminary SaaS',
      text: 'Went from 0 to 100 customers faster than I thought possible. These guys are the real deal.',
      rating: 5,
    },
    {
      name: 'Derek O.',
      role: 'Owner',
      company: 'Oakwood Landscaping',
      text: 'The phone doesn\'t stop ringing now. Best investment I\'ve made in the business.',
      rating: 5,
    },
  ],

  faq: [
    { question: 'How quickly will I see results?', answer: 'Most clients see measurable improvements within 30–60 days. Full impact is typically evident by month 3.' },
    { question: 'Do you require long-term contracts?', answer: 'No. We work month-to-month. We earn your business every month.' },
    { question: 'What industries do you work with?', answer: 'We specialise in service businesses — legal, home services, SaaS, healthcare, and B2B.' },
    { question: 'What does the free strategy call include?', answer: 'A 30-minute live session where we analyse your current marketing and identify your biggest growth opportunities. No sales pitch.' },
  ],

  showPricing: true,
  showCases: true,
  showLogoStrip: true,
};
