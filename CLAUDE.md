# CLAUDE.md — AST Irish Entrepreneur Roadshow

## 1. Project Overview

A single-page marketing website for **Affinity Sales Training (AST)** promoting "The Irish Entrepreneur Roadshow 2026" — a 12-month, 12-county tour of in-person sales training workshops across Ireland, in partnership with Young Irish Entrepreneurs (YIE). The site showcases event dates/locations, collects lead opt-ins via a modal form, and routes users to Stripe checkout (for live events) or a waitlist thank-you page.

- **Primary language:** TypeScript
- **Framework:** Next.js 16.1.3 (App Router) with React 19
- **Runtime:** Node.js
- **Package manager:** npm

## 2. Tech Stack

| Layer | Technology | Details |
|-------|-----------|---------|
| **Frontend** | Next.js 16 + React 19 | App Router, client-side rendering (`"use client"` on all interactive components) |
| **UI Library** | Lucide React | Icon library (`lucide-react@0.562.0`) |
| **Animations** | Framer Motion 12 | Scroll-triggered animations, parallax, page transitions |
| **Styling** | Tailwind CSS 4 | Via `@tailwindcss/postcss` plugin; custom `@theme` tokens in `globals.css` |
| **Fonts** | Google Fonts (next/font) | Inter (body), Playfair Display (display/headings) |
| **Backend** | Next.js API Routes | Single route: `/api/waitlist` (currently a stub) |
| **Database** | None | No database; event data is hardcoded in `src/lib/events.ts` |
| **Auth** | None | No authentication system |
| **Payments** | Stripe (external links) | Direct `buy.stripe.com` URLs per event; no Stripe SDK integration |
| **Automation** | Make.com (Integromat) | Webhook receives form submissions at `hook.eu2.make.com` |
| **Hosting** | Vercel (likely) | Standard Next.js deployment; `.vercel` in `.gitignore` |

## 3. Project Structure

```
ast-ireland-tour/
├── public/
│   ├── images/
│   │   ├── hero-bg.jpg              # Hero section background
│   │   ├── carousel/                 # 10 event photos (photo-1.jpeg through photo-10.jpeg)
│   │   └── cities/                   # 12 city images (one per tour stop)
│   ├── file.svg, globe.svg, etc.    # Default Next.js SVGs (unused)
│   └── vercel.svg, next.svg         # Default Next.js assets (unused)
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout: fonts, metadata, HTML structure
│   │   ├── page.tsx                  # Homepage: assembles all sections, manages modal state
│   │   ├── globals.css               # Tailwind import, @theme tokens, custom animations
│   │   ├── icon.png                  # Favicon
│   │   ├── thank-you/
│   │   │   └── page.tsx             # Post-submission page with calendar integration
│   │   └── api/
│   │       └── waitlist/
│   │           └── route.ts         # API stub for waitlist signups
│   ├── components/
│   │   ├── animations/              # Reusable animation wrappers (Framer Motion)
│   │   │   ├── FadeInUp.tsx         # Scroll-triggered fade-in-up
│   │   │   ├── StaggerChildren.tsx  # Staggered child animations
│   │   │   ├── Parallax.tsx         # Parallax scroll effect + image variant
│   │   │   └── index.ts            # Barrel export
│   │   ├── layout/                   # Page-level layout components
│   │   │   ├── Navbar.tsx           # Fixed nav with scroll behavior, mobile menu
│   │   │   ├── Footer.tsx           # Site footer with Instagram link
│   │   │   └── index.ts            # Barrel export
│   │   ├── sections/                 # Page sections (top-to-bottom order on homepage)
│   │   │   ├── Hero.tsx             # Hero with cycling city backgrounds
│   │   │   ├── ValueProp.tsx        # "What is the Roadshow?" explainer
│   │   │   ├── PhotoCarousel.tsx    # Infinite-scroll photo strip
│   │   │   ├── Differentiator.tsx   # "Real Training" section (NOT used on homepage)
│   │   │   ├── PhotoGallery.tsx     # Masonry photo grid (NOT used on homepage)
│   │   │   ├── Roadmap.tsx          # Tour dates & locations with snake-line SVG
│   │   │   ├── PassportOffer.tsx    # Multi-event passport pricing (NOT used on homepage)
│   │   │   ├── FAQ.tsx              # Accordion FAQ section
│   │   │   ├── Newsletter.tsx       # Email signup form (NOT used on homepage)
│   │   │   └── index.ts            # Barrel export
│   │   └── ui/                       # Reusable UI primitives
│   │       ├── Button.tsx           # Polymorphic button (link or button, 4 variants)
│   │       ├── Modal.tsx            # Overlay modal with escape/backdrop close
│   │       ├── OptInForm.tsx        # Event selection + contact form with country codes
│   │       ├── EventCard.tsx        # Individual event card for Roadmap
│   │       ├── StatusBadge.tsx      # Event status indicator (live/waitlist/coming soon)
│   │       ├── Accordion.tsx        # Expandable FAQ accordion
│   │       └── index.ts            # Barrel export
│   └── lib/
│       ├── events.ts                # Event data, types, and helper functions
│       └── calendar.ts              # Calendar URL generators (Google, Outlook, ICS download)
├── package.json
├── tsconfig.json
├── next.config.ts                    # Empty/default config
├── postcss.config.mjs                # Tailwind PostCSS plugin
├── eslint.config.mjs                 # ESLint flat config (next/core-web-vitals + typescript)
└── .gitignore
```

**Organizational pattern:** Layer-based (layout / sections / ui / animations / lib), with sections corresponding to visual page blocks rendered top-to-bottom.

## 4. Architecture & Patterns

### Application Architecture
- **Single-page marketing site** with one additional route (`/thank-you`)
- All components are client-side (`"use client"`) — no server components in use
- No SSR data fetching; all data is statically embedded in source

### Request Flow (Form Submission)
1. User clicks "Secure Your Seat" → Modal opens with `OptInForm`
2. User fills form → `handleFormSubmit` in `page.tsx` fires
3. Form data POSTed to **Make.com webhook** (`hook.eu2.make.com/...`) via client-side `fetch`
4. If event status is `TICKETS_LIVE` → redirect to **Stripe checkout** URL
5. If event status is `WAITLIST_OPEN` or `COMING_SOON` → redirect to `/thank-you?event={id}&waitlist=true`

### State Management
- React `useState` in homepage for modal open/close and selected event
- No global state library; state is component-local throughout

### Key Patterns
- **Barrel exports** (`index.ts`) in every component directory
- **Animation wrappers:** `FadeInUp`, `StaggerChildren`, `Parallax` wrap content for scroll-triggered animations
- **Polymorphic Button:** renders as `<motion.a>` when `href` is provided, `<motion.button>` otherwise
- **Event-driven architecture:** event data flows down from `page.tsx` → sections → cards via props

### Error Handling
- Minimal: `try/catch` around webhook `fetch` with `console.error`; no user-facing error states
- API route has basic field validation returning 400/500 status codes

## 5. Database Schema

N/A — No database. All event data is hardcoded in `src/lib/events.ts`.

### Event Data Structure (in-code)

| Field | Type | Description |
|-------|------|-------------|
| `id` | `string` | Unique slug, e.g. `"cavan-jan-2026"` |
| `month` | `string` | Display month, e.g. `"January"` |
| `date` | `string` | Full display date, e.g. `"January 31, 2026"` |
| `city` | `string` | City name |
| `county` | `string` | County name |
| `theme` | `string` | Event theme, e.g. `"THE LAKELAND CHAPTER"` |
| `status` | `EventStatus` | One of: `"TICKETS_LIVE"`, `"WAITLIST_OPEN"`, `"COMING_SOON"` |
| `host` | `string` | Host name(s) |
| `description` | `string` | Event description paragraph |
| `stripeLink` | `string` | Stripe checkout URL (empty string if not live) |
| `whatsappLink` | `string` | WhatsApp group URL (empty string if not set) |
| `calendarDetails` | `CalendarDetails` | `{ title, location, startTime, endTime }` |
| `image` | `string?` | Path to city image in `/public/images/cities/` |

**12 events defined:** Cavan (Jan) → Dublin (Dec), one per month.

**Current live events (status `TICKETS_LIVE`):** Cavan, Limerick, Cork. All others are `COMING_SOON`.

## 6. API Routes / Endpoints

| Method | Path | Purpose | Auth | Status |
|--------|------|---------|------|--------|
| `POST` | `/api/waitlist` | Waitlist signup | None | **Stub** — logs to console, returns success after 500ms delay |

**Request body:**
```json
{
  "firstName": "string (required)",
  "lastName": "string (required)",
  "email": "string (required)",
  "phone": "string",
  "eventId": "string (required)"
}
```

**Note:** This API route is **not actually called** by the frontend. The homepage form submits directly to the Make.com webhook instead. This route appears to be leftover from an earlier implementation.

## 7. Key Files & Entry Points

### Entry Points
| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root layout: loads Inter + Playfair Display fonts, sets metadata (title, OG, Twitter cards) |
| `src/app/page.tsx` | Homepage: renders all sections, manages modal state, handles form submission to Make.com |
| `src/app/thank-you/page.tsx` | Post-submission confirmation page with calendar integration |

### Configuration Files
| File | Purpose |
|------|---------|
| `package.json` | Dependencies, scripts |
| `tsconfig.json` | TypeScript strict mode, `@/*` path alias → `./src/*`, bundler module resolution |
| `next.config.ts` | Empty/default Next.js config |
| `postcss.config.mjs` | Tailwind CSS 4 via `@tailwindcss/postcss` |
| `eslint.config.mjs` | ESLint flat config with `next/core-web-vitals` and `next/typescript` |

### Environment Variables

None required. The project has no `.env` file and no environment variable references in code.

**Hardcoded external URLs:**
- Make.com webhook: `https://hook.eu2.make.com/ato6ffjqvqxk5bni5ly2qhy7ch1cpn8z` (in `src/app/page.tsx`)
- Stripe links: `https://buy.stripe.com/...` (in `src/lib/events.ts`, 3 events)
- Instagram: `https://www.instagram.com/affinitysalestraining/` (in Footer and FAQ)

### Important Utility Files
| File | Purpose |
|------|---------|
| `src/lib/events.ts` | Event data array, types (`Event`, `EventStatus`, `CalendarDetails`), helper functions (`getEventByCity`, `getActiveEvent`, `getStatusLabel`, `getStatusColor`) |
| `src/lib/calendar.ts` | Calendar URL generators: `generateGoogleCalendarUrl`, `generateOutlookCalendarUrl`, `generateAppleCalendarUrl`, `downloadICSFile` |

## 8. Authentication & Authorization

N/A — No authentication or authorization system. All pages and the API route are fully public.

## 9. Third-Party Integrations

| Service | Purpose | Files | Method |
|---------|---------|-------|--------|
| **Make.com (Integromat)** | Receives form submissions (lead capture) | `src/app/page.tsx` | Client-side `fetch` POST to webhook URL |
| **Stripe** | Payment processing for live events | `src/lib/events.ts`, `src/app/page.tsx` | Direct redirect to `buy.stripe.com` checkout links (no SDK) |
| **Google Calendar** | Add event to calendar | `src/lib/calendar.ts`, `src/app/thank-you/page.tsx` | URL construction for `calendar.google.com/calendar/render` |
| **Outlook Calendar** | Add event to calendar | `src/lib/calendar.ts`, `src/app/thank-you/page.tsx` | URL construction for `outlook.live.com/calendar` |
| **Apple Calendar** | Add event to calendar | `src/lib/calendar.ts`, `src/app/thank-you/page.tsx` | ICS file download via Blob URL |
| **Instagram** | Contact/social link | `src/components/sections/FAQ.tsx`, `src/components/layout/Footer.tsx` | External link to profile page |

No webhook handlers, no background jobs, no scheduled tasks.

## 10. Type System & Shared Types

All types are defined in `src/lib/events.ts`:

```typescript
type EventStatus = "TICKETS_LIVE" | "WAITLIST_OPEN" | "COMING_SOON";

interface CalendarDetails {
  title: string;
  location: string;
  startTime: string;   // ISO-ish format: "2026-01-31T09:00:00"
  endTime: string;
}

interface Event {
  id: string;
  month: string;
  date: string;
  city: string;
  county: string;
  theme: string;
  status: EventStatus;
  host: string;
  description: string;
  stripeLink: string;
  whatsappLink: string;
  calendarDetails: CalendarDetails;
  image?: string;
}
```

Local component interfaces (not shared):
- `FormData` in `OptInForm.tsx`: `{ firstName, lastName, email, phone }`
- Various component prop interfaces (`HeroProps`, `RoadmapProps`, `NavbarProps`, etc.)

No Zod, Joi, or other validation schemas.

## 11. Scripts & Commands

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `next dev` | Start development server (hot reload) |
| `build` | `next build` | Production build |
| `start` | `next start` | Start production server |
| `lint` | `eslint` | Run ESLint |

**No typecheck script defined.** To type-check, run: `npx tsc --noEmit`

### Dev Setup
```bash
npm install
npm run dev
# Open http://localhost:3000
```

## 12. Testing

N/A — No test framework configured. No test files exist in the codebase.

## 13. CI/CD & Deployment

No CI/CD pipeline files exist in the repository. Deployment is likely via Vercel's Git integration (`.vercel` is in `.gitignore`).

## 14. Coding Conventions

### File Naming
- Components: **PascalCase** (e.g., `EventCard.tsx`, `FadeInUp.tsx`)
- Utilities/lib: **kebab-case** would be convention but currently `camelCase` (`events.ts`, `calendar.ts`)
- Directories: **kebab-case** or **lowercase** (`animations/`, `sections/`, `ui/`)

### Component Pattern
- Every component file uses `"use client"` directive
- Named exports (no default exports) for all components
- Barrel exports via `index.ts` in each component directory
- Props interfaces defined inline above the component in the same file

### Import Order (observed)
1. React / Next.js imports
2. Third-party libraries (framer-motion, lucide-react)
3. Internal components (relative paths `../` or alias `@/`)
4. Types/data from `@/lib/*`

### Styling
- Tailwind CSS utility classes inline
- Custom CSS classes in `globals.css` for animations and special effects
- Color tokens defined via Tailwind `@theme` (not `tailwind.config`)
- Irish tricolor gradient (`#169B62` green, `#FFFFFF` white, `#FF883E` orange) used for primary button and navbar branding

### Path Alias
- `@/*` maps to `./src/*` (configured in `tsconfig.json`)

## 15. Gotchas & Non-Obvious Behavior

### Unused Components
Several components are exported from `sections/index.ts` but **not rendered** on the homepage:
- `Differentiator` — "Real Training" section
- `PhotoGallery` — Masonry grid (references non-existent `/images/gallery/` images)
- `PassportOffer` — Multi-event passport pricing card (placeholder `€XXX` prices)
- `Newsletter` — Email signup form (console.log only, no backend)

These appear to be pre-built sections for future use.

### Dead API Route
`/api/waitlist/route.ts` is never called by the frontend. The form submits directly to Make.com webhook instead. This route contains a `TODO` comment about future storage implementation.

### Hardcoded Webhook URL
The Make.com webhook URL is hardcoded directly in `page.tsx` (line 35), not in an environment variable. This is a security/configuration concern.

### Stripe Links Hardcoded
Stripe checkout URLs are hardcoded in the `events` array in `src/lib/events.ts`. Only 3 events currently have Stripe links (Cavan, Limerick, Cork).

### Images Use `<img>` Not `<Image>`
The codebase uses native `<img>` tags and CSS `backgroundImage` rather than Next.js `<Image>` component, forgoing automatic image optimization.

### Event Time Discrepancy
- `calendarDetails` in `events.ts` shows events as 9:00 AM – 6:00 PM
- `EventCard.tsx` hardcodes display as "12 PM to 4 PM" (line 53)
- Cork event has a date mismatch: displayed as "March 28" but calendar shows "March 31"

### All Client Components
Every single component uses `"use client"`. There are no React Server Components. This means the entire page is client-rendered, which is unusual for a Next.js 16 project and sacrifices SSR/SEO benefits.

### CSS Animation Speed Difference
Carousel scroll animations run at 5s on mobile but 60s on desktop (defined in `globals.css` lines 122-139). The mobile speed is very fast.

### Phone Number Handling
`OptInForm.tsx` has logic to handle country code prefixing: if the user enters a number starting with `+`, it's used as-is; otherwise the selected country code is prepended after stripping leading zeros.

### Button className Quirk
In `Navbar.tsx` line 81, there's an empty `className=""` prop on the Button, which is a no-op but appears intentional to override default spacing.
