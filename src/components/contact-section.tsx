'use client';

import { motion } from 'framer-motion';
import { DATA } from '@/lib/data';

export function ContactSection() {
    return (
        <section className="py-24 bg-surface" id="contact">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-midnight">Start a Conversation</h2>
                    <div className="h-1.5 w-16 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-midnight">Let's Build Something Amazing Together</h3>
                        <p className="text-text-muted mb-8 leading-relaxed">
                            Whether you have a groundbreaking idea or need technical expertise to scale your platform, I'm here to help you achieve your goals.
                        </p>
                        <div className="space-y-4">
                            <a href={DATA.social.email} className="flex items-center gap-4 p-4 bg-background rounded-xl shadow-sm border border-border-subtle hover:border-primary/30 transition-colors group">
                                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">mail</span>
                                <span className="font-semibold text-midnight">{DATA.email}</span>
                            </a>
                            <a href={DATA.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-background rounded-xl shadow-sm border border-border-subtle hover:border-primary/30 transition-colors group">
                                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">share</span>
                                <span className="font-semibold text-midnight">LinkedIn Profile</span>
                            </a>
                        </div>
                    </div>
                    <form className="space-y-4 bg-background p-8 rounded-3xl shadow-lg border border-border-subtle" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">Name</label>
                            <input type="text" className="w-full bg-surface border border-border-subtle rounded-lg px-4 py-3 text-text-main focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">Email</label>
                            <input type="email" className="w-full bg-surface border border-border-subtle rounded-lg px-4 py-3 text-text-main focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">Message</label>
                            <textarea className="w-full bg-surface border border-border-subtle rounded-lg px-4 py-3 text-text-main h-32 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" placeholder="Tell me about your project..."></textarea>
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
