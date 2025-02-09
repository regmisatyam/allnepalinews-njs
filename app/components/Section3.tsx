import Image from "next/image";

export default function SectionThree() {
    return (
        <div className="font-sans">

            {/* Second Section - App Download */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-12 text-white my-36">
                <div className="container mx-auto flex max-md:flex-wrap items-center justify-center px-4">
                    {/* Left Section - Phones */}
                    <div className="flex justify-center items-center relative top-[-135px]">
                        <div className="">
                            {/* Phone 1 */}
                            <div className="">
                                <div className="border-2 border-gray-300 rounded-3xl">
                                    <div className="overflow-hidden rounded-2xl w-72">
                                        <Image
                                            src="/mobile.png"
                                            alt="Phone UI"
                                            className="w-full"
                                            width={672}
                                            height={378}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Text and Download Buttons */}
                    <div className=" p-8">
                        <h1 className=" text-yellow-400 font-bold ">INTRODUCTION TO US</h1>
                        <h2 className="text-5xl font-bold mb-4">Checkout Our App</h2>
                        <p className="leading-relaxed mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, facilis cumque? Dicta sunt minima incidunt dignissimos delectus veritatis. Quisquam minima voluptatum autem quibusdam quis possimus dolorem ducimus quae? Error, accusamus!
                        </p>

                        {/* Download Buttons */}
                        <div className="flex">
                            <a href="https://play.google.com/store/apps/details?id=com.satyamregmi.AllNepaliNews" className="mr-4" target="_blank">
                                <Image
                                    src="/get-on-play.png"
                                    alt="Get it on Google Play"
                                    className="h-12"
                                    width={40}
              height={20}
                                />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}