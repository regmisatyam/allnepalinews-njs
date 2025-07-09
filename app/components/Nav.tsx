'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./Toggle";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NavBar = () => {
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname: string = usePathname();

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!mounted) return null;

    return (
        <motion.nav 
            className={`fixed top-0 left-0 right-0 flex justify-between items-center p-4 md:px-8 md:py-4 backdrop-blur-md z-50 transition-all duration-300 ${
                scrolled ? 'bg-white dark:bg-gray-900/90 shadow-lg' : 'bg-transparent'
            }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative overflow-hidden rounded-xl">
                    <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                    />
                    <Image
                        src="/ANN.png"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-xl shadow-lg relative z-10"
                    />
                </div>
                <motion.h1 
                    className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    All Nepali News
                </motion.h1>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
                <NavLinks pathname={pathname} />
                <div className="h-6 w-px bg-gray-300 dark:bg-gray-700"></div>
                <ModeToggle />
                <ActionButtons />
            </div>

            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg">
                    <div className="flex items-center space-x-3 mt-4">
                        <Image
                            src="/ANN.png"
                            alt="Logo"
                            width={32}
                            height={32}
                            className="h-8 w-8 rounded-xl shadow-md"
                        />
                        <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                            All Nepali News
                        </h2>
                    </div>
                    <nav className="flex flex-col space-y-6 mt-8">
                        <NavLinks pathname={pathname} isMobile={true} />
                        <div className="h-px w-full bg-gray-200 dark:bg-gray-800"></div>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-600 dark:text-gray-400">Theme:</span>
                            <ModeToggle />
                        </div>
                        <div className="flex flex-col space-y-4">
                            <ActionButtons isMobile={true} />
                        </div>
                    </nav>
                </SheetContent>
            </Sheet>
        </motion.nav>
    );
};

const NavLinks = ({ pathname, isMobile = false }: { pathname: string, isMobile?: boolean }) => {
    const links = [
        { href: "/", label: "HOME" },
        { href: "#features", label: "FEATURES" },
        { href: "/blog", label: "BLOG" },
        { href: "#faq", label: "FAQs" },
        { href: "#contact", label: "CONTACT" }
    ];

    return (
        <div className={`flex ${isMobile ? 'flex-col space-y-6' : 'md:flex-row space-y-0 md:space-x-8'}`}>
            {links.map((link) => (
                <Link 
                    key={link.href} 
                    href={link.href}
                    className={`relative text-sm font-medium group ${
                        pathname === link.href 
                            ? 'text-blue-600 dark:text-blue-400' 
                            : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    } transition-colors`}
                >
                    {link.label}
                    {pathname === link.href && (
                        <motion.span 
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                            layoutId="underline"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                    {pathname !== link.href && (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    )}
                </Link>
            ))}
        </div>
    );
};

const ActionButtons = ({ isMobile = false }) => (
    <div className={`flex ${isMobile ? 'flex-col space-y-4' : 'md:flex-row space-y-0 md:space-x-4'}`}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="https://web.allnepalinews.com" className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">
                USE WEB
            </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="https://play.google.com/store/apps/details?id=com.satyamregmi.AllNepaliNews" className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 rounded-full transition-all transform duration-200" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.9,2.4c-0.1,0-0.2,0-0.3,0l-5.6,5.7l-4.1-4.1C7.8,4,7.7,4,7.6,4C7.5,4,7.3,4,7.2,4.1C7.1,4.2,7,4.3,7,4.5v15.1
                    c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.3,0.1,0.4,0l5.6-5.7l4.1,4.1c0.1,0.1,0.2,0.1,0.3,0.1c0.1,0,0.3,0,0.4-0.1
                    c0.1-0.1,0.2-0.3,0.2-0.4V2.8c0-0.2-0.1-0.3-0.2-0.4C18.1,2.4,18,2.4,17.9,2.4z"/>
                </svg>
                DOWNLOAD APP
            </Link>
        </motion.div>
    </div>
);

export default NavBar;
