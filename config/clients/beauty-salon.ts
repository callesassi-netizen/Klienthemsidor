import type { ClientEntry } from '@/config/clients/index';

export const beautySalon: ClientEntry = {
  id: 'beauty-salon',
  label: 'Lumière Beauty Studio',
  config: {
    companyName: 'Lumière Beauty Studio',
    logo: '/logo.svg',
    contactEmail: 'hello@lumierebeauty.com',
    phone: '(555) 234-5678',

    primaryColor: '#EC4899',
    secondaryColor: '#1C1917',
    accentColor: '#A78BFA',
    fontFamily: 'Nunito',

    headline: 'Feel Radiant. Look Effortless. Beauty Treatments Tailored to You.',
    subheadline:
      'Award-winning hair, skin, and nail services in a calming, luxury studio environment. New clients welcome.',
    heroImage: '/images/hero.jpg',
    ctaPrimary: 'Book an Appointment',
    ctaSecondary: 'View Services',

    trustBadges: [
      '500+ 5-Star Reviews',
      'Certified Stylists',
      'Premium Products Only',
      'Easy Online Booking',
      'Same-Week Appointments',
    ],

    logoStrip: [
      { name: 'Kerastase', src: '/logos/kerastase.svg' },
      { name: 'Olaplex', src: '/logos/olaplex.svg' },
      { name: 'Dermalogica', src: '/logos/dermalogica.svg' },
    ],

    painPoints: [
      {
        title: "Stuck With a Style That Doesn't Suit You?",
        description:
          "Our stylists take time to understand your lifestyle and hair goals — not just what's trending.",
        icon: '✂️',
      },
      {
        title: 'Tired of Rushed, Impersonal Salons?',
        description:
          'Every visit is an experience. We offer personalised consultations and unhurried appointments.',
        icon: '🌸',
      },
      {
        title: 'Worried About Damage from Colour or Treatments?',
        description:
          'We use only professional-grade, bond-protecting products. Your hair health is our priority.',
        icon: '💆',
      },
    ],

    offers: [
      {
        name: 'Express Glow',
        priceText: 'From $65',
        bullets: [
          'Blow-dry & style',
          'Mini facial or scalp treatment',
          'Nail polish refresh',
          '60-minute appointment',
        ],
        highlight: false,
      },
      {
        name: 'Signature Experience',
        priceText: 'From $189',
        bullets: [
          'Cut, colour, or highlights',
          'Olaplex bond treatment',
          'Style & finish',
          'Skin consultation',
          'Complimentary refreshments',
        ],
        highlight: true,
      },
      {
        name: 'Bridal Package',
        priceText: 'Custom Quote',
        bullets: [
          'Trial run included',
          'Day-of hair & makeup',
          'Bridal party pricing',
          'On-location service available',
          'Dedicated stylist',
        ],
        highlight: false,
      },
    ],

    steps: [
      { title: 'Book Online', description: 'Choose your service and preferred stylist in minutes.' },
      { title: 'Consultation', description: 'We chat about your goals before we touch a strand.' },
      { title: 'Your Treatment', description: 'Sit back, relax, and let our team work their magic.' },
      { title: 'Glowing Results', description: 'Leave feeling confident with a personalised aftercare plan.' },
    ],

    cases: [
      {
        title: 'Bridal Transformation',
        problem: 'Client had fine, colour-damaged hair with only 6 weeks before the wedding.',
        solution: '3-step bond restoration course + balayage with toning gloss.',
        result: 'Healthy, voluminous hair for the big day. Client cried happy tears.',
      },
      {
        title: 'Corporate Client Refresh',
        problem: "Client wanted a modern, professional look but hadn't changed style in 10 years.",
        solution: 'In-depth style consultation, textured lob cut, and natural balayage.',
        result: 'Client booked monthly standing appointment. Referred 4 colleagues.',
      },
      {
        title: 'Scalp Health Programme',
        problem: 'Persistent scalp issues leading to hair thinning and low confidence.',
        solution: '6-week Dermalogica scalp treatment + personalised home care routine.',
        result: 'Visible regrowth and restored confidence within 8 weeks.',
      },
    ],

    testimonials: [
      {
        name: 'Chloe B.',
        role: 'Bride',
        company: '',
        text: 'I cried when I saw my wedding hair. They completely transformed my damaged hair in just a few sessions. Absolute magic.',
        rating: 5,
      },
      {
        name: 'Amara J.',
        role: 'Marketing Director',
        company: 'Apex Media',
        text: 'Best salon experience I\'ve ever had. They actually listened to what I wanted and delivered something even better.',
        rating: 5,
      },
      {
        name: 'Sophie L.',
        role: 'Regular Client',
        company: '',
        text: "I've been coming here for 2 years. The consistency, the warmth, and the results keep me coming back.",
        rating: 5,
      },
    ],

    faq: [
      {
        question: 'Do you take walk-in appointments?',
        answer: 'We recommend booking in advance, but we do accommodate walk-ins based on availability. Call us first to check.',
      },
      {
        question: 'What colour brands do you use?',
        answer: 'We use Schwarzkopf Professional, Wella Professionals, and Olaplex for all colour and treatment services.',
      },
      {
        question: 'Do you offer a patch test for colour services?',
        answer: "Yes — patch tests are required 48 hours before any first colour service. We'll arrange this at a quick complimentary visit.",
      },
      {
        question: 'Is parking available?',
        answer: 'Yes, free street parking is available directly outside the studio, plus a multi-storey car park 2 minutes away.',
      },
    ],

    showPricing: true,
    showCases: true,
    showLogoStrip: true,
  },
};
