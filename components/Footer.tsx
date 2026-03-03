import type { SiteConfig } from '@/types/site';

interface Props {
  config: SiteConfig;
}

export function Footer({ config }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 border-t"
      style={{ backgroundColor: 'var(--color-secondary)', borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand + contact */}
          <div>
            <p className="text-white font-bold text-lg">{config.companyName}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
              <a
                href={`mailto:${config.contactEmail}`}
                className="text-white/50 hover:text-white text-sm transition-colors duration-200"
              >
                {config.contactEmail}
              </a>
              <a
                href={`tel:${config.phone}`}
                className="text-white/50 hover:text-white text-sm transition-colors duration-200"
              >
                {config.phone}
              </a>
            </div>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl text-white font-semibold text-sm transition-opacity duration-200 hover:opacity-90 flex-shrink-0"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            {config.ctaPrimary}
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-white/30 text-xs">
            &copy; {year} {config.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
