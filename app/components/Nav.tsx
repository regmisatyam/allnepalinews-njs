'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "next-themes";
import {ModeToggle} from "./Toggle"; 

const NavBar = () => {
    const [mounted, setMounted] = useState(false);
    // const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <nav className="flex justify-between items-center p-4 md:p-6 bg-gradient-to-b from-blue-500 to-blue-600 dark:from-blue-900 dark:to-blue-950 backdrop-blur z-50">
            <div className="flex items-center space-x-4">
                <Image
                    src="/ANN.png"
                    alt="Logo"
                    width={32}
                    height={32}
                    className="h-8 rounded-full"
                />
                <h1 className="text-xl md:text-2xl text-white font-bold">
                    <Link href="/">All Nepali News</Link>
                </h1>
            </div>

            <div className="hidden md:flex items-center space-x-4">
                <NavLinks />
                <ModeToggle />
                <ActionButtons />
            </div>

            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="md:hidden border-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gradient-to-b from-blue-500 to-blue-600 dark:from-blue-900 dark:to-blue-950 ">
                    <nav className="flex flex-col space-y-4">
                        <NavLinks />
                        <ModeToggle />
                        <ActionButtons />
                    </nav>
                </SheetContent>
            </Sheet>
        </nav>
    );
};

const NavLinks = () => (
    <>
        <Link href="/" className="font-bold text-white hover:text-orange-400">HOME</Link>
        <Link href="#" className="font-bold text-white hover:text-orange-400">VERSION</Link>
        <Link href="/blog" className="font-bold text-white hover:text-orange-400">BLOG</Link>
        <Link href="#" className="font-bold text-white hover:text-orange-400">FAQs</Link>
        <Link href="#" className="font-bold text-white hover:text-orange-400">CONTACT</Link>
    </>
);

const ActionButtons = () => (
    <>
        <Link href="https://web.allnepalinews.com" className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            USE WEB
        </Link>
        <Link href="https://play.google.com/store/apps/details?id=com.satyamregmi.AllNepaliNews" className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 dark:from-yellow-600 dark:to-yellow-700 dark:hover:from-yellow-700 dark:hover:to-yellow-800 text-white font-bold py-2 px-4 rounded-full transition duration-300" target="_blank">
            DOWNLOAD APP
        </Link>
    </>
);

export default NavBar;
