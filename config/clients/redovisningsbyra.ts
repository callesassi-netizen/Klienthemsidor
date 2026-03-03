import type { ClientEntry } from '@/config/clients/index';

export const redovisningsbyra: ClientEntry = {
  id: 'redovisningsbyra',
  label: 'Balans Redovisning & Ekonomi AB',
  config: {
    companyName: 'Balans Redovisning & Ekonomi AB',
    logo: '/logo.svg',
    contactEmail: 'info@balansredovisning.se',
    phone: '08-234 56 78',

    primaryColor: '#4F46E5',
    secondaryColor: '#1E293B',
    accentColor: '#0EA5E9',
    fontFamily: 'Inter',

    headline: 'Trygg ekonomi och korrekt bokföring — vi sköter siffrorna så du kan fokusera på affären.',
    subheadline:
      'Erfarna redovisningskonsulter och auktoriserade revisorer med personlig service. Vi är mer än din redovisare — vi är din ekonomiska partner.',
    heroImage: '/banners/redovisningsbyra.jpg',
    ctaPrimary: 'Boka gratis rådgivning',
    ctaSecondary: 'Se våra tjänster',

    trustBadges: [
      'Auktoriserade redovisningskonsulter',
      'FAR-anslutna',
      'Personlig kontakt — alltid',
      'Fasta månadsavgifter',
      'Digitalt och effektivt',
    ],

    logoStrip: [],

    painPoints: [
      {
        title: 'Redovisaren svarar inte och du vet inte var du står?',
        description:
          'Du har alltid en namngiven konsult ansvarig för ditt uppdrag — och svarstid på max en arbetsdag, alltid.',
        icon: '📊',
      },
      {
        title: 'Rädd för att missa momsdeklarationer eller årsredovisningar?',
        description:
          'Vi håller koll på alla deadlines och påminner dig i god tid. Inget förfaller utan att du vetat om det.',
        icon: '📅',
      },
      {
        title: 'Bokföring som känns som ett okänt språk?',
        description:
          'Vi förklarar din ekonomi i klartext. Du ska förstå din balansräkning — inte bara skriva under den.',
        icon: '💡',
      },
    ],

    offers: [
      {
        name: 'Startpaket',
        priceText: 'Från 1 295 kr/mån',
        bullets: [
          'Löpande bokföring',
          'Moms- och arbetsgivardeklarationer',
          'Digitalt bokföringssystem ingår',
          'För nystartade och soloföretag',
        ],
        highlight: false,
      },
      {
        name: 'Tillväxtpaket',
        priceText: 'Från 2 995 kr/mån',
        bullets: [
          'Allt i Startpaket',
          'Löneadministration (upp till 5 anst.)',
          'Kvartalsvisa ekonomirapporter',
          'Budgetrådgivning',
          'Personlig konsultträff varje kvartal',
        ],
        highlight: true,
      },
      {
        name: 'Fullservice & Revision',
        priceText: 'Offert på begäran',
        bullets: [
          'Allt i Tillväxtpaket',
          'Årsredovisning och deklaration',
          'Likviditetsplanering',
          'Bolagsjuridik och rådgivning',
          'Auktoriserad revisor vid behov',
        ],
        highlight: false,
      },
    ],

    steps: [
      {
        title: 'Gratis rådgivningsmöte',
        description: 'Vi lär känna din verksamhet och förklarar vad vi kan göra för dig — utan kostnad.',
      },
      {
        title: 'Avtal och onboarding',
        description: 'Enkelt digitalt avtal. Vi tar över dina underlag och sätter upp ditt system.',
      },
      {
        title: 'Löpande ekonomi',
        description: 'Vi sköter allt enligt plan. Du får rapporter och svar på frågor löpande.',
      },
      {
        title: 'Alltid uppdaterad',
        description: 'Kvartalsmöten och årsgenomgång — du vet alltid var ditt bolag befinner sig.',
      },
    ],

    cases: [
      {
        title: 'Nystartat aktiebolag — rätt från dag ett',
        problem: 'Nytt bolag med snabb tillväxt men kaotisk bokföring och missade momsperioder.',
        solution: 'Retroaktiv genomgång, ny struktur och digitalt system. Alla bakåtskatter korrigerade.',
        result: 'Bolagets ekonomi i ordning på 6 veckor. Skatteverket nöjda, ägaren nöjd.',
      },
      {
        title: 'Lyckad due diligence inför bolagsförsäljning',
        problem: 'Ägare ville sälja bolaget men räkenskaperna var inte i investeringsskick.',
        solution: 'Komplett genomgång och upprättning av tre års redovisning, nytt räkenskapssystem.',
        result: 'Bolaget såldes till begärt pris. Köparen imponerad av ordningen.',
      },
      {
        title: 'Löneadministration för 25 anställda',
        problem: 'Snabbväxande bolag med manuell lönekörning och upprepande fel.',
        solution: 'Digital löneadministration med automatiska utbetalningar och rapporter.',
        result: 'Noll lönefel sedan driftsstart. HR-chefen frigjorde 6 timmar per månad.',
      },
    ],

    testimonials: [
      {
        name: 'Sofia E.',
        role: 'Grundare',
        company: 'Kreativ Studio AB',
        text: 'Äntligen en redovisare som svarar inom en dag och förklarar saker på ett sätt jag förstår. Har aldrig känt mig tryggare med ekonomin.',
        rating: 5,
      },
      {
        name: 'Mikael N.',
        role: 'VD',
        company: 'Teknikbolaget Nord AB',
        text: 'Hjälpte oss igenom en due diligence utan en enda hicka. Professionella, proaktiva och alltid tillgängliga. Kan inte rekommendera dem nog.',
        rating: 5,
      },
      {
        name: 'Kristina H.',
        role: 'Egenföretagare',
        company: 'KH Konsult',
        text: 'Bytte till Balans för ett år sedan. Sen dess slipper jag oroa mig för bokföringen helt. Det är värt varje krona.',
        rating: 5,
      },
    ],

    faq: [
      {
        question: 'Arbetar ni digitalt?',
        answer: 'Ja, vi arbetar med ledande digitala bokföringsprogram som Fortnox och Visma. Alla underlag hanteras digitalt — inga pärmar och inget papper som behöver postas.',
      },
      {
        question: 'Kan ni ta över från en annan redovisare?',
        answer: 'Ja, det är vanligt. Vi koordinerar övergången och ser till att inget faller mellan stolarna. Du behöver inte hantera det själv.',
      },
      {
        question: 'Vad ingår i fasta månadsavgiften?',
        answer: 'Löpande bokföring, deklarationer och personlig rådgivning ingår i alla paket. Vi specificerar exakt vad som ingår i ditt avtal.',
      },
      {
        question: 'Hur snabbt svarar ni på frågor?',
        answer: 'Vi garanterar svar på mail och samtal inom en arbetsdag. De flesta frågor besvarar vi samma dag.',
      },
      {
        question: 'Vad händer under semesterperioder?',
        answer: 'Vi har alltid täckning för löpande arbete och deadlines. Din redovisning stannar aldrig av.',
      },
    ],

    showPricing: true,
    showCases: true,
    showLogoStrip: false,
  },
};
