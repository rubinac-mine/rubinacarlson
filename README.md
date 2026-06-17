# rubinacarlson.com

Personal site of Rubina Carlson. Built with Next.js, Tailwind, Vercel and Claude Code. The whole thing is vibe-coded.

I'm a marketing leader based in Adelaide, South Australia. Head of Marketing at [90 Seconds](https://90seconds.com), a global B2B video creation platform. I lead the global marketing function from APAC. For the past two years I've also been an AI builder. This site is one of the things I've shipped with that muscle.

## What's here

A standard personal site for the day job: an [about](https://rubinacarlson.com/about) page, a [work](https://rubinacarlson.com/work) portfolio, a [testimonials](https://rubinacarlson.com/testimonials) page, and a [speaking](https://rubinacarlson.com/speaking) page.

Plus the unusual part: **per-company landing pages**. When I apply to a tier-1 role, I build a tailored landing page for the application at `rubinacarlson.com/<role-slug>-<company-slug>`. The page proves I've understood the brief, mapped the role to the evidence, and thought through the first 90 days before I ever talk to anyone.

Examples:

- [/manager-digital-marketing-bdo](https://rubinacarlson.com/manager-digital-marketing-bdo). Canonical 11-section template: hero, why X why now, three pillars, 90-day plan, my best results, from the work, credentials, full pitch, contact.
- [/cresta](https://rubinacarlson.com/cresta). APAC marketing manager pattern.
- [/head-field-marketing-apac-cursor](https://rubinacarlson.com/head-field-marketing-apac-cursor). Most recent.

## Stack

- **Framework:** Next.js (App Router) with TypeScript
- **Styling:** Tailwind CSS with custom brand tokens
- **Hosting:** Vercel (auto-deploys from `main`)
- **Build environment:** Claude Code and Replit

## Brand tokens

Wine crimson `#8B1A2B` on cream `#F5F0E8` for the cream surfaces. Crimson light `#D8806A` on navy `#1A2E4E` for the navy variants. DM Sans for body and headings. Caveat for the occasional hand-drawn accent.

Tokens are defined in `app/globals.css` and pulled by every page. Single source of truth for the visual brand lives outside the repo in my brand guidelines doc; this file mirrors it.

## How it gets deployed

Push to `main`. Vercel picks it up and deploys to rubinacarlson.com. Each tailored landing page gets a fresh deploy and is HTTP-200-verified before I share it.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Built with

Built and maintained by me with Claude Code as the build collaborator. I'm not an engineer. I'm a marketer who builds.

## Find me

- Personal site: [rubinacarlson.com](https://rubinacarlson.com)
- LinkedIn: [linkedin.com/in/rubinacarlson](https://linkedin.com/in/rubinacarlson)
- GitHub profile: [@rubinac-mine](https://github.com/rubinac-mine)
- Marketing build notes: [marketing-build-notes](https://github.com/rubinac-mine/marketing-build-notes)
- Email: rubina.carlson@gmail.com
