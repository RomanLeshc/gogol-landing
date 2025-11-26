'use client'

import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

export function Footer() {
  return (
    <footer className="relative border-t border-cyber-cyan/30 bg-cyber-black overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <div className="w-8 h-8 bg-cyber-dark border border-cyber-cyan rounded-none flex items-center justify-center group-hover:box-glow transition-all">
                <span className="text-cyber-cyan font-bold text-lg font-mono">AI</span>
              </div>
              <span className="font-bold text-xl text-white font-mono group-hover:text-cyber-pink transition-colors">gogols.ai</span>
            </Link>
            <p className="text-gray-400 max-w-md font-mono text-sm">
              Transform your website or documents into an intelligent Gogol Agent. 
              Get started in minutes, no coding required.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 font-mono uppercase tracking-wider text-sm border-b border-cyber-cyan/30 pb-2">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-400 hover:text-cyber-cyan transition-colors font-mono text-sm flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-cyber-cyan transition-colors font-mono text-sm flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#demo" className="text-gray-400 hover:text-cyber-cyan transition-colors font-mono text-sm flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 font-mono uppercase tracking-wider text-sm border-b border-cyber-pink/30 pb-2">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-gray-400 hover:text-cyber-pink transition-colors font-mono text-sm flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-cyber-pink transition-colors font-mono text-sm flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-cyber-pink transition-colors font-mono text-sm flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  Terms
                </Link>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-pink transition-colors font-mono text-sm flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  GitHub
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-cyber-pink transition-colors font-mono text-sm flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-cyber-cyan/30 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-mono">
            © {new Date().getFullYear()} <span className="text-cyber-cyan">gogols.ai</span>. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <ThemeToggle />
          </div>
        </div>
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyber-cyan/20"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyber-pink/20"></div>
    </footer>
  )
}

