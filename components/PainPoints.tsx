import type { SiteConfig } from '@/types/site';

interface Props {
  config: SiteConfig;
}

export function PainPoints({ config }: Props) {
  if (!config.painPoints.length) return null;

  return (
    <section aria-labelledby="pain-points-heading" className="py-20 bg-white" id="pain-points">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            id="pain-points-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--color-secondary)' }}
          >
            Sound Familiar?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            We understand the frustrations homeowners and businesses face. Here's what makes us different.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.painPoints.map((point) => (
            <div
              key={point.title}
              className="p-8 border border-gray-100 hover:shadow-card-hover transition-shadow duration-300 bg-white"
              style={{
                borderRadius: 'var(--theme-card-radius)',
                boxShadow: 'var(--theme-card-shadow)',
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 bg-primary-soft"
                aria-hidden="true"
              >
                {point.icon}
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: 'var(--color-secondary)' }}
              >
                {point.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
