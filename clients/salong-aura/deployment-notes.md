# Salong Aura — Deployment Notes

## Vercel Setup

### 1. Push to GitHub

```bash
# From the project root
git remote add origin https://github.com/<your-org>/lead-capture-template.git
git branch -M main
git push -u origin main
```

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import the GitHub repository
3. Framework preset: **Next.js** (auto-detected)
4. Root directory: `.` (project root)
5. Click **Deploy**

### 3. Set the Default Client (Single-Client Deployment)

To deploy this project exclusively as the Salong Aura site:

Open `/config/clients/index.ts` and change:
```typescript
export const defaultClientId = 'salong-aura';
```

This ensures the Salong Aura landing page loads at the root URL without any `?client=` parameter.

### 4. Custom Domain

In the Vercel dashboard:
- Go to **Settings → Domains**
- Add `salongaura.se` (or the client's domain)
- Follow the DNS instructions (CNAME or A record)

## Environment Variables

No environment variables are required for the base template.

If form submissions are connected to an email service or CRM in the future, add those keys in:
**Vercel Dashboard → Settings → Environment Variables**

## Performance Notes

- All page sections are **React Server Components** except `ContactForm` (client component)
- Google Fonts are loaded via CSS `@import` — they are per-client and load on demand
- Hero images should be placed in `/public/banners/` and optimized before upload

## Post-Launch

- Verify the contact form works end-to-end
- Test on mobile (iOS Safari + Android Chrome)
- Check Google PageSpeed Insights
- Submit the URL to Google Search Console

## Support

For technical changes, contact the developer or edit the config file directly:
`/config/clients/salong-aura.ts`
