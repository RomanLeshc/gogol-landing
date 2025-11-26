'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState('')
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'

  useEffect(() => {
    let iteration = 0
    let interval: NodeJS.Timeout

    const startAnimation = () => {
      interval = setInterval(() => {
        setDisplayText(prev => 
          text
            .split('')
            .map((char, index) => {
              if (index < iteration) {
                return text[index]
              }
              return chars[Math.floor(Math.random() * chars.length)]
            })
            .join('')
        )

        if (iteration >= text.length) {
          clearInterval(interval)
        }

        iteration += 1 / 3
      }, 30)
    }

    startAnimation()

    return () => clearInterval(interval)
  }, [text])

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <span className="relative z-10">{displayText}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-cyber-cyan opacity-50 animate-glitch" aria-hidden="true">
        {displayText}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-cyber-pink opacity-50 animate-glitch" style={{ animationDelay: '0.1s' }} aria-hidden="true">
        {displayText}
      </span>
    </motion.span>
  )
}
