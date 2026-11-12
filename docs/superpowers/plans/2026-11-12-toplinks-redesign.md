# TOPLINKS Multi-Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a high-converting, professional multi-page website mockup for TOPLINKS based on `ui-ux-pro-max-skill` design system standards using HTML5, Tailwind CSS, Lucide Icons, and Vanilla JavaScript.

**Architecture:** Standalone multi-page HTML5 architecture with shared design tokens in `assets/css/style.css`, shared interactive behaviors in `assets/js/main.js`, and consistent responsive header/footer navigation across all 6 pages.

**Tech Stack:** HTML5, Tailwind CSS (v3 CDN), Lucide Icons (CDN + inline SVGs), Google Fonts (Poppins & Plus Jakarta Sans), Vanilla JavaScript.

**Spec:** `docs/superpowers/specs/2026-11-12-toplinks-redesign-spec.md`

## Global Constraints
- Primary color: `#0F172A`, Secondary: `#334155`, Accent/CTA: `#0369A1` / `#0284C7`, Background: `#F8FAFC`, Card: `#FFFFFF`.
- Typography: Headings use `Poppins`, body text uses `Plus Jakarta Sans`.
- Icons must use SVG Lucide icons, never emoji characters for UI glyphs.
- Form inputs must have visible focus rings and accessible labels (WCAG compliant contrast >= 4.5:1).
- All pages must have responsive navigation with mobile drawer support and active nav indicators.

## Review Focus
1. Mobile menu toggle state: Ensures menu opens/closes cleanly without layout break or scroll lock issues.
2. Active navigation link state: Highlight current page link in navbar and mobile drawer across all pages.
3. Form validation: Contact form handles required fields gracefully and shows toast confirmation without page reload.
4. Interactive Assessment Widget in `tools.html`: Scores options dynamically and renders accurate feedback.
5. Consistent header and footer across all 6 pages with working relative links (`index.html`, `about.html`, `solutions.html`, `training.html`, `tools.html`, `contact.html`).

---

### Task 1: Shared Core Foundation & Design System Assets

**Files:**
- Create: `assets/css/style.css`
- Create: `assets/js/main.js`
- Test: `tests/verify-assets.js`

**Interfaces:**
- Produces: CSS custom properties (`--color-primary`, `--color-accent`, etc.), font imports, helper classes for smooth transitions, and `ToplinksCore` JS namespace handling mobile menu, toast notifications, and FAQ accordions.

- [ ] **Step 1: Write test verification script for shared assets**
Write `tests/verify-assets.js` using Node.js to check that `assets/css/style.css` and `assets/js/main.js` exist and contain expected design tokens and helper functions.

- [ ] **Step 2: Run verification script to confirm it fails**
Run: `node tests/verify-assets.js`
Expected: FAIL (files do not exist yet)

- [ ] **Step 3: Implement `assets/css/style.css` and `assets/js/main.js`**
Define font imports (`Poppins`, `Plus Jakarta Sans`), Tailwind config helper directives, CSS variables matching `design-system/toplinks/MASTER.md`, and JS routines for mobile drawer, toast alert, and interactive tabs.

- [ ] **Step 4: Run verification script to confirm it passes**
Run: `node tests/verify-assets.js`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add assets/ tests/
git commit -m "feat: setup shared core CSS and JS design assets"
```

---

### Task 2: Homepage (`index.html`)

**Files:**
- Create: `index.html`
- Test: `tests/verify-index.js`

**Interfaces:**
- Consumes: `assets/css/style.css`, `assets/js/main.js`, Tailwind CDN, Lucide CDN.
- Produces: Complete high-converting landing page with Hero, Social Proof, 4 Core Solutions Bento Grid, 4-step Co-Creation Methodology, Featured Training, Testimonials, and Consultation CTA.

- [ ] **Step 1: Write verification script for `index.html`**
Write `tests/verify-index.js` checking for semantic sections (`header`, `main`, `footer`), brand slogan "Co-Creation for Success", 4 solutions cards, and correct navigation links.

- [ ] **Step 2: Run test to verify it fails**
Run: `node tests/verify-index.js`
Expected: FAIL (file does not exist)

- [ ] **Step 3: Build `index.html` with full modern B2B layout**
Implement header with sticky effect, mobile menu button, hero section with badges (+100 Doanh nghiệp, 98% Hài lòng), Bento Grid for corporate solutions, 4-step co-creation roadmap, testimonials, and global footer.

- [ ] **Step 4: Run test to verify it passes**
Run: `node tests/verify-index.js`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add index.html tests/verify-index.js
git commit -m "feat: implement high-converting homepage index.html"
```

---

### Task 3: About Us Page (`about.html`)

**Files:**
- Create: `about.html`
- Test: `tests/verify-about.js`

**Interfaces:**
- Consumes: Shared header/footer, `assets/css/style.css`, `assets/js/main.js`.
- Produces: Company story, Co-creation philosophy, Mission/Vision/Values, Leadership & Advisory Board profiles, milestones.

- [ ] **Step 1: Write verification script for `about.html`**
Write `tests/verify-about.js` checking for philosophy section, 5 core values, team member cards, and milestone timeline.

- [ ] **Step 2: Run test to verify it fails**
Run: `node tests/verify-about.js`
Expected: FAIL

- [ ] **Step 3: Implement `about.html`**
Implement the page with deep brand storytelling, explaining why standard off-the-shelf consulting fails and how "Co-Creation" unlocks client internal potential. Add executive advisor cards with credentials.

- [ ] **Step 4: Run test to verify it passes**
Run: `node tests/verify-about.js`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add about.html tests/verify-about.js
git commit -m "feat: implement about us page about.html"
```

---

### Task 4: Enterprise Solutions Page (`solutions.html`)

**Files:**
- Create: `solutions.html`
- Test: `tests/verify-solutions.js`

**Interfaces:**
- Consumes: Shared navigation, design tokens.
- Produces: In-depth consulting offerings (Strategic Advisory, KPI/OKR Performance Management, Total HR Solutions, Process & Culture Optimization) with interactive ROI/impact metrics.

- [ ] **Step 1: Write verification script for `solutions.html`**
Write `tests/verify-solutions.js` checking for the 4 core B2B solutions, deliverables breakdown, and comparison matrix.

- [ ] **Step 2: Run test to verify it fails**
Run: `node tests/verify-solutions.js`
Expected: FAIL

- [ ] **Step 3: Implement `solutions.html`**
Design solution cards with clear pain points addressed, deliverables, case studies, and a Before vs. After advisory comparison table.

- [ ] **Step 4: Run test to verify it passes**
Run: `node tests/verify-solutions.js`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add solutions.html tests/verify-solutions.js
git commit -m "feat: implement enterprise solutions page solutions.html"
```

---

### Task 5: Training & Coaching Page (`training.html`)

**Files:**
- Create: `training.html`
- Test: `tests/verify-training.js`

**Interfaces:**
- Consumes: Shared navigation, `assets/js/main.js`.
- Produces: AI Competency Framework, Leadership, Management, HR Masterclass, Startup Coaching, 1:1 Executive Coaching, with interactive role filter.

- [ ] **Step 1: Write verification script for `training.html`**
Write `tests/verify-training.js` checking for featured AI framework course, course filter buttons, curriculum modules, and coaching 1:1 section.

- [ ] **Step 2: Run test to verify it fails**
Run: `node tests/verify-training.js`
Expected: FAIL

- [ ] **Step 3: Implement `training.html`**
Implement course catalog with category tabs (Tất cả, Lãnh đạo & Quản lý, AI & Chuyển đổi số, Nhân sự), detailed syllabus cards, trainer credentials, and 1:1 Coaching booking triggers.

- [ ] **Step 4: Run test to verify it passes**
Run: `node tests/verify-training.js`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add training.html tests/verify-training.js
git commit -m "feat: implement training and coaching page training.html"
```

---

### Task 6: Assessment Tools Page (`tools.html`)

**Files:**
- Create: `tools.html`
- Test: `tests/verify-tools.js`

**Interfaces:**
- Consumes: `assets/js/main.js` quiz handler.
- Produces: Psychometric assessments overview (Dermatoglyphics STVT, MBTI, DISC, Numerology) and an Interactive Mini-Assessment Widget that calculates a quick leadership style score directly in browser.

- [ ] **Step 1: Write verification script for `tools.html`**
Write `tests/verify-tools.js` checking for STVT, MBTI, DISC sections and interactive quiz elements (`#assessment-widget`, question steps, result container).

- [ ] **Step 2: Run test to verify it fails**
Run: `node tests/verify-tools.js`
Expected: FAIL

- [ ] **Step 3: Implement `tools.html` and interactive assessment logic**
Build comprehensive tool explanations and the interactive 3-question Leadership / Working Style Assessment widget that displays personalized recommendations upon submission.

- [ ] **Step 4: Run test to verify it passes**
Run: `node tests/verify-tools.js`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add tools.html tests/verify-tools.js
git commit -m "feat: implement assessment tools page with interactive widget"
```

---

### Task 7: Contact & Consultation Page (`contact.html`)

**Files:**
- Create: `contact.html`
- Test: `tests/verify-contact.js`

**Interfaces:**
- Consumes: `assets/js/main.js` form submission feedback.
- Produces: Tiered consultation inquiry form (service interest, company size, timeline), office contact details, working hours, and accordion FAQ.

- [ ] **Step 1: Write verification script for `contact.html`**
Write `tests/verify-contact.js` checking form inputs, contact coordinates (email, phone, address), and FAQ accordion items.

- [ ] **Step 2: Run test to verify it fails**
Run: `node tests/verify-contact.js`
Expected: FAIL

- [ ] **Step 3: Implement `contact.html`**
Build modern split layout: contact information & map visual on the left, interactive smart inquiry form on the right, plus an expandable FAQ accordion below.

- [ ] **Step 4: Run test to verify it passes**
Run: `node tests/verify-contact.js`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add contact.html tests/verify-contact.js
git commit -m "feat: implement contact and consultation page contact.html"
```

---

### Task 8: Navigation Integrity, Responsive & WCAG Checklist Audit

**Files:**
- Modify: All HTML files if any link or contrast adjustment is needed.
- Create: `tests/verify-all-links.js`

**Interfaces:**
- Verifies: All internal cross-page links, responsive navigation consistency, WCAG compliance standards from `ui-ux-pro-max-skill`.

- [ ] **Step 1: Write comprehensive cross-page link and audit script**
Check that every page has valid links to all other 5 pages, no dead anchors, valid SVG icon references, and meta viewport tags.

- [ ] **Step 2: Run audit script and inspect output**
Run: `node tests/verify-all-links.js`
Expected: PASS (all pages interlink seamlessly)

- [ ] **Step 3: Clean up temporary files and finalize**
Ensure `.ui-ux-pro-max-temp` is kept clean or organized, test suite is intact, and project is ready for immediate preview in any browser.

- [ ] **Step 4: Commit**
```bash
git add .
git commit -m "chore: complete audit and finalize multi-page toplinks mockup"
```
