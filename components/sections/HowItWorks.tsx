'use client'

import { motion } from 'framer-motion'
import { CyberBackground } from '../ui/CyberBackground'

const steps = [
  {
    number: '01',
    title: 'Sign In',
    description: 'Create your account or sign in with existing credentials',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Add Data',
    description: 'Add your website URL or upload PDF, DOCX, or TXT files',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Wait for Indexing',
    description: 'Our AI processes and indexes your content automatically',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Get Your Agent',
    description: 'Embed as a chat widget or use internally - ready to go!',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 bg-cyber-black overflow-hidden">
      <CyberBackground variant="matrix" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-glow">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
            Get your AI agent up and running in just four simple steps
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <div key={step.number} className="contents">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full lg:flex-1 lg:basis-0 h-full"
              >
                <div className="group bg-cyber-dark rounded-none p-6 h-full border border-cyber-pink/20 hover:border-cyber-pink transition-all hover:box-glow flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-cyber-pink/50 transform translate-x-full group-hover:animate-scanline"></div>
                  <div className="w-16 h-16 bg-cyber-pink/10 rounded-none flex items-center justify-center text-cyber-pink mb-4 lg:mb-0 lg:mr-4 flex-shrink-0 border border-cyber-pink/50 group-hover:bg-cyber-pink group-hover:text-cyber-black transition-colors">
                    {step.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-cyber-pink mb-1 font-mono">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 break-words group-hover:text-cyber-pink transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 break-words text-sm font-mono">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center text-cyber-gray flex-shrink-0">
                  <svg className="w-8 h-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

