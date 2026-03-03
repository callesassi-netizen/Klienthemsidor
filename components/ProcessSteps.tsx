import type { SiteConfig } from '@/types/site';

interface Props {
  config: SiteConfig;
}

export function ProcessSteps({ config }: Props) {
  if (!config.steps.length) return null;

  return (
    <section aria-labelledby="process-heading" className="py-20 bg-white" id="process">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2
            id="process-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--color-secondary)' }}
          >
            How It Works
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Getting started is simple. Here's what to expect.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connector line visible on desktop */}
          <div
            className="hidden md:block absolute top-8 h-0.5 bg-gray-100 z-0"
            style={{
              left: 'calc(12.5% + 2rem)',
              right: 'calc(12.5% + 2rem)',
            }}
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {config.steps.map((step, i) => (
              <li key={step.title} className="flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 relative z-10 shadow-md flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                  aria-label={`Step ${i + 1}`}
                >
                  {i + 1}
                </div>
                <h3
                  className="font-semibold text-lg mb-2"
                  style={{ color: 'var(--color-secondary)' }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA after process */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold text-lg transition-opacity duration-200 hover:opacity-90"
            style={{
              backgroundColor: 'var(--color-primary)',
              borderRadius: 'var(--theme-btn-radius)',
            }}
          >
            Get Started Today →
          </a>
        </div>
      </div>
    </section>
  );
}
