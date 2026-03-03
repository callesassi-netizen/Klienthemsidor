import type { ClientEntry } from '@/config/clients/index';

export const elektriker: ClientEntry = {
  id: 'elektriker',
  label: 'Volt & Säkring El AB',
  config: {
    companyName: 'Volt & Säkring El AB',
    logo: '/logo.svg',
    contactEmail: 'info@voltochsakring.se',
    phone: '010-123 45 67',

    primaryColor: '#F59E0B',
    secondaryColor: '#1E293B',
    accentColor: '#3B82F6',
    fontFamily: 'Inter',

    headline: 'Auktoriserad elektriker — snabb, säker och alltid i tid.',
    subheadline:
      'Elarbeten för hem och företag utförda av certifierade elektriker. Vi svarar inom 60 minuter och lämnar kostnadsfri offert.',
    heroImage: '/banners/elektriker.jpg',
    ctaPrimary: 'Få kostnadsfri offert',
    ctaSecondary: 'Se våra tjänster',

    trustBadges: [
      'Auktoriserad elinstallatör',
      '20+ års erfarenhet',
      'Svarar inom 60 min',
      'Fast pris — inga dolda avgifter',
      'Jour alla dagar',
    ],

    logoStrip: [],

    painPoints: [
      {
        title: 'Elektriker som aldrig svarar?',
        description:
          'Vi återkopplar inom 60 minuter — alltid. Du ska inte behöva jaga din hantverkare.',
        icon: '📞',
      },
      {
        title: 'Osäker el som skapar faror?',
        description:
          'Allt arbete utförs enligt gällande elsäkerhetsregler och besiktigas. Vi skyddar din familj och egendom.',
        icon: '⚡',
      },
      {
        title: 'Fakturan blev dubbelt vad du förväntade dig?',
        description:
          'Du godkänner alltid en skriftlig offert innan arbetet startar. Fast pris, inga tillägg.',
        icon: '💰',
      },
    ],

    offers: [
      {
        name: 'Elbesiktning',
        priceText: 'Från 795 kr',
        bullets: [
          'Genomgång av elcentral',
          'Kontroll av jordfelsbrytare',
          'Besiktning av synliga ledningar',
          'Skriftlig rapport med rekommendationer',
        ],
        highlight: false,
      },
      {
        name: 'Hem & Bostad-paketet',
        priceText: 'Från 3 995 kr',
        bullets: [
          'Allt i Elbesiktning',
          'Byte av elcentral (upp till 200A)',
          'Installation av 3 nya eluttag',
          'Montering av jordfelsbrytare',
          'Prioriterad bokning inom 48 h',
        ],
        highlight: true,
      },
      {
        name: 'Företagsavtal',
        priceText: 'Offert på begäran',
        bullets: [
          'Löpande serviceavtal',
          'Driftunderhåll av elanläggning',
          'Jouravtal dygnet runt',
          'Dedikerad elektriker',
          'Fakturering månadsvis',
        ],
        highlight: false,
      },
    ],

    steps: [
      {
        title: 'Kontakta oss',
        description: 'Ring eller fyll i formuläret. Vi återkopplar inom 60 minuter, vardagar som helger.',
      },
      {
        title: 'Kostnadsfri offert',
        description: 'En elektriker besöker dig och lämnar en tydlig fast offert — utan skyldighet.',
      },
      {
        title: 'Arbetet utförs',
        description: 'Vi är pünktliga, arbetar städat och informerar dig löpande.',
      },
      {
        title: 'Garanti & nöjd kund',
        description: 'Allt arbete backas upp av 2 års arbetsgaranti. Du betalar först när du är nöjd.',
      },
    ],

    cases: [
      {
        title: 'Komplett elrenovering av 1960-talsvilla',
        problem: 'Gammal aluminium­ledning och uttjänt elcentral — allvarlig brandrisk.',
        solution: 'Ny elcentral, komplett omledning och installation av 12 jordfelsbrytare.',
        result: 'Godkänd besiktning. Husägaren fick sänkt försäkringspremie med 22 %.',
      },
      {
        title: 'Kontorsexpansion med tight deadline',
        problem: 'Nytt kontor på 400 kvm behövde elinstallation klart på 10 dagar.',
        solution: 'Team av fyra elektriker installerade belysning, uttag och serverrum.',
        result: 'Klart två dagar i förväg. Kunden öppnade i tid.',
      },
      {
        title: 'Akutreparation restaurang',
        problem: 'Kökselektrik havererade fredagskväll — fullsatt krog.',
        solution: 'Jour på plats inom 75 minuter, felet åtgärdat.',
        result: 'Köket igång igen på 2,5 timmar. Ingen intäkt gick förlorad.',
      },
    ],

    testimonials: [
      {
        name: 'Karin L.',
        role: 'Villaägare',
        company: 'Lidingö',
        text: 'Äntligen en elektriker som faktiskt svarar och dyker upp i tid. Jobbet blev välgjort och priset var precis vad vi kommit överens om.',
        rating: 5,
      },
      {
        name: 'Tobias E.',
        role: 'Kontorschef',
        company: 'Meridian Consulting AB',
        text: 'Vi fick ett helt kontor installaterat på rekordtid. Proffsiga, trevliga och inga överraskningar på fakturan.',
        rating: 5,
      },
      {
        name: 'Anette W.',
        role: 'Restaurangägare',
        company: 'Bistro Norden',
        text: 'Räddade oss en fredagskväll med fullt hus. Snabb, kompetent och inte ens dyr för att det var jour. Rekommenderar varmt.',
        rating: 5,
      },
    ],

    faq: [
      {
        question: 'Är ni auktoriserade?',
        answer: 'Ja, vi är auktoriserade elinstallatörer och alla våra elektriker innehar giltiga behörigheter enligt Elsäkerhetsverkets krav.',
      },
      {
        question: 'Tar ni ROT-avdrag?',
        answer: 'Ja, vi hanterar ROT-avdraget direkt — du betalar bara halva arbetskostnaden och vi sköter resten med Skatteverket.',
      },
      {
        question: 'Hur snabbt kan ni komma?',
        answer: 'Vid akuta ärenden är vi ofta på plats samma dag. Vid planerade arbeten bokar vi in ett datum som passar dig, vanligtvis inom 3–5 arbetsdagar.',
      },
      {
        question: 'Ger ni fast pris?',
        answer: 'Ja. Vi lämnar alltid en skriftlig offert med fast pris innan arbetet startar. Du betalar aldrig mer än vad vi kommit överens om.',
      },
      {
        question: 'Har ni garanti på arbetet?',
        answer: 'Självklart. All vår arbetsinsats täcks av 2 års garanti. Material täcks av respektive tillverkares garanti.',
      },
    ],

    showPricing: true,
    showCases: true,
    showLogoStrip: false,
  },
};
