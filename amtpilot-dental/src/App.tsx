import { useEffect, useRef } from 'react'
import { ChatBubble, TypingIndicator } from './components/ChatBubble'
import { ChatInput } from './components/ChatInput'
import { Header } from './components/Header'
import { SuggestionChips } from './components/SuggestionChips'
import { Verwaltungsplan } from './components/Verwaltungsplan'
import { WelcomeCard } from './components/WelcomeCard'
import { useChatFlow } from './hooks/useChatFlow'
import './App.css'

function App() {
  const {
    messages,
    plan,
    isTyping,
    started,
    activeSuggestions,
    welcomeSuggestions,
    startWithMessage,
    respondToUser,
    reset,
  } = useChatFlow()

  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping, plan])

  const handleSend = (message: string) => {
    if (!started) {
      void startWithMessage(message)
      return
    }
    void respondToUser(message)
  }

  return (
    <div className="app">
      <Header />

      <main className="app__main">
        {!started && (
          <WelcomeCard suggestions={welcomeSuggestions} onSelect={handleSend} />
        )}

        {started && (
          <div className="chat-panel">
            <div className="chat-panel__messages">
              {messages.map((message) => (
                <ChatBubble key={message.id} message={message} />
              ))}
              <TypingIndicator visible={isTyping} />
              {plan && <Verwaltungsplan steps={plan} />}
              <div ref={chatEndRef} />
            </div>

            <SuggestionChips
              suggestions={activeSuggestions}
              onSelect={handleSend}
              disabled={isTyping || Boolean(plan)}
            />
          </div>
        )}
      </main>

      <footer className="app__footer">
        <ChatInput onSend={handleSend} disabled={isTyping} />
        {started && (
          <button type="button" className="app__reset" onClick={reset}>
            Demo neu starten
          </button>
        )}
      </footer>
    </div>
  )
}

export default App
