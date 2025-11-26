'use client'

import { motion } from 'framer-motion'
import { CyberBackground } from '../ui/CyberBackground'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, TechStart Inc.',
    content: 'We deployed our AI agent in under 10 minutes. It\'s handling 80% of our customer support queries now.',
    avatar: 'SC',
  },
  {
    name: 'Michael Rodriguez',
    role: 'CTO, DataFlow Systems',
    content: 'The internal knowledge base feature transformed how our team accesses information. Game changer!',
    avatar: 'MR',
  },
  {
    name: 'Emily Johnson',
    role: 'Head of Support, CloudScale',
    content: 'Our support team can focus on complex issues while the AI handles routine questions. Perfect solution.',
    avatar: 'EJ',
  },
]

export function Testimonials() {
  return (
    <section className="relative py-20 bg-cyber-black overflow-hidden">
      <CyberBackground variant="neon" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-glow">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
            Trusted by businesses worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-cyber-dark rounded-none p-6 border border-cyber-cyan/30 hover:border-cyber-cyan transition-all hover:box-glow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyber-cyan/50"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyber-cyan/50"></div>
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cyber-cyan/10 border border-cyber-cyan rounded-none flex items-center justify-center text-cyber-cyan font-bold font-mono mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-white font-mono">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-cyber-pink font-mono">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 italic font-mono text-sm border-l-2 border-cyber-pink/50 pl-4">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

