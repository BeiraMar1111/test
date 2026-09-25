import { useState } from 'react'
import type { PlanStep as PlanStepType } from '../types'
import { PriorityBadge } from './PriorityBadge'
import './PlanStep.css'

interface PlanStepProps {
  step: PlanStepType
  defaultOpen?: boolean
}

export function PlanStep({ step, defaultOpen = false }: PlanStepProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <article className={`plan-step ${open ? 'plan-step--open' : ''}`}>
      <button
        type="button"
        className="plan-step__header"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <div className="plan-step__index">{step.id}</div>
        <div className="plan-step__summary">
          <div className="plan-step__top-row">
            <strong>{step.behoerde}</strong>
            <PriorityBadge priority={step.priority} />
          </div>
          <div className="plan-step__leistung">{step.leistung}</div>
          <div className="plan-step__frist">Frist: {step.frist}</div>
        </div>
        <span className="plan-step__chevron" aria-hidden="true">
          {open ? '−' : '+'}
        </span>
      </button>

      {open && (
        <div className="plan-step__body">
          <p className="plan-step__hint">{step.hint}</p>
          <div>
            <div className="plan-step__section-title">Benötigte Dokumente</div>
            <ul className="plan-step__documents">
              {step.documents.map((document) => (
                <li key={document}>{document}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  )
}
