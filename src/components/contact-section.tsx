'use client';

import { motion } from 'framer-motion';
import { DATA } from '@/lib/data';

export function ContactSection() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50" id="contact">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-midnight dark:text-white">Start a Conversation</h2>
                    <div className="h-1.5 w-16 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-midnight dark:text-white">Let's Build Something Amazing Together</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed dark:text-slate-400">
                            Whether you have a groundbreaking idea or need technical expertise to scale your platform, I'm here to help you achieve your goals.
                        </p>
                        <div className="space-y-4">
                            <a href={DATA.social.email} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-primary/30 transition-colors group dark:bg-slate-800 dark:border-slate-700">
                                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">mail</span>
                                <span className="font-semibold text-midnight dark:text-white">mohammedharis.k.01@gmail.com</span>
                            </a>
                            <a href={DATA.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-primary/30 transition-colors group dark:bg-slate-800 dark:border-slate-700">
                                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">share</span>
                                <span className="font-semibold text-midnight dark:text-white">LinkedIn Profile</span>
                            </a>
                        </div>
                    </div>
                    <form className="space-y-4 bg-white p-8 rounded-3xl shadow-lg border border-slate-100 dark:bg-slate-800 dark:border-slate-700" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 dark:text-slate-400">Name</label>
                            <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-midnight focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all dark:bg-slate-900 dark:border-slate-700 dark:text-white" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 dark:text-slate-400">Email</label>
                            <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-midnight focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all dark:bg-slate-900 dark:border-slate-700 dark:text-white" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 dark:text-slate-400">Message</label>
                            <textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-midnight h-32 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none dark:bg-slate-900 dark:border-slate-700 dark:text-white" placeholder="Tell me about your project..."></textarea>
                        </div>
                        <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all active:translate-y-0 text-sm uppercase tracking-wide">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
