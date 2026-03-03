import type { ClientEntry } from '@/config/clients/index';

export const sparksElitel: ClientEntry = {
  id: 'sparks-elitel',
  label: 'Sparks Elitel El AB',
  config: {
    companyName: 'Sparks Elitel El AB',
    logo: '/logo.svg',
    contactEmail: 'info@sparkselitel.se',
    phone: '08-123 456 78',

    primaryColor: '#F59E0B',
    secondaryColor: '#1E293B',
    accentColor: '#0EA5E9',
    fontFamily: 'Inter',

    headline: 'Snabb, säker och auktoriserad elinstallation — vi är alltid i tid.',
    subheadline:
      'El-arbeten för hem och företag som görs rätt från första gången. Vi servar Stockholmsregionen i över 15 år.',
    heroImage: '/images/hero.jpg',
    ctaPrimary: 'Få en kostnadsfri offert',
    ctaSecondary: 'Se våra tjänster',

    trustBadges: [
      'Auktoriserad elinstallatör',
      'Över 15 års erfarenhet',
      'Samma dag-service',
      '100% nöjd-kund-garanti',
      'Jour dygnet runt',
    ],

    logoStrip: [
      { name: 'Hantverkarna', src: '/logos/hantverkarna.svg' },
      { name: 'Reco', src: '/logos/reco.svg' },
      { name: 'Trustpilot', src: '/logos/trustpilot.svg' },
      { name: 'EIO', src: '/logos/eio.svg' },
    ],

    painPoints: [
      {
        title: 'Trött på elektriker som inte dyker upp?',
        description:
          'Vi håller alltid avtalad tid, levererar det vi lovat och städar efter oss. Din tid är värdefull.',
        icon: '⚡',
      },
      {
        title: 'Orolig för säkerhetsrisker?',
        description:
          'Allt arbete uppfyller gällande elsäkerhetsregler och besiktigas. Våra elektriker skyddar ditt hem och din familj.',
        icon: '🛡️',
      },
      {
        title: 'Rädd för dolda kostnader?',
        description:
          'Du får alltid en tydlig skriftlig offert innan arbetet påbörjas. Inga överraskningar, inga finstilta villkor.',
        icon: '💰',
      },
    ],

    offers: [
      {
        name: 'Elsäkerhetsbesiktning',
        priceText: 'Från 990 kr',
        bullets: [
          'Genomgång av elcentral',
          'Kontroll av uttag och ledningar',
          'Jordfelsbrytartest',
          'Skriftlig säkerhetsrapport',
        ],
        highlight: false,
      },
      {
        name: 'Hemuppgradering',
        priceText: 'Från 4 990 kr',
        bullets: [
          'Allt i Elsäkerhetsbesiktning',
          'Byte av elcentral (upp till 200A)',
          '3 nya elkresar',
          'Installation av smarta strömbrytare',
          'Prioriterad bokning',
        ],
        highlight: true,
      },
      {
        name: 'Företagslösning',
        priceText: 'Offert på begäran',
        bullets: [
          'Uppfyller elsäkerhetslagen',
          'Trefassystem',
          'Nödbelysning',
          'Löpande serviceavtal',
          'Dedikerad kontaktperson',
        ],
        highlight: false,
      },
    ],

    steps: [
      {
        title: 'Begär offert',
        description: 'Fyll i vårt snabba formulär eller ring oss. Vi återkommer inom 2 timmar.',
      },
      {
        title: 'Få din offert',
        description:
          'En auktoriserad elektriker besöker dig och lämnar en tydlig skriftlig offert utan kostnad.',
      },
      {
        title: 'Vi utför arbetet',
        description: 'Vårt team är i tid, arbetar effektivt och städar noggrant efter sig.',
      },
      {
        title: 'Trygghet och garanti',
        description: 'Arbetet besiktigas och backas upp av vår 1-åriga arbetsgaranti.',
      },
    ],

    cases: [
      {
        title: 'Byte av elcentral i äldre villa',
        problem: 'Gammal elcentral från 60-talet orsakade upprepade säkringsbrott och brandrisk.',
        solution: 'Komplett byte av elcentral, ny 200A-anslutning och omledning av kritiska kretsar.',
        result: 'Inga elfel på 2 år. Villaförsäkringen sänktes med 18 %.',
      },
      {
        title: 'Akututryckning till restaurang',
        problem: 'Kritiskt kretsfel stängde ner köket under en lördagskväll.',
        solution: 'Jour på plats inom 90 minuter — felet lokaliserades och åtgärdades.',
        result: 'Köket igång igen på 3 timmar. Utebliven omsättning på 120 000 kr undveks.',
      },
      {
        title: 'Elinstallation i nytt kontor',
        problem: '900 kvm kontorslokal behövde komplett elinstallation på sex veckor.',
        solution: 'Full installation med smart belysning och laddstolpar för elbilar.',
        result: 'Klar fyra dagar före deadline, inom budget.',
      },
    ],

    testimonials: [
      {
        name: 'Sara M.',
        role: 'Villaägare',
        company: 'Bromma, Stockholm',
        text: 'Ringde kl 8 efter ett strömavbrott. De var hos mig kl 10 och allt var klart innan lunch. Proffsigt bemötande och rättvist pris.',
        rating: 5,
      },
      {
        name: 'Jakob T.',
        role: 'Driftchef',
        company: 'Nordisk Restauranggrupp',
        text: 'De räddade vår lördagskväll. Snabba, kunniga och förklarade varje steg. Nu har vi dem på serviceavtal.',
        rating: 5,
      },
      {
        name: 'Linda K.',
        role: 'Förvaltare',
        company: 'Grönvik Fastigheter AB',
        text: 'Vi förvaltar 40+ lägenheter och Sparks Elitel sköter all vår el. Pålitliga, certifierade och alltid i tid.',
        rating: 5,
      },
    ],

    faq: [
      {
        question: 'Är ni auktoriserade och försäkrade?',
        answer:
          'Ja. Vi är auktoriserade elinstallatörer och har en heltäckande ansvarsförsäkring. Alla tekniker innehar giltiga elcertifikat.',
      },
      {
        question: 'Hur snabbt kan ni rycka ut vid akuta fel?',
        answer:
          'Vi erbjuder jourtjänst dygnet runt, alla dagar. Vid akuta ärenden är vi normalt på plats inom 2 timmar.',
      },
      {
        question: 'Kostar offerten något?',
        answer:
          'Nej — offerten är alltid kostnadsfri och utan förpliktelser. Vi lämnar en skriftlig offert innan arbetet börjar.',
      },
      {
        question: 'Vilket område täcker ni?',
        answer: 'Vi arbetar i hela Stockholmsregionen samt kranskommunerna inom 5 mils radie.',
      },
      {
        question: 'Erbjuder ni garanti på arbetet?',
        answer:
          'Ja. All vår arbetskraft täcks av 1 års arbetsgaranti. Om något vi installerat eller reparerat slutar fungera åtgärdar vi det utan kostnad.',
      },
    ],

    showPricing: true,
    showCases: true,
    showLogoStrip: false,
  },
};
