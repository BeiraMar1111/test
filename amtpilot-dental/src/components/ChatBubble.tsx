import type { ChatMessage } from '../types'
import './ChatBubble.css'

interface ChatBubbleProps {
  message: ChatMessage
}

export function ChatBubble({ message }: ChatBubbleProps) {
  return (
    <div className={`chat-bubble chat-bubble--${message.role}`}>
      <div className="chat-bubble__label">
        {message.role === 'bot' ? 'AmtPilot' : 'Du'}
      </div>
      <div className="chat-bubble__text">{message.text}</div>
    </div>
  )
}

interface TypingIndicatorProps {
  visible: boolean
}

export function TypingIndicator({ visible }: TypingIndicatorProps) {
  if (!visible) return null

  return (
    <div className="chat-bubble chat-bubble--bot chat-bubble--typing" aria-live="polite">
      <div className="chat-bubble__label">AmtPilot</div>
      <div className="typing-dots" aria-label="AmtPilot schreibt">
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}
