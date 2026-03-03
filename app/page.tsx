import type { Metadata } from 'next';
import { clientsById, defaultClientId } from '@/config/clients';
import { LandingPage } from '@/components/LandingPage';

interface PageProps {
  searchParams: { client?: string };
}

// ── Per-request metadata reflects the active client ───────────────────────────
export function generateMetadata({ searchParams }: PageProps): Metadata {
  const id = searchParams.client ?? defaultClientId;
  const { config } = clientsById[id] ?? clientsById[defaultClientId];

  return {
    title: config.companyName,
    description: config.subheadline,
    openGraph: {
      title: config.companyName,
      description: config.subheadline,
      type: 'website',
      siteName: config.companyName,
    },
    twitter: {
      card: 'summary_large_image',
      title: config.companyName,
      description: config.subheadline,
    },
  };
}

// ── Page — resolves ?client=<id>, falls back to defaultClientId ───────────────
export default function HomePage({ searchParams }: PageProps) {
  const id = searchParams.client ?? defaultClientId;
  // Unknown client IDs silently fall back to the default — never throws
  const resolvedEntry = clientsById[id] ?? clientsById[defaultClientId];

  return <LandingPage config={resolvedEntry.config} clientId={resolvedEntry.id} />;
}
