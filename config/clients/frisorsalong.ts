import type { ClientEntry } from '@/config/clients/index';

export const frisorsalong: ClientEntry = {
  id: 'frisorsalong',
  label: 'Studio Hår & Stil',
  config: {
    companyName: 'Studio Hår & Stil',
    logo: '/logo.svg',
    contactEmail: 'hej@studiohårstil.se',
    phone: '08-987 65 43',

    primaryColor: '#EC4899',
    secondaryColor: '#18181B',
    accentColor: '#F59E0B',
    fontFamily: 'Poppins',

    headline: 'Din nya favoritstudio — experter på klipp, färg och behandlingar som passar just dig.',
    subheadline:
      'Vi lyssnar på dig, förstår ditt hår och skapar en stil du kan leva med. Boka din tid och känn skillnaden från första besöket.',
    heroImage: '/images/hero.jpg',
    ctaPrimary: 'Boka din tid',
    ctaSecondary: 'Se våra tjänster',

    trustBadges: [
      '600+ recensioner ⭐ 4,9',
      'Certifierade stylister',
      'Keratase & Olaplex',
      'Öppet 7 dagar i veckan',
      'Ny kund? 15 % rabatt',
    ],

    logoStrip: [],

    painPoints: [
      {
        title: 'Klippet ser annorlunda ut hemma än i salongen?',
        description:
          'Vi lär dig styla ditt hår precis som vi gör det — och rekommenderar rätt produkter för att resultatet ska hålla.',
        icon: '✂️',
      },
      {
        title: 'Färgat hår som bleknar på några veckor?',
        description:
          'Vi använder professionella färger och behandlingsprotokoll anpassade för just ditt hår — resultat som faktiskt håller.',
        icon: '🎨',
      },
      {
        title: 'Känslan av att inte bli lyssnad på?',
        description:
          'Varje besök börjar med en konsultation. Vi förstår dina önskemål och din livsstil innan vi tar upp saxen.',
        icon: '💬',
      },
    ],

    offers: [
      {
        name: 'Klipp & Stil',
        priceText: 'Från 495 kr',
        bullets: [
          'Konsultation ingår alltid',
          'Tvätt, klippning och styling',
          'Råd om hemvård',
          'Dam eller herr',
        ],
        highlight: false,
      },
      {
        name: 'Färg & Behandling',
        priceText: 'Från 1 295 kr',
        bullets: [
          'Konsultation och färganalys',
          'Balayage, slingor eller helmärgsfärg',
          'Olaplex-behandling ingår',
          'Tvätt, klipp och styling',
          'Eftervårdsplan',
        ],
        highlight: true,
      },
      {
        name: 'Brud & Event',
        priceText: 'Offert på begäran',
        bullets: [
          'Provuppsättning ingår',
          'Dag-styling för brud och sällskap',
          'Makeup-samarbete tillval',
          'Hembesök möjligt',
          'Dedikerad stylist',
        ],
        highlight: false,
      },
    ],

    steps: [
      {
        title: 'Boka online',
        description: 'Välj tjänst, stylist och tid direkt i vår bokningskalender — klart på 60 sekunder.',
      },
      {
        title: 'Konsultation',
        description: 'Varje besök börjar med ett samtal om dig, ditt hår och vad du vill uppnå.',
      },
      {
        title: 'Din behandling',
        description: 'Koppla av och låt oss ta hand om dig. Vi berättar vad vi gör och varför.',
      },
      {
        title: 'Resultatet och eftervård',
        description: 'Du lämnar med ett leende och kunskap om hur du tar hand om ditt hår hemma.',
      },
    ],

    cases: [
      {
        title: 'Bröllopsdag från begynnelse till slut',
        problem: 'Brud med tunt, skadat hår som ville ha volymsrik uppsättning till bröllopet.',
        solution: 'Tre Olaplex-behandlingar inför dagen, provuppsättning och dag-styling.',
        result: 'Bruden grät av glädje. Publicerad i bröllopsmagasin online.',
      },
      {
        title: 'Transformation från slitet till strålande',
        problem: 'Kund med överfärgat, torrt hår och tappad självkänsla.',
        solution: 'Reparationsprotokoll över 6 veckor med keratinbehandling och ny färgplan.',
        result: 'Hårets kondition förbättrades avsevärt. Kunden bokar nu varje månad.',
      },
      {
        title: 'Corporate-omprofilering',
        problem: 'Kund i ledande position ville ha en mer modern, professionell image.',
        solution: 'Ny klippteknik, diskret balayage och produktrådgivning.',
        result: 'Kunden fick positiv respons på jobbet redan första veckan. Stamkund sedan dess.',
      },
    ],

    testimonials: [
      {
        name: 'Ida L.',
        role: 'Privatperson',
        company: 'Östermalm',
        text: 'Har provat fem salonger i stan. Det här är den enda jag tänker stanna på. De lyssnar, de förstår mitt hår och resultatet är alltid bättre än jag hoppats.',
        rating: 5,
      },
      {
        name: 'Emma H.',
        role: 'Brud',
        company: '',
        text: 'Bästa beslutet jag tog inför bröllopet. Tre behandlingar före och dag-styling — mitt hår har aldrig sett så bra ut. Alla frågade vem som gjort det.',
        rating: 5,
      },
      {
        name: 'Marcus D.',
        role: 'Marknadschef',
        company: 'Privat',
        text: 'Förväntade mig inte så mycket av en frisör men här fick jag råd, en ny stil och en känsla av att bli sedd. Bokar varje sex veckor nu.',
        rating: 5,
      },
    ],

    faq: [
      {
        question: 'Behöver jag boka i förväg?',
        answer: 'Vi rekommenderar att boka via vår hemsida. Vi tar drop-ins i mån av plats — ring oss så kollar vi vad som finns ledigt.',
      },
      {
        question: 'Vad kostar en konsultation?',
        answer: 'Konsultation ingår alltid kostnadsfritt i alla våra tjänster. Vi vill förstå ditt hår ordentligt innan vi startar.',
      },
      {
        question: 'Kan jag komma med en bild på den stil jag vill ha?',
        answer: 'Absolut, vi älskar inspirationsbilder! De hjälper oss förstå din vision — kom med flera för att visa riktning.',
      },
      {
        question: 'Erbjuder ni Olaplex på alla tjänster?',
        answer: 'Olaplex ingår i alla färgbehandlingar. Det kan läggas till som tillägg på övriga tjänster för 295 kr.',
      },
      {
        question: 'Vad händer om jag inte är nöjd?',
        answer: 'Kontakta oss inom 7 dagar så löser vi det. Din nöjdhet är vår viktigaste prioritet.',
      },
    ],

    showPricing: true,
    showCases: true,
    showLogoStrip: false,
  },
};
