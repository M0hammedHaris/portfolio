'use client';

import Link from 'next/link';
import { DATA } from '@/lib/data';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center pl-8 md:pl-20">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="hidden font-bold sm:inline-block text-xl">
                            {DATA.initials}
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link
                            href="#projects"
                            className={cn(
                                "transition-colors hover:text-foreground/80",
                                pathname === "/#projects" ? "text-foreground" : "text-foreground/60"
                            )}
                        >
                            Projects
                        </Link>
                        <Link
                            href="#about"
                            className={cn(
                                "transition-colors hover:text-foreground/80",
                                pathname === "/#about" ? "text-foreground" : "text-foreground/60"
                            )}
                        >
                            About
                        </Link>
                        <Link
                            href="#contact"
                            className={cn(
                                "transition-colors hover:text-foreground/80",
                                pathname === "/#contact" ? "text-foreground" : "text-foreground/60"
                            )}
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <span className="md:hidden font-bold text-xl">{DATA.initials}</span>
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
}
