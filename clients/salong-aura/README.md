# Salong Aura — Client Delivery Notes

## Client Details

| Field | Value |
|---|---|
| **Company** | Salong Aura |
| **City** | Göteborg |
| **Address** | Linnégatan 14, Göteborg |
| **Phone** | 070-123 45 67 |
| **Email** | boka@salongaura.se |
| **Instagram** | @salongaura |
| **Booking system** | Online |
| **Client ID** | `salong-aura` |

## Preview URL

```
http://localhost:3000/?client=salong-aura
```

## Live URL (after deployment)

> To be added after Vercel deployment.

## Config File

The client's full configuration is in:

```
/config/clients/salong-aura.ts
```

Edit that file to update copy, pricing, testimonials, or any other content.

## Hero Image

Currently pointing to `/banners/frisorsalong.jpg`.
To use a custom hero image:
1. Add the image file to `/public/banners/`
2. Update `heroImage` in `/config/clients/salong-aura.ts`

Recommended dimensions: **1920 × 1080px**, JPG, optimized for web (≤ 300 KB).

## Brand Assets

Place all brand files (logo, images, fonts, brand guide PDF) in:

```
/clients/salong-aura/brand-assets/
```

## Theme

The visual theme (hero gradient, button radius, card shadow, font) is defined in:

```
/config/themes/index.ts  →  'salong-aura' entry
```

**Current theme:**
- Primary color: `#9D6B8A` (muted mauve)
- Accent color: `#C9A96E` (champagne gold)
- Font: Playfair Display
- Button style: pill (9999px radius)

## Deployment Checklist

- [ ] Hero image uploaded to `/public/banners/`
- [ ] Logo file uploaded to `/public/` (update `logo` in config)
- [ ] Contact email confirmed with client
- [ ] Phone number confirmed
- [ ] All copy reviewed and approved
- [ ] Pricing reviewed and approved
- [ ] Domain pointed to Vercel deployment
- [ ] SSL certificate active
- [ ] Form submission tested
- [ ] Mobile view reviewed
