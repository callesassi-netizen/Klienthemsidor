import type { ClientEntry } from '@/config/clients/index';

export const taklaggare: ClientEntry = {
  id: 'taklaggare',
  label: 'Takproffs Skandinavien AB',
  config: {
    companyName: 'Takproffs Skandinavien AB',
    logo: '/logo.svg',
    contactEmail: 'info@takproffs.se',
    phone: '010-456 78 90',

    primaryColor: '#DC2626',
    secondaryColor: '#1E293B',
    accentColor: '#64748B',
    fontFamily: 'Inter',

    headline: 'Professionell takläggning och takrenovering — vi skyddar ditt hem mot väder och vind.',
    subheadline:
      'Certifierade takläggare med 25 års erfarenhet. Vi arbetar med alla takmaterial och ger 10 års garanti på utfört arbete.',
    heroImage: '/images/hero.jpg',
    ctaPrimary: 'Boka gratis takinspektion',
    ctaSecondary: 'Se våra tjänster',

    trustBadges: [
      'Certifierad takläggare',
      '25 år i branschen',
      '10 års arbetsgaranti',
      'Försäkrat och godkänt',
      'ROT-avdrag',
    ],

    logoStrip: [],

    painPoints: [
      {
        title: 'Missar du skador tills det är för sent?',
        description:
          'En liten läcka kan på ett år förvandlas till en kostnad på hundratusentals kronor. Vår gratis takinspektion ger dig klarhet.',
        icon: '🏠',
      },
      {
        title: 'Osäker på vilket material som passar ditt tak?',
        description:
          'Vi rådgör alltid utifrån ditt hus specifika förutsättningar, klimat och budget — ingen förnorsäljning.',
        icon: '🔍',
      },
      {
        title: 'Rädd för fuktproblem och mögel?',
        description:
          'Vi ser till att taket är rätt ventilerat och tätat. Korrekt utfört takarbete är den viktigaste fuktsäkringen du kan göra.',
        icon: '💧',
      },
    ],

    offers: [
      {
        name: 'Takinspektion',
        priceText: 'Kostnadsfri',
        bullets: [
          'Visuell genomgång av hela taket',
          'Kontroll av tätskikt och beslag',
          'Bedömning av kvarvarande livslängd',
          'Skriftlig rapport med rekommendationer',
        ],
        highlight: false,
      },
      {
        name: 'Takrenovering',
        priceText: 'Offert på begäran',
        bullets: [
          'Komplett byte av takpannor eller plåt',
          'Nya hängrännor och stuprör',
          'Byte av underlagstak',
          'Tätning av genomföringar och beslag',
          '10 års arbetsgaranti',
        ],
        highlight: true,
      },
      {
        name: 'Takfönster & Tillägg',
        priceText: 'Från 8 500 kr',
        bullets: [
          'Montering av takfönster (Velux m.fl.)',
          'Installation av takbrygga och stege',
          'Plåtarbeten och beslag',
          'Snörasskydd',
        ],
        highlight: false,
      },
    ],

    steps: [
      {
        title: 'Gratis takinspektion',
        description: 'Vi klättrar upp, tittar ordentligt och berättar ärligt vad vi ser — utan förpliktelser.',
      },
      {
        title: 'Offert och material',
        description: 'Du får en specificerad offert med materialval och fast pris att godkänna i lugn och ro.',
      },
      {
        title: 'Takarbetet utförs',
        description: 'Certifierade takläggare arbetar metodiskt och säkert. Vi städar upp och tar hand om allt rivningsmaterial.',
      },
      {
        title: '10 års garanti',
        description: 'Arbetet besiktigas av dig och vi lämnar skriftlig garanti. Taket ska hålla länge.',
      },
    ],

    cases: [
      {
        title: 'Komplett takomläggning på 1940-talsvilla',
        problem: 'Gammalt eternittak med sprickor, läckage och asbestmisstanke.',
        solution: 'Demontering med asbestsanering, nytt underlagstak och betongtakpannor.',
        result: 'Besiktigat och godkänt. Husägaren fick grönare försäkringsvillkor.',
      },
      {
        title: 'Stormskada på kommersiell fastighet',
        problem: 'Plåttak blåste delvis av under höststorm. Vatten in i lagerlokalen.',
        solution: 'Akuttäckning samma dag, permanent plåtreparation utförd inom 4 dagar.',
        result: 'Inventarieskador minimerades. Försäkringen täckte merparten av kostnaden.',
      },
      {
        title: 'Tilläggsisolering och nytt tak på BRF',
        problem: 'Äldre papptak med dålig isolering gav höga uppvärmningskostnader.',
        solution: 'Nytt ventilerat yttertak med 200 mm tilläggsisolering.',
        result: 'Uppvärmningskostnaden för fastigheten minskade med 31 %.',
      },
    ],

    testimonials: [
      {
        name: 'Birgitta N.',
        role: 'Villaägare',
        company: 'Täby',
        text: 'Gratis inspektionen avslöjade läckage jag inte visste om. De åtgärdade det snabbt och professionellt. Priset var rättvist och arbetet är välgjort.',
        rating: 5,
      },
      {
        name: 'Johan K.',
        role: 'Fastighetschef',
        company: 'Rikshem Norra AB',
        text: 'Anlitar Takproffs för samtliga fastigheter i portföljen. Pålitliga, certifierade och håller alltid tidplan och budget.',
        rating: 5,
      },
      {
        name: 'Susanne M.',
        role: 'BRF-styrelseordförande',
        company: 'Brf Ekbacken',
        text: 'Genomförde ett stort takprojekt åt oss med minimala störningar för de boende. Tydlig kommunikation och snyggt slutresultat.',
        rating: 5,
      },
    ],

    faq: [
      {
        question: 'Hur vet jag om mitt tak behöver bytas?',
        answer: 'Vanliga tecken är synliga sprickor, missfärgade innerväggar, takpannor som glider eller ett tak som är äldre än 30 år. Vi erbjuder gratis inspektion för att ge dig ett ärligt svar.',
      },
      {
        question: 'Hur lång tid tar en takomläggning?',
        answer: 'En normalvilla (120–180 kvm tak) tar vanligtvis 3–5 arbetsdagar beroende på material och komplexitet.',
      },
      {
        question: 'Vad ingår i er 10-årsgaranti?',
        answer: 'Garantin täcker arbetsinsatsen — alla läckor, dåliga fogar eller takpannor som glider på grund av vår installation åtgärdas utan kostnad.',
      },
      {
        question: 'Tar ni ROT-avdrag?',
        answer: 'Ja, takläggning och takrenovering på bostad berättigar till ROT-avdrag. Vi hanterar det administrativt åt dig.',
      },
    ],

    showPricing: true,
    showCases: true,
    showLogoStrip: false,
  },
};
