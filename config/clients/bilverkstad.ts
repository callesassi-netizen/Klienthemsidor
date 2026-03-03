import type { ClientEntry } from '@/config/clients/index';

export const bilverkstad: ClientEntry = {
  id: 'bilverkstad',
  label: 'Motorproffs Bilservice AB',
  config: {
    companyName: 'Motorproffs Bilservice AB',
    logo: '/logo.svg',
    contactEmail: 'info@motorproffs.se',
    phone: '010-789 01 23',

    primaryColor: '#EF4444',
    secondaryColor: '#111827',
    accentColor: '#F59E0B',
    fontFamily: 'Inter',

    headline: 'Ärlig och kunnig bilverkstad — vi fixar bilen rätt, till rätt pris, direkt.',
    subheadline:
      'Oberoende bilverkstad med fabriksutbildade mekaniker. Vi utför service, reparationer och besiktningsförberedelse för alla bilmärken.',
    heroImage: '/banners/bilverkstad.jpg',
    ctaPrimary: 'Boka service nu',
    ctaSecondary: 'Se vad vi fixar',

    trustBadges: [
      'Oberoende verkstad',
      'Fabriksutbildade mekaniker',
      'Alla bilmärken',
      'Transparent prissättning',
      'Lånebilar vid behov',
    ],

    logoStrip: [],

    painPoints: [
      {
        title: 'Osäker på om du betalar för onödiga reparationer?',
        description:
          'Vi visar alltid felet och förklarar varför det behöver åtgärdas — du godkänner varje åtgärd innan vi börjar.',
        icon: '🔍',
      },
      {
        title: 'Verkstad som tar lång tid och ger otydliga besked?',
        description:
          'Du får en tydlig tidsuppskattning när du lämnar bilen och ett SMS när den är klar. Inga väntan utan information.',
        icon: '⏱️',
      },
      {
        title: 'Märkesverkstadens höga priser utan flexibilitet?',
        description:
          'Som oberoende verkstad kan vi erbjuda märkeskvalitet till lägre kostnad — och vi väljer alltid det alternativ som passar din plånbok.',
        icon: '💰',
      },
    ],

    offers: [
      {
        name: 'Standardservice',
        priceText: 'Från 1 295 kr',
        bullets: [
          'Olje- och filterbyte',
          'Kontroll av bromsar och däck',
          'Genomgång av 30 punkter',
          'Digital servicerapport',
        ],
        highlight: false,
      },
      {
        name: 'Storservice',
        priceText: 'Från 2 995 kr',
        bullets: [
          'Allt i Standardservice',
          'Byte av tändstift och luftfilter',
          'Kontroll av kylsystem',
          'Bromsvätska och spolarvätska',
          'Servicebok stämplad',
        ],
        highlight: true,
      },
      {
        name: 'Besiktningsförberedelse',
        priceText: 'Från 595 kr',
        bullets: [
          'Genomgång av alla besiktningspunkter',
          'Åtgärd av anmärkningar',
          'Körtest',
          'Garanti: godkänd besiktning eller pengarna tillbaka',
        ],
        highlight: false,
      },
    ],

    steps: [
      {
        title: 'Boka tid',
        description: 'Välj datum online eller ring oss. Du kan boka lämning på morgonen och hämta samma dag.',
      },
      {
        title: 'Felsökning och offert',
        description: 'Vi kör en genomgång, visar dig felen och lämnar en tydlig offert att godkänna.',
      },
      {
        title: 'Reparation',
        description: 'Erfarna mekaniker åtgärdar bilen med OEM-godkänt material.',
      },
      {
        title: 'SMS och hämtning',
        description: 'Du får ett SMS när bilen är klar. Fakturan innehåller en detaljerad specifikation.',
      },
    ],

    cases: [
      {
        title: 'Mystiskt motorljud — tre verkstäder hade missat det',
        problem: 'Kund med upprepande motorljud som andra verkstäder inte kunde diagnostisera.',
        solution: 'Avancerad diagnostik visade slitna vevlagerinsatser. Åtgärdades inom 2 dagar.',
        result: 'Bilen tyst och felfri. Kunden sparade pengar på att inte behöva ta ett nytt motorbyte.',
      },
      {
        title: 'Flotta på 15 servicebilar',
        problem: 'Fastighetsbolag behövde löpande service och underhåll av fordonflotta.',
        solution: 'Serviceavtal med prioriterad bokning och månadsvis fakturering.',
        result: 'Noll oplanerade stopp under ett år. Flottan alltid trafiksäker och besiktningsgodkänd.',
      },
      {
        title: 'Kundvagn som inte klarade besiktning',
        problem: 'Kund fick underkänt på besiktningen med tre anmärkningar.',
        solution: 'Besiktningsförberedelse: bromsar, strålkastare och avgassystem åtgärdade.',
        result: 'Godkänd vid ny besiktning. Klart på en dag, inom budget.',
      },
    ],

    testimonials: [
      {
        name: 'Fredrik S.',
        role: 'Privatperson',
        company: 'Solna',
        text: 'Äntligen en verkstad som förklarar vad de gör och varför. Inga konstiga tillägg på fakturan och bilen lämnar alltid i bättre skick.',
        rating: 5,
      },
      {
        name: 'Lena M.',
        role: 'Inköpschef',
        company: 'Sundqvist Fastigheter AB',
        text: 'Sköter hela vår fordonsflotta sedan tre år. Pålitliga, transparenta och flexibla. Kan inte tänka mig att byta.',
        rating: 5,
      },
      {
        name: 'Karl-Henrik B.',
        role: 'Privatperson',
        company: 'Täby',
        text: 'Tre andra verkstäder hade inte hittat felet. Motorproffs löste det på en dag och förklarade allt tydligt. Rekommenderas starkt.',
        rating: 5,
      },
    ],

    faq: [
      {
        question: 'Förlorar jag garantin om jag inte servar hos märkesverkstaden?',
        answer: 'Nej. EU-lagstiftning (grupppungsundantaget) ger dig rätt att serva bilen hos valfri verkstad utan att bilgarantin påverkas, förutsatt att vi använder godkänt material och dokumenterar servicen korrekt — det gör vi.',
      },
      {
        question: 'Har ni lånebilar?',
        answer: 'Ja, vi har ett antal lånebilar tillgängliga vid längre reparationer. Boka i samband med din tid.',
      },
      {
        question: 'Kan ni hämta och lämna bilen?',
        answer: 'Ja, vi erbjuder hämtning och leverans inom 15 km från verkstaden för 395 kr.',
      },
      {
        question: 'Vilka bilmärken arbetar ni med?',
        answer: 'Vi arbetar med alla vanliga bilmärken — Volvo, BMW, Mercedes, VW, Toyota, Ford och fler. Fråga om ditt märke om du är osäker.',
      },
    ],

    showPricing: true,
    showCases: true,
    showLogoStrip: false,
  },
};
