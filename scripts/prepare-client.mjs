#!/usr/bin/env node
/**
 * prepare-client — scaffolds a new client delivery folder under /clients/
 *
 * Usage:
 *   npm run prepare:client -- --id=my-client --label="My Client Name"
 *
 * Creates:
 *   /clients/<id>/client.config.ts
 *   /clients/<id>/README.md
 *   /clients/<id>/deployment-notes.md
 *   /clients/<id>/brand-assets/.gitkeep
 */

import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ── Parse args ────────────────────────────────────────────────────────────────

const args = Object.fromEntries(
  process.argv
    .slice(2)
    .filter((a) => a.startsWith('--'))
    .map((a) => {
      const [key, ...rest] = a.slice(2).split('=');
      return [key, rest.join('=')];
    })
);

const id = args.id;
const label = args.label ?? id;

if (!id) {
  console.error('Error: --id=<client-id> is required');
  console.error('Example: npm run prepare:client -- --id=salong-lyra --label="Salong Lyra"');
  process.exit(1);
}

const dest = join(ROOT, 'clients', id);

if (existsSync(dest)) {
  console.error(`Error: /clients/${id} already exists`);
  process.exit(1);
}

// ── Create folder structure ────────────────────────────────────────────────────

mkdirSync(join(dest, 'brand-assets'), { recursive: true });

writeFileSync(join(dest, 'brand-assets', '.gitkeep'), '');

writeFileSync(
  join(dest, 'client.config.ts'),
  `// ---------------------------------------------------------------------------
// ${label} — client config reference
// Edit /config/clients/${id}.ts to update the live configuration.
// ---------------------------------------------------------------------------

export { ${toCamel(id)} as clientConfig } from '@/config/clients/${id}';

export const CLIENT_ID = '${id}' as const;
export const CLIENT_LABEL = '${label}';
export const PREVIEW_URL = 'http://localhost:3000/?client=${id}';
`
);

writeFileSync(
  join(dest, 'README.md'),
  `# ${label} — Client Notes

## Client Details

| Field | Value |
|---|---|
| **Client ID** | \`${id}\` |
| **Company** | ${label} |

## Preview URL

\`\`\`
http://localhost:3000/?client=${id}
\`\`\`

## Live URL

> To be added after deployment.

## Config File

\`/config/clients/${id}.ts\`

## Deployment Checklist

- [ ] Config created and reviewed
- [ ] Hero image uploaded to \`/public/banners/\`
- [ ] Contact details confirmed with client
- [ ] Copy approved
- [ ] Deployed to Vercel
- [ ] Domain pointed
`
);

writeFileSync(
  join(dest, 'deployment-notes.md'),
  `# ${label} — Deployment Notes

## Steps

1. \`git push origin main\` — push latest changes
2. Vercel auto-deploys from \`main\` branch
3. Set custom domain in Vercel dashboard

## Default Client (Single-Client Deploy)

To serve this client at the root URL, update \`/config/clients/index.ts\`:
\`\`\`typescript
export const defaultClientId = '${id}';
\`\`\`
`
);

console.log(`✓ Created /clients/${id}/`);
console.log(`  client.config.ts`);
console.log(`  README.md`);
console.log(`  deployment-notes.md`);
console.log(`  brand-assets/`);
console.log('');
console.log(`Next: create /config/clients/${id}.ts and register it in /config/clients/index.ts`);

// ── Helpers ───────────────────────────────────────────────────────────────────

function toCamel(str) {
  return str
    .split(/[-_]/)
    .map((s, i) => (i === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)))
    .join('');
}
