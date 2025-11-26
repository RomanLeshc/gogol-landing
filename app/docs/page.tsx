'use client'

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <nav className="sticky top-24 space-y-8">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wider">
                  Getting Started
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#introduction" className="text-primary-600 dark:text-primary-400 text-sm hover:text-primary-700 dark:hover:text-primary-300">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#installation" className="text-gray-600 dark:text-gray-400 text-sm hover:text-gray-900 dark:hover:text-white">
                      Installation
                    </a>
                  </li>
                  <li>
                    <a href="#quick-start" className="text-gray-600 dark:text-gray-400 text-sm hover:text-gray-900 dark:hover:text-white">
                      Quick Start
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wider">
                  Core Concepts
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#agents" className="text-gray-600 dark:text-gray-400 text-sm hover:text-gray-900 dark:hover:text-white">
                      AI Agents
                    </a>
                  </li>
                  <li>
                    <a href="#data-sources" className="text-gray-600 dark:text-gray-400 text-sm hover:text-gray-900 dark:hover:text-white">
                      Data Sources
                    </a>
                  </li>
                  <li>
                    <a href="#embeddings" className="text-gray-600 dark:text-gray-400 text-sm hover:text-gray-900 dark:hover:text-white">
                      Embeddings
                    </a>
                  </li>
                  <li>
                    <a href="#chat-widget" className="text-gray-600 dark:text-gray-400 text-sm hover:text-gray-900 dark:hover:text-white">
                      Chat Widget
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wider">
                  API Reference
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#authentication" className="text-gray-600 dark:text-gray-400 text-sm hover:text-gray-900 dark:hover:text-white">
                      Authentication
                    </a>
                  </li>
                  <li>
                    <a href="#endpoints" className="text-gray-600 dark:text-gray-400 text-sm hover:text-gray-900 dark:hover:text-white">
                      Endpoints
                    </a>
                  </li>
                  <li>
                    <a href="#webhooks" className="text-gray-600 dark:text-gray-400 text-sm hover:text-gray-900 dark:hover:text-white">
                      Webhooks
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="prose dark:prose-invert max-w-none">
              <h1 id="introduction" className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Documentation
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Welcome to the Gogol documentation. Here you'll find everything you need to build and deploy intelligent AI agents.
              </p>

              <section className="mb-12">
                <h2 id="introduction" className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                  Introduction
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Gogol is a platform that allows you to create AI agents from your own data. Whether you have a website, 
                  a collection of PDF documents, or a knowledge base, Gogol can index it and create a conversational interface for it.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  The platform handles all the complexity of AI model integration, vector embeddings, and conversational interfaces, 
                  so you can focus on providing value to your users.
                </p>
              </section>

              <section className="mb-12">
                <h2 id="installation" className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                  Installation
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Get started with Gogol in minutes:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                  <li>Sign up for a free account</li>
                  <li>Create your first AI agent</li>
                  <li>Add your data sources (website or documents)</li>
                  <li>Embed the chat widget on your site</li>
                </ol>
              </section>

              <section className="mb-12">
                <h2 id="quick-start" className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                  Quick Start
                </h2>
                <div className="bg-gray-800 dark:bg-gray-900 rounded-lg p-6 mb-4">
                  <pre className="text-sm text-gray-100 overflow-x-auto">
                    <code>{`// Install the widget
npm install @ethora/ai-widget

// Initialize in your app
import { initEthoraWidget } from '@ethora/ai-widget';

initEthoraWidget({
  agentId: 'your-agent-id',
  apiBase: 'https://api.ethoradev.com/v1',
  position: 'bottom-right',
  theme: 'light'
});`}</code>
                  </pre>
                </div>
              </section>

              <section className="mb-12">
                <h2 id="agents" className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                  AI Agents
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  An AI agent is a conversational interface trained on your specific data. Each agent can:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Answer questions based on your indexed content</li>
                  <li>Maintain conversation context</li>
                  <li>Be customized with specific personality traits</li>
                  <li>Be embedded on multiple websites</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 id="data-sources" className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                  Data Sources
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Gogol supports multiple data source types:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Website Crawling</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Automatically crawl and index your entire website with configurable depth and filters.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Document Upload</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Upload PDF, DOCX, and TXT files to create a knowledge base for your agent.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 id="chat-widget" className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                  Chat Widget
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The chat widget can be embedded on any website using either a script tag or NPM package. 
                  It's fully customizable and supports both light and dark themes.
                </p>
              </section>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
