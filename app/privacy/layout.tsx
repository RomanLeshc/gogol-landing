import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - gogols.ai',
  description: 'Privacy Policy for gogols.ai AI Agent Platform.',
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
