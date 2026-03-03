'use client';

import { useState, useEffect } from 'react';
import type { SiteConfig } from '@/types/site';

interface Props {
  config: SiteConfig;
}

export function Header({ config }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#main-content"
          className="flex items-center gap-3 focus-visible:ring-2 rounded-md"
          aria-label={`${config.companyName} — back to top`}
        >
          {config.logo && (
            <img
              src={config.logo}
              alt=""
              aria-hidden="true"
              className="h-8 w-auto"
            />
          )}
          <span
            className="font-bold text-xl leading-none"
            style={{ color: 'var(--color-secondary)' }}
          >
            {config.companyName}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Site navigation">
          <a
            href="#services"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Services
          </a>
          <a
            href="#process"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            How It Works
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Reviews
          </a>
          <a
            href={`tel:${config.phone}`}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            {config.phone}
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-opacity duration-200 hover:opacity-90"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            {config.ctaPrimary}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
          <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
          <span className="block w-5 h-0.5 bg-current transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3 shadow-md"
          aria-label="Mobile navigation"
        >
          {[
            ['#services', 'Services'],
            ['#process', 'How It Works'],
            ['#testimonials', 'Reviews'],
            [`tel:${config.phone}`, config.phone],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="block text-sm font-medium text-gray-700 hover:text-gray-900 py-1"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="block w-full py-3 text-center rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            style={{ backgroundColor: 'var(--color-primary)' }}
            onClick={() => setMenuOpen(false)}
          >
            {config.ctaPrimary}
          </a>
        </nav>
      )}
    </header>
  );
}
