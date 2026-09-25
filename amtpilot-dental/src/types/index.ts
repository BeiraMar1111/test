export type Priority = 'hoch' | 'mittel' | 'niedrig'

export type MessageRole = 'user' | 'bot'

export interface ChatMessage {
  id: string
  role: MessageRole
  text: string
}

export interface PlanStep {
  id: number
  behoerde: string
  leistung: string
  frist: string
  priority: Priority
  documents: string[]
  hint: string
}

export interface SuggestionChip {
  id: string
  label: string
  message: string
}

export interface DialogueTurn {
  userMessage: string
  botResponse: string
  suggestions?: string[]
}
