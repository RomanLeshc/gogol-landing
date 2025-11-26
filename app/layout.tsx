import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'gogols.ai - Create Your Gogol Agent in Minutes',
  description: 'Transform your website or documents into an intelligent Gogol Agent. Embed as a chat widget or use internally. Get started in minutes.',
  keywords: ['Gogol Agent', 'chatbot', 'AI assistant', 'document AI', 'customer support AI'],
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

