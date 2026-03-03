// ---------------------------------------------------------------------------
// Theme registry — visual design tokens per client.
// Add a clientId entry to give a client a distinct industry look.
// Falls back to `defaultTheme` for unregistered IDs.
// ---------------------------------------------------------------------------

export interface ThemeTokens {
  /** Google Fonts family name injected as --font-heading (applied to h1/h2 via globals.css) */
  fontHeading: string;
  /** CSS gradient or color for the hero section background (visible when no hero image) */
  heroBg: string;
  /** CSS rgba() color for the overlay on top of the hero image */
  heroOverlay: string;
  /** CSS border-radius for all CTA buttons */
  btnRadius: string;
  /** CSS border-radius for all cards */
  cardRadius: string;
  /** CSS box-shadow for cards (base state; hover uses Tailwind shadow-card-hover) */
  cardShadow: string;
  /** Background for alternating sections: Offers, Cases */
  sectionAlt: string;
  /** Trust bar section background */
  trustBarBg: string;
  /** Trust bar text color */
  trustBarColor: string;
}

// ---------------------------------------------------------------------------
// Individual theme definitions
// ---------------------------------------------------------------------------

const themes: Record<string, ThemeTokens> = {

  // ── Hantverk group: sturdy, bold, practical ───────────────────────────────
  // Sharp corners, heavy overlays, dark trust bars, industrial gradients.
  // Heading font: Barlow Condensed — bold, condensed, commanding.

  'sparks-elitel': {
    fontHeading:   'Barlow Condensed',
    heroBg:        'linear-gradient(160deg, #1a1200 0%, #1f1700 50%, #2d2000 100%)',
    heroOverlay:   'rgba(0,0,0,0.62)',
    btnRadius:     '0.25rem',
    cardRadius:    '0.5rem',
    cardShadow:    '0 1px 3px 0 rgb(0 0 0 / 0.10), 0 2px 8px 0 rgb(0 0 0 / 0.06)',
    sectionAlt:    '#fffbeb',
    trustBarBg:    '#18130a',
    trustBarColor: '#fef3c7',
  },

  elektriker: {
    fontHeading:   'Barlow Condensed',
    heroBg:        'linear-gradient(160deg, #1a1200 0%, #1f1700 50%, #2d2000 100%)',
    heroOverlay:   'rgba(0,0,0,0.58)',  // Mörk elbild — blandade ljusnivåer
    btnRadius:     '0.25rem',
    cardRadius:    '0.5rem',
    cardShadow:    '0 1px 3px 0 rgb(0 0 0 / 0.10), 0 2px 8px 0 rgb(0 0 0 / 0.06)',
    sectionAlt:    '#fffbeb',
    trustBarBg:    '#18130a',
    trustBarColor: '#fef3c7',
  },

  rormokare: {
    fontHeading:   'Barlow Condensed',
    heroBg:        'linear-gradient(160deg, #0c1a2e 0%, #0f2744 50%, #071220 100%)',
    heroOverlay:   'rgba(0,0,0,0.68)',  // Ljus bild — vita kakel och varmvattenberedare
    btnRadius:     '0.25rem',
    cardRadius:    '0.5rem',
    cardShadow:    '0 1px 3px 0 rgb(0 0 0 / 0.10), 0 2px 8px 0 rgb(0 0 0 / 0.06)',
    sectionAlt:    '#f0f9ff',
    trustBarBg:    '#0c1a2e',
    trustBarColor: '#e0f2fe',
  },

  byggfirma: {
    fontHeading:   'Barlow Condensed',
    heroBg:        'linear-gradient(160deg, #18181b 0%, #27272a 50%, #18181b 100%)',
    heroOverlay:   'rgba(0,0,0,0.60)',  // Medelmörk bild — träarbete i varma toner
    btnRadius:     '0.25rem',
    cardRadius:    '0.5rem',
    cardShadow:    '0 1px 3px 0 rgb(0 0 0 / 0.10), 0 2px 8px 0 rgb(0 0 0 / 0.06)',
    sectionAlt:    '#fafaf9',
    trustBarBg:    '#18181b',
    trustBarColor: '#fafafa',
  },

  taklaggare: {
    fontHeading:   'Barlow Condensed',
    heroBg:        'linear-gradient(160deg, #1a0a0a 0%, #2d1515 50%, #1a0a0a 100%)',
    heroOverlay:   'rgba(0,0,0,0.55)',  // Medelmörk utomhusbild — takpannor
    btnRadius:     '0.25rem',
    cardRadius:    '0.5rem',
    cardShadow:    '0 1px 3px 0 rgb(0 0 0 / 0.10), 0 2px 8px 0 rgb(0 0 0 / 0.06)',
    sectionAlt:    '#fff5f5',
    trustBarBg:    '#1a0a0a',
    trustBarColor: '#fee2e2',
  },

  // ── Flytt/Städ group: clean, light, airy ─────────────────────────────────
  // Very rounded corners, feather-light shadows, light-tinted trust bars.
  // Heading font: DM Sans — clean, contemporary, friendly.

  flyttfirma: {
    fontHeading:   'DM Sans',
    heroBg:        'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
    heroOverlay:   'rgba(0,0,0,0.74)',  // Mycket ljus bild — beige rum med kartonger
    btnRadius:     '1.75rem',
    cardRadius:    '1.25rem',
    cardShadow:    '0 1px 2px 0 rgb(0 0 0 / 0.04), 0 4px 16px 0 rgb(0 0 0 / 0.04)',
    sectionAlt:    '#f0fdf4',
    trustBarBg:    '#f0fdf4',
    trustBarColor: '#14532d',
  },

  stadservice: {
    fontHeading:   'DM Sans',
    heroBg:        'linear-gradient(135deg, #164e63 0%, #155e75 50%, #0e7490 100%)',
    heroOverlay:   'rgba(0,0,0,0.72)',  // Extremt ljus bild — vita kakel, vitt handfat
    btnRadius:     '1.75rem',
    cardRadius:    '1.25rem',
    cardShadow:    '0 1px 2px 0 rgb(0 0 0 / 0.04), 0 4px 16px 0 rgb(0 0 0 / 0.04)',
    sectionAlt:    '#ecfeff',
    trustBarBg:    '#ecfeff',
    trustBarColor: '#164e63',
  },

  // ── Frisör / Beauty: premium, elegant ────────────────────────────────────
  // Pill buttons, flat editorial cards (no base shadow), warm dark trust bar.
  // Heading font: Playfair Display — classic serif, premium, editorial.

  frisorsalong: {
    fontHeading:   'Playfair Display',
    heroBg:        'linear-gradient(145deg, #18181b 0%, #27141e 50%, #1c1017 100%)',
    heroOverlay:   'rgba(15,5,12,0.70)',  // Ljus rosa bakgrund — behöver tät mauve-tonad overlay
    btnRadius:     '9999px',
    cardRadius:    '0rem',
    cardShadow:    'none',
    sectionAlt:    '#fdf4f8',
    trustBarBg:    '#18181b',
    trustBarColor: '#fce7f3',
  },

  'beauty-salon': {
    fontHeading:   'Playfair Display',
    heroBg:        'linear-gradient(145deg, #18181b 0%, #27141e 50%, #1c1017 100%)',
    heroOverlay:   'rgba(0,0,0,0.55)',
    btnRadius:     '9999px',
    cardRadius:    '0rem',
    cardShadow:    'none',
    sectionAlt:    '#fdf4f8',
    trustBarBg:    '#18181b',
    trustBarColor: '#fce7f3',
  },

  // ── Salong Aura: premium muted-mauve, editorial serif ─────────────────────
  // Pill buttons, flat editorial cards, warm champagne trust bar.
  // Heading font: Playfair Display — classic serif, premium, editorial.

  'salong-aura': {
    fontHeading:   'Playfair Display',
    heroBg:        'linear-gradient(145deg, #1c1018 0%, #2d1a27 50%, #1a0f1c 100%)',
    heroOverlay:   'rgba(20,8,16,0.74)',  // Mycket ljus salong-bild — tät mauve overlay
    btnRadius:     '9999px',
    cardRadius:    '0rem',
    cardShadow:    'none',
    sectionAlt:    '#fdf6f9',
    trustBarBg:    '#1c1018',
    trustBarColor: '#f3d8e8',
  },

  // ── Bilverkstad: technical, industrial ───────────────────────────────────
  // Sharpest corners (almost no radius), heaviest overlay, near-black trust bar.
  // Heading font: Barlow Condensed — same as hantverk but even more extreme.

  bilverkstad: {
    fontHeading:   'Barlow Condensed',
    heroBg:        'linear-gradient(160deg, #0a0a0a 0%, #1a1a1a 50%, #111111 100%)',
    heroOverlay:   'rgba(0,0,0,0.62)',  // Medelmörk verkstadsbild — dämpat ljus
    btnRadius:     '0.125rem',
    cardRadius:    '0.25rem',
    cardShadow:    '0 2px 4px 0 rgb(0 0 0 / 0.15), 0 4px 16px 0 rgb(0 0 0 / 0.10)',
    sectionAlt:    '#f3f4f6',
    trustBarBg:    '#0a0a0a',
    trustBarColor: '#f9fafb',
  },

  // ── Redovisning: corporate, calm, minimal ────────────────────────────────
  // Moderate corners, clean shadows, light corporate trust bar.
  // Heading font: DM Serif Display — trustworthy, authoritative, professional.

  redovisningsbyra: {
    fontHeading:   'DM Serif Display',
    heroBg:        'linear-gradient(160deg, #1e1b4b 0%, #1e3a5f 50%, #0f172a 100%)',
    heroOverlay:   'rgba(8,6,24,0.64)',  // Medelljus kontorsbild — navy-tonad overlay
    btnRadius:     '0.5rem',
    cardRadius:    '0.75rem',
    cardShadow:    '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 4px 12px 0 rgb(0 0 0 / 0.04)',
    sectionAlt:    '#f8fafc',
    trustBarBg:    '#f8fafc',
    trustBarColor: '#1e293b',
  },

  // ── Marknadsföring: modern, energetic ────────────────────────────────────
  // Elevated shadows, generous radius, bold gradient hero, vibrant trust bar.
  // Heading font: Plus Jakarta Sans — contemporary, energetic, distinct.

  marknadsforingskonsult: {
    fontHeading:   'Plus Jakarta Sans',
    heroBg:        'linear-gradient(135deg, #2e1065 0%, #4c1d95 50%, #3b0764 100%)',
    heroOverlay:   'rgba(15,4,28,0.64)',  // Medelljus kontorsmöte — lila-tonad overlay
    btnRadius:     '0.875rem',
    cardRadius:    '1rem',
    cardShadow:    '0 4px 16px 0 rgb(0 0 0 / 0.08), 0 1px 4px 0 rgb(0 0 0 / 0.04)',
    sectionAlt:    '#faf5ff',
    trustBarBg:    '#2e1065',
    trustBarColor: '#e9d5ff',
  },

  'marketing-consultant': {
    fontHeading:   'Plus Jakarta Sans',
    heroBg:        'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1a1740 100%)',
    heroOverlay:   'rgba(0,0,0,0.45)',
    btnRadius:     '0.875rem',
    cardRadius:    '1rem',
    cardShadow:    '0 4px 16px 0 rgb(0 0 0 / 0.08), 0 1px 4px 0 rgb(0 0 0 / 0.04)',
    sectionAlt:    '#f5f3ff',
    trustBarBg:    '#1e1b4b',
    trustBarColor: '#e0e7ff',
  },
};

// ---------------------------------------------------------------------------
// Fallback theme for unregistered client IDs
// ---------------------------------------------------------------------------

export const defaultTheme: ThemeTokens = {
  fontHeading:   'system-ui',
  heroBg:        '#111827',
  heroOverlay:   'rgba(0,0,0,0.55)',
  btnRadius:     '0.75rem',
  cardRadius:    '1rem',
  cardShadow:    '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 4px 16px 0 rgb(0 0 0 / 0.06)',
  sectionAlt:    '#f9fafb',
  trustBarBg:    '#f9fafb',
  trustBarColor: '#374151',
};

export const themesById: Record<string, ThemeTokens> = themes;
