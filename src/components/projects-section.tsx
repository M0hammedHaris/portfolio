'use client';

import { motion } from 'framer-motion';
import { DATA } from '@/lib/data';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export function ProjectsSection() {
    return (
        <section className="py-24" id="projects">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-midnight dark:text-white">SaaS & Innovation</h2>
                    <div className="h-1.5 w-16 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-6 text-slate-500 max-w-xl mx-auto dark:text-slate-400">Exploring the intersection of performance and utility through custom-built software solutions.</p>
                </div>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {DATA.projects.map((project, index) => (
                        <motion.div key={index} variants={item} className="group soft-card rounded-2xl overflow-hidden flex flex-col dark:border-slate-800 dark:bg-slate-900">
                            <div className={`h-48 flex items-center justify-center border-b border-slate-100 dark:border-slate-800 ${index % 2 === 0 ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-slate-50 dark:bg-slate-800/50'}`}>
                                <span className={`material-symbols-outlined text-6xl ${index % 2 === 0 ? 'text-primary/30' : 'text-slate-300 dark:text-slate-600'}`}>
                                    {index === 0 ? 'account_balance_wallet' : index === 1 ? 'shopping_bag' : 'security'}
                                </span>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-3 text-midnight dark:text-white">{project.title}</h3>
                                <p className="text-sm text-slate-600 mb-6 leading-relaxed dark:text-slate-400">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-[10px] font-bold uppercase px-2 py-1 bg-white border border-slate-200 rounded text-slate-500 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400">{t}</span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all"
                                >
                                    {project.link.includes('github') ? 'View Code' : 'Live Demo'} <span className="material-symbols-outlined text-sm">arrow_outward</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
