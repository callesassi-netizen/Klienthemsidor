// LandingPage is a Server Component that:
//  1. Scopes per-client CSS variables via inline style on the root div
//     (overrides any :root defaults from layout.tsx for all descendant elements)
//  2. Loads the client's body font + industry-specific heading font via <style>@import</style>
//  3. Injects per-client JSON-LD structured data
//  4. Assembles all sections in the correct page order

import type { SiteConfig } from '@/types/site';
import { themesById, defaultTheme } from '@/config/themes';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { PainPoints } from '@/components/PainPoints';
import { Offers } from '@/components/Offers';
import { ProcessSteps } from '@/components/ProcessSteps';
import { Cases } from '@/components/Cases';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { FloatingContact } from '@/components/FloatingContact';

interface Props {
  config: SiteConfig;
  clientId: string;
}

export function LandingPage({ config, clientId }: Props) {
  const theme = themesById[clientId] ?? defaultTheme;

  // ── Per-client CSS variable scope ─────────────────────────────────────────
  // All brand + theme vars are set here and cascade to every descendant element.
  // No JS, no FOUC, fully server-rendered.
  const cssVars = {
    // Brand colors (from SiteConfig)
    '--color-primary':         config.primaryColor,
    '--color-secondary':       config.secondaryColor,
    '--color-accent':          config.accentColor,
    '--font-site':             `'${config.fontFamily}', system-ui, sans-serif`,
    // Industry theme tokens (from themes registry)
    '--font-heading':          `'${theme.fontHeading}', system-ui, sans-serif`,
    '--theme-hero-bg':         theme.heroBg,
    '--theme-hero-overlay':    theme.heroOverlay,
    '--theme-btn-radius':      theme.btnRadius,
    '--theme-card-radius':     theme.cardRadius,
    '--theme-card-shadow':     theme.cardShadow,
    '--theme-section-alt':     theme.sectionAlt,
    '--theme-trust-bar-bg':    theme.trustBarBg,
    '--theme-trust-bar-color': theme.trustBarColor,
  } as React.CSSProperties;

  // ── Google Fonts — load body font + heading font (deduplicated) ────────────
  const bodyFontParam    = config.fontFamily.replace(/\s+/g, '+');
  const headingFontParam = theme.fontHeading.replace(/\s+/g, '+');
  const fontsToLoad      = [...new Set([bodyFontParam, headingFontParam])].filter(
    (f) => !f.startsWith('system')
  );
  const fontImport = fontsToLoad
    .map((f) => `@import url('https://fonts.googleapis.com/css2?family=${f}:wght@400;500;600;700;800;900&display=swap');`)
    .join('\n');

  // ── JSON-LD structured data ────────────────────────────────────────────────
  const jsonLd = {
    '@context':  'https://schema.org',
    '@type':     'LocalBusiness',
    name:        config.companyName,
    telephone:   config.phone,
    email:       config.contactEmail,
    description: config.subheadline,
  };

  return (
    <div style={cssVars}>
      {/* eslint-disable-next-line react/no-danger */}
      <style dangerouslySetInnerHTML={{ __html: fontImport }} />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header config={config} />

      <main id="main-content">
        <Hero config={config} />
        <TrustBar config={config} />
        <PainPoints config={config} />
        {config.showPricing && <Offers config={config} />}
        <ProcessSteps config={config} />
        {config.showCases && <Cases config={config} />}
        <Testimonials config={config} />
        <FAQ config={config} />
        <ContactForm config={config} />
      </main>

      <Footer config={config} />
      <FloatingContact config={config} />
    </div>
  );
}
