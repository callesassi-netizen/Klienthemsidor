// ---------------------------------------------------------------------------
// Salong Aura — client config reference
//
// The live configuration lives in:
//   /config/clients/salong-aura.ts
//
// This file re-exports it as a named convenience import for tooling,
// scripts, or any client-specific automation that targets this client.
// ---------------------------------------------------------------------------

export { salongAura as clientConfig } from '@/config/clients/salong-aura';

export const CLIENT_ID = 'salong-aura' as const;
export const CLIENT_LABEL = 'Salong Aura';
export const PREVIEW_URL = 'http://localhost:3000/?client=salong-aura';
