'use client';

import { motion } from 'framer-motion';
import { DATA } from '@/lib/data';

export function ExperienceSection() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50" id="experience">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-midnight dark:text-white">Career Timeline</h2>
                    <div className="h-1.5 w-16 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className="relative space-y-12">
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-700"></div>
                    {DATA.experience.map((exp, index) => (
                        <div key={index} className="relative md:flex md:justify-between items-start group">
                            <div className={`absolute left-[-5.5px] md:left-1/2 md:-translate-x-1/2 w-3.5 h-3.5 rounded-full ring-4 ring-white shadow-sm z-10 dark:ring-slate-900 ${index === 0 ? 'bg-primary' : index === 1 ? 'bg-slate-400' : 'bg-slate-300'}`}></div>
                            <div className={`pl-8 md:pl-0 md:w-[45%] pt-0 ${index % 2 === 0 ? 'md:text-right' : 'md:order-2 md:text-left'}`}>
                                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{exp.dates}</p>
                                <h4 className="text-xl font-extrabold text-midnight dark:text-white">{exp.role}</h4>
                                <p className="text-slate-500 font-semibold text-sm dark:text-slate-400">{exp.company}</p>
                            </div>
                            <div className={`pl-8 md:pl-0 md:w-[45%] mt-4 md:mt-0 ${index % 2 === 0 ? '' : 'md:order-1'}`}>
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-primary/30 transition-colors dark:bg-slate-800 dark:border-slate-700 ${index % 2 !== 0 ? 'md:text-right' : ''}`}
                                >
                                    <p className="text-slate-600 text-sm leading-relaxed dark:text-slate-300">
                                        {exp.description}
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
