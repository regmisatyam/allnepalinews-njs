'use client'
import Image from "next/image";
import SectionTwo from "./components/Section2";
import SectionThree from "./components/Section3";

export default function Home() {
  return (
    <div>
      <section className="bg-custom-blue text-white py-20">
        <div className="container max-w-6xl mx-auto px-4 flex max-md:flex-wrap gap-12 items-center justify-between">
          <div className="">
            <p className="uppercase text-yellow-400 font-bold mb-4">All Nepali News</p>
            <h1 className="text-5xl font-extrabold mb-6">Perfect Mobile App For Short and Fast News</h1>
            <p className="text-lg mb-8">
              Get news from different reliable news media. Fast | Short | Authentic. You can read news from different news media in one place. Stay updated with the latest
              headlines and stories from various sources, all in one convenient app.
            </p>
            <div className="flex space-x-4">
              <button className="button-gradient text-white font-bold py-3 px-8 rounded-full">Download App</button>
              <button className="bg-transparent border border-white text-white font-bold py-3 px-8 rounded-full">
                Learn More
              </button>
            </div>
          </div>
          <div className="">
            <Image
              src="/mobile.png"
              alt="Phone Mockup"
              width={672}
              height={378}
              className="w-250 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <SectionTwo />
      <SectionThree />

      <style jsx global>{`
      /* Custom Styles - best kept in a separate CSS module for larger projects */
      .bg-custom-blue {
        background: linear-gradient(to bottom, #284bff, #0062ff);
      }

      .button-gradient {
        background: linear-gradient(to right, #ffa000, #ffc107);
      }

      .top-button-gradient {
        background: linear-gradient(to right, #0080ff, #00bfff);
      }
      .close-button-gradient {
        background: linear-gradient(to right, #ffa000, #ffc107);
      }

      .w-250 {
        width: 42rem;
      }
    `}</style>
    </div>
  );
}
