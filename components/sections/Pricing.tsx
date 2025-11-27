'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CyberBackground } from '../ui/CyberBackground'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for trying out AI agents',
    features: [
      '1 AI agent',
      'Up to 100 documents',
      'Basic chat widget',
      'Community support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'For growing businesses',
    features: [
      '5 AI agents',
      'Unlimited documents',
      'Advanced customization',
      'Priority support',
      'Analytics dashboard',
      'API access',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    features: [
      'Unlimited agents',
      'Unlimited documents',
      'Custom integrations',
      'Dedicated support',
      'Advanced security',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 bg-cyber-black overflow-hidden">
      <CyberBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-glow">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
            Choose the plan that fits your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-cyber-dark rounded-none p-8 border-2 ${
                plan.popular
                  ? 'border-cyber-pink box-glow scale-105 z-10'
                  : 'border-cyber-cyan/30 hover:border-cyber-cyan'
              } transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-cyber-pink text-white px-4 py-1 font-bold text-sm uppercase tracking-wider box-glow">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2 font-mono uppercase">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-cyber-pink' : 'text-cyber-cyan'}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-400 ml-2 font-mono">
                      /{plan.period}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm font-mono">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg
                      className={`w-5 h-5 ${plan.popular ? 'text-cyber-pink' : 'text-cyber-cyan'} mr-3 flex-shrink-0 mt-0.5`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300 font-mono text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

                <Link
                  href="https://gogol-ten.vercel.app/register"
                  className={`block w-full py-3 px-6 text-center font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer hover:scale-105 ${
                    plan.popular
                      ? 'bg-cyber-pink text-white hover:bg-white hover:text-cyber-pink box-glow'
                      : 'bg-transparent border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-black'
                  }`}
                >
                  Get Started
                </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

