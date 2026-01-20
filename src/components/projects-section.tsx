'use client';

import { motion } from 'framer-motion';
import { DATA } from '@/lib/data';
import { ProjectModal } from '@/components/ui/modal';
import { Wallet, ShoppingBag, Shield, ExternalLink, Code2 } from 'lucide-react';

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
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-midnight">SaaS & Innovation</h2>
                    <div className="h-1.5 w-16 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-6 text-text-muted max-w-xl mx-auto">Exploring the intersection of performance and utility through custom-built software solutions.</p>
                </div>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {DATA.projects.map((project, index) => (
                        <motion.div key={index} variants={item} className="group soft-card rounded-2xl overflow-hidden flex flex-col">
                            <div className={`h-48 flex items-center justify-center border-b border-border-subtle ${index % 2 === 0 ? 'bg-primary/5' : 'bg-surface/50'}`}>
                                {index === 0 || index === 1 ? (
                                    <Wallet size={64} strokeWidth={1} className={index % 2 === 0 ? 'text-primary/30' : 'text-text-muted/30'} />
                                ) : index === 2 ? (
                                    <ShoppingBag size={64} strokeWidth={1} className={index % 2 === 0 ? 'text-primary/30' : 'text-text-muted/30'} />
                                ) : (
                                    <Shield size={64} strokeWidth={1} className={index % 2 === 0 ? 'text-primary/30' : 'text-text-muted/30'} />
                                )}
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-3 text-midnight">{project.title}</h3>
                                <p className="text-sm text-text-main opacity-80 mb-6 leading-relaxed line-clamp-3">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.slice(0, 3).map(t => (
                                        <span key={t} className="text-[10px] font-bold uppercase px-2 py-1 bg-background border border-border-subtle rounded text-text-muted">{t}</span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="text-[10px] font-bold uppercase px-2 py-1 bg-background border border-border-subtle rounded text-text-muted">
                                            +{project.tech.length - 3} more
                                        </span>
                                    )}
                                </div>
                                <div className="mt-auto flex gap-3">
                                    <ProjectModal project={project}>
                                        <button className="flex-1 px-4 py-2 bg-surface border border-border-subtle text-text-main font-bold rounded-lg hover:bg-background transition-colors text-sm">
                                            View Details
                                        </button>
                                    </ProjectModal>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Visit ${project.title} ${project.link.includes('github') ? 'repository' : 'website'} (opens in new window)`}
                                        className="flex-1 px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-colors text-sm text-center"
                                    >
                                        <div className="flex items-center justify-center gap-2">
                                            {project.link.includes('github') ? (
                                                <>View Code <Code2 size={14} /></>
                                            ) : (
                                                <>Live Demo <ExternalLink size={14} /></>
                                            )}
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
