import React from 'react';
import Image from 'next/image'


const SectionTwo = () => {

    interface FeatureItemProps {
        number: string;
        title: string;
        description: string;
    }

    const FeatureItem: React.FC<FeatureItemProps> = ({ number, title, description }) => (
        <li className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-md dark:shadow-gray-900 flex items-start">
            <div className="border border-orange-500 dark:border-orange-400 py-3 px-4 rounded-full font-bold text-xl text-orange-500 dark:text-orange-400">
                {number}
            </div>
            <div className="ml-5">
                <div className="text-xl font-bold text-gray-900 dark:text-white">{title}</div>
                <div className="mt-2 text-gray-700 dark:text-gray-300">{description}</div>
            </div>
        </li>
    );

    return (
        <div className=" bg-white dark:bg-gray-800 pb-20">
            <div className="mx-auto py-20 px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Left Section - Phone UI */}
                    <div className="w-full md:w-1/2">
                        <div className="rounded-3xl p-2">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                                <Image
                                    src="/mobile.png"
                                    alt="Phone UI"
                                    className="block w-full max-w-[22rem]"
                                    width={672}
                                    height={378}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Text and Features */}
                    <div className="w-full md:w-1/2">
                        <h1 className="text-blue-600 dark:text-blue-400 font-bold mb-2">INTRODUCTION TO US</h1>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Delivering Exceptional User Experiences</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sapiente ipsam temporibus, ratione fugiat quos, molestias ad consectetur explicabo obcaecati reiciendis quae deleniti cum nostrum magni eaque ut ducimus placeat.
                        </p>

                        {/* Feature List */}
                        <ul className="list-none p-0 space-y-6">
                            <FeatureItem number="01" title="Easy User Interface" description="Long contents" />
                            <FeatureItem number="02" title="Easy User Interface" description="Long contents" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );

};

export default SectionTwo;
