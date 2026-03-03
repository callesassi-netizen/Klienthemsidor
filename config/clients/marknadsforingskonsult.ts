import type { ClientEntry } from '@/config/clients/index';

export const marknadsforingskonsult: ClientEntry = {
  id: 'marknadsforingskonsult',
  label: 'Tillväxt & Räckvidd AB',
  config: {
    companyName: 'Tillväxt & Räckvidd AB',
    logo: '/logo.svg',
    contactEmail: 'hej@tillvaxtochräckvidd.se',
    phone: '08-890 12 34',

    primaryColor: '#7C3AED',
    secondaryColor: '#0F172A',
    accentColor: '#F59E0B',
    fontFamily: 'Poppins',

    headline: 'Sluta gissa, börja växa — digital marknadsföring som genererar riktiga kunder.',
    subheadline:
      'Vi hjälper svenska tjänsteföretag att synas på rätt ställen, attrahera rätt kunder och skala sin tillväxt med beprövade digitala strategier.',
    heroImage: '/images/hero.jpg',
    ctaPrimary: 'Boka gratis strategisamtal',
    ctaSecondary: 'Se våra case',

    trustBadges: [
      '150+ växande kunder',
      'Genomsnittlig ROI 4,1x',
      'Google Partner',
      'Inga bindningstider',
      'Resultat inom 60 dagar',
    ],

    logoStrip: [],

    painPoints: [
      {
        title: 'Lägger pengar på annonsering utan att veta om det lönar sig?',
        description:
          'Vi börjar med att granska din nuvarande marknadsföring och visar exakt var pengarna läcker — innan vi investerar en krona mer.',
        icon: '📉',
      },
      {
        title: 'Ingen tid att hinna med marknadsföringen?',
        description:
          'Vi sköter allt — strategi, annonsering, innehåll och analys. Du ser resultaten i en rapport, vi tar hand om jobbet.',
        icon: '⏰',
      },
      {
        title: 'Syns inte på Google trots att ni är bäst i branschen?',
        description:
          'Synlighet är inte slumpmässig — det är ett hantverk. Vi positionerar dig där dina kunder faktiskt söker.',
        icon: '🎯',
      },
    ],

    offers: [
      {
        name: 'Tillväxtanalys',
        priceText: '4 500 kr',
        bullets: [
          'Genomgång av befintlig marknadsföring',
          'Konkurrentanalys',
          'Identifiering av de tre snabbaste vinsterna',
          'Konkret 30-dagars handlingsplan',
        ],
        highlight: false,
      },
      {
        name: 'Helhetspartner',
        priceText: 'Från 14 900 kr/mån',
        bullets: [
          'Allt i Tillväxtanalys',
          'Betald annonsering (Google & Meta)',
          'Landningssideoptimering',
          'Månadsvis rapportering och möte',
          'Dedikerad strateg',
        ],
        highlight: true,
      },
      {
        name: 'SEO & Innehåll',
        priceText: 'Från 7 900 kr/mån',
        bullets: [
          'Sökordsanalys och strategi',
          'Teknisk SEO-optimering',
          'Innehållsproduktion på svenska',
          'Lokal SEO vid behov',
          'Månadsvis rankingrapport',
        ],
        highlight: false,
      },
    ],

    steps: [
      {
        title: 'Gratis strategisamtal',
        description: '30 minuter där vi analyserar din situation och delar de viktigaste insikterna — utan förpliktelse.',
      },
      {
        title: 'Tillväxtplan',
        description: 'Vi tar fram en skräddarsydd strategi baserad på din marknad, dina mål och din budget.',
      },
      {
        title: 'Vi kör igång',
        description: 'Kampanjer, innehåll och optimering — du håller koll via ett live-dashboard med realtidsdata.',
      },
      {
        title: 'Mät, lär, skala',
        description: 'Varje månad går vi igenom resultaten och skruvar för att maximera avkastningen.',
      },
    ],

    cases: [
      {
        title: 'Advokatbyrå — 3x fler kvalificerade leads',
        problem: 'Investerade 40 000 kr/mån på Google Ads med en konverteringsgrad på 0,9 %.',
        solution: 'Ny kampanjstruktur, omskriven annonstext och ny landningssida med tydlig CTA.',
        result: 'Konverteringsgraden ökade till 3,4 % på 45 dagar. Kostnad per lead halverades.',
      },
      {
        title: 'Hantverksbolag — från osynlig till marknadsledande lokalt',
        problem: 'Välrenommerat bolag med noll synlighet på Google trots 12 år i branschen.',
        solution: 'Lokal SEO, Google Business-optimering och recensionskampanj.',
        result: 'Topp 3 på 14 lokala sökord. 180 % fler inkommande samtal på 5 månader.',
      },
      {
        title: 'SaaS-bolag — första 50 betalande kunder',
        problem: 'Nytt produkt utan bevisad efterfråga eller skalbar kundanskaffningskanal.',
        solution: 'LinkedIn outreach, content-maskin och automatiserad e-postnurture.',
        result: '50 betalande kunder på 75 dagar. 920 000 kr ARR etablerat.',
      },
    ],

    testimonials: [
      {
        name: 'Patrik L.',
        role: 'Delägare',
        company: 'Lundberg & Partner Advokater',
        text: 'Vi trodde inte digital marknadsföring passade oss. Tillväxt & Räckvidd bevisade det motsatta — och mer än dubblerade vår lead-volym.',
        rating: 5,
      },
      {
        name: 'Therese V.',
        role: 'Grundare & VD',
        company: 'Vinge SaaS AB',
        text: 'Gick från noll till 50 kunder på drygt två månader. Det är unikt. De levererar det de lovar och pratar aldrig om aktiviteter — bara resultat.',
        rating: 5,
      },
      {
        name: 'Håkan B.',
        role: 'Ägare',
        company: 'Björks Mark & Anläggning',
        text: 'Var skeptisk till att börja med — vad vet konsulter om hantverksbranschen? Men siffrorna ljuger inte. Tre gånger fler offerter på fem månader.',
        rating: 5,
      },
    ],

    faq: [
      {
        question: 'Hur snabbt kan vi förvänta oss resultat?',
        answer: 'Betald annonsering brukar visa mätbara resultat inom 2–4 veckor. SEO och organisk tillväxt tar 3–6 månader att etablera. Vi är transparenta med vad som är realistiskt för just din situation.',
      },
      {
        question: 'Kräver ni bindningstid?',
        answer: 'Nej, vi arbetar utan bindningstid. Vi är övertygade om att vi förtjänar ditt förtroende varje månad — annars ska du inte stanna.',
      },
      {
        question: 'Hur stor budget behöver vi för annonsering?',
        answer: 'Vi rekommenderar minst 10 000–15 000 kr per månad i annonseringsbudget för att se meningsfulla resultat. Vi kan arbeta med lägre budgetar men sätter realistiska förväntningar.',
      },
      {
        question: 'Vad skiljer er från en vanlig reklambyrå?',
        answer: 'Vi mäter allt i intäkter och leads — inte räckvidd och visningar. Varje beslut backas upp av data och du ser i realtid vad din investering genererar.',
      },
      {
        question: 'Kan ni skriva innehåll på svenska?',
        answer: 'Ja, allt innehåll vi producerar skrivs av svenska skribenter med branschkunskap — inga AI-texter utan kvalitetsgranskning.',
      },
    ],

    showPricing: true,
    showCases: true,
    showLogoStrip: false,
  },
};
