# CLAUDE.md

This file gives Claude (and any dev working in this repo) the full context needed to work on the CarCrush24 website without re-asking settled questions. Treat everything here as decided/approved unless the user explicitly says otherwise in a session. If something isn't covered here, check the signed SOW (`CarCrush24_Proposal_SOW.pdf`) before assuming it's in scope.

---

## 1. Project Overview

**Client:** Garhwal Scrape, operating as **CarCrush24**
**What the business does:** Vehicle scrapping & recycling — two-wheelers, cars, and commercial trucks — for both individual and business/fleet customers. Revenue comes from buying end-of-life vehicles (priced on scrap weight + resellable parts), dismantling/depolluting them, harvesting reusable parts, and selling scrap metal + used parts.

**What we're building:** A marketing / lead-generation website. **This is NOT a heavy backend build** — no customer accounts, no customer login, no payment gateway, no e-commerce checkout in this phase.

**Primary goal of the site:** Get visitors to submit a "Get a Quote" request, which routes to the CarCrush24 team via email + WhatsApp + an internal admin dashboard.

**Secondary goal (heavily weighted):** SEO dominance. Currently, searching "vehicle scrap" or similar terms in India surfaces almost no real competitor except Mariinox. The site must be built to realistically compete for and win the #1 ranking for vehicle-scrapping search terms in India — see Section 9.

**Timeline:** 15 working days total (per signed SOW, Sept 6 2026). Day 3 = design approval hard gate. Day 7 = staging preview. Day 12 = feature-complete staging. Day 15 = production launch.

---

## 2. Tech Stack (locked — do not deviate without asking)

| Layer | Technology |
|---|---|
| Frontend | React.js + Next.js + Tailwind CSS |
| Language | **Pure JavaScript — NO TypeScript.** All files are `.js` / `.jsx`, never `.ts` / `.tsx`. |
| Backend | Node.js + Express, or Next.js API routes |
| Database | MongoDB (Mongoose, plain JS schemas) |
| Hosting | AWS EC2 + S3 (images) + CloudFront |
| File uploads | **AWS SDK v3** (`@aws-sdk/client-s3` + `@aws-sdk/s3-request-presigner`) — presigned-URL uploads directly from browser to S3. **No `aws-sdk` v2, no `multer-s3`.** See Section 7a. |
| Auth | Admin-only, for a small fixed set of internal users. **No public/customer auth of any kind.** |
| Analytics | Google Analytics 4 (GA4) + Google Search Console, ideally via Google Tag Manager |

**Do not introduce:** TypeScript, a customer login/registration system, a payment gateway, an SMS provider (Twilio/MSG91 — explicitly removed from scope), a paid WhatsApp Business API (see Section 6 — free click-to-chat approach only, unless the client later approves the paid tier as a separate change request), the legacy `aws-sdk` (v2) package or `multer-s3`, or hardcoded AWS access keys anywhere in code/`.env` (see Section 7a — auth is via EC2 instance IAM role, not access keys).

---

## 3. Sitemap

- **Home** — Hero + embedded Quote Step 1, Trust Bar, Services grid, How It Works, Testimonials, final CTA
- **Services** (hub) → 6 sub-pages: Scrapping, Recycling, Parts Sales, Free Collection, Paperwork, Metal Trading
- **Get a Quote** — full multi-step form + pickup scheduler (shares the same component as the homepage hero quote widget — build once, use twice)
- **About** — company story, team, certifications, eco-policy
- **Blog** — CMS-driven list + detail pages (this is the main SEO growth engine)
- **Contact** — form, phone/email, embedded Google Map, hours, WhatsApp button
- **Thank You** — post-submission confirmation + WhatsApp handoff (see Section 6)
- **Utility pages** — Privacy Policy, Terms of Service, Cookie Policy, Licenses, 404
- **`/admin`** — internal dashboard, not in public nav, excluded from sitemap.xml/robots.txt

---

## 4. Brand & Design System

Full detail lives in `CarCrush24_Design_System.md` — this is the condensed version for day-to-day dev reference.

### Theme: light only. No dark mode. No theme toggle. Do not build any `dark:` variants, `prefers-color-scheme` logic, or theme-persistence in localStorage — this was explicitly removed from scope.

### Color tokens (final)

| Token | Hex | Role |
|---|---|---|
| `bg-base` | `#F8F9F5` | Page background (off-white, never pure white) |
| `bg-surface` | `#FFFFFF` | Cards, form panels |
| `bg-dark-section` | `#16311F` | Navbar pill, footer, dark ribbon banners |
| `primary` | `#1F5C33` | Deep forest green — structural color: section backgrounds, secondary buttons, icon strokes, nav active state |
| `accent` | `#6FCF3C` | Lime green (from logo) — action color: primary CTA buttons, one highlighted headline word, icon fills, links |
| `accent-hover` | `#5AB82E` | Hover/pressed state for accent elements |
| `text-primary` | `#131A15` | Headings, body text |
| `text-secondary` | `#5B6660` | Muted/secondary text |
| `text-on-dark` | `#FFFFFF` | Text on `primary`/`bg-dark-section` fills |
| `border` | `#E4E7DE` | Dividers, input borders |
| `error` | `#D9534F` | Form validation only |

**Usage rule:** primary green = large color blocks (nav, footer, sections). Accent green = small high-attention elements only (buttons, one emphasis word, icons) — never a large background fill, it reads as too loud at scale.

### Typography
- Headings/display: Poppins or Sora, Bold/ExtraBold (700–800)
- Body: Inter or Poppins, Regular/Medium (400–500)
- Hero headline pattern: one phrase in `accent` green per H1, rest in `text-primary` (e.g. "Your Old Vehicle. **A Greener** Tomorrow.") — repeat this pattern site-wide for consistency.

### Components (see design system doc for full spec)
- Buttons: fully rounded pill shape, no mixed shapes
- Feature icons: circular outline badges (1.5–2px stroke), icon + bold label + muted description
- Navbar: floating rounded pill container, `bg-dark-section` background, white nav text, accent-green active underline
- Cards: white on off-white base, 1px `border`, 12–16px radius, very soft shadow only
- Imagery: real photography (scrapyard/machinery), dark-green gradient overlay behind any text sitting on a photo

### Logo usage
- Light-background lockup (white/dark text + green accents) is the default, used everywhere on the light theme.
- Dark-background lockup used only where the logo physically sits on a dark-green surface (navbar pill, footer) — this is a fixed placement rule, not a user-facing switch.
- Maintain aspect ratio always; minimum clear space = height of the "C" in "Car" on all sides.

---

## 5. Core User Flow (no instant price estimate)

**Critical rule: the quote form never shows a calculated price.** This was explicitly removed. The flow is:

1. Visitor fills the multi-step quote form (reg number → vehicle type/condition/mileage → location/name/phone/email).
2. On submit: lead saved to MongoDB. **No price shown.**
3. On-screen message: "Thanks! We'll contact you shortly."
4. Email confirmation sent to the customer (via client's SMTP).
5. Email alert sent to admin.
6. Thank You page shows a **"Chat on WhatsApp"** button → opens `https://wa.me/{ADMIN_NUMBER}?text=...` (pre-filled message) so the customer can start a WhatsApp conversation with one tap.
7. Admin's email/dashboard notification includes a `wa.me/{customer_number}` link so admin can tap to open WhatsApp with that specific customer.
8. Lead appears in admin dashboard with status `new`.

**WhatsApp is implemented via free Click-to-Chat (`wa.me`) links only** — not the paid WhatsApp Business API. There is no way to auto-send an outbound WhatsApp message from the server for free; if the client wants fully automated outbound WhatsApp later, that requires a paid provider (Twilio, Gupshup, Interakt, etc.) and should be scoped as a separate change request, not assumed as included.

The homepage hero quote widget and the standalone `/get-a-quote` page must use **the same shared quote-form component** — do not build two separate implementations.

---

## 6. Admin Dashboard

Internal-only, simple email+password auth for a small fixed set of users. No self-signup, no public registration.

**Lead status lifecycle:** `new → contacted → scheduled → collected → paid` (with `contacted → new` for re-queue and `scheduled → contacted` for reschedule).

Every lead card must show a **"Chat on WhatsApp"** quick-action button (`wa.me/{customer_number}`).

**Also includes:**
- Parts inventory CRUD (title, make/model, price, condition, images via S3, in-stock toggle)
- Blog/content publishing CMS (title, slug, body, images, meta title/description, target keywords)
- Basic analytics/reporting (pulled from GA4)

Do not over-build this into a role/permission system unless explicitly asked later.

---

## 7. Data Models (MongoDB, plain JS/Mongoose)

```js
// Lead
{
  regNumber, vehicleType, condition, mileage, location,
  customerName, phone, email,
  status: 'new' | 'contacted' | 'scheduled' | 'collected' | 'paid',
  visitorId, // links to analytics session — see Section 8
  createdAt
}

// Part
{
  title, vehicleMakeModel, price, condition, images: [], inStock
}

// BlogPost
{
  title, slug, body, images: [],
  metaTitle, metaDescription, targetKeywords: [],
  publishedAt
}
```

**No `estimatedAmount` field and no `PricingConfig` collection** — there is no price calculation anywhere in this build. **No `User`/`Customer` collection** — leads are captured per-submission, no accounts.

---

## 7a. Image Uploads (Parts & Blog) — S3 via presigned URLs, no AWS keys in code

The client provisions AWS infrastructure manually via the AWS Console (bucket creation, IAM roles/policies) — **the app itself never provisions infra and never stores AWS access keys.**

**Packages:**
```bash
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
```
Never install `aws-sdk` (legacy v2) or `multer-s3`.

**Auth model:** the EC2 instance has an **IAM Role attached at the instance level** (via AWS Console → EC2 → Security → Modify IAM role), scoped to `s3:PutObject` / `s3:GetObject` on the project's bucket only. The SDK auto-detects credentials from EC2 instance metadata — **no `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` in `.env`, ever.** `.env` only needs `AWS_REGION` and `AWS_S3_BUCKET`.

**Upload flow (files never touch the backend server):**
1. Admin dashboard calls `POST /api/uploads/presign` with `{ fileName, contentType }`.
2. Backend (`integrations/s3.js`) generates a short-lived presigned `PutObject` URL via `@aws-sdk/s3-request-presigner`.
3. Frontend uploads the file **directly to S3** with a plain `fetch(url, { method: 'PUT', body: file })` — no multipart form data through Express.
4. Frontend saves the resulting S3 object URL to the relevant `Part` or `BlogPost` document via the normal API.

This keeps the backend stateless for uploads and avoids ever handling raw file buffers server-side.

---

## 8. Visitor Identification (no login, but not fully anonymous)

The site stays login-free, but visitors shouldn't be fully anonymous either. Approach:

1. On first page load, generate a `visitorId` (UUID), store in a long-lived cookie/localStorage.
2. Send `visitorId` with every GA4 event as a custom dimension — this stitches a visitor's full journey together across sessions without ever requiring signup.
3. If/when that visitor submits the quote or contact form, attach their `visitorId` to the resulting Lead document — lets admin later see "everything this customer did on-site before contacting us."
4. Anyone who *does* convert is automatically non-anonymous anyway (name/phone/email are required fields on both quote and contact forms) — no extra work needed there.

**GA4 tracking — minimum required events:** `page_view`, `quote_form_started`, `quote_form_step_completed` (per step, to see drop-off), `quote_form_submitted`, `whatsapp_button_clicked`, `contact_form_submitted`, `blog_post_viewed`, `phone_number_clicked`.

GA4 must be gated behind the CookieYes consent banner — don't fire tracking before consent.

---

## 9. SEO Requirements (heavily weighted priority)

**Context:** the client wants CarCrush24 to outrank Mariinox and become the #1 result for vehicle-scrapping searches in India. The competitive bar is currently low (almost no other real competitor shows up), so technical execution matters a lot here — but ranking #1 nationally also depends on ongoing content/backlinks after launch, which is outside pure dev scope. Set that expectation, don't assume the build alone guarantees #1.

**Dev-owned technical SEO checklist (must all be true at launch):**
- Next.js SSR/SSG on all public pages; optimized images (`next/image`, WebP via S3+CloudFront); target "Good" Core Web Vitals on mobile
- Structured data: `LocalBusiness` (Home/Contact), `Service` (each service page), `Product` (parts listings), `FAQPage`, `Article` (blog), `BreadcrumbList` site-wide
- Unique, keyword-targeted `<title>` + meta description on every single page — no defaults left unedited
- Open Graph + Twitter Card tags on every page
- Auto-generated XML sitemap + robots.txt, submitted to Search Console at launch; `/admin` excluded from both
- Clean keyword-containing URL slugs (`/services/scrapping`, never `/page?id=3`)
- Mobile-first indexing verified explicitly via Google's Mobile-Friendly Test
- Consistent NAP (Name, Address, Phone) site-wide, matching Google Business Profile
- Internal linking: every service page → Get a Quote + 2 related blog posts; every blog post → a relevant service page
- Descriptive, keyword-relevant alt text on every image
- HTTPS + canonical tags everywhere

**Content/authority SEO (client/marketing-owned post-launch, dev just builds the system for it):** the CMS must make it easy for a non-technical person to publish blog posts targeting keyword clusters like "scrap car [city]," "cash for scrap vehicle India," "RC cancellation after scrapping," "government scrappage policy India," etc.

---

## 10. Explicitly Out of Scope

Do not build any of the following, even if it seems like a quick add — all were explicitly discussed and cut:

- Customer login / accounts / authentication
- Payment gateway
- Native mobile app
- SMS notifications (any provider)
- Instant/live price estimate on the quote form
- Paid WhatsApp Business API automation (flagged as a possible future add-on, not this phase)
- Dark mode / theme toggle of any kind
- TypeScript anywhere in the codebase
- Live/real-time scrap commodity pricing feed
- Anything not in the signed SOW without a signed change request

---

## 11. Third-Party Integrations Reference

| Integration | Used for | Cost |
|---|---|---|
| Vehicle Data API (Vahan/VIN decoder) | Optional auto-fill in quote form step 1 | ₹2,000–₹6,000/mo |
| Client's own SMTP | Email confirmations/alerts | ₹0 |
| WhatsApp Click-to-Chat (`wa.me` links) | Customer↔admin handoff | ₹0 (free, no API) |
| Google Maps API | Pickup location, contact page map | ₹0–₹500/mo |
| GA4 + Search Console | Analytics, SEO tracking | Free |
| AWS S3 | Parts/blog images — via presigned URLs, EC2 IAM role auth (no access keys, no aws-sdk v2 — see Section 7a) | ₹200–₹1,000/mo |
| CookieYes | Consent banner (gates GA4) | Free–₹800/mo |
| AWS EC2 | Hosting | ₹2,000–₹5,000/mo |

---

## 12. Suggested Folder Structure

```
/pages
  index.js
  /services
    index.js, scrapping.js, recycling.js, parts-sales.js,
    free-collection.js, paperwork.js, metal-trading.js
  get-a-quote.js
  about.js
  /blog
    index.js, [slug].js
  contact.js
  thank-you.js
  404.js
  privacy-policy.js, terms.js, cookie-policy.js, licenses.js
  /admin
    login.js, leads.js, parts.js, blog-manager.js, dashboard.js

/components
  /shared         → Header, Footer, SEO
  /quote-form     → the ONE shared multi-step quote component
  /ui             → buttons, cards, inputs (Tailwind design system)

/lib
  /api
  /db
  /integrations   → vehicle-api.js, whatsapp.js, smtp.js, maps.js, analytics.js, s3.js

/routes
  uploads.js      → POST /api/uploads/presign (S3 presigned URL generation)

/models
  Lead.js, Part.js, BlogPost.js
```

All files `.js`/`.jsx` only.

---

## 13. Reference Documents

- `CarCrush24_Proposal_SOW.pdf` — signed scope, pricing, timeline. Source of truth for what's contractually in/out of scope.
- `CarCrush24_Developer_Reference.md` — full expanded version of this file with all diagrams (Mermaid: sitemap, user flow, quote engine, lead lifecycle, architecture, data model ERD, Gantt timeline).
- `CarCrush24_Design_System.md` — full design system for the UI/UX designer (type scale, spacing tokens, component specs, imagery/icon guidance, accessibility notes).

When in doubt about a business or design decision not covered above, check these three files before asking the client again — most day-to-day questions have already been answered in one of them.