'use client'

import { motion } from 'framer-motion'

interface CyberBackgroundProps {
  variant?: 'default' | 'matrix' | 'neon'
}

export function CyberBackground({ variant = 'default' }: CyberBackgroundProps) {
  // Color schemes for different variants
  const colors = {
    default: {
      primary: 'bg-cyber-cyan',
      secondary: 'bg-cyber-pink',
      tertiary: 'bg-cyber-yellow',
      orb1: 'bg-cyber-cyan/10',
      orb2: 'bg-cyber-pink/10',
      orb3: 'bg-cyber-yellow/5',
    },
    matrix: {
      primary: 'bg-green-400',
      secondary: 'bg-green-500',
      tertiary: 'bg-green-300',
      orb1: 'bg-green-400/10',
      orb2: 'bg-green-500/10',
      orb3: 'bg-green-300/5',
    },
    neon: {
      primary: 'bg-cyber-pink',
      secondary: 'bg-cyber-yellow',
      tertiary: 'bg-purple-500',
      orb1: 'bg-cyber-pink/10',
      orb2: 'bg-cyber-yellow/10',
      orb3: 'bg-purple-500/5',
    },
  }

  const currentColors = colors[variant]

  // Generate random positions for particles
  const particles = [...Array(30)].map((_, i) => ({
    id: i,
    startX: Math.random() * 100,
    startY: 100 + Math.random() * 20,
    endY: -20,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
    size: Math.random() > 0.5 ? 1 : 2,
    color: Math.random() > 0.5 ? currentColors.primary : currentColors.secondary,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-10"></div>
      
      {/* Floating Orbs */}
      <motion.div 
        className={`absolute top-1/4 left-1/4 w-64 h-64 ${currentColors.orb1} rounded-full filter blur-[80px]`}
        animate={{ 
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear" 
        }}
      />
      <motion.div 
        className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${currentColors.orb2} rounded-full filter blur-[100px]`}
        animate={{ 
          x: [0, -70, 70, 0],
          y: [0, 70, -70, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          ease: "linear" 
        }}
      />
      
      <motion.div 
        className={`absolute top-1/2 right-1/3 w-48 h-48 ${currentColors.orb3} rounded-full filter blur-[60px]`}
        animate={{ 
          x: [0, 30, -30, 0],
          y: [0, -30, 30, 0],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "linear" 
        }}
      />

      {/* Flying Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${particle.color} rounded-full`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.startX}%`,
          }}
          initial={{ 
            top: `${particle.startY}%`,
            opacity: 0 
          }}
          animate={{ 
            top: `${particle.endY}%`,
            opacity: [0, 1, 1, 0]
          }}
          transition={{ 
            duration: particle.duration, 
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay
          }}
        />
      ))}
    </div>
  )
}
