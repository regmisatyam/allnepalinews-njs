'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
  
  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={`full-${i}`} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      
      {hasHalfStar && (
        <div className="relative">
          <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <div className="absolute top-0 left-0 overflow-hidden w-1/2">
            <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      )}
      
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={`empty-${i}`} className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

// Review card component
interface ReviewProps {
  name: string
  rating: number
  comment: string
  date: string
  delay?: number
}

const Review = ({ name, rating, comment, date, delay = 0 }: ReviewProps) => (
  <motion.div 
    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
  >
    <div className="flex items-center mb-4">
      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mr-3">
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
      </div>
    </div>
    <div className="mb-3">
      <StarRating rating={rating} />
    </div>
    <p className="text-gray-600 dark:text-gray-300 text-sm">{comment}</p>
  </motion.div>
)

// Rating distribution bar
interface RatingBarProps {
  stars: number
  percentage: number
  count: number
  delay?: number
}

const RatingBar = ({ stars, percentage, count, delay = 0 }: RatingBarProps) => (
  <motion.div 
    className="flex items-center mb-2"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="w-12 text-sm text-gray-600 dark:text-gray-400">{stars} stars</div>
    <div className="flex-1 mx-3 h-3 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
      <motion.div 
        className="h-full bg-yellow-400 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
      />
    </div>
    <div className="w-10 text-right text-sm text-gray-600 dark:text-gray-400">{count}</div>
  </motion.div>
)

export default function Ratings() {
  // Sample reviews
  const reviews = [
    {
      name: "Anish Lohani",
      rating: 5,
      comment: "I loved all the features of the app. The AI powered voice dictation is goated. One thing that can be improved is the inclusion of switching button between dark and light mode. Another thing to be added is switching between the languages.",
      date: "June 22, 2025"
    },
    {
      name: "Aɴᴜᴊᴀ Kʜᴀɴᴀʟ",
      rating: 5,
      comment: "I recently downloaded, and I must say, it’s quickly become my go-to source for news. The user interface is clean and intuitive, making it easy to navigate through various categories of news like politics, technology, and entertainment.",
      date: "November 1, 2024"
    },
    {
      name: "Santosh Raut",
      rating: 5,
      comment: "Best app for current news and updates.",
      date: "June 22, 2025"
    }
  ]
  
  // Rating distribution
  const ratingDistribution = [
    { stars: 5, percentage: 80, count: 27 },
    { stars: 4, percentage: 15, count: 3 },
    { stars: 3, percentage: 5, count: 1 },
    { stars: 2, percentage: 0, count: 0 },
    { stars: 1, percentage: 0, count: 0 }
  ]
  
  // Average rating calculation
  const totalRatings = ratingDistribution.reduce((acc, item) => acc + item.count, 0)
  const weightedSum = ratingDistribution.reduce((acc, item) => acc + (item.stars * item.count), 0)
  const averageRating = (weightedSum / totalRatings).toFixed(1)

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-yellow-400/10 to-orange-400/10 blur-3xl dark:from-yellow-900/10 dark:to-orange-900/10"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-blue-600 dark:text-blue-400 font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            USER FEEDBACK
          </motion.h2>
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Our Users Are Saying
          </motion.h3>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Don't just take our word for it. Here's what our users think about All Nepali News.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Overall Rating */}
          <motion.div 
            className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Overall Rating</h4>
              <div className="flex justify-center mb-2">
                <span className="text-5xl font-bold text-gray-900 dark:text-white">{averageRating}</span>
                <span className="text-xl text-gray-500 dark:text-gray-400 self-end mb-1 ml-1">/5</span>
              </div>
              <div className="flex justify-center mb-2">
                <StarRating rating={parseFloat(averageRating)} />
              </div>
              <p className="text-gray-600 dark:text-gray-400">Based on {totalRatings.toLocaleString()} reviews</p>
            </div>
            
            <div className="space-y-2">
              <h5 className="font-medium text-gray-900 dark:text-white mb-4">Rating Distribution</h5>
              {ratingDistribution.map((item, index) => (
                <RatingBar 
                  key={item.stars} 
                  stars={item.stars} 
                  percentage={item.percentage} 
                  count={item.count} 
                  delay={index * 0.1}
                />
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <motion.a 
                href="https://play.google.com/store/apps/details?id=com.satyamregmi.AllNepaliNews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-full transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,17V16H9V14H13V13H10A1,1 0 0,1 9,12V9A1,1 0 0,1 10,8H11V7H13V8H15V10H11V11H14A1,1 0 0,1 15,12V15A1,1 0 0,1 14,16H13V17H11Z" />
                </svg>
                Rate Our App
              </motion.a>
            </div>
          </motion.div>
          
          {/* User Reviews */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Review 
                key={index} 
                name={review.name} 
                rating={review.rating} 
                comment={review.comment} 
                date={review.date} 
                delay={index * 0.1}
              />
            ))}
            
            <motion.div 
              className="md:col-span-2 lg:col-span-3 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-2xl p-8 text-white shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-xl font-bold mb-2">Love the app?</h4>
                  <p className="text-blue-100">Your feedback helps us improve. Share your experience with others!</p>
                </div>
                <motion.a 
                  href="https://play.google.com/store/apps/details?id=com.satyamregmi.AllNepaliNews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-blue-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.9,2.4c-0.1,0-0.2,0-0.3,0l-5.6,5.7l-4.1-4.1C7.8,4,7.7,4,7.6,4C7.5,4,7.3,4,7.2,4.1C7.1,4.2,7,4.3,7,4.5v15.1
                    c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.3,0.1,0.4,0l5.6-5.7l4.1,4.1c0.1,0.1,0.2,0.1,0.3,0.1c0.1,0,0.3,0,0.4-0.1
                    c0.1-0.1,0.2-0.3,0.2-0.4V2.8c0-0.2-0.1-0.3-0.2-0.4C18.1,2.4,18,2.4,17.9,2.4z"/>
                  </svg>
                  Write a Review
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* App Store badges */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Download Now</h4>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a 
              href="https://play.google.com/store/apps/details?id=com.satyamregmi.AllNepaliNews"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/get-on-play.png"
                alt="Get it on Google Play"
                width={200}
                height={60}
                className="h-[60px] w-auto"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 