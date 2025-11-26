import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation - gogols.ai | AI Agent SDK & Widget Guide',
  description: 'Complete documentation for gogols.ai. Learn how to build, customize, and embed AI Agents and Chat Widgets using our no-code platform and API.',
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
