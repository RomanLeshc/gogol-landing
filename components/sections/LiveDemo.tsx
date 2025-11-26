'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { CyberBackground } from '../ui/CyberBackground'

export function LiveDemo() {
  const [showEmbedCode, setShowEmbedCode] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', content: 'Hello! I\'m your AI assistant. How can I help you today?' },
  ])
  const [inputValue, setInputValue] = useState('')

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage = { id: messages.length + 1, role: 'user', content: inputValue }
    const assistantMessage = {
      id: messages.length + 2,
      role: 'assistant',
      content: 'This is a demo response. In the real version, I would answer based on your indexed content!',
    }

    setMessages([...messages, userMessage, assistantMessage])
    setInputValue('')
  }

  const embedCode = `<script src="https://gogols.ai/embed.js"></script>
<script>
  window.AIAgent.init({
    agentId: 'your-agent-id',
    theme: 'cyber'
  });
</script>`

  return (
    <section id="demo" className="relative py-20 bg-cyber-black overflow-hidden">
      <CyberBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-glow">
            Try It Live
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
            See how your AI agent will interact with users
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-cyber-dark rounded-none shadow-2xl border border-cyber-cyan/30 overflow-hidden box-glow"
          >
            {/* Chat Preview */}
            <div className="p-6 border-b border-cyber-cyan/30">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <h3 className="ml-4 text-lg font-bold text-white font-mono">
                    TERMINAL_PREVIEW
                  </h3>
                </div>
                <button
                  onClick={() => setShowEmbedCode(!showEmbedCode)}
                  className="text-sm text-cyber-cyan hover:text-cyber-pink font-mono uppercase tracking-wider transition-colors"
                >
                  {showEmbedCode ? 'Hide' : 'Show'} Embed Code
                </button>
              </div>

              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto space-y-4 mb-4 p-4 bg-cyber-black/50 border border-cyber-cyan/10 font-mono">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-none border ${
                        message.role === 'user'
                          ? 'bg-cyber-cyan/10 border-cyber-cyan text-cyber-cyan'
                          : 'bg-cyber-pink/10 border-cyber-pink text-cyber-pink'
                      }`}
                    >
                      <p className="text-sm">
                        <span className="font-bold mr-2">
                          {message.role === 'user' ? '>' : '#'}
                        </span>
                        {message.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your command..."
                  className="flex-1 px-4 py-2 border border-cyber-cyan/30 rounded-none bg-cyber-black text-white focus:outline-none focus:border-cyber-cyan font-mono placeholder-gray-600"
                />
                <button
                  onClick={handleSend}
                  className="px-6 py-2 bg-cyber-cyan text-cyber-black font-bold uppercase tracking-wider hover:bg-white transition-colors"
                >
                  Send
                </button>
              </div>
            </div>

            {/* Embed Code Panel */}
            {showEmbedCode && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="border-t border-cyber-cyan/30 p-6 bg-cyber-black"
              >
                <h4 className="text-sm font-bold text-cyber-pink mb-2 font-mono uppercase">
                  Embed Script
                </h4>
                <div className="relative group">
                  <pre className="bg-cyber-dark border border-cyber-cyan/30 text-cyber-cyan p-4 rounded-none overflow-x-auto text-sm font-mono">
                    <code>{embedCode}</code>
                  </pre>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(embedCode)
                      alert('Code copied to clipboard!')
                    }}
                    className="absolute top-2 right-2 px-3 py-1 bg-cyber-pink hover:bg-white hover:text-cyber-pink text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Copy
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

