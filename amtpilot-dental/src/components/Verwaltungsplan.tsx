import type { PlanStep as PlanStepType } from '../types'
import { PlanStep } from './PlanStep'
import './Verwaltungsplan.css'

interface VerwaltungsplanProps {
  steps: PlanStepType[]
}

export function Verwaltungsplan({ steps }: VerwaltungsplanProps) {
  return (
    <section className="verwaltungsplan" aria-label="Verwaltungsplan">
      <div className="verwaltungsplan__header">
        <div>
          <div className="verwaltungsplan__eyebrow">Lebenslage: Geburt eines Kindes</div>
          <h2 className="verwaltungsplan__title">Euer Verwaltungsplan</h2>
        </div>
        <div className="verwaltungsplan__meta">{steps.length} Schritte</div>
      </div>
      <div className="verwaltungsplan__steps">
        {steps.map((step, index) => (
          <PlanStep key={step.id} step={step} defaultOpen={index === 0} />
        ))}
      </div>
    </section>
  )
}
