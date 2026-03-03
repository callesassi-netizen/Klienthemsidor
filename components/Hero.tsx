import type { SiteConfig } from '@/types/site';

interface Props {
  config: SiteConfig;
}

// Hero is a Server Component — no JS needed for static layout.
// Sticky mobile CTA is pure CSS fixed positioning.
export function Hero({ config }: Props) {
  return (
    <>
      <section
        aria-labelledby="hero-heading"
        className="relative min-h-[88vh] flex items-center pt-20 pb-16"
        style={{ background: 'var(--theme-hero-bg)' }}
      >
        {/* Hero background image with themed overlay */}
        {config.heroImage && (
          <>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${config.heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div
              className="absolute inset-0"
              style={{ background: 'var(--theme-hero-overlay)' }}
            />
          </>
        )}

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-6"
            >
              {config.headline}
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
              {config.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 text-white font-semibold text-lg text-center transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  borderRadius: 'var(--theme-btn-radius)',
                }}
              >
                {config.ctaPrimary}
              </a>
              <a
                href="#services"
                className="px-8 py-4 font-semibold text-lg border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-200 text-center"
                style={{ borderRadius: 'var(--theme-btn-radius)' }}
              >
                {config.ctaSecondary}
              </a>
            </div>

            {/* Social proof micro-copy */}
            {config.trustBadges.length > 0 && (
              <p className="mt-8 text-white/50 text-sm">
                {config.trustBadges.slice(0, 2).join(' · ')}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA — fixed to bottom, hidden on md+ (desktop has header CTA) */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden px-4 pb-4 pt-3 bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-lg"
        aria-hidden="false"
      >
        <a
          href="#contact"
          className="flex items-center justify-center w-full py-3.5 text-white font-semibold text-base transition-opacity duration-200 hover:opacity-90"
          style={{
            backgroundColor: 'var(--color-primary)',
            borderRadius: 'var(--theme-btn-radius)',
          }}
        >
          {config.ctaPrimary} →
        </a>
      </div>
    </>
  );
}
