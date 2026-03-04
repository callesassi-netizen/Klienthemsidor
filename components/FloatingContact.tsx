import type { SiteConfig } from '@/types/site';

interface Props {
  config: SiteConfig;
}

export function FloatingContact({ config }: Props) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-20"
        style={{ backgroundColor: 'var(--color-primary)' }}
        aria-hidden="true"
      />
      <a
        href="#contact"
        aria-label={`Kontakta ${config.companyName}`}
        title="Kontakta oss"
        className="relative flex items-center justify-center w-14 h-14 rounded-full text-white shadow-lg hover:scale-110 transition-transform duration-200"
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      </a>
    </div>
  );
}
