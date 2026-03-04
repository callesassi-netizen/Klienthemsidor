import type { SiteConfig } from '@/types/site';

interface Props {
  config: SiteConfig;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? 'text-yellow-400' : 'text-gray-200'}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function Testimonials({ config }: Props) {
  if (!config.testimonials.length) return null;

  return (
    <section aria-labelledby="testimonials-heading" className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--color-secondary)' }}
          >
            Vad Våra Kunder Säger
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Ta inte bara vårt ord för det — hör från dem som upplevt vår service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-gray-50 p-8 border border-gray-100 hover:shadow-card-hover transition-shadow duration-300 flex flex-col"
              style={{
                borderRadius: 'var(--theme-card-radius)',
                boxShadow: 'var(--theme-card-shadow)',
              }}
            >
              <StarRating rating={t.rating} />

              <blockquote className="mt-4 mb-6 text-gray-700 leading-relaxed italic flex-grow">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-3 not-italic">
                {/* Avatar initials */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p
                    className="font-semibold text-sm"
                    style={{ color: 'var(--color-secondary)' }}
                  >
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {t.role} &middot; {t.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
