'use client';

import { DATA } from '@/lib/data';

export function Footer() {
    return (
        <footer className="py-8 text-center text-slate-500 text-sm font-semibold border-t border-slate-100 dark:border-slate-800 dark:text-slate-400">
            <p className="mb-2">&copy; {new Date().getFullYear()} {DATA.name}. All rights reserved.</p>
            <p className="flex items-center justify-center gap-1">
                Designed & Built by <span className="text-primary">{DATA.name}</span>
            </p>
        </footer>
    );
}
