import type { ClientEntry } from '@/config/clients/index';

export const byggfirma: ClientEntry = {
  id: 'byggfirma',
  label: 'Byggmästarna Sverige AB',
  config: {
    companyName: 'Byggmästarna Sverige AB',
    logo: '/logo.svg',
    contactEmail: 'info@byggmastarna.se',
    phone: '010-345 67 89',

    primaryColor: '#F97316',
    secondaryColor: '#1C1917',
    accentColor: '#FBBF24',
    fontFamily: 'Inter',

    headline: 'Erfaren byggfirma för ROT-arbeten, tillbyggnader och renoveringar — vi håller vad vi lovar.',
    subheadline:
      'Skickliga hantverkare, tydliga avtal och noggrann projektstyrning. Vi levererar på tid, inom budget och med kvalitet som syns.',
    heroImage: '/banners/byggfirma.jpg',
    ctaPrimary: 'Boka kostnadsfri genomgång',
    ctaSecondary: 'Se referensprojekt',

    trustBadges: [
      'Byggnadsingenjörer och hantverkare',
      'ROT-avdrag',
      'Försäkrad och F-skattsedel',
      'Fast pris i avtal',
      '25+ år i branschen',
    ],

    logoStrip: [],

    painPoints: [
      {
        title: 'Projektet drog ut på tiden och kostade mer?',
        description:
          'Vi upprättar ett tydligt avtal med fast tidplan och pris — och håller oss till det. Inga överraskningar.',
        icon: '📋',
      },
      {
        title: 'Hantverkare som försvann mitt i jobbet?',
        description:
          'Vi har egna hantverkare och arbetar strukturerat från start till besiktning. Du har alltid en ansvarig projektledare.',
        icon: '🏗️',
      },
      {
        title: 'Svårt att få kloka råd innan projektet startar?',
        description:
          'Vi erbjuder en kostnadsfri genomgång där vi hjälper dig förstå vad projektet kräver — innan du fattar beslut.',
        icon: '🤝',
      },
    ],

    offers: [
      {
        name: 'ROT & Renovering',
        priceText: 'Offert på begäran',
        bullets: [
          'Kök, badrum och golv',
          'Puts, målning och tapetsering',
          'Fönster- och dörrbyte',
          'ROT-avdrag hanteras av oss',
        ],
        highlight: false,
      },
      {
        name: 'Tillbyggnad & Ombyggnad',
        priceText: 'Offert på begäran',
        bullets: [
          'Tillbyggnad av boyta',
          'Garage och förråd',
          'Inredning av källare eller vind',
          'Projektering och bygglov ingår',
          'Nyckelfärdigt till fast pris',
        ],
        highlight: true,
      },
      {
        name: 'Löpande Förvaltning',
        priceText: 'Från 1 495 kr/mån',
        bullets: [
          'Löpande underhåll av fastighet',
          'Prioriterad service vid akuta behov',
          'Säsongskontroller',
          'En kontaktperson för allt',
        ],
        highlight: false,
      },
    ],

    steps: [
      {
        title: 'Kostnadsfri genomgång',
        description: 'Vi träffas på plats, lyssnar på dina önskemål och ger ärliga råd om vad som krävs.',
      },
      {
        title: 'Avtal och tidplan',
        description: 'Du får en detaljerad offert med fast pris och en tydlig tidplan att godkänna.',
      },
      {
        title: 'Byggnation',
        description: 'Erfarna hantverkare utför arbetet. Du håller koll via löpande statusuppdateringar.',
      },
      {
        title: 'Besiktning och överlämning',
        description: 'Vi går igenom allt tillsammans vid slutbesiktning. Inte klart förrän du är nöjd.',
      },
    ],

    cases: [
      {
        title: 'Tillbyggnad av parhus i Bromma',
        problem: 'Familjen behövde 40 kvm extra boyta — trångt, inga grannar att flytta ifrån.',
        solution: 'Tillbyggnad mot trädgård i två plan med fullt kök och kontor. Bygglov sökt och beviljat.',
        result: 'Klart 12 dagar före tidplan. Familjen slapp flytta och fick mer yta till lägre kostnad.',
      },
      {
        title: 'Totalrenovering av 70-talshus',
        problem: 'Huset hade original kök, badrum och elinstallation — osäkert och omodernt.',
        solution: 'Komplett renovering i tre etapper med boende kvar i huset under arbetet.',
        result: 'Projektet klart i tid. Husets värde ökade med uppskattningsvis 800 000 kr.',
      },
      {
        title: 'Kontorsombyggnad under drift',
        problem: '600 kvm kontor behövde byggas om utan att störa 40 anställda.',
        solution: 'Arbetet utfört etappvis med ljudisolering och tydlig zonindelning.',
        result: 'Noll driftstopp. Klart på 6 veckor enligt plan.',
      },
    ],

    testimonials: [
      {
        name: 'Helena S.',
        role: 'Privatperson',
        company: 'Bromma',
        text: 'Har anlitat många byggfirmor genom åren. Byggmästarna är den enda som faktiskt höll tidplanen och fakturerade exakt vad vi kommit överens om.',
        rating: 5,
      },
      {
        name: 'Erik J.',
        role: 'VD',
        company: 'Nordsved Logistics AB',
        text: 'Professionell hantering från första möte till sista spik. Projektledaren var alltid tillgänglig och transparent. Rekommenderas starkt.',
        rating: 5,
      },
      {
        name: 'Gunilla T.',
        role: 'Fastighetsägare',
        company: 'Privat',
        text: 'Renoverade hela källaren åt mig. Snyggt utfört, städat och utan krångel. Har redan bokat nästa projekt med dem.',
        rating: 5,
      },
    ],

    faq: [
      {
        question: 'Tar ni hand om bygglovsansökan?',
        answer: 'Ja, vi hjälper till med hela processen kring bygglov, från ansökan till kommunicering med kommunen. Det ingår i projektet.',
      },
      {
        question: 'Jobbar ni med ROT-avdrag?',
        answer: 'Ja. Du betalar bara 70 % av arbetskostnaden — vi ansöker om de resterande 30 % direkt från Skatteverket.',
      },
      {
        question: 'Kan jag bo kvar under renoveringen?',
        answer: 'I de flesta projekt går det bra. Vi planerar arbetet för att minimera störningar och håller alltid boendet funktionellt under pågående arbete.',
      },
      {
        question: 'Hur lång tid tar en typisk tillbyggnad?',
        answer: 'En tillbyggnad på 20–40 kvm tar vanligtvis 6–12 veckor från bygglovsstart. Vi ger dig en detaljerad tidplan i offerten.',
      },
      {
        question: 'Vad händer om det uppstår oförutsedda problem?',
        answer: 'Vi kommunicerar direkt och föreslår en lösning med tydlig kostnadspåverkan — du beslutar alltid innan vi går vidare.',
      },
    ],

    showPricing: true,
    showCases: true,
    showLogoStrip: false,
  },
};
