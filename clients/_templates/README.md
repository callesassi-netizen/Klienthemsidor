# New Client — Template

Use this folder as a starting point when onboarding a new client.

## Quickstart

```bash
# 1. Copy this template folder
cp -r clients/_templates clients/<new-client-id>

# 2. Create the config file
cp config/clients/frisorsalong.ts config/clients/<new-client-id>.ts

# 3. Edit the config with the client's details
# 4. Register in config/clients/index.ts
# 5. Preview: http://localhost:3000/?client=<new-client-id>
```

## Files in this folder

| File | Purpose |
|---|---|
| `client.config.ts` | Re-exports client config + constants |
| `README.md` | Client notes — contact info, URLs, deployment status |
| `deployment-notes.md` | Step-by-step deployment instructions |
| `brand-assets/` | Logo, images, fonts, brand guide |

## What to fill in per client

- [ ] Company name, address, phone, email
- [ ] Primary / secondary / accent colors
- [ ] Google Font family
- [ ] Headline + subheadline
- [ ] Hero image (add to `/public/banners/<client-id>.jpg`)
- [ ] CTA button labels
- [ ] Trust badges
- [ ] Pain points (3)
- [ ] Pricing offers (2–3)
- [ ] Process steps (3–4)
- [ ] Case studies (toggle `showCases`)
- [ ] Testimonials (3)
- [ ] FAQ (4–6 questions)
- [ ] Theme entry in `/config/themes/index.ts`
