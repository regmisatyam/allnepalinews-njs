import Image from "next/image";

export default function SectionThree() {
    return (
        <div className="font-sans">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-950 py-12 text-white relative">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            {/* Left Section - Phone */}
            <div className="w-full md:w-1/2 flex justify-center items-center md:absolute md:left-4 lg:left-12 md:top-[-100px]">
              <div className=" rounded-3xl p-2">
                <div className="overflow-hidden rounded-2xl w-full">
                  <Image
                    src="/mobile.png"
                    alt="Phone UI"
                    className="w-full max-w-[22rem]"
                    width={672}
                    height={378}
                  />
                </div>
              </div>
            </div>
      
            {/* Right Section - Text and Download Buttons */}
            <div className="w-full md:w-1/2 md:ml-auto p-4 md:p-8 mt-8 md:mt-0">
              <h1 className="text-yellow-400 dark:text-yellow-300 font-bold mb-2">DOWNLOAD OUR APP</h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Checkout Our App</h2>
              <p className="leading-relaxed mb-8 text-gray-100 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, facilis cumque? Dicta sunt minima incidunt dignissimos delectus veritatis. Quisquam minima voluptatum autem quibusdam quis possimus dolorem ducimus quae? Error, accusamus!
              </p>
      
              {/* Download Buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.satyamregmi.AllNepaliNews" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <Image
                    src="/get-on-play.png"
                    alt="Get it on Google Play"
                    width={160}
                    height={48}
                    className="h-12 w-auto"
                  />
                </a>
                {/* Add App Store button here if needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
}