import React from 'react';


const SectionTwo = () => {
    return (
        <div className="mx-auto py-20 max-w-6xl">
            <div className="flex font-sans flex max-md:flex-wrap items-center justify-between">
                {/* Left Section - Phone UI */}
                <div className="p-5">
                    <div className="border-2 border-gray-300 rounded-3xl p-2 mr-5">
                        <div className="bg-white rounded-2xl overflow-hidden">
                            <img
                                src="/mobile.png"
                                alt="Phone UI"
                                className="block w-250"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Section - Text and Features */}
                <div className=" p-5">
                    <h1 className=" text-blue-600 font-bold ">INTRODUCTION TO US</h1>
                    <h2 className="text-5xl font-bold mb-2">Delivering Exceptional User Experiences</h2>
                    <p className="text-gray-700 leading-relaxed mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sapiente ipsam temporibus, ratione fugiat quos, molestias ad consectetur explicabo obcaecati reiciendis quae deleniti cum nostrum magni eaque ut ducimus placeat.
                    </p>

                    {/* Feature List */}
                    <ul className="list-none p-0">
                        <li className="mb-4 bg-white rounded-2xl p-5 shadow flex">
                            <div className=" border py-5 px-6 border-orange-500 rounded-full font-bold text-2xl text-orange-500">01</div>
                            <div className="ml-5">
                                <div className="text-2xl font-bold">Easy User Interface</div>
                                <div className="mt-2">Long contents</div>
                            </div>

                        </li>
                        <li className="mb-4 bg-white rounded-2xl p-5 shadow flex">
                        <div className=" border py-5 px-6 rounded-full border-orange-500 font-bold text-2xl text-orange-500">02</div>
                            <div className="ml-5">
                                <div className="text-2xl font-bold">Easy User Interface</div>
                                <div className="mt-2">Long contents</div>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default SectionTwo;
