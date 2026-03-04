'use client';

import { useState } from 'react';
import type { SiteConfig } from '@/types/site';

interface Props {
  config: SiteConfig;
}

export function FAQ({ config }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!config.faq.length) return null;

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section aria-labelledby="faq-heading" className="py-20 bg-gray-50" id="faq">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--color-secondary)' }}
          >
            Vanliga Frågor
          </h2>
          <p className="text-gray-500 text-lg">
            Allt du behöver veta innan du börjar.
          </p>
        </div>

        <dl className="space-y-3">
          {config.faq.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-btn-${i}`;

            return (
              <div
                key={item.question}
                className="bg-white rounded-xl border border-gray-100 shadow-card overflow-hidden"
              >
                <dt>
                  <button
                    id={buttonId}
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-inset"
                  >
                    <span
                      className="font-semibold text-gray-800 pr-6 leading-snug"
                      style={isOpen ? { color: 'var(--color-primary)' } : {}}
                    >
                      {item.question}
                    </span>
                    <span
                      className={`flex-shrink-0 text-xs transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      style={{ color: 'var(--color-primary)' }}
                      aria-hidden="true"
                    >
                      ▼
                    </span>
                  </button>
                </dt>
                <dd
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                >
                  <div className="px-6 pb-5 pt-1 text-gray-600 leading-relaxed border-t border-gray-50">
                    {item.answer}
                  </div>
                </dd>
              </div>
            );
          })}
        </dl>

        {/* CTA after FAQ */}
        <div className="text-center mt-10">
          <p className="text-gray-500 mb-4">Har du fler frågor?</p>
          <a
            href={`tel:${config.phone}`}
            className="font-semibold hover:opacity-80 transition-opacity"
            style={{ color: 'var(--color-primary)' }}
          >
            Ring oss: {config.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
