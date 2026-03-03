import type { ClientEntry } from '@/config/clients/index';

export const stadservice: ClientEntry = {
  id: 'stadservice',
  label: 'Skinande Städ AB',
  config: {
    companyName: 'Skinande Städ AB',
    logo: '/logo.svg',
    contactEmail: 'info@skinandesstad.se',
    phone: '010-678 90 12',

    primaryColor: '#0891B2',
    secondaryColor: '#0F172A',
    accentColor: '#34D399',
    fontFamily: 'Inter',

    headline: 'Professionell städning som faktiskt gör skillnad — skinande rent, varje gång.',
    subheadline:
      'Hemstädning, kontorsstädning och storstädning med nöjd-kund-garanti. Vi använder miljövänliga medel och välutbildad personal.',
    heroImage: '/images/hero.jpg',
    ctaPrimary: 'Boka städning nu',
    ctaSecondary: 'Se vad som ingår',

    trustBadges: [
      'RUT-avdrag',
      'Kollektivanställd personal',
      'Miljöcertifierade rengöringsmedel',
      'Nöjd-kund-garanti',
      'Fasta städerskor',
    ],

    logoStrip: [],

    painPoints: [
      {
        title: 'Städaren dyker inte upp eller missar detaljer?',
        description:
          'Du har alltid samma person hos dig. Vår personal är kollektivanställd, utbildad och ansvarig — vi skickar aldrig en okänd vikarie utan att meddela.',
        icon: '🧹',
      },
      {
        title: 'Kemikalierna luktar och irriterar?',
        description:
          'Vi använder enbart miljöcertifierade och allergivänliga rengöringsmedel — bra för din familj, ditt hem och planeten.',
        icon: '🌿',
      },
      {
        title: 'Osäker på vad som faktiskt ingår?',
        description:
          'Vi levererar en tydlig checklista med varje städning. Du vet exakt vad som städas — och kan enkelt anpassa.',
        icon: '✅',
      },
    ],

    offers: [
      {
        name: 'Hemstädning',
        priceText: 'Från 349 kr/h efter RUT',
        bullets: [
          'Kök, badrum, sovrum och vardagsrum',
          'Dammsugning och moppning',
          'Torkning av ytor och plintar',
          'Fast städerska varje gång',
        ],
        highlight: false,
      },
      {
        name: 'Storstädning',
        priceText: 'Offert på begäran',
        bullets: [
          'Allt i Hemstädning',
          'Ugn, kyl och frysskåp inuti',
          'Fönsterputs (insida)',
          'Bakom och under möbler',
          'Nöjd-kund-garanti',
        ],
        highlight: true,
      },
      {
        name: 'Kontorsstädning',
        priceText: 'Offert på begäran',
        bullets: [
          'Daglig eller veckovis städning',
          'Kök, toaletter och gemensamma ytor',
          'Återvinning och sophantering',
          'Städning utanför kontorstid',
        ],
        highlight: false,
      },
    ],

    steps: [
      {
        title: 'Boka offert',
        description: 'Berätta om ditt hem och önskad frekvens. Vi ger fast pris utan hembesök.',
      },
      {
        title: 'Introduktionsstädning',
        description: 'Vi gör en noggrann första städning och lär känna ditt hem från grunden.',
      },
      {
        title: 'Fast schema',
        description: 'Samma städerska, samma dag, varje vecka eller varannan vecka.',
      },
      {
        title: 'Alltid nöjd',
        description: 'Märker du att något missats? Vi åtgärdar det inom 24 timmar — utan extra kostnad.',
      },
    ],

    cases: [
      {
        title: 'Kontorsstädning för 80-personers bolag',
        problem: 'Fastighetsbolag med höga krav på hygien och presentation för externa besök.',
        solution: 'Daglig städning av kontorsytor, konferensrum och kök — utanför kontorstid.',
        result: 'Noll klagomål på 18 månader. Avtalet förnyas automatiskt varje år.',
      },
      {
        title: 'Inflyttningsstädning av nybyggt hus',
        problem: 'Nyproduktion med byggdamm, märken och smuts i varje hörn.',
        solution: 'Fullständig inflyttningsstädning med fönsterputs, köksstädning och polerarbete.',
        result: 'Familjen kunde flytta in dagen efter. Nöjd-kund-garantin behövdes inte.',
      },
      {
        title: 'Löpande hemstädning — travlat barnfamilj',
        problem: 'Familj med tre barn och heltidsjobb — hemmet hann aldrig bli riktigt rent.',
        solution: 'Varannan-vecka-städning med fast städerska och anpassad checklista.',
        result: 'Kunden har anlitat oss i 4 år. "Det är den bästa investeringen vi gjort."',
      },
    ],

    testimonials: [
      {
        name: 'Maria S.',
        role: 'Småbarnsförälder',
        company: 'Nacka',
        text: 'Äntligen en städfirma som verkligen städar ordentligt. Samma person varje gång, alltid punktlig och alltid noggrant. Kan inte tänka mig att vara utan.',
        rating: 5,
      },
      {
        name: 'Peter A.',
        role: 'Kontorschef',
        company: 'Bergqvist & Partners AB',
        text: 'Professionell städning som aldrig stör vår arbetsdag. Alltid klart när vi kommer på morgonen. Rekommenderas varmt.',
        rating: 5,
      },
      {
        name: 'Anna K.',
        role: 'Privatperson',
        company: 'Vasastan',
        text: 'Använder RUT-avdraget och betalar bara hälften. Bästa pengar jag lägger — sparar en dag i månaden som jag nu ägnar åt familjen.',
        rating: 5,
      },
    ],

    faq: [
      {
        question: 'Vad innebär nöjd-kund-garantin?',
        answer: 'Är du inte nöjd med städningen återkommer vi inom 24 timmar och åtgärdar det som inte uppfyllt förväntningarna — helt kostnadsfritt.',
      },
      {
        question: 'Tar ni RUT-avdrag?',
        answer: 'Ja, hemstädning berättigar till RUT-avdrag på 50 % av arbetskostnaden. Du betalar bara halva priset — vi sköter resten med Skatteverket.',
      },
      {
        question: 'Tar ni med egna städmaterial?',
        answer: 'Ja, vi tar med alla rengöringsmedel och utrustning. Du behöver inte köpa eller förbereda något.',
      },
      {
        question: 'Vad händer om min städerska är sjuk?',
        answer: 'Vi meddelar alltid i förväg och erbjuder antingen en uppskjutning eller en välkänd vikarie från vårt team.',
      },
      {
        question: 'Kan jag anpassa vad som städas?',
        answer: 'Absolut. Vi arbetar utifrån en checklista som du enkelt kan justera efter dina önskemål.',
      },
    ],

    showPricing: true,
    showCases: true,
    showLogoStrip: false,
  },
};
