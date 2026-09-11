# Lead Capture Template

A production-ready, config-driven landing page template built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. One codebase, unlimited clients — each with its own branding, copy, and theme, switchable via a URL parameter.

> **All client data in this repository is fictional.** The company names, phone
> numbers, email addresses, testimonials and trust badges in `/config/clients/`
> are placeholder content written to demonstrate the template — they do not
> belong to real businesses, and the reviews are not real reviews. Replace every
> field before deploying a site for an actual client.

---

## Tech Stack

- **Next.js 14** (App Router, Server Components)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** (per-client heading fonts via CSS injection)

---

## Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open in browser
http://localhost:3000
```

The default client loads automatically. To preview a specific client, append `?client=<id>` to the URL.

---

## Multi-Client System

Each client is a single TypeScript config file in `/config/clients/`. Switching between clients requires **zero code changes** — only a URL parameter.

### Preview a client

```
http://localhost:3000/?client=salong-aura
http://localhost:3000/?client=frisorsalong
http://localhost:3000/?client=elektriker
```

### All registered client IDs

| ID | Client |
|---|---|
| `sparks-elitel` | Sparks Elitel (default) |
| `salong-aura` | Salong Aura |
| `frisorsalong` | Studio Hår & Stil |
| `elektriker` | Elektriker |
| `rormokare` | Rörmokarfirma |
| `byggfirma` | Byggfirma |
| `taklaggare` | Takläggare |
| `flyttfirma` | Flyttfirma |
| `stadservice` | Städservice |
| `bilverkstad` | Bilverkstad |
| `redovisningsbyra` | Redovisningsbyrå |
| `marknadsforingskonsult` | Marknadsföringskonsult |
| `marketing-consultant` | Marketing Consultant (EN) |
| `beauty-salon` | Beauty Salon (EN) |

### Adding a new client

1. Create `/config/clients/<your-id>.ts` — copy an existing config as a starting point.
2. Import and add it to `allClients` in `/config/clients/index.ts`.
3. *(Optional)* Add a matching theme entry in `/config/themes/index.ts` for custom colors and fonts.
4. Preview at `http://localhost:3000/?client=<your-id>`.

### Client config structure

Each client config (`SiteConfig`) controls:

- **Identity** — company name, logo, email, phone
- **Design tokens** — primary/secondary/accent colors, Google Font family
- **Hero section** — headline, subheadline, hero image path, CTA button labels
- **Sections** — trust badges, pain points, pricing offers, process steps, case studies, testimonials, FAQ
- **Section toggles** — `showPricing`, `showCases`, `showLogoStrip`

---

## Deploying to Vercel

### First deploy

```bash
# Install Vercel CLI (once)
npm i -g vercel

# Deploy from project root
vercel

# Follow the prompts — select your team/account and project name
```

### Subsequent deploys

```bash
vercel --prod
```

Or connect the GitHub repository to Vercel for automatic deployments on every push to `main`.

### Environment variables

No environment variables are required for the base template. If you add integrations (email, CRM, analytics), add them in the Vercel dashboard under **Settings → Environment Variables**.

---

## Deploying a Single Client

To deploy a dedicated site for one client (e.g. Salong Aura):

1. Fork or clone this repository for that client.
2. Set `defaultClientId = 'salong-aura'` in `/config/clients/index.ts`.
3. Deploy to Vercel as a separate project.
4. Point the client's domain to the Vercel deployment.

---

## Cloning the Project for a New Client

```bash
# 1. Clone the template
git clone https://github.com/<your-org>/lead-capture-template.git new-client-name
cd new-client-name

# 2. Remove the old git history (fresh start)
rm -rf .git
git init

# 3. Install dependencies
npm install

# 4. Create the new client config
# Copy an existing config as a starting point:
cp config/clients/frisorsalong.ts config/clients/my-new-client.ts
# Edit the new file with the client's details

# 5. Register the client
# Add an import and entry to config/clients/index.ts

# 6. Start developing
npm run dev
```

---

## Project Structure

```
lead-capture-template/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root HTML shell
│   ├── page.tsx            # Entry point — resolves ?client= param
│   └── globals.css         # Global styles + Tailwind base
├── components/             # React Server/Client components
│   ├── LandingPage.tsx     # Orchestrates all sections
│   ├── Hero.tsx
│   ├── Header.tsx
│   ├── ContactForm.tsx     # Client component (form state)
│   └── ...
├── config/
│   ├── clients/            # One file per client
│   │   ├── index.ts        # Registry — import + register here
│   │   ├── salong-aura.ts
│   │   ├── frisorsalong.ts
│   │   └── ...
│   ├── themes/
│   │   └── index.ts        # Per-client visual theme tokens
│   └── site.config.ts      # Re-exports default client config
├── types/
│   └── site.ts             # SiteConfig + all sub-interfaces
├── clients/                # Per-client delivery folders
│   ├── salong-aura/        # Salong Aura delivery assets
│   └── _templates/         # Blank templates for new clients
└── public/
    └── banners/            # Hero banner images (one per client)
```

---

## Scripts

```bash
npm run dev             # Start dev server (http://localhost:3000)
npm run build           # Production build
npm run start           # Serve production build locally
npm run lint            # ESLint check
npm run prepare:client  # Scaffold a new client folder (see /clients/_templates)
```

---

## License

**Source-available for review — not licensed for reuse.**

The code is published openly so it can be read and assessed, for example as a
work sample. It is not open source: it is not licensed for commercial use, for
deployment, or for redistribution in whole or in part, and no rights are granted
beyond reading it.

© 2026 Carl-Johan Blomstrand. All rights reserved.
