import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - gogols.ai',
  description: 'Terms of Service for gogols.ai AI Agent Platform.',
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
