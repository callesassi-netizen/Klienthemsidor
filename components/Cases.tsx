import type { SiteConfig } from '@/types/site';

interface Props {
  config: SiteConfig;
}

export function Cases({ config }: Props) {
  if (!config.cases.length) return null;

  return (
    <section
      aria-labelledby="cases-heading"
      className="py-20"
      id="cases"
      style={{ background: 'var(--theme-section-alt)' }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            id="cases-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--color-secondary)' }}
          >
            Real Results for Real Clients
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            See how we've delivered measurable outcomes for businesses and homeowners like you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.cases.map((c) => (
            <article
              key={c.title}
              className="bg-white overflow-hidden border border-gray-100 hover:shadow-card-hover transition-shadow duration-300"
              style={{
                borderRadius: 'var(--theme-card-radius)',
                boxShadow: 'var(--theme-card-shadow)',
              }}
            >
              {/* Accent stripe */}
              <div className="h-1.5" style={{ backgroundColor: 'var(--color-primary)' }} />

              <div className="p-8 space-y-5">
                <h3
                  className="font-bold text-lg leading-snug"
                  style={{ color: 'var(--color-secondary)' }}
                >
                  {c.title}
                </h3>

                <div className="space-y-4 text-sm">
                  <div>
                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-red-500 mb-1">
                      Problem
                    </span>
                    <p className="text-gray-600 leading-relaxed">{c.problem}</p>
                  </div>

                  <div>
                    <span
                      className="inline-block text-xs font-bold uppercase tracking-wider mb-1"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      Solution
                    </span>
                    <p className="text-gray-600 leading-relaxed">{c.solution}</p>
                  </div>

                  <div>
                    <span
                      className="inline-block text-xs font-bold uppercase tracking-wider mb-1"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      Result
                    </span>
                    <p className="text-gray-700 font-medium leading-relaxed">{c.result}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
