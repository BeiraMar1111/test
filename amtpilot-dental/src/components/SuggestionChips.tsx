import './SuggestionChips.css'

interface SuggestionChipsProps {
  suggestions: string[]
  onSelect: (message: string) => void
  disabled?: boolean
}

export function SuggestionChips({
  suggestions,
  onSelect,
  disabled = false,
}: SuggestionChipsProps) {
  if (suggestions.length === 0) return null

  return (
    <div className="suggestion-chips" role="group" aria-label="Schnellantworten">
      {suggestions.map((suggestion) => (
        <button
          key={suggestion}
          type="button"
          className="suggestion-chips__chip"
          onClick={() => onSelect(suggestion)}
          disabled={disabled}
        >
          {suggestion}
        </button>
      ))}
    </div>
  )
}
