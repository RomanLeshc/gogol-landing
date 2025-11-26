import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'gogols.ai | AI Assistant & AI Chat Widget Builder - No-Code AI Agents',
  description: 'Build custom AI Assistants and AI Chat Widgets in minutes. Transform your website and documents into intelligent Gogol Agents. No-code AI Agent builder for customer support, internal knowledge bases, and more.',
  keywords: ['AI Assistant', 'AI Chat', 'AI Agent', 'No-code AI Builder', 'Chat Widget', 'Customer Support AI', 'Document AI', 'Gogol Agent', 'gogols.ai', 'RAG'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

