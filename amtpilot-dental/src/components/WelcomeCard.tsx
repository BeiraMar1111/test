import type { SuggestionChip } from '../types'
import './WelcomeCard.css'

interface WelcomeCardProps {
  suggestions: SuggestionChip[]
  onSelect: (message: string) => void
}

export function WelcomeCard({ suggestions, onSelect }: WelcomeCardProps) {
  return (
    <section className="welcome-card">
      <h1 className="welcome-card__title">Willkommen bei AmtPilot</h1>
      <p className="welcome-card__text">
        Beschreibt eure Situation in normaler Sprache — ich finde die richtigen
        Behörden, erstelle euren Plan und begleite euch Schritt für Schritt.
      </p>
      <div className="welcome-card__chips">
        {suggestions.map((chip) => (
          <button
            key={chip.id}
            type="button"
            className="welcome-card__chip"
            onClick={() => onSelect(chip.message)}
          >
            {chip.label}
          </button>
        ))}
      </div>
    </section>
  )
}
