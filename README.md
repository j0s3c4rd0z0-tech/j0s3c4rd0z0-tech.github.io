# Jose Cardozo Portfolio — v2

> **Tech-Premium Dark Infrastructure Aesthetic**  
> Redesigned by Claude (Sonnet 4.6) — April 2026

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Production build
npm start          # Serve production build
```

Deploy to Vercel: `vercel --prod`

---

## Design System

| Token | Value |
|---|---|
| Background | `#080c14` (deep navy-black) |
| Surface card | `#111827` |
| Neon Cyan | `#00d4ff` |
| Neon Emerald | `#00ffb3` |
| Display font | `Syne` (700, 800) |
| Body font | `Inter` (300, 400) |
| Mono font | `DM Mono` (400, 500) |

---

## Changelog: v1 → v2

### 🔴 REMOVED (with reasoning)

| Removed | Reason |
|---|---|
| Light/dark mode toggle | Portfolio is dark-only — intentional brand signal for infrastructure/SRE identity |
| Photos carousel with rotations | Casual aesthetic misaligned with senior SRE positioning |
| Newsletter form | Zero engagement value; no content publishing cadence |
| Articles section (was already commented out) | Removed dead code per clean code rule |
| Twitter/Instagram links (commented out in v1) | Removed commented-out dead code |
| YOUphoria project | A sex-ed teen app on an SRE portfolio destroys brand coherence |
| "frontend enthusiast" in title/H1 | Weak word choice; undermines seniority signal |
| "I learned React this summer" in projects intro | Catastrophic authority signal for a 12-yr engineer |
| Duplicate Dell entries | Data integrity problem visible to any recruiter |
| Inverted dates on INTERACTIVE SOLUTIONS (Feb 2022 – March 2017) | Temporal paradox in resume = instant credibility loss |
| `next/future/image` import | Deprecated API in Next.js 13+ |
| Orb.gif as project logo | Visual noise, unprofessional |

### 🟢 ADDED

| Added | Reason |
|---|---|
| Typewriter role animation | Communicates breadth of SRE/infra roles without clutter |
| Ambient SVG grid background | Depth and technical aesthetic without performance cost |
| Neon glow effects on hover | Tech-Premium design language |
| Metrics row (12+ yrs, 99.9%, 5+ clouds) | Quantified authority signals above the fold |
| Tech stack grid with skill pills | Depth signaling by category (Orchestration, IaC, CI/CD...) |
| Experience timeline (cleaned, chronological) | Replaced broken Resume component |
| Contact CTA section | Conversion-focused bottom-of-page call to action |
| Status indicator (AVAILABLE) | Immediate signal for active job seeking |
| Glassmorphism header with scroll detection | Modern nav UX without JS-heavy libraries |
| DM Mono for all technical data | Monospace = credibility signal in tech contexts |
| `jsconfig.json` with path aliases | Was missing in original, caused `@/` import issues |

### 🔵 MODIFIED

| Modified | Reason |
|---|---|
| H1 copy: "Building the infrastructure that doesn't fail." | Authority framing vs. generic role list |
| About page narrative | Competency-first story vs. task enumeration |
| About page portrait | Removed `rotate-3` (casual); clean bordered card |
| Projects reframed with infra angle | K8s monitoring, CI/CD pipeline added; Boys Who Code reframed as full-stack |
| Speaking page restyled | Same content, new design system |
| Color palette | zinc/teal → slate/neon-cyan/neon-emerald |
| Typography | generic system fonts → Syne + Inter + DM Mono |

### 📁 File Structure Changes

```
src/
  components/
    Header.jsx        ← Complete rewrite
    Footer.jsx        ← Complete rewrite  
    Container.jsx     ← Simplified
    SocialIcons.jsx   ← Kept, cleaned
  pages/
    home.jsx          ← Complete rewrite
    about.jsx         ← Complete rewrite
    projects.jsx      ← Complete rewrite
    speaking.jsx      ← Restyled
    index.jsx         ← Redirect to /home
    _app.jsx          ← Simplified layout wrapper
    _document.jsx     ← Added font preloading
  styles/
    globals.css       ← New design system (was inline Tailwind only)
```

**Deleted components** (v1 only, no longer needed):
- `Button.jsx` — replaced with inline styled anchors
- `Card.jsx` — replaced with `card-gradient-border` CSS class
- `ArticleLayout.jsx` — preserved in articles/ directory
- `Prose.jsx` — still available for articles
- `Section.jsx` — replaced by direct layout
- `SimpleLayout.jsx` — replaced by page-level layout

---

## Image Optimization Note

Several source images are extremely large (Alcazaba01.jpg: 27MB, image-1.jpg: 16MB).
Before deploying to production:

```bash
# Install sharp for Next.js image optimization
npm install sharp

# Or compress manually:
find src/images/photos -name "*.jpg" -exec convert {} -quality 85 -resize "2000x2000>" {} \;
```

The photos carousel was removed in v2, so the large `image-*.jpg` files in `src/images/photos/`
are no longer referenced and can be deleted to reduce bundle size.

---

## Dependencies Added in v2

```json
"framer-motion": "^10.18.0"   // Available for future animation enhancement
```

All other dependencies unchanged from v1. Node.js 16+ required.
