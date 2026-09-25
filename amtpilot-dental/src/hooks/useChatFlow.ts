import { useCallback, useState } from 'react'
import { geburtDialogue, geburtPlan, welcomeSuggestions } from '../data/geburtScenario'
import type { ChatMessage, PlanStep } from '../types'

function createId() {
  return crypto.randomUUID()
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function useChatFlow() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [plan, setPlan] = useState<PlanStep[] | null>(null)
  const [turnIndex, setTurnIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [started, setStarted] = useState(false)
  const [activeSuggestions, setActiveSuggestions] = useState<string[]>([])

  const addMessage = useCallback((role: ChatMessage['role'], text: string) => {
    setMessages((prev) => [...prev, { id: createId(), role, text }])
  }, [])

  const respondToUser = useCallback(
    async (userText: string) => {
      const turn = geburtDialogue[turnIndex]
      if (!turn || turn.userMessage !== userText) {
        addMessage('user', userText)
        setIsTyping(true)
        await delay(900)
        addMessage(
          'bot',
          'Für diese Demo ist der Ablauf „Geburt eines Kindes“ vorbereitet. Wählt eine der Vorschläge oder startet mit „Unser Baby ist geboren“.',
        )
        setActiveSuggestions(welcomeSuggestions.map((item) => item.message))
        setIsTyping(false)
        return
      }

      addMessage('user', userText)
      setIsTyping(true)
      await delay(1100)
      addMessage('bot', turn.botResponse)
      setIsTyping(false)

      const nextIndex = turnIndex + 1
      setTurnIndex(nextIndex)

      if (nextIndex >= geburtDialogue.length) {
        setActiveSuggestions([])
        await delay(600)
        setPlan(geburtPlan)
        return
      }

      setActiveSuggestions(geburtDialogue[nextIndex].suggestions ?? [])
    },
    [addMessage, turnIndex],
  )

  const startWithMessage = useCallback(
    async (text: string) => {
      setStarted(true)
      setActiveSuggestions([])
      await respondToUser(text)
    },
    [respondToUser],
  )

  const reset = useCallback(() => {
    setMessages([])
    setPlan(null)
    setTurnIndex(0)
    setIsTyping(false)
    setStarted(false)
    setActiveSuggestions([])
  }, [])

  return {
    messages,
    plan,
    isTyping,
    started,
    activeSuggestions,
    welcomeSuggestions,
    startWithMessage,
    respondToUser,
    reset,
  }
}
