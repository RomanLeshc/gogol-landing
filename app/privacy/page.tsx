'use client'

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              At gogols.ai, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
              and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
              please do not access the site or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
              <li>Account information (name, email address, password)</li>
              <li>Profile information</li>
              <li>Content you upload (documents, website URLs)</li>
              <li>Communications with us</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Data Security</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We implement appropriate technical and organizational measures to protect the security of your personal information. 
              However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your Rights</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to delete your personal information</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-300">
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@gogols.ai" className="text-primary-600 dark:text-primary-400 hover:underline">
                privacy@gogols.ai
              </a>
            </p>
          </section>
        </article>
      </div>
      <Footer />
    </div>
  )
}
