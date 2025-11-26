'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { GlitchText } from '../ui/GlitchText'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cyber-black pt-20 pb-32">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Build Intelligent <br />
              <span className="text-cyber-cyan text-glow">
                <GlitchText text="AI Agents" />
              </span>{' '}
              with{' '}
              <span className="text-cyber-pink text-glow">
                <GlitchText text="Gogol" />
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 font-mono"
            >
              The complete platform for creating, managing, and embedding AI agents. Simply add your website or documents, and let Gogol handle the rest.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="https://gogol-ten.vercel.app/register"
                className="relative group px-8 py-4 bg-cyber-cyan text-cyber-black font-bold text-lg clip-path-polygon hover:bg-white transition-colors"
                style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
              >
                <span className="relative z-10">Start Building Free</span>
                <div className="absolute inset-0 bg-cyber-pink opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </Link>
              <Link
                href="#demo"
                className="relative px-8 py-4 bg-transparent border border-cyber-pink text-cyber-pink font-bold text-lg hover:bg-cyber-pink hover:text-white transition-all box-glow"
                style={{ clipPath: 'polygon(0 0, 90% 0, 100% 30%, 100% 100%, 10% 100%, 0 70%)' }}
              >
                Watch Demo
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="bg-cyber-dark border border-cyber-cyan/30 rounded-none p-8 box-glow relative">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyber-cyan"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyber-cyan"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyber-cyan"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyber-cyan"></div>
                
                <div className="space-y-4">
                  {/* Website/Document Input */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="bg-cyber-gray border border-cyber-pink/30 p-4 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-cyber-pink/50 animate-scanline"></div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-cyber-pink/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-cyber-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-cyber-pink/20 w-3/4 mb-2"></div>
                        <div className="h-2 bg-cyber-pink/20 w-1/2"></div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Arrow */}
                  <motion.div
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex justify-center"
                  >
                    <svg className="w-8 h-8 text-cyber-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </motion.div>

                  {/* AI Bot */}
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                    className="bg-cyber-gray border border-cyber-cyan/30 p-6 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-cyber-cyan/50 animate-scanline" style={{ animationDelay: '1s' }}></div>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-cyber-cyan/20 rounded-full flex items-center justify-center border border-cyber-cyan box-glow">
                        <svg className="w-8 h-8 text-cyber-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="h-3 bg-cyber-cyan/20 w-full"></div>
                        <div className="h-3 bg-cyber-cyan/20 w-5/6"></div>
                        <div className="h-3 bg-cyber-cyan/20 w-4/6"></div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -z-10 top-10 left-10 w-72 h-72 bg-cyber-cyan/20 rounded-full filter blur-[100px] animate-pulse-slow"></div>
            <div className="absolute -z-10 bottom-10 right-10 w-72 h-72 bg-cyber-pink/20 rounded-full filter blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

