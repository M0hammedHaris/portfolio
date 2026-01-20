'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { DATA } from '@/lib/data';

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-start md:items-center justify-center pt-32 pb-16 md:pt-16 overflow-hidden bg-background">
            <div className="absolute inset-0 grid-lines-light -z-10"></div>
            <div className="max-w-4xl mx-auto px-6 text-center">
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
                            View Projects <span aria-hidden="true" className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                        <Link 
                            href="#contact" 
                            aria-label="Get in touch with me"
                            className="w-full sm:w-auto px-8 py-4 bg-background border border-border-subtle text-foreground font-bold rounded-xl hover:bg-surface hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-sm"
                        >
                            Get in Touch <span aria-hidden="true" className="material-symbols-outlined text-sm">chat_bubble</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30">
                <span className="material-symbols-outlined text-text-main animate-bounce">expand_more</span>
            </div>
        </section>
    );
}
