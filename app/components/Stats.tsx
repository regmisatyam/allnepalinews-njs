'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

const Counter = ({ end, duration = 2, suffix = '', prefix = '' }: CounterProps) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  useEffect(() => {
    if (!isInView) return
    
    let startTime: number
    let animationFrame: number
    
    const startAnimation = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / (duration * 1000)
      
      if (progress < 1) {
        setCount(Math.floor(end * progress))
        animationFrame = requestAnimationFrame(startAnimation)
      } else {
        setCount(end)
      }
    }
    
    animationFrame = requestAnimationFrame(startAnimation)
    
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isInView])

  // Format number with commas
  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  
  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold">
      {prefix}{formattedCount}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-blue-600 dark:text-blue-400 font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            BY THE NUMBERS
          </motion.h2>
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Growth in Numbers
          </motion.h3>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            All Nepali News continues to grow as the go-to app for Nepali news readers worldwide.
            Here&apos;s a snapshot of our impact.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Downloads */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </div>
            <div className="mb-2">
              <Counter end={5000} prefix="+" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Downloads</h4>
            <p className="text-gray-600 dark:text-gray-400">Total app downloads across all platforms</p>
          </motion.div>
          
          {/* Active Users */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
            <div className="mb-2">
              <Counter end={2500} prefix="+" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Active Users</h4>
            <p className="text-gray-600 dark:text-gray-400">Monthly active users reading news</p>
          </motion.div>
          
          {/* News Read */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center">
                <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
            </div>
            <div className="mb-2">
              <Counter end={100} suffix="K+" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">News Articles Read</h4>
            <p className="text-gray-600 dark:text-gray-400">Total articles read by our users</p>
          </motion.div>
          
          {/* News Sources */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
            <div className="mb-2">
              <Counter end={60} prefix="+" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">News Sources</h4>
            <p className="text-gray-600 dark:text-gray-400">Trusted Nepali news sources integrated</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 