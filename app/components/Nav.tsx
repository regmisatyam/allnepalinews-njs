'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="flex justify-between items-center p-6 bg-custom-blue relative">
            <div className="flex items-center space-x-4">
                <Image
                    src="/ANN.png"
                    alt="Logo"
                    width={32}
                    height={32} 
                    className="h-8 rounded-full"
                />
                <h1 className="text-2xl text-white font-bold">
                    <Link href="/">All Nepali News</Link>
                </h1>
            </div>

            <div
                id="menu"
                className={`fixed md:relative top-0 right-0 h-full md:h-auto w-64 md:w-auto bg-blue-800 md:bg-transparent text-center md:text-left transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:transform-none md:transition-none`}
            >
                <button onClick={toggleMenu} className="md:hidden close-button-gradient block text-white font-bold px-5 py-3 m-1 rounded-full absolute top-0 right-0">
                    X
                </button>
                <Link href="#" className="font-bold text-white hover:text-orange-400 block md:inline-block p-4 ">
                    HOME
                </Link>
                <Link href="#" className="font-bold text-white hover:text-orange-400 block md:inline-block p-4 ">
                    VERSION
                </Link>
                <Link href="#" className="font-bold text-white hover:text-orange-400 block md:inline-block p-4 ">
                    FAQs
                </Link>
                <Link href="#" className="font-bold text-white hover:text-orange-400 block md:inline-block p-4 ">
                    CONTACT
                </Link>
                <Link href="#" className="md:hidden top-button-gradient block text-white font-bold py-3 px-8 m-5 mx-10 rounded-full">
                    USE WEB
                </Link>
                <Link href="#" className="md:hidden button-gradient block text-white font-bold py-3 mb-5 mx-10 px-8 rounded-full">
                    DOWNLOAD APP
                </Link>
            </div>

            <div className="hidden md:flex">
                <Link href="https://web.allnepalinews.com" className="top-button-gradient text-white font-bold py-3 px-8 mx-2 rounded-full hover:bg-transparent">
                    USE WEB
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.satyamregmi.AllNepaliNews" className="button-gradient text-white font-bold py-2 px-6 lg:py-3 lg:px-8 rounded-full" target="_blank">
                    DOWNLOAD APP
                </Link>
            </div>

            <button id="menu-btn" className="md:hidden block text-white focus:outline-none" onClick={toggleMenu}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </nav>
    );
};

export default NavBar;