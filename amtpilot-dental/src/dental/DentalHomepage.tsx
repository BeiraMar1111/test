import { useEffect, useState } from 'react'
import { BeforeAfterSlider } from './components/BeforeAfterSlider'
import { BrandImage } from './components/BrandImage'
import { FAQAccordion } from './components/FAQAccordion'
import { ScrollToTop } from './components/ScrollToTop'
import { ASSETS } from './data/assets'
import { useScrollReveal } from './hooks/useScrollReveal'

const NAV_LINKS = [
  { label: 'Treatment', href: '#treatment' },
  { label: 'Your journey', href: '#journey' },
  { label: 'Results', href: '#results' },
  { label: 'Our approach', href: '#approach' },
  { label: 'FAQ', href: '#faq' },
]

const JOURNEY_STEPS = [
  {
    phase: '01',
    title: 'Private consultation',
    duration: 'Day 1',
    description:
      'A calm, unhurried visit to understand your history, concerns, and goals. We examine your oral health and discuss whether full-arch implants are the right path for you — with no pressure to decide on the spot.',
  },
  {
    phase: '02',
    title: '3D planning & treatment design',
    duration: 'Within 1–2 weeks',
    description:
      'CBCT imaging and digital planning map your jaw structure in detail. You receive a written treatment plan covering timeline, materials, and investment — so you know exactly what to expect before anything begins.',
  },
  {
    phase: '03',
    title: 'Surgery & provisional teeth',
    duration: 'Treatment day',
    description:
      'Implants are placed with sedation options available for anxious patients. In most cases, you leave the same day with a fixed provisional bridge — functional teeth while your implants integrate.',
  },
  {
    phase: '04',
    title: 'Healing & refinement',
    duration: '3–4 months',
    description:
      'Regular check-ins during integration. We monitor healing, adjust your provisional teeth if needed, and prepare your final restoration for fit, bite, and aesthetics.',
  },
  {
    phase: '05',
    title: 'Final restoration',
    duration: 'Completion',
    description:
      'Your permanent bridge — typically precision-crafted zirconia — is fitted, adjusted, and reviewed with you. We walk through long-term care and schedule follow-up support.',
  },
]

const FAQ_ITEMS = [
  {
    question: 'Am I too old — or have too much bone loss — for full-arch implants?',
    answer:
      'Age alone is rarely a barrier. Many patients in their 60s, 70s, and beyond are excellent candidates. Bone loss is common and often manageable with modern implant angles, additional implants, or grafting. Your suitability depends on your individual anatomy and health — which is exactly what the consultation and 3D scan are designed to assess.',
  },
  {
    question: 'How painful is the procedure?',
    answer:
      'Most patients report the experience was far less uncomfortable than they expected. Surgery is performed under local anaesthesia, with sedation available for those who prefer it. Discomfort in the days following is typically manageable with prescribed medication and clear aftercare guidance. We prioritise comfort throughout — before, during, and after treatment.',
  },
  {
    question: 'Will my new teeth look natural?',
    answer:
      'Natural appearance is a core part of our approach, not an afterthought. Your provisional and final teeth are designed around your facial structure, gum line, and personal preferences — shade, shape, and proportion. You will have opportunities to review and refine before the final bridge is made.',
  },
  {
    question: 'How long does the full process take?',
    answer:
      'Most patients receive fixed provisional teeth on the day of surgery. The final permanent bridge is typically fitted after three to four months of healing, once implants have integrated with the bone. Your written plan will outline your specific timeline.',
  },
  {
    question: 'What does treatment cost, and is financing available?',
    answer:
      'Full-arch implant treatment is a significant investment. We provide a clear, itemised written quote after your consultation and scan — no hidden add-ons discovered later. [Financing options placeholder — e.g. monthly payment plans subject to approval]. We believe you should understand the full picture before making a decision.',
  },
  {
    question: 'What if I currently wear dentures?',
    answer:
      'Many of our patients come to us after years with removable dentures — frustrated by slipping, discomfort, or difficulty eating. Full-arch implants replace the need for removable teeth entirely, giving you a fixed solution that functions more like natural teeth. We will discuss how the transition works during your consultation.',
  },
]

export function DentalHomepage() {
  useScrollReveal()
  const [menuOpen, setMenuOpen] = useState(false)
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const onScroll = () => setHeaderScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <div className="arcwell">
      {/* ── Header ── */}
      <header className={`site-header${headerScrolled ? ' is-scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
        <div className="container site-header__inner">
          <a href="#" className="site-logo" aria-label="Arcwell Dental Studio — Home">
            <span className="site-logo__mark">A</span>
            <span className="site-logo__text">
              Arcwell
              <small>Dental Studio</small>
            </span>
          </a>

          <nav className="site-nav" aria-label="Primary">
            <ul className="site-nav__list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-header__actions">
            <a href="tel:[phone]" className="site-header__phone">
              [Phone number]
            </a>
            <a href="#consultation" className="btn btn--primary btn--sm">
              Book consultation
            </a>
            <button
              type="button"
              className="site-header__menu-btn"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>

      </header>

      <div
        className={`mobile-menu${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      >
        <nav
          id="mobile-nav"
          className="mobile-menu__panel"
          aria-label="Mobile"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mobile-menu__header">
            <span className="site-logo__mark">A</span>
            <span className="mobile-menu__title">Menu</span>
            <button
              type="button"
              className="mobile-menu__close"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              ×
            </button>
          </div>
          <ul className="mobile-menu__links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-menu__actions">
            <a href="tel:[phone]" className="btn btn--ghost btn--full" onClick={() => setMenuOpen(false)}>
              Call [Phone number]
            </a>
            <a href="#consultation" className="btn btn--primary btn--full" onClick={() => setMenuOpen(false)}>
              Book a private consultation
            </a>
          </div>
        </nav>
      </div>

      <main>
        {/* ── Hero ── */}
        <section className="hero" aria-labelledby="hero-heading">
          <div className="container hero__grid">
            <div className="hero__content" data-reveal>
              <p className="overline">Full-arch implant specialists</p>
              <h1 id="hero-heading" className="hero__title">
                Fixed teeth that feel like yours again.
              </h1>
              <p className="hero__lead">
                Arcwell focuses exclusively on All-on-4 and full-mouth implant restoration — for adults
                ready to move beyond failing teeth, loose dentures, or the daily anxiety of hiding their
                smile.
              </p>
              <div className="hero__actions">
                <a href="#consultation" className="btn btn--primary">
                  Book a private consultation
                </a>
                <a href="#journey" className="btn btn--ghost">
                  See how treatment works
                </a>
              </div>
              <p className="hero__reassurance">
                No obligation. Clear answers. Written treatment plan before you decide.
              </p>
            </div>

            <div className="hero__visual" data-reveal>
              <div className="hero__image-frame">
                <div className="hero__image hero__image--primary">
                  <BrandImage {...ASSETS.heroPatient} loading="eager" />
                </div>
                <div className="hero__image hero__image--secondary">
                  <BrandImage {...ASSETS.heroClinical} />
                </div>
              </div>
              <div className="hero__stat-card">
                <span className="hero__stat-label">Specialist focus</span>
                <p>Full-arch implants only — not general dentistry diluted across everything.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust strip ── */}
        <section className="trust-strip" aria-label="Credentials">
          <div className="container trust-strip__inner" data-reveal>
            <div className="trust-strip__item">
              <span className="trust-strip__label">Registration</span>
              <span>[GDC / regulatory registration]</span>
            </div>
            <div className="trust-strip__divider" aria-hidden="true" />
            <div className="trust-strip__item">
              <span className="trust-strip__label">Specialist team</span>
              <span>Implant surgeon &amp; restorative clinician</span>
            </div>
            <div className="trust-strip__divider" aria-hidden="true" />
            <div className="trust-strip__item">
              <span className="trust-strip__label">Technology</span>
              <span>3D CBCT planning &amp; digital workflow</span>
            </div>
            <div className="trust-strip__divider" aria-hidden="true" />
            <div className="trust-strip__item">
              <span className="trust-strip__label">Patient reviews</span>
              <span>[Review platform / rating placeholder]</span>
            </div>
          </div>
        </section>

        {/* ── Problem / relevance ── */}
        <section className="section section--problem" aria-labelledby="problem-heading">
          <div className="container problem__grid">
            <div className="problem__content" data-reveal>
              <p className="overline">Is this for you?</p>
              <h2 id="problem-heading" className="section-title">
                When living with failing teeth becomes living around them.
              </h2>
              <p className="section-lead">
                You may have adapted for years — choosing softer foods, avoiding photos, worrying about
                dentures slipping at the wrong moment. Full-arch implants address the root cause: replacing
                an entire arch of teeth with a fixed, stable solution anchored to the jaw.
              </p>
            </div>
            <ul className="problem__list" data-reveal>
              {[
                'Multiple missing, damaged, or failing teeth',
                'Loose, uncomfortable, or ill-fitting dentures',
                'Difficulty eating the foods you enjoy',
                'Self-consciousness about smiling or speaking',
                'Frustration with temporary fixes that keep failing',
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Solution explanation ── */}
        <section id="treatment" className="section section--solution" aria-labelledby="solution-heading">
          <div className="container">
            <div className="section-header section-header--center" data-reveal>
              <p className="overline">The treatment</p>
              <h2 id="solution-heading" className="section-title">
                One arch. Four to six implants. A fixed bridge that stays in place.
              </h2>
              <p className="section-lead section-lead--narrow">
                All-on-4 and full-arch restoration replaces all teeth in an upper or lower jaw with a
                single, fixed bridge supported by strategically placed implants — often including same-day
                provisional teeth.
              </p>
            </div>

            <div className="solution__grid" data-reveal>
              <article className="solution-card">
                <span className="solution-card__index">01</span>
                <h3>All-on-4</h3>
                <p>
                  Four implants per arch, placed at precise angles to maximise existing bone. The
                  established approach for many full-arch cases — often without bone grafting.
                </p>
              </article>
              <article className="solution-card">
                <span className="solution-card__index">02</span>
                <h3>All-on-6</h3>
                <p>
                  Six implants for additional stability in cases with higher bite forces, larger arches, or
                  where your clinician recommends extra support.
                </p>
              </article>
              <article className="solution-card">
                <span className="solution-card__index">03</span>
                <h3>Full-mouth restoration</h3>
                <p>
                  Both arches treated in a coordinated plan — for patients needing a complete functional
                  and aesthetic rebuild, with a clear phased timeline.
                </p>
              </article>
            </div>

            <div className="solution__outcomes" data-reveal>
              <div className="outcome">
                <h4>Fixed, not removable</h4>
                <p>No nightly soaking. No adhesive. Teeth that stay in place.</p>
              </div>
              <div className="outcome">
                <h4>Functional chewing restored</h4>
                <p>Eat with confidence — most foods return to your table.</p>
              </div>
              <div className="outcome">
                <h4>Designed for your face</h4>
                <p>Shape, shade, and proportion tailored — not a one-size template.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Journey ── */}
        <section id="journey" className="section section--journey" aria-labelledby="journey-heading">
          <div className="container journey__layout">
            <div className="journey__intro" data-reveal>
              <p className="overline">Your journey</p>
              <h2 id="journey-heading" className="section-title">
                A clear path from first conversation to final smile.
              </h2>
              <p className="section-lead">
                High-consideration treatment demands transparency. Here is what the process typically
                looks like — your plan will be tailored to you.
              </p>
              <a href="#consultation" className="btn btn--secondary">
                Start with a consultation
              </a>
            </div>

            <div className="journey__interactive" data-reveal>
              <div className="journey__tabs" role="tablist" aria-label="Treatment steps">
                {JOURNEY_STEPS.map((step, index) => (
                  <button
                    key={step.phase}
                    type="button"
                    role="tab"
                    id={`journey-tab-${index}`}
                    aria-selected={activeStep === index}
                    aria-controls={`journey-panel-${index}`}
                    className={`journey__tab${activeStep === index ? ' is-active' : ''}`}
                    onClick={() => setActiveStep(index)}
                  >
                    <span className="journey__tab-phase">{step.phase}</span>
                    <span className="journey__tab-title">{step.title}</span>
                  </button>
                ))}
              </div>

              <div
                id={`journey-panel-${activeStep}`}
                role="tabpanel"
                aria-labelledby={`journey-tab-${activeStep}`}
                className="journey__panel"
              >
                <span className="journey__panel-duration">{JOURNEY_STEPS[activeStep].duration}</span>
                <h3>{JOURNEY_STEPS[activeStep].title}</h3>
                <p>{JOURNEY_STEPS[activeStep].description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Before / After ── */}
        <section id="results" className="section section--results" aria-labelledby="results-heading">
          <div className="container results__grid">
            <div className="results__content" data-reveal>
              <p className="overline">Real transformations</p>
              <h2 id="results-heading" className="section-title">
                Results that look like you — on a good day, every day.
              </h2>
              <p className="section-lead">
                Drag to compare. Every case is individual — your consultation will explore what is
                achievable for your anatomy and goals.
              </p>
              <ul className="results__notes">
                <li>Patient identities anonymised where requested</li>
                <li>Results vary — individual assessment required</li>
              </ul>
            </div>
            <div className="results__slider" data-reveal>
              <BeforeAfterSlider
                beforeSrc={ASSETS.before.src}
                afterSrc={ASSETS.after.src}
                beforeAlt={ASSETS.before.alt}
                afterAlt={ASSETS.after.alt}
              />
              <p className="results__demo-note">
                Illustrative 3D-style demo — replace with real anonymised patient cases before launch.
              </p>
            </div>
          </div>

          <div className="container results__gallery" data-reveal>
            {ASSETS.caseStudies.map((item) => (
              <figure key={item.caption} className="results__thumb">
                <div className="results__thumb-image">
                  <BrandImage src={item.src} alt={item.alt} />
                </div>
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ── Clinical approach ── */}
        <section id="approach" className="section section--approach" aria-labelledby="approach-heading">
          <div className="container approach__grid">
            <div className="approach__visual" data-reveal>
              <div className="approach__image">
                <BrandImage {...ASSETS.suite} />
              </div>
            </div>
            <div className="approach__content" data-reveal>
              <p className="overline">Clinical approach</p>
              <h2 id="approach-heading" className="section-title">
                Precision planning. Calm delivery. No surprises.
              </h2>
              <p className="section-lead">
                We combine digital 3D planning with a deliberately unhurried patient experience. You
                will always know what happens next — and why.
              </p>
              <dl className="approach__details">
                <div>
                  <dt>Digital CBCT imaging</dt>
                  <dd>Detailed 3D mapping of bone structure before any surgical decision.</dd>
                </div>
                <div>
                  <dt>Surgical &amp; restorative specialists</dt>
                  <dd>Distinct roles — placement and restoration — each handled by focused expertise.</dd>
                </div>
                <div>
                  <dt>Sedation options</dt>
                  <dd>Available for anxious patients. Your comfort is discussed openly at consultation.</dd>
                </div>
                <div>
                  <dt>Written treatment plan</dt>
                  <dd>Itemised timeline, materials, and investment — provided before you commit.</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* ── Lead clinician ── */}
        <section className="section section--clinician" aria-labelledby="clinician-heading">
          <div className="container clinician__grid">
            <div className="clinician__portrait" data-reveal>
              <div className="clinician__image">
                <BrandImage {...ASSETS.clinician} />
              </div>
            </div>
            <div className="clinician__content" data-reveal>
              <p className="overline">Your clinical team</p>
              <h2 id="clinician-heading" className="section-title">
                Led by specialists who do this work every day.
              </h2>
              <p className="clinician__bio">
                [Lead clinician name], [primary qualification / specialty placeholder], leads full-arch
                implant treatment at Arcwell. With a focus on complex restoration cases, [they] combine
                surgical precision with an emphasis on natural aesthetic outcomes.
              </p>
              <p className="clinician__bio">
                You will meet your surgeon and restorative clinician at consultation — the same people
                involved in your treatment, not a rotating cast.
              </p>
              <ul className="clinician__credentials">
                <li>[GDC / professional registration number]</li>
                <li>[Relevant specialist qualifications]</li>
                <li>[Professional memberships — e.g. implant academy affiliations]</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="section section--testimonials" aria-labelledby="testimonials-heading">
          <div className="container">
            <div className="section-header section-header--center" data-reveal>
              <p className="overline">Patient voices</p>
              <h2 id="testimonials-heading" className="section-title">
                &ldquo;I wish I had done this sooner.&rdquo;
              </h2>
            </div>

            <div className="testimonials__grid" data-reveal>
              <blockquote className="testimonial">
                <p>
                  &ldquo;I spent years hiding my mouth in photos. The consultation was the first time
                  someone explained everything without rushing me. I left knowing exactly what would
                  happen — and when.&rdquo;
                </p>
                <footer>
                  <cite>[Patient first name], [age range]</cite>
                  <span>Full-arch lower restoration</span>
                </footer>
              </blockquote>
              <blockquote className="testimonial">
                <p>
                  &ldquo;I was terrified of the surgery. The sedation option made it manageable, and the
                  team checked on me personally during recovery. Eating properly again still feels
                  surreal.&rdquo;
                </p>
                <footer>
                  <cite>[Patient first name], [age range]</cite>
                  <span>All-on-4 upper &amp; lower</span>
                </footer>
              </blockquote>
              <blockquote className="testimonial">
                <p>
                  &ldquo;What convinced me was the written plan — no vague estimates, no surprises at the
                  chair. I compared three clinics. This was the only one that felt like they were
                  planning for me, not selling at me.&rdquo;
                </p>
                <footer>
                  <cite>[Patient first name], [age range]</cite>
                  <span>All-on-6 upper arch</span>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="section section--faq" aria-labelledby="faq-heading">
          <div className="container faq__layout">
            <div className="faq__intro" data-reveal>
              <p className="overline">Common questions</p>
              <h2 id="faq-heading" className="section-title">
                The concerns we hear most — answered honestly.
              </h2>
              <p className="section-lead">
                Full-arch treatment is a significant decision. These are the questions prospective
                patients ask us before booking.
              </p>
            </div>
            <div data-reveal>
              <FAQAccordion items={FAQ_ITEMS} />
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section id="consultation" className="section section--cta" aria-labelledby="cta-heading">
          <div className="container cta__grid">
            <div className="cta__content" data-reveal>
              <p className="overline">Next step</p>
              <h2 id="cta-heading" className="section-title section-title--light">
                Book a private consultation.
              </h2>
              <p className="cta__lead">
                A dedicated visit to assess your suitability, answer your questions, and — if appropriate
                — outline a written treatment plan. No obligation to proceed.
              </p>
              <ul className="cta__includes">
                <li>Oral examination &amp; discussion of your goals</li>
                <li>3D CBCT scan (where clinically indicated)</li>
                <li>Written plan with timeline and investment</li>
              </ul>
              <p className="cta__note">[Consultation fee / credit policy placeholder]</p>
            </div>

            <form
              className="consultation-form"
              data-reveal
              aria-label="Book a consultation"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="form-row">
                <label htmlFor="first-name">First name</label>
                <input id="first-name" name="firstName" type="text" autoComplete="given-name" required />
              </div>
              <div className="form-row">
                <label htmlFor="last-name">Last name</label>
                <input id="last-name" name="lastName" type="text" autoComplete="family-name" required />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="form-row">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" required />
              </div>
              <div className="form-row">
                <label htmlFor="concern">What brings you in?</label>
                <select id="concern" name="concern" defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="all-on-4">All-on-4 / single arch</option>
                  <option value="full-mouth">Full-mouth restoration</option>
                  <option value="dentures">Replacing dentures</option>
                  <option value="unsure">Not sure — need guidance</option>
                </select>
              </div>
              <button type="submit" className="btn btn--primary btn--full">
                Request consultation
              </button>
              <p className="form-disclaimer">
                By submitting, you agree to be contacted about your enquiry. We do not share your details
                with third parties.
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="container site-footer__grid">
          <div className="site-footer__brand">
            <span className="site-logo__mark">A</span>
            <div>
              <strong>Arcwell Dental Studio</strong>
              <p>Full-arch implant specialists</p>
            </div>
          </div>
          <div className="site-footer__col">
            <h3>Visit</h3>
            <address>
              [Clinic address line 1]
              <br />
              [City, postcode]
            </address>
          </div>
          <div className="site-footer__col">
            <h3>Contact</h3>
            <p>
              <a href="tel:[phone]">[Phone number]</a>
              <br />
              <a href="mailto:[email]">[Email address]</a>
            </p>
          </div>
          <div className="site-footer__col">
            <h3>Hours</h3>
            <p>
              [Opening hours placeholder]
              <br />
              Consultations by appointment
            </p>
          </div>
        </div>
        <div className="container site-footer__legal">
          <p>&copy; {new Date().getFullYear()} Arcwell Dental Studio. All rights reserved.</p>
          <nav aria-label="Legal">
            <a href="#">Privacy policy</a>
            <a href="#">Terms</a>
            <a href="#">Cookie policy</a>
          </nav>
        </div>
      </footer>

      <ScrollToTop />

      {/* ── Sticky mobile CTA ── */}
      <div className="sticky-cta" aria-hidden="false">
        <a href="tel:[phone]" className="sticky-cta__phone">
          Call
        </a>
        <a href="#consultation" className="btn btn--primary btn--full">
          Book consultation
        </a>
      </div>
    </div>
  )
}
