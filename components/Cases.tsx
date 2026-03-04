import type { SiteConfig } from '@/types/site';

interface Props {
  config: SiteConfig;
}

export function Cases({ config }: Props) {
  if (!config.cases.length) return null;

  return (
    <section
      aria-labelledby="cases-heading"
      className="py-24 bg-white"
      id="cases"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
            style={{ color: 'var(--color-primary)' }}
          >
            Kundberättelser
          </p>
          <h2
            id="cases-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--color-secondary)' }}
          >
            Verkliga Resultat för Verkliga Kunder
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Se hur vi har levererat mätbara resultat för företag och privatpersoner som du.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.cases.map((c, i) => (
            <article
              key={c.title}
              className="group bg-white rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)' }}
            >
              {/* Case number */}
              <div
                className="text-xs font-bold uppercase tracking-widest mb-5"
                style={{ color: 'var(--color-primary)', opacity: 0.6 }}
                aria-hidden="true"
              >
                Fall {String(i + 1).padStart(2, '0')}
              </div>

              {/* Title */}
              <h3
                className="font-bold text-lg leading-snug mb-8"
                style={{ color: 'var(--color-secondary)' }}
              >
                {c.title}
              </h3>

              {/* Timeline */}
              <div className="flex flex-col gap-0 flex-grow">
                {/* Problem */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" stroke="#9CA3AF" strokeWidth="2"/>
                        <line x1="12" y1="8" x2="12" y2="13" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
                        <circle cx="12" cy="16.5" r="1" fill="#9CA3AF"/>
                      </svg>
                    </div>
                    <div className="w-px flex-1 bg-gray-100 my-2" />
                  </div>
                  <div className="pb-6 min-w-0">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 block mb-1">
                      Problem
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed">{c.problem}</p>
                  </div>
                </div>

                {/* Lösning */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 12%, white)', border: '1.5px solid color-mix(in srgb, var(--color-primary) 25%, white)' }}
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 12h14M14 7l5 5-5 5" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="w-px flex-1 bg-gray-100 my-2" />
                  </div>
                  <div className="pb-6 min-w-0">
                    <span
                      className="text-[10px] font-semibold uppercase tracking-wider block mb-1"
                      style={{ color: 'var(--color-primary)', opacity: 0.7 }}
                    >
                      Lösning
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed">{c.solution}</p>
                  </div>
                </div>

                {/* Resultat */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="min-w-0">
                    <span
                      className="text-[10px] font-semibold uppercase tracking-wider block mb-1"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      Resultat
                    </span>
                    <p
                      className="text-sm font-semibold leading-relaxed"
                      style={{ color: 'var(--color-secondary)' }}
                    >
                      {c.result}
                    </p>
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
