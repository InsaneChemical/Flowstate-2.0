# Flowstate Media — Project Context

This file exists purely for context continuity across future chat sessions. It documents the
actual business, brand, and decisions behind this codebase — as distinct from `AGENTS.md`,
which documents the reverse-engineering *template* this project was originally scaffolded from.

## The Business

Flowstate Media is a digital media and growth agency based in South Africa, serving clients
locally and in the EU. Owner/operator: Nuno.

- **Live site:** https://flowstatemedia.co.za
- **Contact email:** nuno@flowstatemedia.co.za
- **WhatsApp:** +27 69 039 0431 (`https://wa.me/27690390431`)
- **Calendly:** https://calendly.com/nuno-flowstatemedia/15-minute-check-in (15-minute check-in call)
- **Instagram:** instagram.com/flowstate.builds
- **X/Twitter:** x.com/flowstatebuilds

## Services offered (current, as of this session)

Only three services are currently offered — this narrowed down from an earlier five during this
session. **Do not reintroduce AI Automation or AI Voice Agents messaging** anywhere on the site
(hero copy, meta description, service lists, etc.) unless the user explicitly says they're
offering them again — this was deliberately and thoroughly scrubbed once already.

1. **Website Design** — conversion-focused sites, project fee + optional monthly care plan
2. **Social Media Management** — monthly retainer, content + community engagement
3. **Web3 Community Support** — Discord/Telegram moderation, monthly retainer

Full pricing (ZAR + EUR) for all three, each split into 3 tiers, lives in
`src/components/PricingSection.tsx` and renders at `/pricing`.

## Conversion strategy

The site is deliberately **WhatsApp-first**: the owner wants to close deals personally over
WhatsApp chat, not just collect leads passively. Every major CTA on the site should offer a
WhatsApp path where reasonable (footer, nav overlay, pricing cards, "What Happens Next", main
contact section). The contact form (via Resend) and Calendly booking remain as secondary/async
options for leads who prefer email or a scheduled call — do not remove them, the owner
considered and confirmed keeping the form (EU clients + async inquiries are the reasoning).

Trust pillars used repeatedly across the site: **no lock-in contracts**, **reply within 24
hours**, **first delivery in 2 weeks**.

## Brand identity

- **Palette:** near-black navy background `#050a14`, cyan `#06b6d4`, indigo/purple `#818cf8`
  (used together as a signature diagonal gradient), text `#f8fafc`, muted `#94a3b8`, dim
  `#6b7d99` (this dim/muted pair was brightened this session to pass WCAG AA 4.5:1 contrast —
  don't darken it back)
- **Fonts:** Syne (display/headlines, weight 800, distinctive bold-geometric character) + DM
  Sans (body/UI text)
- **Logo:** stylized "F" wing/flame mark in the cyan→purple gradient.
  `public/logo-transparent.png` = full lockup (icon + "FLOWSTATE MEDIA" wordmark).
  `public/logo-icon-clear.png` = icon only, on solid dark background (used for favicon/OG image).
- **Tagline:** "Smarter media. Smoother growth."
- **Tone:** outcome-first, proof-driven (stats: 20+ clients served, 4+ years experience, 100%
  growth-focused), no fluff, short punchy copy over long-winded pitches.

## Tech stack & deployment

- Next.js 16 (App Router), React 19, TypeScript strict
- Styling is almost entirely inline `style={{}}` objects (not Tailwind utility classes, despite
  Tailwind v4 being installed) — match this pattern when editing existing components
- Resend for the contact form's email delivery (domain verified, sender: `contact@flowstatemedia.co.za`,
  recipient: `nuno@flowstatemedia.co.za`)
- `react-calendly` for the booking popup
- Deployed on Vercel

### GitHub repos — important

- **Current/active repo:** `github.com/InsaneChemical/Flowstate-2.0` — this is what `origin`
  points to locally, and where all work should be pushed.
- **Old/legacy repo:** `github.com/InsaneChemical/Flowstate` — superseded. Status of whether it's
  been deleted or archived was undecided as of this session — check before assuming either way.
- **Open question:** confirm whether the Vercel project has been repointed from the old repo to
  `Flowstate-2.0`. If the live site ever looks like it's missing recent changes, this is the
  first thing to check (fetch `/opengraph-image` directly on the live domain to compare against
  what's in the repo — that's how staleness was diagnosed last time).

## Notable decisions from past sessions (don't re-litigate without reason)

- Removed the "Tools we build with" logo ticker (`LogoTicker.tsx`, since deleted) because 7 of
  its 8 logos were AI/automation tools (Claude, ChatGPT, n8n, ElevenLabs, etc.) that no longer
  matched the services offered. Can be rebuilt if the user provides an accurate current tool
  list — don't guess/fabricate one.
- Removed dead/unused components that were never wired into any page: `PackagesSection`,
  `ProcessSection`, `TrustSection`, `SystemShowcase`, `ExplodedSystem`, `CapabilitySection`.
  If you find more orphaned components, it's worth flagging rather than assuming they're in use.
- The OG image (`src/app/opengraph-image.tsx`) is generated dynamically via `next/og`, loading
  the real Syne/DM Sans fonts from Google Fonts at build time and the real logo mark — deliberately
  redesigned to *not* look like a generic template card. Current layout: logo top-left corner,
  service badges directly above the headline, no floating side cards (an earlier version with
  floating cards was tried and explicitly reverted).
- Favicon was the Next.js/Vercel default (a triangle) left over from scaffolding — replaced with
  a real `icon.png`/`apple-icon.png` generated from the logo mark.

## Where to look for things

- Homepage sections, in order: `Navbar` → `Hero` → `StatsBar` → `ProblemSection` →
  `PhotoDivider` → `ServicesSection` → `TestimonialsSection` → `NextSteps` → `FinalCTA`
  (contact form) → `Footer`. Assembled in `src/app/page.tsx`.
- Pricing page: `src/app/pricing/page.tsx` + `src/components/PricingSection.tsx`
- Legal pages: `src/app/privacy-policy/`, `src/app/terms-of-service/` (share `LegalLayout.tsx`)
- SEO: metadata + JSON-LD in `src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`
- Contact form backend: `src/app/api/contact/route.ts` (Resend)
