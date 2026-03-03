// ---------------------------------------------------------------------------
// Core domain types for the config-driven landing page template.
// All components receive the full SiteConfig and destructure what they need.
// ---------------------------------------------------------------------------

export interface LogoItem {
  /** Display name used as the img alt text */
  name: string;
  /** Absolute or relative path to the logo file */
  src: string;
}

export interface PainPoint {
  title: string;
  description: string;
  /** Emoji or icon identifier rendered as decorative text */
  icon: string;
}

export interface Offer {
  name: string;
  priceText: string;
  bullets: string[];
  /** Renders the "Most Popular" badge and inverted card style */
  highlight: boolean;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface CaseStudy {
  title: string;
  problem: string;
  solution: string;
  result: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  /** 1–5 star rating */
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SiteConfig {
  // ── Identity ──────────────────────────────────────────────────────────────
  companyName: string;
  /** Path to logo image (SVG recommended) */
  logo: string;
  contactEmail: string;
  phone: string;

  // ── Design tokens ─────────────────────────────────────────────────────────
  /** CSS color value (hex / hsl / rgb) injected as --color-primary */
  primaryColor: string;
  /** CSS color value injected as --color-secondary */
  secondaryColor: string;
  /** CSS color value injected as --color-accent */
  accentColor: string;
  /** Google Fonts family name, e.g. "Inter", "Poppins", "Nunito" */
  fontFamily: string;

  // ── Hero ──────────────────────────────────────────────────────────────────
  headline: string;
  subheadline: string;
  heroImage: string;
  ctaPrimary: string;
  ctaSecondary: string;

  // ── Sections ──────────────────────────────────────────────────────────────
  trustBadges: string[];
  logoStrip: LogoItem[];
  painPoints: PainPoint[];
  offers: Offer[];
  steps: ProcessStep[];
  cases: CaseStudy[];
  testimonials: Testimonial[];
  faq: FAQItem[];

  // ── Section visibility toggles ────────────────────────────────────────────
  showPricing: boolean;
  showCases: boolean;
  showLogoStrip: boolean;
}
