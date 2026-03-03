// ---------------------------------------------------------------------------
// SITE CONFIG — thin re-export of the default client's config.
//
// The authoritative data now lives in /config/clients/<id>.ts.
// Switch the active client at runtime via ?client=<id>.
// See /config/clients/index.ts for the full registry.
// ---------------------------------------------------------------------------

import { defaultClient } from '@/config/clients';

/** The default client's SiteConfig — kept for any legacy direct imports. */
export const siteConfig = defaultClient.config;
