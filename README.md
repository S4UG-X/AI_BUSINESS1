# ANZO AI

A responsive HVAC automation website built with Next.js App Router and TypeScript, ready to deploy on Vercel.

## Local development

Use Node.js 20.9 or later.

```sh
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000). To verify and run the production build:

```sh
npm run typecheck
npm run build
npm start
```

## Customize before launch

- Edit `lib/site-config.ts` for brand details, phone number, optional email and social links, and image references. Missing email and social links remain hidden.
- **Replace the fictional phone number `(202) 555-0147` before public launch.** Update both `phone.display` and `phone.href`, then set `phone.isPlaceholder` to `false`.
- The supplied ANZO symbol is `public/logo.png`, imported through `siteConfig.images.logo`. Replacing that file updates the header and footer artwork and generates a fresh image URL on rebuild, avoiding stale cached logos.
- The founder portrait is `public/founder.png`, statically imported through `siteConfig.images.founder`. The hero uses `public/local-business-pros.png`; service and demo image references use `public/demo.png`. Update `siteConfig.images` or the `image` on an individual service card to replace photography.
- Edit the four entries in each of `automationServices` and `marketingServices` to change service-card titles, descriptions, icons, or images.
- The “Trusted by” section displays the supplied Jadan Construction Group, NEBCO, and NTC Construction logos from `public/clients/`. Update `trustedCompanies` in `lib/site-config.ts` to change the company names and logo imports.
- `trialPolicy` controls the 14-day automation trial headline and scope; `processSteps` defines the five stages and highlights Trial & Approval. Payment for automation work follows approval, marketing is quoted separately, and third-party platform costs are discussed upfront. Keep the pricing FAQ, process copy, terms, and actual written agreements consistent if this offer changes.
- Review the privacy and terms pages against the services and data handling you actually offer.

Inter and Libre Baskerville are self-hosted under `public/fonts/`; their SIL Open Font License files are included there.

## Deploy to Vercel

1. Push the project to a Git repository and import it into Vercel.
2. Keep the detected **Next.js** framework preset and default build/output settings.
3. Set `NEXT_PUBLIC_SITE_URL` to your production origin, such as `https://your-domain.example`, for canonical links, sitemap, robots, and social metadata. It is optional during local development. Copy `.env.example` to `.env.local` to set it locally.
4. Deploy, add your domain in Vercel, and confirm the phone number and canonical origin before sharing the site.

No database, email service, API credentials, or contact-form delivery is required. The appointment and follow-up demos run only in the browser: they do not book appointments, save customer details, or send messages. The trial offer is informational; the website has no billing or trial-management functionality.

Public pages: `/`, `/privacy`, and `/terms`.
