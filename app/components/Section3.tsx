'use client'
import Image from "next/image";
import { motion } from "framer-motion";

export default function SectionThree() {
    return (
        <div className="font-sans bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-3xl dark:from-blue-900/20 dark:to-purple-900/20"></div>
            </div>

            <div className="container max-w-6xl mx-auto px-4 relative">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                    {/* Left Section - Phone */}
                    <motion.div 
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-[2.5rem] blur-2xl opacity-20 dark:opacity-40"></div>
                            <div className="relative bg-white dark:bg-gray-800 rounded-[2.5rem] p-6 shadow-2xl">
                                <Image
                                    src="/mobile.png"
                                    alt="Phone UI"
                                    className="w-full max-w-[22rem] mx-auto"
                                    width={672}
                                    height={378}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Section - Text and Download Buttons */}
                    <motion.div 
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="space-y-6">
                            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                                <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">DOWNLOAD OUR APP</p>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                                Get Started Today
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Download our app now and stay connected with the latest news from Nepal. Our user-friendly interface and comprehensive coverage ensure you never miss important updates.
                            </p>

                            {/* Download Buttons */}
                            <div className="flex flex-wrap gap-6 pt-4">
                                <motion.a 
                                    href="https://play.google.com/store/apps/details?id=com.satyamregmi.AllNepaliNews" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-all duration-300 hover:scale-105"
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
                                <motion.div
                                    className="flex items-center gap-4 bg-gray-100 dark:bg-gray-800 rounded-xl p-4"
                                    initial={{ opacity: 0.8 }}
                                    whileHover={{ opacity: 1 }}
                                >
                                    <div className="w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900/50 rounded-full">
                                        <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                        iOS version coming soon!
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}