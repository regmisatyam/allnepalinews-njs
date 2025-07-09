'use client'
import React from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion';

const SectionTwo = () => {
    interface FeatureItemProps {
        number: string;
        title: string;
        description: string;
        delay?: number;
    }

    const FeatureItem: React.FC<FeatureItemProps> = ({ number, title, description, delay = 0 }) => (
        <motion.li 
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-full">
                    <span className="font-bold text-lg text-white">{number}</span>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
                </div>
            </div>
        </motion.li>
    );

    return (
        <div id="features" className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-24">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                    {/* Left Section - Phone UI */}
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

                    {/* Right Section - Text and Features */}
                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-blue-600 dark:text-blue-400 font-semibold mb-4">WHY CHOOSE US</h2>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Your One-Stop News Solution
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
                                Experience news reading like never before with our carefully crafted features designed to keep you informed and engaged. Our app brings together the best of Nepali news in one place.
                            </p>
                        </motion.div>

                        {/* Feature List */}
                        <ul className="space-y-6">
                            <FeatureItem 
                                number="01" 
                                title="Multiple News Sources" 
                                description="Access news from various trusted Nepali news portals in one place, saving you time and effort."
                                delay={0.2}
                            />
                            <FeatureItem 
                                number="02" 
                                title="Fast & Efficient" 
                                description="Quick loading times and optimized content delivery ensure you get your news updates instantly."
                                delay={0.4}
                            />
                            <FeatureItem 
                                number="03" 
                                title="User-Friendly Interface" 
                                description="Intuitive design and smooth navigation make reading news a delightful experience."
                                delay={0.6}
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;
