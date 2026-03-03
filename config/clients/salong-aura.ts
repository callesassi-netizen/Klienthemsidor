import type { ClientEntry } from '@/config/clients/index';

export const salongAura: ClientEntry = {
  id: 'salong-aura',
  label: 'Salong Aura',
  config: {
    companyName: 'Salong Aura',
    logo: '/logo.svg',
    contactEmail: 'boka@salongaura.se',
    phone: '070-123 45 67',

    primaryColor: '#9D6B8A',
    secondaryColor: '#1C1C1C',
    accentColor: '#C9A96E',
    fontFamily: 'Playfair Display',

    headline: 'Naturlig skönhet som lyser — balayage och personlig stil på Linnégatan i Göteborg.',
    subheadline:
      'Salong Aura specialiserar sig på balayage och naturliga hårtoner som lyfter fram din personlighet. Med 8 års erfarenhet och en kostnadsfri konsultation skapar vi en stil du verkligen älskar.',
    heroImage: '/banners/frisorsalong.jpg',
    ctaPrimary: 'Boka din tid idag',
    ctaSecondary: 'Få en kostnadsfri konsultation',

    trustBadges: [
      '8 år i Göteborg',
      'Specialister på balayage',
      '4,9 ⭐ på Google',
      'Kostnadsfri konsultation',
      'Boka enkelt online',
    ],

    logoStrip: [],

    painPoints: [
      {
        title: 'Färg som ser onaturlig eller ojämn ut?',
        description:
          'Vi är experter på naturliga hårtoner och balayage som smälter ihop med ditt eget hår. Resultatet ska se ut som om du alltid haft det så.',
        icon: '🌿',
      },
      {
        title: 'Svårt att hitta en salong som förstår just ditt hår?',
        description:
          'Varje kund är unik. Vi börjar alltid med en personlig konsultation — kostnadsfritt — för att förstå ditt hår, din livsstil och vad du vill uppnå.',
        icon: '💛',
      },
      {
        title: 'Balayage som växer ut dåligt och kräver ständig underhåll?',
        description:
          'Med rätt teknik från grunden växer balayagen vackert ut och kräver minimal touch-up. Vi lär dig dessutom hur du sköter håret hemma.',
        icon: '✨',
      },
    ],

    offers: [
      {
        name: 'Klipp & Styling',
        priceText: 'Från 595 kr',
        bullets: [
          'Kostnadsfri konsultation',
          'Tvätt, klippning och blow-dry',
          'Råd om form och hemvård',
          'Anpassad för din hårstruktur',
        ],
        highlight: false,
      },
      {
        name: 'Balayage & Naturlig Färg',
        priceText: 'Från 1 895 kr',
        bullets: [
          'Personlig färgkonsultation',
          'Handmålad balayage eller naturlig slingteknik',
          'Djupvårdande hårbehandling ingår',
          'Tvätt, klippning och styling',
          'Hemvårdsplan för långvarigt resultat',
        ],
        highlight: true,
      },
      {
        name: 'Bruduppsättning',
        priceText: 'Offert på begäran',
        bullets: [
          'Provuppsättning ingår alltid',
          'Styling för brud och sällskap',
          'Tillval: löshår och accessories',
          'Hembesök vid önskemål',
          'Dedikerad stylist hela dagen',
        ],
        highlight: false,
      },
    ],

    steps: [
      {
        title: 'Boka din tid online',
        description: 'Välj tjänst och tid direkt i vår bokningskalender på nätet — enkelt och klart på under en minut.',
      },
      {
        title: 'Kostnadsfri konsultation',
        description: 'Vi börjar alltid med att lyssna. Berätta om ditt hår, din vardag och din drömstil — vi ger dig ärliga råd.',
      },
      {
        title: 'Din behandling hos oss',
        description: 'Koppla av i vår salong på Linnégatan. Vi tar hand om varje detalj och berättar vad vi gör längs vägen.',
      },
      {
        title: 'Lämna med självförtroende',
        description: 'Du går hem med ett resultat du är stolt över och kunskap om hur du håller det vackert mellan besöken.',
      },
    ],

    cases: [
      {
        title: 'Balayage-transformation — från enformigt till levande',
        problem: 'Kund med mörkt, entonigt hår som ville ha en naturligare, varmare look utan att det skulle se färgat ut.',
        solution: 'Handmålad balayage i varma bruna och karamelltoner, kombinerat med en djupvårdande keratinbehandling.',
        result: 'Kunden grät av lycka. Resultatet delades på Instagram och genererade fem nya bokningar samma vecka.',
      },
      {
        title: 'Drömbröllopet — brud med eftertraktad glasyr',
        problem: 'Brud med fint, tunt hår som ville ha en volymrik och hållbar uppsättning för sin stora dag.',
        solution: 'Två Olaplex-behandlingar inför bröllopet, provuppsättning samt heldagsstyling för brud och tärnor.',
        result: 'En strålande brud och ett gäng tärnor som alla ville ha telefonnumret till salongen.',
      },
      {
        title: 'Återhämtning — skadat hår tillbaka till liv',
        problem: 'Kund med håret skadat av hemmafärgning och fel produkter — torrt, sprött och utan lyster.',
        solution: 'Färgkorrigering med naturliga tonare och ett 6-veckors återuppbyggande behandlingsprotokoll.',
        result: 'Hårets kondition förbättrades märkbart redan efter första behandlingen. Nu en stamkund som kommer var sjätte vecka.',
      },
    ],

    testimonials: [
      {
        name: 'Sofia M.',
        role: 'Privatperson',
        company: 'Majorna, Göteborg',
        text: 'Jag har letat efter en salong som verkligen förstår naturlig balayage i flera år. Salong Aura är svaret. Resultatet är exakt vad jag drömt om — varmt, naturligt och levande.',
        rating: 5,
      },
      {
        name: 'Linnea K.',
        role: 'Brud',
        company: 'Haga, Göteborg',
        text: 'Visste inte vad jag ville ha till bröllopet, men efter konsultationen kändes allt solklart. Dagstylingen var perfekt och håret höll sig hela kvällen. Kan inte rekommendera dem nog.',
        rating: 5,
      },
      {
        name: 'Maria A.',
        role: 'Privatperson',
        company: 'Kungsbacka',
        text: 'Kör 30 minuter för att komma hit och det är värt varenda kilometer. Personlig service, kunniga stylister och ett resultat som alltid överträffar mina förväntningar.',
        rating: 5,
      },
    ],

    faq: [
      {
        question: 'Hur bokar jag tid hos Salong Aura?',
        answer: 'Du bokar enkelt online via vår bokningskalender — välj tjänst, tid och stylist. Du kan även ringa oss på 070-123 45 67 eller maila boka@salongaura.se.',
      },
      {
        question: 'Är konsultationen verkligen kostnadsfri?',
        answer: 'Ja, absolut. Vi erbjuder alltid en kostnadsfri konsultation — antingen i samband med ditt besök eller som ett separat möte om du vill diskutera en större förändring.',
      },
      {
        question: 'Hur länge håller en balayage?',
        answer: 'En välgjord balayage håller i 4–6 månader innan du behöver en touch-up. En av fördelarna med tekniken är att den växer ut naturligt och vackert utan en tydlig ansats.',
      },
      {
        question: 'Passar balayage alla hårtyper och hårfärger?',
        answer: 'Ja! Balayage fungerar på de flesta hårtyper och kan anpassas efter din naturliga ton — från ljust till mörkt hår. Under konsultationen berättar vi vad som passar just dig.',
      },
      {
        question: 'Kan jag ta med inspirationsbilder?',
        answer: 'Självklart — vi uppmuntrar det! Inspirationsbilder hjälper oss förstå din vision. Ju fler bilder du har, desto bättre kan vi anpassa resultatet efter dina önskemål.',
      },
    ],

    showPricing: true,
    showCases: true,
    showLogoStrip: false,
  },
};
