/**
 * Soft 3D-style SVG illustrations — sage/cream palette aligned with Arcwell brand.
 * Replace with licensed 3D renders or brand illustrations before launch.
 */

import type { ReactNode } from 'react'

type IllustrationProps = {
  className?: string
  title?: string
}

function SharedDefs() {
  return (
    <defs>
      <radialGradient id="bgGlow" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#e8ede9" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#f6f2eb" stopOpacity="1" />
      </radialGradient>
      <radialGradient id="bokeh1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#d4dfd8" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#d4dfd8" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="bokeh2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#f0e8da" stopOpacity="0.65" />
        <stop offset="100%" stopColor="#f0e8da" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fde8dc" />
        <stop offset="55%" stopColor="#f0cbb8" />
        <stop offset="100%" stopColor="#e4b09a" />
      </linearGradient>
      <linearGradient id="skinLightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fff0e8" />
        <stop offset="100%" stopColor="#f5d4c4" />
      </linearGradient>
      <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#9a8478" />
        <stop offset="100%" stopColor="#6b5344" />
      </linearGradient>
      <linearGradient id="hairSage" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#7a8f82" />
        <stop offset="100%" stopColor="#4a5d52" />
      </linearGradient>
      <linearGradient id="sweaterSage" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#b8c9be" />
        <stop offset="50%" stopColor="#8fa396" />
        <stop offset="100%" stopColor="#6b8578" />
      </linearGradient>
      <linearGradient id="sweaterCream" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#faf6ef" />
        <stop offset="100%" stopColor="#e8dfd0" />
      </linearGradient>
      <linearGradient id="sweaterBronze" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d4b896" />
        <stop offset="100%" stopColor="#a68452" />
      </linearGradient>
      <linearGradient id="eyeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4a3d36" />
        <stop offset="100%" stopColor="#2a201c" />
      </linearGradient>
      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#3d4f44" floodOpacity="0.12" />
      </filter>
      <filter id="innerGlow" x="-10%" y="-10%" width="120%" height="120%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
  )
}

function SoftFrame({ children, className = '', title, wide = false }: IllustrationProps & { children: ReactNode; wide?: boolean }) {
  return (
    <svg
      viewBox={wide ? '0 0 300 200' : '0 0 400 500'}
      className={`soft-illustration${wide ? ' soft-illustration--wide' : ''} ${className}`.trim()}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <SharedDefs />
      <rect width="100%" height="100%" fill="url(#bgGlow)" />
      <circle cx="80" cy="100" r="90" fill="url(#bokeh1)" />
      <circle cx="330" cy="380" r="110" fill="url(#bokeh2)" />
      <circle cx="350" cy="80" r="60" fill="url(#bokeh1)" opacity="0.6" />
      {children}
    </svg>
  )
}

function CuteEyes({ cx, cy, scale = 1, happy = true }: { cx: number; cy: number; scale?: number; happy?: boolean }) {
  const s = scale
  return (
    <g transform={`translate(${cx}, ${cy}) scale(${s})`}>
      <ellipse cx="-22" cy="0" rx="16" ry="18" fill="url(#eyeGrad)" />
      <ellipse cx="22" cy="0" rx="16" ry="18" fill="url(#eyeGrad)" />
      <circle cx="-18" cy="-6" r="5" fill="#fff" opacity="0.95" />
      <circle cx="26" cy="-6" r="5" fill="#fff" opacity="0.95" />
      <circle cx="-14" cy="4" r="2.5" fill="#fff" opacity="0.5" />
      <circle cx="30" cy="4" r="2.5" fill="#fff" opacity="0.5" />
      {happy ? (
        <>
          <path d="M-8 22 Q0 30 8 22" fill="none" stroke="#c98878" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
          <ellipse cx="-32" cy="12" rx="10" ry="6" fill="#e8a898" opacity="0.35" />
          <ellipse cx="32" cy="12" rx="10" ry="6" fill="#e8a898" opacity="0.35" />
        </>
      ) : (
        <>
          <path d="M-10 24 Q0 20 10 24" fill="none" stroke="#b89080" strokeWidth="2" strokeLinecap="round" opacity="0.45" />
          <ellipse cx="-32" cy="14" rx="8" ry="5" fill="#ddb0a0" opacity="0.25" />
          <ellipse cx="32" cy="14" rx="8" ry="5" fill="#ddb0a0" opacity="0.25" />
        </>
      )}
    </g>
  )
}

function KnitTexture({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  const rows = Math.floor(h / 14)
  const cols = Math.floor(w / 14)
  const lines = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const ox = x + c * 14 + (r % 2) * 7
      const oy = y + r * 14
      lines.push(
        <ellipse key={`${r}-${c}`} cx={ox + 5} cy={oy + 5} rx="4" ry="3" fill="#fff" opacity="0.08" />,
      )
    }
  }
  return <g>{lines}</g>
}

/** Mature patient — warm, confident, cozy */
export function HeroPatientIllustration({ className, title = 'Patient illustration' }: IllustrationProps) {
  return (
    <SoftFrame className={className} title={title}>
      <g filter="url(#softShadow)">
        <ellipse cx="200" cy="430" rx="110" ry="18" fill="#3d4f44" opacity="0.08" />
        <path
          d="M115 250 Q115 420 200 430 Q285 420 285 250 Q285 200 200 195 Q115 200 115 250"
          fill="url(#sweaterSage)"
        />
        <KnitTexture x={125} y={260} w={150} h={160} />
        <ellipse cx="200" cy="175" rx="78" ry="82" fill="url(#skinGrad)" />
        <path
          d="M128 120 Q200 55 272 120 Q285 160 270 195 Q200 210 130 195 Q115 160 128 120"
          fill="url(#hairGrad)"
        />
        <path d="M145 95 Q200 70 255 95" fill="none" stroke="#8b7355" strokeWidth="3" opacity="0.15" />
        <CuteEyes cx={200} cy={168} scale={1.05} happy />
        <path d="M175 205 Q200 222 225 205" fill="#fff" opacity="0.85" />
        <path d="M182 205 Q200 215 218 205" fill="none" stroke="#c98878" strokeWidth="1.5" opacity="0.4" />
      </g>
      {/* Warm mug — lifestyle detail */}
      <g transform="translate(295, 340)" filter="url(#softShadow)">
        <rect x="0" y="20" width="52" height="48" rx="8" fill="url(#sweaterCream)" />
        <path d="M52 32 Q68 40 68 54 Q68 68 52 60" fill="none" stroke="#c4b8a8" strokeWidth="4" />
        <ellipse cx="26" cy="18" rx="18" ry="6" fill="#e8ede9" opacity="0.6" />
        <path d="M18 10 Q26 0 34 10" fill="none" stroke="#b8c9be" strokeWidth="2" opacity="0.5" />
      </g>
    </SoftFrame>
  )
}

/** Clinician with 3D scan screen */
export function HeroClinicalIllustration({ className, title = 'Clinical planning illustration' }: IllustrationProps) {
  return (
    <SoftFrame className={className} title={title}>
      <g filter="url(#softShadow)">
        <rect x="50" y="55" width="300" height="200" rx="20" fill="#fff" />
        <rect x="70" y="78" width="170" height="115" rx="12" fill="url(#bgGlow)" />
        <ellipse cx="155" cy="135" rx="58" ry="38" fill="url(#sweaterSage)" opacity="0.35" />
        {[
          [130, 118],
          [155, 145],
          [180, 118],
          [155, 105],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="7" fill="#3d4f44" opacity="0.55" />
        ))}
        <circle cx="155" cy="135" r="4" fill="#a68452" />
        {[0, 1, 2].map((i) => (
          <rect key={i} x={260} y={95 + i * 22} width={70 - i * 8} height="8" rx="4" fill="url(#sweaterSage)" opacity={0.4 - i * 0.08} />
        ))}
      </g>
      <g filter="url(#softShadow)" transform="translate(0, 280)">
        <ellipse cx="200" cy="95" rx="55" ry="58" fill="url(#skinLightGrad)" />
        <path d="M155 55 Q200 25 245 55 Q255 85 245 100 Q200 115 155 100 Q145 85 155 55" fill="url(#hairSage)" />
        <CuteEyes cx={200} cy={88} scale={0.85} happy />
        <path d="M145 130 Q200 175 255 130 L255 195 Q200 210 145 195 Z" fill="#fff" />
        <rect x="168" y="145" width="64" height="6" rx="3" fill="url(#sweaterSage)" opacity="0.5" />
      </g>
    </SoftFrame>
  )
}

/** Calm treatment suite */
export function ApproachSuiteIllustration({ className, title = 'Treatment suite illustration' }: IllustrationProps) {
  return (
    <SoftFrame className={className} title={title}>
      <g filter="url(#softShadow)">
        <rect x="70" y="110" width="260" height="300" rx="24" fill="#fff" />
        <rect x="100" y="150" width="200" height="130" rx="16" fill="url(#bgGlow)" />
        <ellipse cx="200" cy="215" rx="72" ry="40" fill="url(#sweaterSage)" opacity="0.3" />
        <rect x="120" y="300" width="160" height="70" rx="12" fill="url(#sweaterSage)" opacity="0.25" />
      </g>
      <circle cx="330" cy="160" r="38" fill="#fff8ee" opacity="0.85" filter="url(#softShadow)" />
      <line x1="330" y1="122" x2="330" y2="85" stroke="#d4b896" strokeWidth="4" strokeLinecap="round" />
      <g transform="translate(155, 320)" filter="url(#softShadow)">
        <ellipse cx="45" cy="55" rx="38" ry="40" fill="url(#skinGrad)" />
        <CuteEyes cx={45} cy={50} scale={0.65} happy />
        <path d="M15 85 Q45 110 75 85 L75 95 Q45 105 15 95 Z" fill="url(#sweaterCream)" />
      </g>
    </SoftFrame>
  )
}

/** Lead clinician — friendly expert */
export function ClinicianIllustration({ className, title = 'Clinician illustration' }: IllustrationProps) {
  return (
    <SoftFrame className={className} title={title}>
      <g filter="url(#softShadow)">
        <ellipse cx="200" cy="430" rx="100" ry="16" fill="#3d4f44" opacity="0.07" />
        <ellipse cx="200" cy="165" rx="82" ry="86" fill="url(#skinGrad)" />
        <path d="M130 105 Q200 45 270 105 Q280 150 265 185 Q200 200 135 185 Q120 150 130 105" fill="url(#hairSage)" />
        <CuteEyes cx={200} cy={158} scale={1} happy />
        <path d="M172 198 Q200 212 228 198" fill="#fff" opacity="0.9" />
        <path
          d="M125 230 Q125 400 200 410 Q275 400 275 230 Q275 210 200 218 Q125 210 125 230"
          fill="#fff"
        />
        <path d="M125 230 Q200 255 275 230" fill="none" stroke="#e8ede9" strokeWidth="2" />
        <rect x="168" y="290" width="64" height="8" rx="4" fill="url(#sweaterSage)" opacity="0.45" />
        <circle cx="200" cy="330" r="14" fill="none" stroke="#a68452" strokeWidth="2.5" opacity="0.6" />
        <path d="M200 322 L200 338 M192 330 L208 330" stroke="#a68452" strokeWidth="2" opacity="0.5" />
      </g>
    </SoftFrame>
  )
}

/** Before — gentle, thoughtful */
export function BeforePortraitIllustration({ className, title = 'Before treatment illustration' }: IllustrationProps) {
  return (
    <SoftFrame className={className} title={title}>
      <g filter="url(#softShadow)">
        <ellipse cx="200" cy="195" rx="95" ry="98" fill="url(#skinGrad)" />
        <path d="M118 115 Q200 60 282 115 Q295 165 278 210 Q200 225 122 210 Q105 165 118 115" fill="url(#hairGrad)" opacity="0.9" />
        <CuteEyes cx={200} cy={188} scale={1.05} happy={false} />
        <path d="M178 228 Q200 218 222 228" fill="none" stroke="#b89080" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
        <path
          d="M120 260 Q120 380 200 390 Q280 380 280 260 Q280 245 200 250 Q120 245 120 260"
          fill="#b0bcc0"
          opacity="0.55"
        />
        <KnitTexture x={130} y={270} w={140} h={110} />
      </g>
      <text x="200" y="455" textAnchor="middle" fill="#5a7264" fontSize="13" fontFamily="sans-serif" fontWeight="500" opacity="0.7">
        Before
      </text>
    </SoftFrame>
  )
}

/** After — radiant, confident */
export function AfterPortraitIllustration({ className, title = 'After restoration illustration' }: IllustrationProps) {
  return (
    <SoftFrame className={className} title={title}>
      <g filter="url(#softShadow)">
        <ellipse cx="200" cy="195" rx="95" ry="98" fill="url(#skinLightGrad)" />
        <path d="M115 110 Q200 52 285 110 Q298 160 280 208 Q200 228 120 208 Q102 160 115 110" fill="url(#hairGrad)" />
        <CuteEyes cx={200} cy={185} scale={1.08} happy />
        <path d="M168 225 Q200 248 232 225" fill="#fff" />
        <path d="M176 225 Q200 238 224 225" fill="none" stroke="#d4a090" strokeWidth="1.5" opacity="0.35" />
        <path
          d="M118 258 Q118 378 200 388 Q282 378 282 258 Q282 242 200 248 Q118 242 118 258"
          fill="url(#sweaterSage)"
        />
        <KnitTexture x={128} y={268} w={144} h={110} />
        {/* Soft sparkle */}
        <path d="M310 100 L318 88 L326 100 L318 112 Z" fill="#d4b896" opacity="0.55" />
        <path d="M88 130 L94 122 L100 130 L94 138 Z" fill="#b8c9be" opacity="0.45" />
      </g>
      <text x="200" y="455" textAnchor="middle" fill="#3d4f44" fontSize="13" fontFamily="sans-serif" fontWeight="600" opacity="0.75">
        After
      </text>
    </SoftFrame>
  )
}

/** Case study thumbnails */
export function CaseStudyIllustration({
  className,
  variant = 1,
  title = 'Case study illustration',
}: IllustrationProps & { variant?: number }) {
  const sweaters = ['url(#sweaterSage)', 'url(#sweaterCream)', 'url(#sweaterBronze)']
  const hair = variant === 2 ? 'url(#hairSage)' : 'url(#hairGrad)'
  const sweater = sweaters[(variant - 1) % 3]

  return (
    <SoftFrame className={className} title={title} wide>
      <g filter="url(#softShadow)">
        <ellipse cx="150" cy="78" rx="48" ry="50" fill="url(#skinGrad)" />
        <path d={`M108 42 Q150 18 192 42 Q202 68 188 88 Q150 98 112 88 Q98 68 108 42`} fill={hair} />
        <CuteEyes cx={150} cy={74} scale={0.72} happy />
        <path d="M135 92 Q150 100 165 92" fill="#fff" opacity="0.85" />
        <path d="M105 108 Q150 145 195 108 L195 175 Q150 185 105 175 Z" fill={sweater} />
        {variant === 1 && <KnitTexture x={115} y={115} w={70} h={55} />}
      </g>
    </SoftFrame>
  )
}
