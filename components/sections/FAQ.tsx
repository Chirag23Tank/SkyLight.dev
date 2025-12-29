'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on complexity and scope. A simple website typically takes 2-4 weeks, while a full-stack application can take 2-6 months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'What is your development process?',
    answer:
      'We follow an agile development process: Discovery & Planning, Design & Prototyping, Development & Testing, Deployment, and Ongoing Support. We keep you involved at every stage with regular updates and demos.',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer:
      'Yes! We offer comprehensive maintenance and support packages. This includes bug fixes, security updates, performance monitoring, and feature enhancements. We ensure your project continues to perform optimally.',
  },
  {
    question: 'Can you work with our existing team?',
    answer:
      'Absolutely! We excel at collaborating with in-house teams. We can integrate seamlessly with your existing workflows, use your preferred tools, and work alongside your developers to ensure smooth collaboration.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer:
      'We specialize in modern web technologies including React, Next.js, TypeScript, React Native for mobile apps, Node.js for backend, and cloud platforms like AWS and Supabase. We stay current with the latest industry standards.',
  },
  {
    question: 'How do you handle project pricing?',
    answer:
      'We provide transparent pricing based on project scope. We offer fixed-price projects for well-defined requirements and time-and-materials for flexible, evolving projects. All pricing is discussed upfront with no hidden costs.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Have questions? We've got answers. If you don't see what you're looking for, feel free to
            contact us.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

