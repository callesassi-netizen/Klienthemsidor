import type { ClientEntry } from '@/config/clients/index';

export const rormokare: ClientEntry = {
  id: 'rormokare',
  label: 'NordRör Rörmokeri AB',
  config: {
    companyName: 'NordRör Rörmokeri AB',
    logo: '/logo.svg',
    contactEmail: 'info@nordrör.se',
    phone: '010-234 56 78',

    primaryColor: '#0EA5E9',
    secondaryColor: '#0F172A',
    accentColor: '#10B981',
    fontFamily: 'Inter',

    headline: 'Snabb och pålitlig rörmokare — vi löser läckor, avlopp och badrum utan stress.',
    subheadline:
      'Auktoriserad VVS-firma med jour dygnet runt. Vi är på plats inom 2 timmar vid akuta problem — och lämnar alltid fast pris.',
    heroImage: '/images/hero.jpg',
    ctaPrimary: 'Kontakta oss nu',
    ctaSecondary: 'Se våra tjänster',

    trustBadges: [
      'Auktoriserad VVS-installatör',
      'Jour dygnet runt',
      'ROT-avdrag',
      'Fast pris — alltid',
      '15+ års erfarenhet',
    ],

    logoStrip: [],

    painPoints: [
      {
        title: 'Läcka som inte kan vänta till måndag?',
        description:
          'Vattenskador förvärras för varje timme. Vi har jour alla dagar och är ofta på plats inom 2 timmar.',
        icon: '🚿',
      },
      {
        title: 'Drabbad av stopp eller dåligt tryck?',
        description:
          'Vi lokaliserar problemet effektivt med modern utrustning och åtgärdar det rätt — direkt.',
        icon: '🔧',
      },
      {
        title: 'Orolig för svindyr faktura?',
        description:
          'Du godkänner alltid priset innan vi sätter igång. Inga timarvoden som tickar utan din vetskap.',
        icon: '💸',
      },
    ],

    offers: [
      {
        name: 'Felavhjälpning',
        priceText: 'Från 895 kr',
        bullets: [
          'Felsökning och diagnos',
          'Tätning av enklare läckor',
          'Stopp i avlopp',
          'Utbyte av packningar och kranar',
        ],
        highlight: false,
      },
      {
        name: 'Badrumsrenovering',
        priceText: 'Offert på begäran',
        bullets: [
          'Komplett VVS-installation',
          'Byte av golvbrunn och membran',
          'Ny dusch, wc och handfat',
          'Tätskikt enligt Byggkeramikrådet',
          'Garanterat resultat',
        ],
        highlight: true,
      },
      {
        name: 'Serviceavtal',
        priceText: 'Från 595 kr/mån',
        bullets: [
          'Årlig kontroll av VVS-system',
          'Prioriterat jouravtal',
          'Rabatt på material och arbete',
          'Förebyggande underhåll',
        ],
        highlight: false,
      },
    ],

    steps: [
      {
        title: 'Ring eller boka online',
        description: 'Beskriv problemet kort — vi ger direkt råd om det är akut eller kan vänta.',
      },
      {
        title: 'Vi besöker dig',
        description: 'En behörig rörmokare kommer ut, bedömer situationen och lämnar fast offert.',
      },
      {
        title: 'Problemet åtgärdas',
        description: 'Vi arbetar noggrant, städar efter oss och håller dig informerad under hela jobbet.',
      },
      {
        title: 'Trygghet efteråt',
        description: '2 års garanti på allt arbete. Har du frågor efteråt — ring oss, det kostar inget.',
      },
    ],

    cases: [
      {
        title: 'Dold läcka i flerbostadshus',
        problem: 'Fuktskada i vägg utan synlig källa. Tre lägenheter drabbade.',
        solution: 'Läckagesökning med kamera och fuktmätare. Rörbrott lokaliserat och reparerat.',
        result: 'Skadan begränsad. Fastighetsägaren sparade uppskattningsvis 180 000 kr i sanering.',
      },
      {
        title: 'Akut stopp i restaurangkök',
        problem: 'Avloppsstopp lördagskväll med fullsatt restaurang.',
        solution: 'Jour på plats inom 90 minuter, spolning och rensning av fettavskiljare.',
        result: 'Restaurangen stängde aldrig. Noll intäktsbortfall.',
      },
      {
        title: 'Komplett badrumsrenovering',
        problem: 'Gammalt badrum med läckande tätskikt och slitna installationer.',
        solution: 'Totalrenovering med nytt tätskikt, klinker och moderna armaturer.',
        result: 'Klart på 8 arbetsdagar. Kunden betygsatte 5/5 och rekommenderade oss till fyra grannar.',
      },
    ],

    testimonials: [
      {
        name: 'Magnus H.',
        role: 'Fastighetsägare',
        company: 'Privat',
        text: 'Hade en läcka som ingen annan firma kunde hitta. NordRör löste det på ett par timmar med rätt utrustning. Imponerad.',
        rating: 5,
      },
      {
        name: 'Frida P.',
        role: 'Restaurangchef',
        company: 'Krogen vid Torget',
        text: 'Räddade oss en lördagskväll med fullsatt krog. Snabbt, proffsigt och till ett pris vi kände oss nöjda med.',
        rating: 5,
      },
      {
        name: 'Lennart B.',
        role: 'BRF-ordförande',
        company: 'Brf Almhöjden',
        text: 'Anlitar NordRör för all vår löpande underhåll sedan tre år. Alltid pålitliga, alltid i tid och aldrig dyra överraskningar.',
        rating: 5,
      },
    ],

    faq: [
      {
        question: 'Har ni jour nattetid och på helger?',
        answer: 'Ja, vi har jourberedskap dygnet runt, alla dagar om året. Akuta vattenskador kan inte vänta.',
      },
      {
        question: 'Tar ni ROT-avdrag?',
        answer: 'Ja, vid arbete i bostad har du rätt till ROT-avdrag på 30 % av arbetskostnaden. Vi hanterar ansökan åt dig.',
      },
      {
        question: 'Hur snabbt kan ni komma vid ett akut stopp?',
        answer: 'Vid akuta ärenden i vårt upptagningsområde är vi vanligtvis på plats inom 2 timmar.',
      },
      {
        question: 'Vad kostar ett hembesök?',
        answer: 'Hembesök och offert är kostnadsfritt. Du betalar ingenting förrän du godkänt priset och arbetet är klart.',
      },
    ],

    showPricing: true,
    showCases: true,
    showLogoStrip: false,
  },
};
