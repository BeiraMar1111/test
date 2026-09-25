import { useCallback, useRef, useState } from 'react'
import { BrandImage } from './BrandImage'

type BeforeAfterSliderProps = {
  beforeSrc: string
  afterSrc: string
  beforeAlt?: string
  afterAlt?: string
  beforeLabel?: string
  afterLabel?: string
  crop?: 'face' | 'smile' | 'clinical' | 'environment'
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Before treatment',
  afterAlt = 'After restoration',
  beforeLabel = 'Before treatment',
  afterLabel = 'After restoration',
  crop = 'smile',
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const dragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const next = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(96, Math.max(4, next)))
  }, [])

  const onPointerDown = (event: React.PointerEvent) => {
    dragging.current = true
    event.currentTarget.setPointerCapture(event.pointerId)
    updatePosition(event.clientX)
  }

  const onPointerMove = (event: React.PointerEvent) => {
    if (!dragging.current) return
    updatePosition(event.clientX)
  }

  const onPointerUp = () => {
    dragging.current = false
  }

  return (
    <div
      ref={containerRef}
      className="ba-slider"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="img"
      aria-label="Before and after comparison slider. Drag to compare."
    >
      <div className="ba-slider__after">
        <BrandImage src={afterSrc} alt={afterAlt} className="ba-slider__photo" crop={crop} loading="eager" />
        <span className="ba-slider__label ba-slider__label--after">{afterLabel}</span>
      </div>

      <div className="ba-slider__before" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <BrandImage src={beforeSrc} alt={beforeAlt} className="ba-slider__photo" crop={crop} loading="eager" />
        <span className="ba-slider__label ba-slider__label--before">{beforeLabel}</span>
      </div>

      <div className="ba-slider__handle" style={{ left: `${position}%` }} aria-hidden="true">
        <div className="ba-slider__handle-line" />
        <div className="ba-slider__handle-knob">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 4L2 8L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M11 4L14 8L11 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}
