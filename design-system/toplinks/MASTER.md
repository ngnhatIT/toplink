# Design System Master File — TOPLINKS (Anti-Slop Taste Edition)

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** TOPLINKS (toplinks.vn)  
**Standard:** tasteskill 2.5.1 / Anti-Slop Corporate Frontend Standard  
**Category:** B2B Consulting, Leadership Training & HR Solutions  
**Philosophy:** Co-Creation For Success (Hiệp lực kiến tạo để thành công)

---

## Global Rules

### Color Palette (Extracted directly from toplinks.vn)

| Role | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Primary (Toplinks Deep Navy/Teal) | `#153e4d` | `--color-primary` | Header bar, primary buttons, heading highlights, main identity |
| On Primary | `#FFFFFF` | `--color-on-primary` | Text on primary elements |
| Secondary (Forest Teal) | `#165751` | `--color-secondary` | Deep accents, sub-banners, hover links |
| On Secondary | `#FFFFFF` | `--color-on-secondary` | Text on secondary elements |
| Accent (Toplinks Signature Yellow) | `#fbee41` | `--color-accent` | High-conversion CTA buttons, badge accents, key indicators |
| Accent Hover | `#f0de2b` | `--color-accent-hover` | Hover state for accent buttons |
| On Accent | `#0a0a0a` | `--color-on-accent` | Text on accent elements (High contrast AAA) |
| Background Light | `#FFFFFF` | `--color-background` | Primary clean surface |
| Background Subdued | `#F8FAFB` | `--color-background-alt`| Alternating section backgrounds |
| Foreground / Text | `#0a0a0a` | `--color-foreground` | High-contrast body text & titles |
| Card | `#FFFFFF` | `--color-card` | Content cards (flat, crisp) |
| Card Foreground | `#0a0a0a` | `--color-card-foreground` | Card title & body |
| Muted | `#F1F4F6` | `--color-muted` | Subdued tags & borders |
| Muted Foreground | `#5A6872` | `--color-muted-foreground` | Meta descriptions & dates |
| Border | `#E2E8EC` | `--color-border` | Crisp, hairline structural dividers |
| Focus Ring | `#153e4d` | `--color-ring` | High-contrast WCAG 2.1 focus outline |

---

### Typography

- **Heading Font:** Poppins (600, 700)
- **Body Font:** Plus Jakarta Sans (400, 500, 600)
- **Google Fonts Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap');
```

---

### Taste-Skill Micro-Interactions & Motion
- **Card Lift:** Subtle 2px lift (`transform: translateY(-2px); box-shadow: 0 12px 24px -8px rgba(21, 62, 77, 0.08)`).
- **Button Active:** `transform: scale(0.98)` on press with `transition: 150ms ease`.
- **No slop:** Strictly NO purple/pink mesh gradients, NO artificial glassmorphism with heavy blur, NO bouncing/pulsing floating badges.
- **Images:** Real executive/corporate photography with subtle zoom (1.02) on hover inside rounded frames.

---

### Component Specifications

#### 1. Primary Button (Deep Teal-Navy)
```css
.btn-primary {
  background-color: #153e4d;
  color: #ffffff;
  padding: 10px 22px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 180ms ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.btn-primary:hover {
  background-color: #0f2c37;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(21, 62, 77, 0.2);
}
```

#### 2. Accent CTA Button (Toplinks Signature Yellow)
```css
.btn-accent {
  background-color: #fbee41;
  color: #0a0a0a;
  padding: 10px 22px;
  border-radius: 8px;
  font-weight: 700;
  transition: all 180ms ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.btn-accent:hover {
  background-color: #f0de2b;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(251, 238, 65, 0.4);
}
```

#### 3. Cards
```css
.taste-card {
  background-color: #ffffff;
  border: 1px solid #e2e8ec;
  border-radius: 12px;
  padding: 24px;
  transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
}
.taste-card:hover {
  transform: translateY(-2px);
  border-color: #cbd5e1;
  box-shadow: 0 12px 24px -8px rgba(21, 62, 77, 0.08);
}
```
