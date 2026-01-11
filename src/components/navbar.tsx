'use client';

import Link from 'next/link';
import { DATA } from '@/lib/data';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
    const pathname = usePathname();

    const NavLinks = () => (
        <>
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
        </>
    );

    return (
        <header className="w-full border-b bg-background">
            <div className="container flex h-14 items-center px-4 md:px-8 md:pl-20">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="hidden font-bold sm:inline-block text-xl text-primary">
                            {DATA.initials}
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <NavLinks />
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <span className="md:hidden font-bold text-xl text-primary">{DATA.initials}</span>
                    <div className="flex items-center gap-2">
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </header>
    );
}
