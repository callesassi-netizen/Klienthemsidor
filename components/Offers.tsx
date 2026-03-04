import type { SiteConfig } from '@/types/site';

interface Props {
  config: SiteConfig;
}

export function Offers({ config }: Props) {
  if (!config.offers.length) return null;

  return (
    <section
      aria-labelledby="offers-heading"
      className="py-20 relative"
      id="services"
      style={{ background: 'var(--theme-section-alt)' }}
    >
      {/* Fade to white at the bottom for a smooth transition into the next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, white)' }}
        aria-hidden="true"
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            id="offers-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--color-secondary)' }}
          >
            Våra Tjänster &amp; Paket
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Transparent prissättning. Inga dolda avgifter. Välj det paket som passar dig.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {config.offers.map((offer) => (
            <div
              key={offer.name}
              className={`relative p-8 transition-transform duration-300 hover:-translate-y-1 ${
                offer.highlight
                  ? 'text-white shadow-xl md:scale-105'
                  : 'bg-white border border-gray-100'
              }`}
              style={
                offer.highlight
                  ? {
                      backgroundColor: 'var(--color-secondary)',
                      borderRadius: 'var(--theme-card-radius)',
                    }
                  : {
                      borderRadius: 'var(--theme-card-radius)',
                      boxShadow: 'var(--theme-card-shadow)',
                    }
              }
            >
              {/* Most Popular badge */}
              {offer.highlight && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                  aria-label="Most popular option"
                >
                  ★ Mest Populär
                </div>
              )}

              <h3
                className={`text-xl font-bold mb-1 ${offer.highlight ? 'text-white' : ''}`}
                style={!offer.highlight ? { color: 'var(--color-secondary)' } : {}}
              >
                {offer.name}
              </h3>

              <p
                className="text-3xl font-extrabold mb-6"
                style={{ color: 'var(--color-primary)' }}
              >
                {offer.priceText}
              </p>

              <ul className="space-y-3 mb-8" role="list">
                {offer.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className={`flex items-start gap-2 text-sm leading-relaxed ${
                      offer.highlight ? 'text-white/80' : 'text-gray-600'
                    }`}
                  >
                    <span
                      className="mt-0.5 flex-shrink-0 font-bold"
                      style={{ color: 'var(--color-primary)' }}
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full py-3 text-center font-semibold transition-opacity duration-200 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  offer.highlight ? 'text-white' : ''
                }`}
                style={
                  offer.highlight
                    ? {
                        backgroundColor: 'var(--color-primary)',
                        borderRadius: 'var(--theme-btn-radius)',
                      }
                    : {
                        border: '2px solid var(--color-primary)',
                        color: 'var(--color-primary)',
                        borderRadius: 'var(--theme-btn-radius)',
                      }
                }
              >
                Kom igång
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
