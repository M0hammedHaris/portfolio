'use client';

import Link from 'next/link';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navbar() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    if (!mounted) {
        return null; // or a skeleton to avoid hydration mismatch
    }

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md transition-colors duration-300 dark:bg-slate-900/95 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-12">
                    <Link href="/" className="text-xl font-bold tracking-tighter text-gradient-blue">
                        MH
                    </Link>
                    <div className="hidden md:flex gap-8 text-sm font-bold text-midnight uppercase tracking-wider">
                        <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                        <Link href="#experience" className="hover:text-primary transition-colors">Experience</Link>
                        <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
                        <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <Link href="#contact" className="hidden sm:block text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-primary/20 hover:border-primary transition-all pb-0.5">
                        Hire Me
                    </Link>
                    <div className="h-6 w-px bg-slate-200 hidden sm:block dark:bg-slate-700"></div>
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle dark mode"
                        className="relative w-12 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center p-0.5 transition-all hover:border-yellow-400 group dark:bg-slate-800 dark:border-slate-700 dark:hover:border-slate-500"
                    >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${theme === 'light' ? 'bg-white theme-toggle-shadow border border-yellow-200 translate-x-0' : 'translate-x-6 bg-slate-700 border border-slate-600'}`}>
                            {theme === 'light' ? (
                                <span className="material-symbols-outlined text-[14px] text-yellow-500 fill-1 font-bold">light_mode</span>
                            ) : (
                                <span className="material-symbols-outlined text-[12px] text-slate-300">dark_mode</span>
                            )}
                        </div>
                        {theme === 'light' && (
                            <span className="ml-auto mr-1.5 material-symbols-outlined text-[12px] text-slate-300">dark_mode</span>
                        )}
                        {theme === 'dark' && (
                            <span className="mr-auto ml-1.5 material-symbols-outlined text-[12px] text-yellow-500">light_mode</span>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
}
