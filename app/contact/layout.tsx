import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - gogols.ai | AI Assistant Support',
  description: 'Get in touch with the gogols.ai team. Support for AI Agent builder, Enterprise solutions, and general inquiries.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
