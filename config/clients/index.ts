// ---------------------------------------------------------------------------
// Client registry — add a new client by importing its file and adding it
// to the `allClients` array. Nothing else needs to change.
// ---------------------------------------------------------------------------

import type { SiteConfig } from '@/types/site';
import { sparksElitel } from './sparks-elitel';
import { marketingConsultant } from './marketing-consultant';
import { beautySalon } from './beauty-salon';
import { elektriker } from './elektriker';
import { rormokare } from './rormokare';
import { byggfirma } from './byggfirma';
import { taklaggare } from './taklaggare';
import { flyttfirma } from './flyttfirma';
import { stadservice } from './stadservice';
import { frisorsalong } from './frisorsalong';
import { bilverkstad } from './bilverkstad';
import { redovisningsbyra } from './redovisningsbyra';
import { marknadsforingskonsult } from './marknadsforingskonsult';
import { salongAura } from './salong-aura';

// ── Public types ──────────────────────────────────────────────────────────────

export interface ClientEntry {
  /** URL-safe identifier used in ?client=<id> */
  id: string;
  /** Human-readable label (used for debugging / admin) */
  label: string;
  config: SiteConfig;
}

// ── Registry ──────────────────────────────────────────────────────────────────

export const allClients: ClientEntry[] = [
  sparksElitel,
  marketingConsultant,
  beautySalon,
  elektriker,
  rormokare,
  byggfirma,
  taklaggare,
  flyttfirma,
  stadservice,
  frisorsalong,
  bilverkstad,
  redovisningsbyra,
  marknadsforingskonsult,
  salongAura,
];

export const clientsById: Record<string, ClientEntry> = Object.fromEntries(
  allClients.map((c) => [c.id, c])
);

/** Rendered when ?client is absent or unrecognised */
export const defaultClientId = 'sparks-elitel';

export const defaultClient: ClientEntry = clientsById[defaultClientId];
