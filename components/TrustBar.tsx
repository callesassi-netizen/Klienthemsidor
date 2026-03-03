import type { SiteConfig } from '@/types/site';

interface Props {
  config: SiteConfig;
}

export function TrustBar({ config }: Props) {
  const hasBadges = config.trustBadges.length > 0;
  const hasLogos = config.showLogoStrip && config.logoStrip.length > 0;

  if (!hasBadges && !hasLogos) return null;

  return (
    <section
      aria-label="Trust indicators"
      className="border-y border-gray-100 py-6"
      style={{ backgroundColor: 'var(--theme-trust-bar-bg)' }}
    >
      <div className="container mx-auto px-4">
        {hasBadges && (
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3" role="list">
            {config.trustBadges.map((badge) => (
              <li key={badge} className="flex items-center gap-2">
                <span
                  className="text-sm font-bold leading-none"
                  style={{ color: 'var(--color-primary)' }}
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span
                  className="text-sm font-medium"
                  style={{ color: 'var(--theme-trust-bar-color)' }}
                >
                  {badge}
                </span>
              </li>
            ))}
          </ul>
        )}

        {hasLogos && (
          <div className="mt-6">
            <p
              className="text-xs uppercase tracking-widest text-center mb-4 opacity-50"
              style={{ color: 'var(--theme-trust-bar-color)' }}
            >
              As seen in
            </p>
            <ul
              className="flex flex-wrap justify-center items-center gap-8"
              role="list"
            >
              {config.logoStrip.map((logo) => (
                <li key={logo.name}>
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-8 w-auto grayscale opacity-50 hover:opacity-80 hover:grayscale-0 transition-all duration-300"
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
