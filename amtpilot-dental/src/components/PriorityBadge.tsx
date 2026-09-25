import type { Priority } from '../types'
import './PriorityBadge.css'

const labels: Record<Priority, string> = {
  hoch: 'Hoch',
  mittel: 'Mittel',
  niedrig: 'Niedrig',
}

interface PriorityBadgeProps {
  priority: Priority
}

export function PriorityBadge({ priority }: PriorityBadgeProps) {
  return (
    <span className={`priority-badge priority-badge--${priority}`}>
      {labels[priority]}
    </span>
  )
}
