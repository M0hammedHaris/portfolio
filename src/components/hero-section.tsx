'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { DATA } from '@/lib/data';
import { ArrowRight, MessageSquare, ChevronDown, CheckCircle2 } from 'lucide-react';

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-start md:items-center justify-center pt-32 pb-16 md:pt-16 overflow-hidden bg-background">
            <div className="absolute inset-0 grid-lines-light -z-10"></div>
            <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl md:h-96 md:w-96"></div>
            <div className="absolute bottom-20 right-0 h-60 w-60 rounded-full bg-slate-500/10 blur-3xl dark:bg-white/5"></div>
            <div className="max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-8 relative inline-block">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
                        <Image
                            alt={`${DATA.name} - Full Stack Software Engineer`}
                            src={DATA.avatarUrl}
                            width={160}
                            height={160}
                            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-background shadow-xl"
                            priority
                        />
                    </div>
                    <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
                        {DATA.highlights.map(highlight => (
                            <span key={highlight} className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-primary">
                                <CheckCircle2 size={12} /> {highlight}
                            </span>
                        ))}
                    </div>
                    <p className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-4 font-bold">FULL STACK DEVELOPER</p>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight text-midnight">
                        Hi, I&apos;m <span className="text-gradient-primary">{DATA.name}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-main mb-4 font-medium">
                        Architecting robust systems & elegant interfaces
                    </p>
                    <p className="max-w-2xl mx-auto text-text-muted mb-10 text-lg leading-relaxed">
                        {DATA.bio}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#projects"
                            aria-label="View my projects portfolio"
                            className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/30"
                        >
                            View Projects <ArrowRight size={18} strokeWidth={2.5} />
                        </Link>
                        <Link
                            href="#contact"
                            aria-label="Get in touch with me"
                            className="w-full sm:w-auto px-8 py-4 bg-background border border-border-subtle text-foreground font-bold rounded-xl hover:bg-surface hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-sm"
                        >
                            Get in Touch <MessageSquare size={18} strokeWidth={2.5} />
                        </Link>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {[
                            ['Product Engineering', 'SaaS features, workflows, and business logic'],
                            ['Backend Depth', 'Frappe, Python APIs, Java services, and SQL'],
                            ['Delivery Systems', 'AWS, Nginx, Jenkins, and automation'],
                        ].map(([title, description]) => (
                            <div key={title} className="rounded-2xl border border-border-subtle bg-background/80 p-4 text-left shadow-sm backdrop-blur">
                                <p className="text-sm font-extrabold text-midnight">{title}</p>
                                <p className="mt-1 text-xs leading-relaxed text-text-muted">{description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30">
                <ChevronDown className="text-text-main animate-bounce" size={24} />
            </div>
        </section>
    );
}
