# TOPLINKS Taste UI/UX Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade TOPLINKS website to an anti-slop, bespoke UI/UX experience adhering to `taste-skill` standards with authentic branding colors extracted from toplinks.vn (`#153e4d`, `#fbee41`, `#0a0a0a`).

**Architecture:** Refactor design tokens in `MASTER.md` and `assets/css/style.css`, eliminate artificial mesh/glassmorphism AI tropes, adopt cohesive Toplinks branding palette and subtle micro-interactions across all 6 pages (`index.html`, `about.html`, `solutions.html`, `training.html`, `tools.html`, `contact.html`).

**Tech Stack:** HTML5 Semantic, Tailwind CSS utility layer customized with brand tokens, Vanilla JavaScript, Lucide SVG icons, Taste-Skill Anti-Slop Motion & Layout rules.

**Spec:** `docs/superpowers/specs/2026-11-12-toplinks-taste-uiux-upgrade-spec.md`

## Global Constraints
- Primary Brand Color: `#153e4d` (Deep Teal-Navy)
- Accent Highlight Color: `#fbee41` (Toplinks Signature Yellow)
- Text Color: `#0a0a0a` with high contrast (WCAG AAA)
- Anti-Slop Rules: No tacky mesh gradients (`bg-corporate-mesh`), no blurred glass cards (`glass-card`), no pulsing dots, no emojis as icons.
- Micro-interactions: subtle 2px hover lift (`transform: translateY(-2px)`), solid transition timings (150-250ms).
- All 8 verification test suites in `tests/` must pass cleanly.

## Review Focus
1. Brand color consistency: ensure all primary buttons, headers, active tabs, and accents match `#153e4d` and `#fbee41`.
2. Responsive padding and layout rhythm: check mobile drawer, 375px, 768px, and 1440px desktop layouts.
3. WCAG contrast and focus rings: all interactive elements have visible `#153e4d` focus rings and 4.5:1+ text contrast.
4. Clean imagery & social proof: verify logos, portrait photos, and partner badges are sharp and well-aligned.
5. Form usability: contact form inputs must be clearly defined with solid borders and friendly feedback toasts.

---

### Task 1: Update Design System Master & Global CSS Tokens

**Files:**
- Modify: `design-system/toplinks/MASTER.md`
- Modify: `assets/css/style.css`
- Test: `tests/verify-assets.js`

**Interfaces:**
- Produces: CSS variables `--color-primary: #153e4d`, `--color-accent: #fbee41`, `--color-secondary: #165751`, `--color-text: #0a0a0a`, and anti-slop utility classes.

- [ ] **Step 1: Update `design-system/toplinks/MASTER.md` with toplinks.vn color tokens and taste-skill guidelines**
- [ ] **Step 2: Rewrite `assets/css/style.css` to define brand tokens and replace mesh/glass classes with clean taste classes**
- [ ] **Step 3: Run `node tests/verify-assets.js` to ensure assets and stylesheets are intact**
- [ ] **Step 4: Commit Task 1 changes**

---

### Task 2: Refactor `index.html` (Trang chủ) with Anti-Slop Layout & Toplinks Palette

**Files:**
- Modify: `index.html`
- Test: `tests/verify-index.js`

**Interfaces:**
- Consumes: Global CSS tokens from `assets/css/style.css`.
- Produces: Polished homepage with clean Hero, authentic Toplinks Yellow accents, Deep Navy header and sections, Co-Creation process, and B2B client proof.

- [ ] **Step 1: Update Header, announcement bar, and navigation to Toplinks navy/yellow identity**
- [ ] **Step 2: Redesign Hero Section to eliminate generic AI mesh and feature strong typography and clean CTA**
- [ ] **Step 3: Overhaul Solution Bento Grid, Co-Creation 4-step workflow, and Testimonials with clean cards**
- [ ] **Step 4: Refactor Footer with full Toplinks corporate details (152 Võ Văn Kiệt, Q1, TP.HCM)**
- [ ] **Step 5: Run `node tests/verify-index.js` to verify test compliance**
- [ ] **Step 6: Commit Task 2 changes**

---

### Task 3: Refactor `about.html` (Về chúng tôi) & `solutions.html` (Giải pháp)

**Files:**
- Modify: `about.html`
- Modify: `solutions.html`
- Test: `tests/verify-about.js`
- Test: `tests/verify-solutions.js`

**Interfaces:**
- Consumes: Global CSS tokens and header/footer components.
- Produces: Professional corporate story, verified leadership team profiles, and structured B2B solution matrices.

- [ ] **Step 1: Refactor `about.html` with Co-Creation philosophy, 5 core values, and authentic expert cards**
- [ ] **Step 2: Run `node tests/verify-about.js`**
- [ ] **Step 3: Refactor `solutions.html` with clean service tiers, KPI/OKR frameworks, and transparent ROI comparison**
- [ ] **Step 4: Run `node tests/verify-solutions.js`**
- [ ] **Step 5: Commit Task 3 changes**

---

### Task 4: Refactor `training.html` (Đào tạo), `tools.html` (Trắc nghiệm), & `contact.html` (Liên hệ)

**Files:**
- Modify: `training.html`
- Modify: `tools.html`
- Modify: `contact.html`
- Test: `tests/verify-training.js`
- Test: `tests/verify-tools.js`
- Test: `tests/verify-contact.js`

**Interfaces:**
- Consumes: Global design tokens and interactive script components.
- Produces: Sleek AI/Leadership training course catalog, interactive assessment quiz widget, and conversion-optimized contact form.

- [ ] **Step 1: Refactor `training.html` (course filter, HRAI / Leadership modules, clean tags)**
- [ ] **Step 2: Run `node tests/verify-training.js`**
- [ ] **Step 3: Refactor `tools.html` (MBTI, DISC, STVT assessment cards and interactive widget styling)**
- [ ] **Step 4: Run `node tests/verify-tools.js`**
- [ ] **Step 5: Refactor `contact.html` (clean input fields, office address, consultation form)**
- [ ] **Step 6: Run `node tests/verify-contact.js`**
- [ ] **Step 7: Commit Task 4 changes**

---

### Task 5: Comprehensive Cross-Page Audit & Verification

**Files:**
- Test: `tests/verify-all-links.js`
- Test: All suites

**Interfaces:**
- Verifies all 6 pages have 100% link integrity, responsive navigation, and WCAG accessibility standards.

- [ ] **Step 1: Run full test suite `node tests/verify-all-links.js`**
- [ ] **Step 2: Verify responsive rendering and color contrast**
- [ ] **Step 3: Final commit and summary report**
