'use client'

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Terms of Service</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              By accessing or using the gogols.ai platform ("Service"), you agree to be bound by these Terms of Service. 
              If you disagree with any part of the terms, then you may not access the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Description of Service</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              gogols.ai provides a platform for creating, managing, and deploying AI-powered conversational agents. 
              The Service allows you to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
              <li>Create Gogol Agents based on your data</li>
              <li>Index websites and documents</li>
              <li>Embed chat widgets on your websites</li>
              <li>Access API endpoints for custom integrations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">User Accounts</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              When you create an account with us, you must provide accurate, complete, and current information. 
              Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              You are responsible for safeguarding the password and for all activities that occur under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Acceptable Use</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You agree not to use the Service:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
              <li>For any unlawful purpose or to violate any laws</li>
              <li>To transmit harmful, offensive, or inappropriate content</li>
              <li>To impersonate or attempt to impersonate gogols.ai or another user</li>
              <li>To interfere with or disrupt the Service or servers</li>
              <li>To attempt to gain unauthorized access to any portion of the Service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Intellectual Property</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The Service and its original content, features, and functionality are owned by gogols.ai and are protected 
              by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              You retain all rights to the content you upload to the Service. By uploading content, you grant us 
              a license to use, store, and process that content solely for the purpose of providing the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Termination</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason, 
              including if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              In no event shall gogols.ai, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential, or punitive damages, including without 
              limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Changes to Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We reserve the right to modify or replace these Terms at any time. We will provide notice of any 
              material changes by posting the new Terms on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-300">
              If you have any questions about these Terms, please contact us at{' '}
              <a href="mailto:legal@gogols.ai" className="text-primary-600 dark:text-primary-400 hover:underline">
                legal@gogols.ai
              </a>
            </p>
          </section>
        </article>
      </div>
      <Footer />
    </div>
  )
}
