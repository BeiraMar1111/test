import { useCallback, useEffect, useState } from 'react'

type NavItem = { id: string; label: string }

const NAV: NavItem[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'colors', label: 'Colours' },
  { id: 'typography', label: 'Typography' },
  { id: 'buttons', label: 'Buttons & CTAs' },
  { id: 'spacing', label: 'Spacing & layout' },
  { id: 'components', label: 'Components' },
  { id: 'links', label: 'Project links' },
]

const COLORS = [
  { name: 'Background', token: '--color-bg', hex: '#F6F2EB' },
  { name: 'Background alt', token: '--color-bg-alt', hex: '#EDE8DF' },
  { name: 'Surface', token: '--color-surface', hex: '#FFFFFF' },
  { name: 'Surface muted', token: '--color-surface-muted', hex: '#FAF8F4' },
  { name: 'Text primary', token: '--color-text', hex: '#1A1814' },
  { name: 'Text secondary', token: '--color-text-secondary', hex: '#5C574F' },
  { name: 'Text muted', token: '--color-text-muted', hex: '#8A847A' },
  { name: 'Accent (sage)', token: '--color-accent', hex: '#3D4F44' },
  { name: 'Accent hover', token: '--color-accent-hover', hex: '#2F3D35' },
  { name: 'Accent soft', token: '--color-accent-soft', hex: '#E8EDE9' },
  { name: 'Bronze', token: '--color-bronze', hex: '#A68452' },
  { name: 'Bronze soft', token: '--color-bronze-soft', hex: '#F0E8DA' },
  { name: 'Border', token: '--color-border', hex: 'rgba(26, 24, 20, 0.1)' },
  { name: 'Border strong', token: '--color-border-strong', hex: 'rgba(26, 24, 20, 0.18)' },
]

const TYPE_SCALE = [
  { name: 'Display XL', token: '--text-display-xl', sample: 'Full-arch restoration' },
  { name: 'Display LG', token: '--text-display-lg', sample: 'Your treatment journey' },
  { name: 'Display MD', token: '--text-display-md', sample: 'Led by specialists' },
  { name: 'Heading', token: '--text-heading', sample: 'What happens at consultation' },
  { name: 'Body LG', token: '--text-body-lg', sample: 'Clear timelines, natural aesthetics, and a calm clinical environment.' },
  { name: 'Body', token: '--text-body', sample: 'We explain every step before treatment begins.' },
  { name: 'Body SM', token: '--text-body-sm', sample: 'Consultations are private and without obligation.' },
  { name: 'Caption', token: '--text-caption', sample: 'Stock photography — concept demo only' },
  { name: 'Overline', token: '--text-overline', sample: 'Arcwell Dental Studio' },
]

const SPACING = [
  { token: '--space-1', value: '0.25rem' },
  { token: '--space-2', value: '0.5rem' },
  { token: '--space-3', value: '0.75rem' },
  { token: '--space-4', value: '1rem' },
  { token: '--space-6', value: '1.5rem' },
  { token: '--space-8', value: '2rem' },
  { token: '--space-12', value: '3rem' },
  { token: '--space-16', value: '4rem' },
  { token: '--space-24', value: '6rem' },
  { token: '--space-32', value: '8rem' },
]

function CopyButton({ value, label = 'Copy' }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }, [value])

  return (
    <button type="button" className="dg-copy" onClick={copy} aria-label={`Copy ${value}`}>
      {copied ? 'Copied' : label}
    </button>
  )
}

function TokenRow({ token, extra }: { token: string; extra?: string }) {
  return (
    <div className="dg-token">
      <code>{token}</code>
      <CopyButton value={token} />
      {extra ? <span className="dg-token__extra">{extra}</span> : null}
    </div>
  )
}

export function DesignGuide() {
  const [active, setActive] = useState('overview')

  useEffect(() => {
    const sections = NAV.map((item) => document.getElementById(item.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5] },
    )
    sections.forEach((el) => observer.observe(el!))
    return () => observer.disconnect()
  }, [])

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActive(id)
  }

  return (
    <div className="dg-layout">
      <aside className="dg-sidebar" aria-label="Design guide navigation">
        <div className="dg-sidebar__brand">
          <span className="dg-sidebar__mark">A</span>
          <div>
            <strong>Arcwell</strong>
            <span>Design guide</span>
          </div>
        </div>
        <nav className="dg-sidebar__nav">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`dg-sidebar__link${active === item.id ? ' is-active' : ''}`}
              onClick={() => jump(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="dg-sidebar__footer">
          <a href="/dental.html" className="dg-sidebar__ext">
            ← Back to homepage
          </a>
        </div>
      </aside>

      <main className="dg-main">
        <header className="dg-hero" id="overview">
          <p className="dg-overline">Arcwell Dental Studio</p>
          <h1>Design guide</h1>
          <p className="dg-lead">
            Warm editorial direction for a premium full-arch implant clinic — colours, typography,
            components, and CSS tokens used in the live prototype.
          </p>
          <div className="dg-hero__meta">
            <span>Concept brand</span>
            <span>Desktop + mobile</span>
            <span>React + Vite prototype</span>
          </div>
        </header>

        <section className="dg-section" id="colors">
          <h2>Colours</h2>
          <p className="dg-section__intro">
            Cream and sage palette with bronze accents — deliberately not generic clinical blue.
            Click copy to grab the CSS variable name for use in code.
          </p>
          <div className="dg-color-grid">
            {COLORS.map((color) => (
              <article key={color.token} className="dg-color-card">
                <div
                  className="dg-color-card__swatch"
                  style={{
                    background: color.hex.startsWith('rgba') ? color.hex : color.hex,
                    border: color.token.includes('border') ? '1px solid #ccc' : undefined,
                  }}
                />
                <div className="dg-color-card__body">
                  <h3>{color.name}</h3>
                  <p className="dg-color-card__hex">{color.hex}</p>
                  <TokenRow token={color.token} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="dg-section" id="typography">
          <h2>Typography</h2>
          <p className="dg-section__intro">
            Cormorant Garamond for display headlines; Instrument Sans for UI and body copy.
          </p>

          <div className="dg-font-preview">
            <div className="dg-font-preview__col">
              <p className="dg-overline">Display — Cormorant Garamond</p>
              <p className="dg-sample dg-sample--display">Arcwell Dental Studio</p>
              <TokenRow token="--font-display" extra="'Cormorant Garamond', Georgia, serif" />
            </div>
            <div className="dg-font-preview__col">
              <p className="dg-overline">UI / Body — Instrument Sans</p>
              <p className="dg-sample dg-sample--body">
                Private consultations, clear treatment paths, and natural full-arch results.
              </p>
              <TokenRow token="--font-body" extra="'Instrument Sans', system-ui, sans-serif" />
            </div>
          </div>

          <div className="dg-type-scale">
            {TYPE_SCALE.map((item) => (
              <div key={item.token} className="dg-type-row">
                <div className="dg-type-row__sample" style={{ fontSize: `var(${item.token})` }}>
                  {item.name === 'Overline' ? (
                    <span className="dg-overline">{item.sample}</span>
                  ) : item.token.includes('display') ? (
                    <span style={{ fontFamily: 'var(--font-display)' }}>{item.sample}</span>
                  ) : (
                    item.sample
                  )}
                </div>
                <div className="dg-type-row__meta">
                  <strong>{item.name}</strong>
                  <TokenRow token={item.token} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="dg-section" id="buttons">
          <h2>Buttons &amp; CTAs</h2>
          <p className="dg-section__intro">
            Primary conversion action: book a private consultation. Secondary: outline and text links.
          </p>
          <div className="dg-button-row">
            <button type="button" className="btn btn--primary">
              Book a private consultation
            </button>
            <button type="button" className="btn btn--secondary">
              Call the clinic
            </button>
            <a href="#" className="btn btn--ghost">
              View treatment journey →
            </a>
          </div>
          <div className="dg-notes">
            <p>
              <strong>Classes:</strong> <code>.btn</code>, <code>.btn--primary</code>,{' '}
              <code>.btn--secondary</code>, <code>.btn--ghost</code>
            </p>
            <CopyButton value="btn btn--primary" label="Copy primary class" />
          </div>
        </section>

        <section className="dg-section" id="spacing">
          <h2>Spacing &amp; layout</h2>
          <p className="dg-section__intro">
            4px base grid. Section rhythm uses <code>--section-gap</code>; content width capped at{' '}
            <code>--container-max</code>.
          </p>
          <div className="dg-spacing-grid">
            {SPACING.map((space) => (
              <div key={space.token} className="dg-spacing-item">
                <div className="dg-spacing-item__bar" style={{ width: space.value }} />
                <TokenRow token={space.token} extra={space.value} />
              </div>
            ))}
          </div>
          <div className="dg-token-list">
            <TokenRow token="--container-max" extra="1440px" />
            <TokenRow token="--container-padding" extra="clamp(1.25rem, 4vw, 3rem)" />
            <TokenRow token="--section-gap" extra="clamp(5rem, 10vw, 8rem)" />
            <TokenRow token="--radius-sm" extra="4px" />
            <TokenRow token="--radius-md" extra="8px" />
            <TokenRow token="--radius-lg" extra="16px" />
            <TokenRow token="--shadow-soft" />
            <TokenRow token="--shadow-card" />
          </div>
        </section>

        <section className="dg-section" id="components">
          <h2>Components</h2>
          <p className="dg-section__intro">Key UI patterns on the homepage prototype.</p>
          <ul className="dg-component-list">
            <li>
              <strong>Site header</strong> — sticky nav, mobile full-screen menu overlay
            </li>
            <li>
              <strong>Hero</strong> — asymmetric image grid, benefit bullets, dual CTAs
            </li>
            <li>
              <strong>Trust strip</strong> — credentials without fabricated stats
            </li>
            <li>
              <strong>Journey tabs</strong> — 5-step interactive treatment timeline
            </li>
            <li>
              <strong>Before / after slider</strong> — drag comparison with labels
            </li>
            <li>
              <strong>FAQ accordion</strong> — candidacy, pain, cost, aesthetics
            </li>
            <li>
              <strong>Consultation form</strong> — low-friction fields + inclusions list
            </li>
            <li>
              <strong>Sticky mobile CTA</strong> — persistent book / call actions
            </li>
          </ul>
        </section>

        <section className="dg-section" id="links">
          <h2>Project links</h2>
          <p className="dg-section__intro">
            Share these with the client or hiring team. Replace placeholders after Netlify deploy.
          </p>
          <div className="dg-link-cards">
            <a href="/dental.html" className="dg-link-card">
              <span className="dg-overline">Live prototype</span>
              <strong>Homepage</strong>
              <code>/dental.html</code>
            </a>
            <a href="/design-guide.html" className="dg-link-card">
              <span className="dg-overline">Documentation</span>
              <strong>Design guide</strong>
              <code>/design-guide.html</code>
            </a>
            <a
              href="https://github.com/BeiraMar1111/test/tree/main/amtpilot-dental"
              className="dg-link-card"
              target="_blank"
              rel="noreferrer"
            >
              <span className="dg-overline">Source code</span>
              <strong>GitHub repository</strong>
              <code>github.com/BeiraMar1111/test/.../amtpilot-dental</code>
            </a>
          </div>
          <p className="dg-footnote">
            After uploading <code>dist/</code> to Netlify Drop, your URLs will look like{' '}
            <code>https://your-site.netlify.app/dental.html</code> and{' '}
            <code>https://your-site.netlify.app/design-guide.html</code>.
          </p>
        </section>
      </main>
    </div>
  )
}
