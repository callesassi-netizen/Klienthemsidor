// layout.tsx is intentionally thin — it owns only the shell HTML and global styles.
// Per-client theming (CSS variables, Google Fonts, JSON-LD, title/description)
// lives in LandingPage.tsx + page.tsx so it varies per ?client= request.

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect hints — safe unconditionally; each client @imports its own font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
}
