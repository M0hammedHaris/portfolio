'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';
import { DATA } from '@/lib/data';

export function HeroSection() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center p-4 relative overflow-hidden bg-background">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 max-w-3xl"
            >
                <div className="mx-auto w-32 h-32 relative mb-8 rounded-full overflow-hidden border-4 border-background shadow-xl">
                    <img
                        src={DATA.avatarUrl}
                        alt={DATA.name}
                        className="object-cover w-full h-full"
                    />
                </div>

                <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
                    Welcome to my portfolio
                </span>
                <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-foreground">
                    Hi, I&apos;m <span className="text-primary">{DATA.name}</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-[600px] mx-auto">
                    {DATA.title}
                </p>
                <p className="text-md text-muted-foreground/80 max-w-[500px] mx-auto">
                    Building robust product systems with backend mastery and modern frontend experiences.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Button size="lg" className="rounded-full" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                        View Projects <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full" asChild>
                        <a href="mailto:mohammedharis.k.01@gmail.com">
                            Contact Me <FileText className="ml-2 w-4 h-4" />
                        </a>
                    </Button>
                </div>
            </motion.div>
        </section>
    );
}
