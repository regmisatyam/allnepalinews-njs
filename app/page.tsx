'use client'
import Image from "next/image";
import SectionTwo from "./components/Section2";
import SectionThree from "./components/Section3";
import Stats from "./components/Stats";
import Ratings from "./components/Ratings";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import DevelopmentModal from "./components/DevelopmentModal";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="pt-16">
      <section className="min-h-[90vh] relative bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl dark:from-blue-900/20 dark:to-purple-900/20"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl dark:from-blue-900/20 dark:to-purple-900/20"></div>
        </div>

        <div className="container max-w-6xl mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-6">
                <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">All Nepali News</p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-blue-900 dark:from-white dark:via-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
                Perfect Mobile App For Short and Fast News
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Get news from different reliable news media. Fast | Short | Authentic. You can read news from different news media in one place. Stay updated with the latest
                headlines and stories from various sources, all in one convenient app.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="http://play.google.com/store/apps/details?id=com.satyamregmi.AllNepaliNews" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Download App
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 font-semibold rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300"
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-[2.5rem] blur-2xl opacity-20 dark:opacity-40"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-[2.5rem] p-6 shadow-2xl">
                  <Image
                    src="/mobile.png"
                    alt="Phone Mockup"
                    width={672}
                    height={378}
                    className="w-full max-w-[22rem] mx-auto rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <DevelopmentModal /> */}
      <SectionTwo />
      <SectionThree />
      <Stats />
      <Ratings />
      <FAQ />
      <Contact />
    </div>
  );
}
