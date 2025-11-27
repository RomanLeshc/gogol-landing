'use client'

import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-cyber-cyan/30 dark:border-cyber-cyan/30 border-gray-300 bg-white/80 dark:bg-cyber-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-8 h-8 bg-gray-100 dark:bg-cyber-dark border border-primary-500 dark:border-cyber-cyan rounded-none flex items-center justify-center group-hover:box-glow transition-all duration-300">
              <span className="text-primary-600 dark:text-cyber-cyan font-bold text-lg font-mono">AI</span>
            </div>
            <span className="font-bold text-xl text-gray-900 dark:text-white font-mono group-hover:text-primary-600 dark:group-hover:text-cyber-pink transition-colors duration-300">gogols.ai</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['Features', 'Integrations', 'Demo', 'Pricing'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-cyber-cyan transition-colors duration-300 font-mono text-sm uppercase tracking-wider hover:text-glow cursor-pointer"
              >
                {item}
              </Link>
            ))}
            <Link href="/docs" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-cyber-cyan transition-colors duration-300 font-mono text-sm uppercase tracking-wider hover:text-glow cursor-pointer">
              Docs
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link
              href="https://gogol-ten.vercel.app/login"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-cyber-pink transition-colors duration-300 font-mono text-sm uppercase tracking-wider cursor-pointer"
            >
              Sign In
            </Link>
            <Link
              href="https://gogol-ten.vercel.app/register"
              className="bg-primary-600 dark:bg-cyber-cyan text-white dark:text-cyber-black px-4 py-2 font-bold text-sm uppercase tracking-wider hover:bg-primary-700 dark:hover:bg-white transition-all duration-300 clip-path-polygon cursor-pointer hover:scale-105"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

