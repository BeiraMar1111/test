# Arcwell Dental Studio — Design Guide

> Версия 1.0 · Главная страница (full-arch implants)  
> Файлы токенов: `src/dental/styles/tokens.css`

---

## 1. Brand essence

| | |
|---|---|
| **Positioning** | Premium full-arch implant specialist |
| **Tone** | Calm, expert, human — not salesy, not clinical-cold |
| **Visual metaphor** | Private studio + modern healthcare + editorial magazine |
| **Avoid** | Blue/white dental clichés, stock smile close-ups, urgency tactics |

---

## 2. Color palette

### Primary surfaces

| Token | Hex | Use |
|-------|-----|-----|
| Background | `#F6F2EB` | Page base — warm cream |
| Background alt | `#EDE8DF` | Alternate sections (approach) |
| Surface | `#FFFFFF` | Cards, form, menu panel |
| Surface muted | `#FAF8F4` | Solution section, testimonials bg |

### Text

| Token | Hex | Use |
|-------|-----|-----|
| Text primary | `#1A1814` | Headlines, body |
| Text secondary | `#5C574F` | Lead paragraphs, descriptions |
| Text muted | `#8A847A` | Captions, disclaimers, placeholders |

### Brand accents

| Token | Hex | Use |
|-------|-----|-----|
| Accent (primary) | `#3D4F44` | Primary buttons, journey panel, logo mark |
| Accent hover | `#2F3D35` | Button hover |
| Accent soft | `#E8EDE9` | Focus rings, hover backgrounds |
| Bronze | `#A68452` | Overlines, decorative accents |
| Bronze soft | `#F0E8DA` | Warm highlights on dark panels |

### Borders

| Token | Value |
|-------|-------|
| Border | `rgba(26, 24, 20, 0.10)` |
| Border strong | `rgba(26, 24, 20, 0.18)` |

### CSS variables (copy-paste)

```css
--color-bg: #f6f2eb;
--color-accent: #3d4f44;
--color-bronze: #a68452;
--color-text: #1a1814;
```

---

## 3. Typography

### Font families

| Role | Font | Fallback |
|------|------|----------|
| **Display** | Cormorant Garamond | Georgia, serif |
| **Body / UI** | Instrument Sans | system-ui, sans-serif |

Google Fonts import (already in `dental.html`):

```
Cormorant+Garamond:wght@400;500;600
Instrument+Sans:wght@400;500;600
```

### Type scale

| Name | Size (desktop) | Weight | Use |
|------|----------------|--------|-----|
| Display XL | `clamp(2.75rem, 5vw, 4.5rem)` | 500 | Hero H1 |
| Display MD | `clamp(1.75rem, 2.5vw, 2.5rem)` | 500 | Section H2 |
| Heading | `clamp(1.375rem, 2vw, 1.75rem)` | 500 | H3, cards |
| Body LG | `1.125rem` (18px) | 400 | Lead text |
| Body | `1rem` (16px) | 400 | Default |
| Body SM | `0.9375rem` (15px) | 400/500 | Cards, nav |
| Caption | `0.8125rem` (13px) | 400 | Form hints, footer |
| Overline | `0.75rem` (12px) | 600 | Section labels — **uppercase, letter-spacing 0.14em, bronze color** |

### Rules

- Headlines: Cormorant, `-0.02em` letter-spacing, `text-wrap: balance`
- Overlines always: uppercase + bronze + wide tracking
- Max line length for leads: ~52 characters (`max-width: 52ch`)
- No ALL CAPS except overlines and small UI labels

---

## 4. Spacing system

Base unit: **8px** (0.5rem)

| Token | Value | Typical use |
|-------|-------|-------------|
| `--space-2` | 8px | Tight gaps |
| `--space-4` | 16px | Form fields, inline gaps |
| `--space-6` | 24px | Card padding (mobile) |
| `--space-8` | 32px | Section internal gaps |
| `--space-12` | 48px | Between content blocks |
| `--space-16` | 64px | Section header margin |
| `--space-20` | 80px | Hero padding |
| Section gap | `clamp(5rem, 10vw, 8rem)` | Between page sections |

### Container

| Property | Value |
|----------|-------|
| Max width | `1440px` |
| Padding desktop | `clamp(1.25rem, 4vw, 3rem)` |
| Padding mobile | `1.25rem` (≤768px), `1rem` (≤480px) |

---

## 5. Buttons

### Primary

```
Background: #3D4F44
Text: #FAF8F4
Border: 1.5px solid #3D4F44
Padding: 0.9rem 1.75rem
Radius: 4px
Font: Instrument Sans, 15px, weight 500
Hover: #2F3D35 + subtle shadow
Min height (mobile): 48px
```

**Labels:** «Book a private consultation», «Book consultation», «Request consultation»

### Secondary (outline)

```
Background: transparent
Text: #3D4F44
Border: 1.5px solid rgba(26,24,20,0.18)
Hover: #E8EDE9 background
```

### Ghost

```
Background: transparent
Text: #1A1814
Border: 1.5px solid rgba(26,24,20,0.18)
Hover: white surface
```

### Sizes

| Variant | Padding | Font |
|---------|---------|------|
| Default | 0.9rem 1.75rem | 15px |
| Small (`btn--sm`) | 0.65rem 1.25rem | 13px |
| Full width (`btn--full`) | same, width 100% | — |

### Do / Don't

- ✅ Specific CTA: «Book a private consultation»
- ✅ Repeat CTA after proof sections
- ❌ Generic «Contact us»
- ❌ Pill-shaped / overly rounded buttons
- ❌ Red urgency buttons

---

## 6. Cards & surfaces

| Element | Radius | Border | Shadow |
|---------|--------|--------|--------|
| Buttons | 4px | 1.5px | hover only |
| Images | 16px | — | soft on hover |
| Cards (solution, testimonial) | 16px | 1px border | hover: card shadow |
| Journey panel | 16px (8px mobile inner) | — | none (solid accent fill) |
| Form | 16px | — | soft shadow |

**Shadow tokens:**
- Soft: `0 12px 40px rgba(26,24,20,0.06)`
- Card: `0 4px 24px rgba(26,24,20,0.05)`

---

## 7. Imagery

### Style direction

- Soft 3D / Pixar-adjacent illustrations OR editorial photography
- Mature adults (45–70), natural expressions
- Sage/cream wardrobe matching brand palette
- **No** mouth macro shots, **no** generic stock smiles

### Current assets (`public/dental/`)

| File | Placement |
|------|-----------|
| `arcwell-hero-patient.png` | Hero primary |
| `arcwell-clinical.png` | Hero secondary |
| `arcwell-before.png` / `arcwell-after.png` | Before/after slider |
| `arcwell-clinician.png` | Team section |
| `arcwell-suite.png` | Clinical approach |

### Image treatment

```css
object-fit: cover;
object-position: center 12–15%;
border-radius: 16px;
background: linear-gradient(160deg, #f6f2eb, #e8ede9);
```

---

## 8. Key components

### Header (sticky)

- Height: 72px desktop / 60px mobile
- Scrolled: cream blur background + bottom border
- Mobile: hamburger → full-screen menu (solid cream, not transparent)

### Trust strip

- Horizontal credentials bar
- Mobile: stacked vertical list

### Journey tabs

- Desktop: vertical tab list + green panel
- Mobile: horizontal scroll pills + panel inside white card

### Before/after slider

- Drag handle: white circle, 40–44px (touch-friendly)
- Labels: «Before» / «After» on mobile
- Aspect ratio: 1:1 mobile, 4:5 desktop

### FAQ accordion

- Border-bottom dividers
- Plus/minus icon animation
- First item open by default

### Sticky mobile CTA

- Fixed bottom bar: Call (52px) + Book consultation (flex)
- Height ~68px + safe-area-inset
- Scroll-to-top button sits above bar

---

## 9. Section rhythm (page map)

```
1. Hero — H1 + dual CTA + hero images
2. Trust strip — credentials
3. Problem — emotional relevance
4. Treatment — All-on-4 / 6 / full-mouth
5. Journey — 5-step interactive timeline
6. Results — before/after slider + gallery
7. Approach — clinical differentiation
8. Clinician — lead specialist
9. Testimonials — 3 patient voices
10. FAQ — objection handling
11. CTA + form — conversion
12. Footer
```

---

## 10. Mobile breakpoints

| Breakpoint | Behavior |
|------------|----------|
| ≤1100px | Single column grids, hamburger nav |
| ≤768px | Sticky CTA, full-width buttons, journey horizontal tabs |
| ≤480px | Tighter padding, single-column gallery |

### Mobile-specific rules

- Touch targets: minimum **48px** height
- Hero: text first, one image below
- Section titles: `text-wrap: balance`, controlled line breaks
- Footer padding-bottom accounts for sticky bar
- Header always solid background on mobile

---

## 11. Motion & interaction

| Interaction | Spec |
|-------------|------|
| Button hover | `translateY(-1px)` + color transition 180ms |
| Scroll reveal | Fade up 24px, 700ms ease (sections with `data-reveal`) |
| FAQ | Accordion expand/collapse 280ms |
| Journey tabs | Instant content swap |
| Before/after | Pointer drag, touch-supported |
| Scroll-to-top | Appears after 400px scroll |

Respect `prefers-reduced-motion` in production build.

---

## 12. Content & voice

| Principle | Example |
|-----------|---------|
| Benefit-led | «Fixed teeth that feel like yours again» |
| Specific CTA | «Book a private consultation» |
| No fake stats | Use placeholders `[Phone number]` |
| Reassurance | «No obligation. Written treatment plan before you decide.» |
| Plain language | Explain All-on-4 without jargon first |

---

## 13. Figma handoff checklist

When transferring to Figma, create these styles:

**Colors:** 10 swatches from section 2  
**Text styles:** 8 styles from section 3  
**Components:** Button (3 variants × 2 sizes), Input, FAQ item, Journey tab, Header, Sticky CTA  
**Frames:** Desktop 1440px, Mobile 390px  
**Grid:** 12 col desktop, 4 col mobile, 24px gutter  

---

## 14. File reference

| Asset | Path |
|-------|------|
| Design tokens | `src/dental/styles/tokens.css` |
| Component styles | `src/dental/styles/homepage.css` |
| Page component | `src/dental/DentalHomepage.tsx` |
| Illustrations | `public/dental/*.png` |
| Strategy (EN) | `docs/arcwell-dental-design-strategy.md` |
| Client brief (RU) | `docs/arcwell-obosnovanie-dlya-zakazchika.md` |
