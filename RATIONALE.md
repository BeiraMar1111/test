# Design Rationale — Arcwell Dental Studio
### Senior Product UX/UI Designer Assessment — Teraleads

Live prototype: https://arcwellky.netlify.app/
Design guide (tokens + components): https://arcwellky.netlify.app/design-guide.html
Figma: https://www.figma.com/design/JjYLnz1n2yzi6yo8y45onE/Halden-%E2%80%94-Homepage?node-id=26-17
Source: https://github.com/BeiraMar1111/test (amtpilot-dental)

---

## The core decision: a specialist studio, not a generic clinic

Before any UI work, I made one positioning call that shaped everything downstream: **Arcwell is a full-arch implant *specialist*, not a general dental practice that also does implants.** Most competitor pages in this niche are general clinics bolting an implants page onto a homepage built for cleanings and checkups — which undercuts the trust a five-figure, one-time procedure needs. Naming and framing the brand as a dedicated studio ("Specialists in full-arch work only — not general dentistry") is the single biggest differentiator on the page, and it's a positioning decision, not a visual one — which is the kind of thinking the brief asked for beyond "just" a visual exercise.

## UX and user journey

The page follows the actual decision arc a prospective patient walks through, not a features list:
**Recognize the problem → understand the solution exists → see it explained without jargon → see the process de-risked → see it worked for people like them → get remaining objections answered → act.**
Concretely: Hero → "Is this for you?" (problem recognition, written from the patient's lived experience, not clinical symptoms) → Treatment explanation (All-on-4 / All-on-6 / full-mouth, three concrete named paths, not one vague "implants") → 5-step interactive journey timeline → Before/after → Clinical approach (de-risking) → Team (same clinicians throughout) → Testimonials (three, each answering a *different* objection) → FAQ → low-friction consultation form. Nothing sells before the visitor understands why it applies to them.

## Conversion-focused thinking & marketing awareness

- **Dual CTA in the hero**: "Book a private consultation" (committed) and "See how treatment works" (not-yet-ready) — capturing both intent levels instead of losing the hesitant majority.
- **Testimonials are objection-mapped, not generic praise**: one addresses shame/delay ("I wish I had done this sooner"), one addresses fear of surgery (sedation, aftercare), one addresses comparison-shopping and price trust (the written plan vs. vague estimates from competitors). Each maps to a distinct funnel-drop-off reason.
- **The consultation form asks "What brings you in?"** — a one-field qualifier (All-on-4 / full-mouth / replacing dentures / not sure) that segments leads for follow-up without adding friction.
- **No fabricated stats.** Trust strip and testimonials use bracketed placeholders for registration numbers, review counts, and patient names rather than invented "500+ smiles restored" numbers. For a regulated, high-trust medical decision, a credible placeholder beats a fake statistic — and it's honest about what a real clinic still needs to supply before launch.
- **Sticky mobile CTA** keeps book/call one tap away through the whole scroll, since most research traffic for this procedure is mobile.

## Visual hierarchy & UI quality

Cream/sage/bronze palette instead of the clinical blue-and-white the category defaults to — warm and editorial rather than "hospital," which matters for an elective, confidence-driven purchase. Cormorant Garamond serif for display headlines carries the emotional weight; Instrument Sans handles UI and body copy for clarity and screen legibility — pairing built on a documented type scale (Display XL/LG/MD, Heading, Body variants, Caption, Overline), not ad hoc sizes. Everything runs on a 4px spacing grid with named tokens (`--space-*`, `--section-gap`, `--container-max`), so hierarchy is consistent section to section rather than eyeballed per block.

## Ease of use & attention to detail

- Journey section uses interactive tabs instead of a long scroll of five stacked blocks — lets a visitor jump to the step they're curious about.
- Before/after uses a drag-to-compare slider (a familiar, modern interaction pattern) rather than static side-by-side images, and is honestly labeled as stock photography for the concept demo with a "results vary" disclaimer — a real clinic swaps in anonymized cases before launch without restructuring the section.
- FAQ leads with the single most-asked, most-anxious question in this category — *"Am I too old, or have too much bone loss?"* — before pain, cost, or timeline, because candidacy anxiety is what stops people from booking a consultation at all in full-arch implants specifically (distinct from general dental FAQs).
- Sticky nav, full-screen mobile menu overlay, and a documented component library (buttons, trust strip, journey tabs, FAQ accordion, consultation form) mean the page is a reusable system, not a one-off static comp.

## Creativity & originality

The brief explicitly asked to avoid generic dental layouts. The differentiation here isn't a gimmick section — it's disciplined omission and reframing: no stock "smiling family" hero, no generic "Our Services" grid, no fabricated numbers, and copy that speaks to *living around* failing teeth (softer foods, avoiding photos, dentures slipping) instead of listing procedure names first. The specialist-studio brand concept (name, palette, editorial typography) is what makes the page feel premium and elevated rather than "a dental site with implants added."

## Execution within the 4-hour constraint

Time went into the system, not just the single screen: documented color/type/spacing tokens and a reusable component set were built alongside the homepage, so the deliverable is both a finished comp and a small design system a dev team could implement directly — prioritizing decisions that compound (positioning, hierarchy, token system) over polishing decorative detail with the time available.
