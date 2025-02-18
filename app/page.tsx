'use client'
import Image from "next/image";
import SectionTwo from "./components/Section2";
import SectionThree from "./components/Section3";
import DevelopmentModal from "./components/DevelopmentModal";

export default function Home() {
  return (
    <div>
     
     <section className="bg-gradient-to-b from-blue-500 to-blue-600 dark:from-blue-900 dark:to-blue-950 text-white py-20">
  <div className="container max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center justify-between">
    <div className="md:w-1/2">
      <p className="uppercase text-yellow-400 dark:text-yellow-300 font-bold mb-4">All Nepali News</p>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Perfect Mobile App For Short and Fast News</h1>
      <p className="text-lg mb-8">
        Get news from different reliable news media. Fast | Short | Authentic. You can read news from different news media in one place. Stay updated with the latest
        headlines and stories from various sources, all in one convenient app.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 dark:from-yellow-600 dark:to-yellow-700 dark:hover:from-yellow-700 dark:hover:to-yellow-800 text-white font-bold py-3 px-8 rounded-full transition duration-300">
          Download App
        </button>
        <button className="bg-transparent border border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 dark:hover:text-blue-900 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
    <div className="md:w-1/2">
      <Image
        src="/mobile.png"
        alt="Phone Mockup"
        width={672}
        height={378}
        className="w-full max-w-[22rem] rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>

      <DevelopmentModal />
      <SectionTwo />
      <SectionThree />

     
    </div>
  );
}
