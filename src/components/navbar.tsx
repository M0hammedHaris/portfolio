'use client';

import Link from 'next/link';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function Navbar() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Handle hydration properly
    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 0);
        return () => clearTimeout(timer);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    if (!mounted) {
        return (
            <nav className="fixed top-0 w-full z-50 border-b border-border-subtle bg-background/95 backdrop-blur-md transition-colors duration-300">
                <Link
                    href="#main"
                    className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:font-bold"
                >
                    Skip to main content
                </Link>
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-12">
                        <Link href="/" className="text-xl font-bold tracking-tighter text-gradient-primary">
                            MH
                        </Link>
                        <div className="hidden md:flex gap-8 text-sm font-bold text-foreground uppercase tracking-wider">
                            <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                            <Link href="#experience" className="hover:text-primary transition-colors">Experience</Link>
                            <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
                            <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="#contact" className="hidden sm:block text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-primary/20 hover:border-primary-hover transition-all pb-0.5">
                            Hire Me
                        </Link>
                        <div className="h-6 w-px bg-slate-200 hidden sm:block dark:bg-slate-700"></div>
                        <div className="w-16 h-7 rounded-full bg-slate-100 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 flex items-center justify-center">
                            <Sun className="h-4 w-4 text-slate-300" />
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-border-subtle bg-background/95 backdrop-blur-md transition-colors duration-300">
            {/* Skip to main content link */}
            <Link
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:font-bold"
            >
                Skip to main content
            </Link>
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-12">
                    <Link href="/" className="text-xl font-bold tracking-tighter text-gradient-primary">
                        MH
                    </Link>
                    <div className="hidden md:flex gap-8 text-sm font-bold text-foreground uppercase tracking-wider">
                        <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                        <Link href="#experience" className="hover:text-primary transition-colors">Experience</Link>
                        <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
                        <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <Link href="#contact" className="hidden sm:block text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-primary/20 hover:border-primary-hover transition-all pb-0.5">
                        Hire Me
                    </Link>
                    <div className="h-6 w-px bg-slate-200 hidden sm:block dark:bg-slate-700"></div>
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle dark mode"
                        className="relative w-16 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center p-1 transition-all hover:border-primary/30 group dark:bg-slate-800 dark:border-slate-700 overflow-hidden"
                    >
                        {/* Background Icons */}
                        <div className="flex w-full justify-between items-center px-1.5 text-slate-300 dark:text-slate-500">
                            <Sun size={10} strokeWidth={3} />
                            <Moon size={10} strokeWidth={3} />
                        </div>

                        {/* Animated Toggle Circle */}
                        <motion.div
                            initial={false}
                            animate={{
                                x: theme === 'dark' ? 30 : 0,
                                backgroundColor: theme === 'dark' ? '#FF7F50' : '#ffffff',
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30
                            }}
                            className={`absolute w-5 h-5 rounded-full flex items-center justify-center shadow-sm z-10 ${theme === 'light' ? 'border border-yellow-200' : ''}`}
                        >
                            <motion.div
                                key={theme}
                                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2 }}
                                className={theme === 'dark' ? 'text-white' : 'text-yellow-500'}
                            >
                                {theme === 'dark' ? (
                                    <Moon size={12} strokeWidth={3} />
                                ) : (
                                    <Sun size={12} strokeWidth={3} />
                                )}
                            </motion.div>
                        </motion.div>
                    </button>
                </div>
            </div>
        </nav>
    );
}
