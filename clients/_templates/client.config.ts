// ---------------------------------------------------------------------------
// NEW CLIENT — template config reference
//
// Steps:
// 1. Copy /config/clients/frisorsalong.ts → /config/clients/<your-id>.ts
// 2. Fill in all fields in the new config file
// 3. Register the client in /config/clients/index.ts
// 4. Add a theme entry in /config/themes/index.ts (optional)
// 5. Update CLIENT_ID and CLIENT_LABEL below
// ---------------------------------------------------------------------------

export const CLIENT_ID = 'your-client-id' as const;
export const CLIENT_LABEL = 'Your Client Name';
export const PREVIEW_URL = `http://localhost:3000/?client=${CLIENT_ID}`;
