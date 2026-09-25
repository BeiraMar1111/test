/**
 * Premium stock photography (Pexels) — concept demo only.
 * Crop params focus on face / smile for hero and before/after.
 * Replace with licensed clinic photography before launch.
 */

type AssetImage = {
  src: string
  alt: string
  crop?: 'face' | 'smile' | 'clinical' | 'environment'
}

const pexels = (id: number, w: number, h?: number) => {
  const size = h ? `&w=${w}&h=${h}&fit=crop` : `&w=${w}`
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb${size}`
}

export const ASSETS = {
  /** Close portrait — confident smile in clinical setting */
  heroPatient: {
    src: pexels(4971500, 1000, 1250),
    alt: 'Close portrait — patient smiling during a private dental consultation',
    crop: 'smile',
  } satisfies AssetImage,

  /** Dentist in clinical setting */
  heroClinical: {
    src: pexels(5215024, 700, 900),
    alt: 'Implant specialist in a modern clinical environment',
    crop: 'clinical',
  } satisfies AssetImage,

  /** Before — smile with visible orthodontic work */
  before: {
    src: pexels(7090366, 1000, 1250),
    alt: 'Before treatment — stock reference portrait with visible braces',
    crop: 'smile',
  } satisfies AssetImage,

  /** After — close smile, white teeth visible */
  after: {
    src: pexels(7298633, 1000, 1250),
    alt: 'After restoration — stock reference close-up with healthy white teeth',
    crop: 'smile',
  } satisfies AssetImage,

  clinician: {
    src: pexels(5214958, 1000, 1250),
    alt: 'Lead implant clinician — professional portrait',
    crop: 'face',
  } satisfies AssetImage,

  suite: {
    src: pexels(6627536, 1000, 1250),
    alt: 'Modern dental treatment suite — calm, premium environment',
    crop: 'environment',
  } satisfies AssetImage,

  caseStudies: [
    {
      src: pexels(4971500, 800, 1000),
      alt: 'Case study — confident smile in treatment chair',
      caption: 'Case study 1 — All-on-4 lower arch',
      crop: 'smile' as const,
    },
    {
      src: pexels(3845626, 800, 1000),
      alt: 'Case study — natural smile during consultation',
      caption: 'Case study 2 — Full-arch upper restoration',
      crop: 'smile' as const,
    },
    {
      src: pexels(5355702, 800, 1000),
      alt: 'Case study — patient smiling with clinical team',
      caption: 'Case study 3 — All-on-6 both arches',
      crop: 'smile' as const,
    },
  ],
} as const
