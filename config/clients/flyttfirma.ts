import type { ClientEntry } from '@/config/clients/index';

export const flyttfirma: ClientEntry = {
  id: 'flyttfirma',
  label: 'Smidig Flytt AB',
  config: {
    companyName: 'Smidig Flytt AB',
    logo: '/logo.svg',
    contactEmail: 'info@smidigflytt.se',
    phone: '010-567 89 01',

    primaryColor: '#10B981',
    secondaryColor: '#1E293B',
    accentColor: '#F59E0B',
    fontFamily: 'Inter',

    headline: 'Stressfri flytt från start till mål — vi tar hand om allt medan du fokuserar framåt.',
    subheadline:
      'Professionell och försäkrad flytthjälp för privatpersoner och företag. Fast pris, punktliga flyttare och inga dolda avgifter.',
    heroImage: '/images/hero.jpg',
    ctaPrimary: 'Få fast pris direkt',
    ctaSecondary: 'Se vad som ingår',

    trustBadges: [
      'Ansvarsförsäkring 5 mkr',
      'Fast pris — alltid',
      'Erfarna och prickfria flyttare',
      'Företags- och privatkunder',
      'Hela Sverige',
    ],

    logoStrip: [],

    painPoints: [
      {
        title: 'Rädd för att skada möbler eller väggar?',
        description:
          'Våra flyttare är tränade och utrustade med rätt material. Vi täcker golv, trappor och dörrkarmar — och är fullt försäkrade om något ändå händer.',
        icon: '📦',
      },
      {
        title: 'Flyttfirmor som ändrar priset på dagen?',
        description:
          'Vi lämnar fast pris i skriftligt avtal. Du vet exakt vad du betalar — oavsett hur lång tid det tar.',
        icon: '💰',
      },
      {
        title: 'Inte tillräckligt med folk och rätt utrustning?',
        description:
          'Tunga lyft kräver rätt teknik och teamwork. Vi har proffs, hissar och dragkärror för alla typer av uppdrag.',
        icon: '💪',
      },
    ],

    offers: [
      {
        name: 'Liten flytt',
        priceText: 'Från 3 500 kr',
        bullets: [
          '2 flyttare i 4 timmar',
          'Flytt av 1-2 rum',
          'Skyddsutrustning för golv och trappor',
          'Inom samma stad',
        ],
        highlight: false,
      },
      {
        name: 'Hemflytt Total',
        priceText: 'Fast pris — offert',
        bullets: [
          '3–4 erfarna flyttare',
          'Packning och uppackning tillval',
          'Nedmontering och montering av möbler',
          'Skyddsmaterial ingår',
          'Försäkrad transport',
        ],
        highlight: true,
      },
      {
        name: 'Företagsflytt',
        priceText: 'Offert på begäran',
        bullets: [
          'Kontors- och lagerflytt',
          'Flytt utanför kontorstid',
          'IT-utrustning hanteras varsamt',
          'Möblering på ny adress',
          'Projektledare ingår',
        ],
        highlight: false,
      },
    ],

    steps: [
      {
        title: 'Boka offert',
        description: 'Berätta om din flytt — vi ger fast pris direkt, utan hembesök om du inte vill.',
      },
      {
        title: 'Bekräftelse och planering',
        description: 'Du får bekräftelse med datum, tidsfönster och lista på vad som ingår.',
      },
      {
        title: 'Flytten genomförs',
        description: 'Punktliga och vänliga flyttare tar hand om allt. Du behöver bara peka.',
      },
      {
        title: 'Klart och kvitterat',
        description: 'Vi ser till att allt är på plats. Du checkar av och signerar — inget mer att oroa sig för.',
      },
    ],

    cases: [
      {
        title: 'Kontorsflytt för 60 anställda',
        problem: 'Tech-bolag skulle flytta kontor under en helg utan att påverka måndagens arbetsdag.',
        solution: 'Team på 8 flyttare under lördag–söndag, IT-utrustning pakad och märkt noggrant.',
        result: 'Hela flytten klar söndagskväll. Alla anställda satte sig vid sina skrivbord måndag morgon.',
      },
      {
        title: 'Seniorflyttning med känsliga antikviteter',
        problem: 'Äldre dam med dyrbara möbler och konst skulle flytta till serviceboende.',
        solution: 'Specialemballage, vitesklausul i avtalet och extra försiktig hantering.',
        result: 'Inget skadat. Kunden gav oss 5 stjärnor och lät oss hjälpa dottern med sin flytt.',
      },
      {
        title: 'Expressflytt med 3 dagars varsel',
        problem: 'Familj fick tillträde till ny bostad med kort varsel och dubbla bokningar.',
        solution: 'Vi omorganiserade schemat och genomförde flytten på utsatt dag.',
        result: 'Familjen hann flytta in i tid. Nöjd kund som nu rekommenderat oss till fem vänner.',
      },
    ],

    testimonials: [
      {
        name: 'Camilla R.',
        role: 'Privatperson',
        company: 'Solna',
        text: 'Den smidigaste flytten jag någonsin gjort. Punktliga, glada och otroligt effektiva. Priset var fast och stämde på kronan.',
        rating: 5,
      },
      {
        name: 'Andreas B.',
        role: 'Office Manager',
        company: 'Nordtech Solutions AB',
        text: 'Vår kontorsflytt gick som smort tack vare Smidig Flytt. Allt på plats måndag morgon och inte ett repat bord.',
        rating: 5,
      },
      {
        name: 'Ulla F.',
        role: 'Privatperson',
        company: 'Djursholm',
        text: 'Hanterade mina gamla möbler med sådan omsorg. Kände mig trygg från första stund. Rekommenderar dem till alla.',
        rating: 5,
      },
    ],

    faq: [
      {
        question: 'Är ni försäkrade om något går sönder?',
        answer: 'Ja, vi har en ansvarsförsäkring upp till 5 miljoner kronor. Om något mot förmodan skadas ersätter vi det.',
      },
      {
        question: 'Kan ni hjälpa till med packning?',
        answer: 'Ja, vi erbjuder packningshjälp som tillägg. Vi tar med allt material och packar effektivt och säkert.',
      },
      {
        question: 'Hur beräknar ni priset?',
        answer: 'Vi lämnar fast pris baserat på volym, avstånd och eventuella tilläggstjänster. Du betalar aldrig mer än offerten.',
      },
      {
        question: 'Hur långt i förväg ska jag boka?',
        answer: 'Vi rekommenderar 2–4 veckor för en normalflytt. Vi kan i mån av plats ta kortare varsel — hör av dig så kollar vi.',
      },
    ],

    showPricing: true,
    showCases: true,
    showLogoStrip: false,
  },
};
