'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItemProps {
  question: string
  answer: string
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 dark:border-gray-800">
      <button
        className="flex w-full items-center justify-between py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900 dark:text-white">{question}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12">
              <p className="text-base text-gray-600 dark:text-gray-400">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const faqs = [
    {
      question: 'What is All Nepali News?',
      answer: 'All Nepali News is a mobile application that aggregates news from various trusted Nepali news sources, allowing you to access all the latest headlines and stories in one convenient place.'
    },
    {
      question: 'Is the app free to download and use?',
      answer: 'Yes, All Nepali News is completely free to download and use. We believe in providing accessible news to everyone without any subscription fees.'
    },
    {
      question: 'Which news sources are included in the app?',
      answer: 'Our app includes content from major Nepali news portals and publications. We carefully select reliable and trusted sources to ensure you get accurate information.'
    },
    {
      question: 'Is the app available for iOS devices?',
      answer: 'Currently, All Nepali News is available for Android devices on Google Play Store. We are working on an iOS version which will be available in the future.'
    },
    {
      question: 'How often is the news updated?',
      answer: 'Our app fetches the latest news in real-time from our partner publications. This ensures that you always have access to the most current news and updates.'
    },
    {
      question: 'Can I save articles to read later?',
      answer: 'Yes, you can bookmark articles to read later even when you\'re offline. This feature allows you to create your own reading list of important or interesting stories.'
    }
  ]

  return (
    <section id="faq" className="bg-white dark:bg-gray-900 py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-blue-600 dark:text-blue-400 font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.h2>
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Got Questions? We've Got Answers
          </motion.h3>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Here are some of the most common questions we receive about All Nepali News app. If you can't find what you're looking for, feel free to contact us.
          </motion.p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
          <motion.div 
            className="divide-y divide-gray-200 dark:divide-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Still have questions? We're here to help.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 