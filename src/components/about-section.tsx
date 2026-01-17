'use client';

import { motion } from 'framer-motion';
import { DATA } from '@/lib/data';

export function AboutSection() {
    return (
        <section id="about" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-midnight dark:text-white">Expertise & Background</h2>
                    <div className="h-1.5 w-16 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-2 p-10 rounded-2xl soft-card dark:border-slate-800 dark:bg-slate-900"
                    >
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-midnight dark:text-white">
                            <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">person_search</span>
                            Profile Summary
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-lg mb-8 dark:text-slate-400">
                            {DATA.bio}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="p-5 rounded-xl bg-white border border-slate-100 text-center dark:bg-slate-800 dark:border-slate-700">
                                <div className="text-3xl font-bold text-primary mb-1">4+</div>
                                <div className="text-[10px] uppercase text-slate-400 font-bold tracking-widest">Years Exp</div>
                            </div>
                            <div className="p-5 rounded-xl bg-white border border-slate-100 text-center dark:bg-slate-800 dark:border-slate-700">
                                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                                <div className="text-[10px] uppercase text-slate-400 font-bold tracking-widest">Live Projects</div>
                            </div>
                            <div className="p-5 rounded-xl bg-white border border-slate-100 text-center dark:bg-slate-800 dark:border-slate-700">
                                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                                <div className="text-[10px] uppercase text-slate-400 font-bold tracking-widest">Core Techs</div>
                            </div>
                            <div className="p-5 rounded-xl bg-white border border-slate-100 text-center dark:bg-slate-800 dark:border-slate-700">
                                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                                <div className="text-[10px] uppercase text-slate-400 font-bold tracking-widest">Delivery</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="p-10 rounded-2xl soft-card dark:border-slate-800 dark:bg-slate-900"
                    >
                        <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-midnight dark:text-white">
                            <span className="material-symbols-outlined text-blue-500 bg-blue-50 p-2 rounded-lg dark:bg-blue-900/30">integration_instructions</span>
                            Tech Arsenal
                        </h3>
                        <div className="space-y-8">
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase mb-4 tracking-[0.15em]">Core Backend</p>
                                <div className="flex flex-wrap gap-2">
                                    {DATA.skills.backend.map(skill => (
                                        <span key={skill} className="px-3 py-1.5 text-sm bg-white text-slate-700 border border-slate-200 rounded-lg font-medium dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">{skill}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase mb-4 tracking-[0.15em]">Modern Frontend</p>
                                <div className="flex flex-wrap gap-2">
                                    {DATA.skills.frontend.map(skill => (
                                        <span key={skill} className="px-3 py-1.5 text-sm bg-white text-slate-700 border border-slate-200 rounded-lg font-medium dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">{skill}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase mb-4 tracking-[0.15em]">Tools & DevOps</p>
                                <div className="flex flex-wrap gap-2">
                                    {DATA.skills.tools.map(skill => (
                                        <span key={skill} className="px-3 py-1.5 text-sm bg-white text-slate-700 border border-slate-200 rounded-lg font-medium dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
