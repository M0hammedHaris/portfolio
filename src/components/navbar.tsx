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
        <nav className="fixed top-0 w-full z-50 border-b border-border-subtle bg-background/95 backdrop-blur-md transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-12">
                    <Link href="/" className="text-xl font-bold tracking-tighter text-gradient-blue">
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
                    <Link href="#contact" className="hidden sm:block text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-primary/20 hover:border-primary transition-all pb-0.5">
                        Hire Me
                    </Link>
                    <div className="h-6 w-px bg-slate-200 hidden sm:block dark:bg-slate-700"></div>
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle dark mode"
                        className="relative w-14 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center p-1 transition-all hover:border-primary/30 group dark:bg-slate-800 dark:border-slate-700"
                    >
                        <div className={`absolute w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out ${theme === 'dark' ? 'translate-x-7 bg-primary' : 'translate-x-0 bg-white border border-yellow-200 shadow-sm'}`}>
                            <span className={`material-symbols-outlined text-[12px] transition-colors ${theme === 'dark' ? 'text-white' : 'text-yellow-500'}`}>
                                {theme === 'dark' ? 'dark_mode' : 'light_mode'}
                            </span>
                        </div>
                        <div className="flex w-full justify-between items-center px-1 text-slate-300 dark:text-slate-500">
                            <span className="material-symbols-outlined text-[10px]">light_mode</span>
                            <span className="material-symbols-outlined text-[10px]">dark_mode</span>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
}
