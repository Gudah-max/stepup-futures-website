# StepUp Futures CIC — Website Context Document

Use this document to understand the full details of the StepUp Futures CIC website project before making any changes or additions.

---

## Organisation Details

| Field | Value |
|-------|-------|
| **Name** | StepUp Futures CIC (Community Interest Company) |
| **Founded** | 2019 |
| **Location** | Coventry, West Midlands, UK |
| **Phone** | 07506285601 |
| **Email** | info@stepupfutures.org |
| **Website** | www.stepupfutures.org |
| **Company No** | 13987644 |
| **Bank** | Lloyds — Sort: 30-98-97, Acc: 77208763 |
| **Director** | Napoleon Guda (formerly listed as Francis Page) |
| **LinkedIn** | linkedin.com/company/francis-page-education-and-careers/ |
| **GitHub Repo** | github.com/Gudah-max/stepup-futures-website |

---

## Brand Identity

| Token | Value |
|-------|-------|
| **Primary (Navy)** | `#0E2A47` |
| **Accent (Orange)** | `#F58220` |
| **Light Grey** | `#F4F6F8` |
| **Heading Font** | Outfit |
| **Body Font** | Inter |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS v4 (uses `@theme` directive + CSS custom properties) |
| Animation | motion/react (Framer Motion v12) |
| Router | Custom SPA router — `window.history.pushState` (no react-router) |
| Forms | Netlify Forms (`data-netlify`, `netlify-honeypot`) |
| Hosting | Netlify |
| SPA Routing | `public/_redirects` → `/* /index.html 200` |
| Version Control | Git → GitHub (`main` branch) |

---

## File Structure

```
stepup_futures_cic/
├── index.html                          # SEO meta tags, OG, Twitter Card, 3x JSON-LD
├── public/
│   ├── hero-bg.jpeg                    # Hero section background photo (school assembly)
│   ├── sitemap.xml                     # 8 URLs
│   ├── robots.txt
│   └── _redirects                      # Netlify SPA routing
├── src/
│   ├── App.tsx                         # Client-side router + cookie consent
│   ├── index.css                       # Tailwind v4 theme tokens
│   ├── main.tsx
│   ├── lib/
│   │   └── resumeApi.ts               # Mock AI analysis engine
│   ├── components/
│   │   ├── shared.tsx                  # Navbar, Footer, CookieBanner, Button, SectionHeading
│   │   └── resume/
│   │       ├── UploadBox.tsx          # Drag & drop file upload
│   │       ├── ScoreCard.tsx          # Animated circular score display
│   │       ├── ProgressBar.tsx        # Animated metric bars
│   │       ├── SuggestionsList.tsx    # Tabbed insights panel
│   │       ├── RewritePanel.tsx       # AI rewrite + copy + download
│   │       └── JobMatch.tsx           # Job description matcher
│   └── pages/
│       ├── HomePage.tsx
│       ├── ImpactPage.tsx
│       ├── BlogPage.tsx
│       ├── NewsPage.tsx
│       ├── ResumeToolPage.tsx
│       ├── PrivacyPage.tsx
│       ├── CookiePage.tsx
│       └── TermsPage.tsx
```

---

## Pages & Routes

| Page | Route | File |
|------|-------|------|
| Home | `/` | `HomePage.tsx` |
| Our Impact | `/impact` | `ImpactPage.tsx` |
| Blog | `/blog` | `BlogPage.tsx` |
| News | `/news` | `NewsPage.tsx` |
| AI CV Optimiser | `/resume-tool` | `ResumeToolPage.tsx` |
| Privacy Policy | `/privacy-policy` | `PrivacyPage.tsx` |
| Cookie Policy | `/cookie-policy` | `CookiePage.tsx` |
| Terms of Service | `/terms` | `TermsPage.tsx` |

---

## Router — How It Works

- Defined in `src/App.tsx`
- `Page` type: `'home' | 'impact' | 'blog' | 'news' | 'privacy' | 'cookie' | 'terms' | 'resume-tool'`
- `navigate(page)` calls `window.history.pushState` and updates `<title>` + meta tags
- `pageFromPath()` reads `window.location.pathname` to support direct URL access
- `popstate` listener handles browser back/forward
- To add a new page: add to the `Page` type, `pageTitles`, `pageDescriptions`, `pageFromPath()`, `pageToPath`, and `renderPage()` switch

---

## Shared Components (`src/components/shared.tsx`)

### `<Button>`
- Props: `variant` (`primary` | `secondary` | `outline` | `ghost`), `href`, `onClick`, `className`, `disabled`
- Primary = orange background, Outline = transparent with white border

### `<SectionHeading>`
- Props: `title`, `subtitle`, `light` (dark bg variant), `centered`
- Animated with motion/react on scroll into view

### `<Navbar>`
- Fixed top, transparent on home hero, solid white on scroll/other pages
- Dropdown menus: Services, Programmes, More (includes AI CV Optimiser link)
- Mobile hamburger menu with expandable dropdowns

### `<Footer>`
- Links to all pages including legal pages
- Includes AI CV Optimiser link
- Newsletter signup, social links, company registration info

### `<CookieBanner>`
- Fixed bottom bar, shown when `localStorage.getItem('stepup_cookie_consent')` is null
- Accept stores `'accepted'`, Decline stores `'declined'`

---

## Home Page Sections (`HomePage.tsx`)

1. **Hero** — Full-screen, background photo (`/hero-bg.jpeg`) with `bg-navy/70` tint overlay + orange gradient. Headline, subtitle, 2 CTAs, 4 stat counters (50+ Schools, 10,000+ Students, 500+ Workshops, 85% Career Pathways)
2. **About** — Who We Are, 3 highlights, image
3. **Services** — 6 service cards with booking modal trigger
4. **Programs** — 5 STEP-UP programmes with booking CTA
5. **AI Feature** — Highlight of the AI CV Optimiser tool
6. **Meet Our Team** — Team member cards
7. **Testimonials** — 4 quotes from students/schools
8. **Partners** — Marquee of partner logos
9. **Impact Stats** — Animated stat counters
10. **Schools & Colleges** — Partner institutions
11. **Make An Impact** — Donation/support CTA
12. **FAQ** — 6 expandable Q&As
13. **CTA Banner** — Final call to action
14. **Newsletter** — Netlify form email signup
15. **Contact** — Contact form (Netlify) + address/phone/email

---

## Impact Page (`ImpactPage.tsx`)

- 6 headline stat cards
- Annual Outcomes table: 2022–23, 2023–24, 2024–25
- 3 case studies
- 8 Gatsby Benchmark cards (UK careers education statutory framework)
- CTA section

---

## Blog Page (`BlogPage.tsx`)

- 6 blog posts with: slug, category, date, readTime, image, featured flag
- Categories: Careers Education / Employability / Student Guidance
- Category filter buttons
- Featured post hero layout + article grid
- Newsletter CTA at bottom

---

## News Page (`NewsPage.tsx`)

- 6 news items with type tags: Press Release, Partnership, Innovation, Achievement, Event, Community
- Colour-coded tag system
- Featured story layout
- Media contact CTA

---

## AI CV Optimiser (`ResumeToolPage.tsx` + `src/lib/resumeApi.ts`)

### Features
| Feature | Description |
|---------|-------------|
| File Upload | Drag & drop or click — PDF/DOCX, max 10MB |
| File Validation | Type check + size check with error messages |
| Overall Score | Animated circular score card (out of 100) |
| ATS Score | Animated circular ATS compatibility score |
| Breakdown | 5-metric animated progress bars (Clarity, Impact, Formatting, Keywords, ATS) |
| AI Insights | Tabbed panel: All / Strengths / Improvements / Missing Skills |
| AI Rewrite | Full CV rewrite displayed in editable textarea |
| Copy to Clipboard | One-click copy of rewritten CV |
| Download | Download improved CV as `.txt` file |
| Job Match | Paste job description → match % + matched/missing keywords + suggestions |
| Demo Mode | "Try Demo" button runs full analysis without uploading a file |
| Loading States | Spinner + animated status pills during analysis |
| Analysing Screen | Full-panel loading state with processing steps |
| CTA | "Speak to an Adviser" links to `/#contact` |

### Mock API (`resumeApi.ts`)
- `analyzeResume(file)` → returns score, ats, clarity, impact, formatting, keywords, suggestions, missingSkills, strengths, rewrittenResume
- `rewriteResume(file, text)` → returns improved resume string
- `matchJob(resumeText, jobDescription)` → returns score, matchedKeywords, missingKeywords, suggestions
- `downloadAsText(text, filename)` → triggers browser file download
- **To connect real AI**: replace mock delay functions with Claude API / OpenAI API calls

---

## Legal Pages

| Page | Key Content |
|------|-------------|
| Privacy Policy | 12 sections — UK GDPR compliant, ICO reference, data retention, user rights |
| Cookie Policy | Cookie table (GA4, functional), browser management links |
| Terms of Service | 11 sections — governing law: England & Wales |

---

## SEO Setup (`index.html`)

- Full meta tags: title, description, keywords, robots, canonical
- Open Graph: title, description, image, locale, site_name
- Twitter Card: summary_large_image
- 3× JSON-LD schemas: Organization, NGO, WebSite (with SearchAction)
- Dynamic per-page updates via `updateMeta()` in `App.tsx`

---

## Sitemap (`public/sitemap.xml`)

| URL | Priority | Frequency |
|-----|----------|-----------|
| `/` | 1.0 | weekly |
| `/impact` | 0.9 | monthly |
| `/blog` | 0.8 | weekly |
| `/news` | 0.8 | weekly |
| `/resume-tool` | 0.8 | monthly |
| `/privacy-policy` | 0.3 | yearly |
| `/cookie-policy` | 0.3 | yearly |
| `/terms` | 0.3 | yearly |

---

## Deployment

| Step | Status |
|------|--------|
| Git initialised | Done |
| Initial commit | Done (31 files) |
| Pushed to GitHub | Done — `github.com/Gudah-max/stepup-futures-website` |
| Netlify connected | In progress |
| Live domain | `stepupfutures.org` (to be connected after Netlify deploy) |

### Netlify Build Settings
- **Branch:** `main`
- **Base directory:** *(empty)*
- **Build command:** `npm run build`
- **Publish directory:** `dist`

---

## Programmes (5 Total)

1. STEP-UP TO A LEVELS
2. STEP-UP TO COLLEGE
3. STEP-UP INTO APPRENTICESHIPS
4. STEP-UP TO UNIVERSITY
5. STEP-UP TO WORK

---

## How to Run Locally

```bash
cd "e:\Stepup Futures Website Improvement 1\stepup_futures_cic"
npm install
npm run dev
# → http://localhost:5173
```

## How to Build for Production

```bash
npm run build
# Output in /dist folder
```

## How to Push Changes to GitHub

```bash
cd "e:\Stepup Futures Website Improvement 1\stepup_futures_cic"
git add .
git commit -m "Your message here"
git push
```

---

## Adding a New Page (Checklist)

1. Create `src/pages/NewPage.tsx`
2. Import it in `src/App.tsx`
3. Add to `Page` type union
4. Add to `pageTitles` record
5. Add to `pageDescriptions` record
6. Add to `pageFromPath()` function
7. Add to `pageToPath` record
8. Add to `renderPage()` switch statement
9. Add nav link in `src/components/shared.tsx` (Navbar + Footer)
10. Add URL to `public/sitemap.xml`
