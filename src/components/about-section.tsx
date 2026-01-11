'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { DATA } from '@/lib/data';

export function AboutSection() {
    return (
        <section id="about" className="py-20 px-4 bg-muted/30">
            <div className="max-w-5xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-4"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {DATA.bio}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card className="h-full border-none shadow-md bg-card/50 backdrop-blur-sm">
                            <CardContent className="p-6 space-y-4">
                                <h3 className="text-xl font-semibold">What I Do</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>🚀 <span className="font-medium text-foreground">Backend Engineering</span>: Python, Java, SQL, Frappe.</li>
                                    <li>⚛️ <span className="font-medium text-foreground">Full Stack Development</span>: React, Next.js, Shadcn UI.</li>
                                    <li>⚙️ <span className="font-medium text-foreground">Automation & Cloud</span>: Jenkins, CI/CD, AWS, Nginx.</li>
                                    <li>🐛 <span className="font-medium text-foreground">System Optimization</span>: Debugging, Refactoring, Scalability.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <div>
                            <h3 className="text-lg font-medium mb-3">Languages & Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {DATA.skills.backend.map(skill => (
                                    <Badge key={skill} variant="secondary">{skill}</Badge>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-3">Frontend & UI</h3>
                            <div className="flex flex-wrap gap-2">
                                {DATA.skills.frontend.map(skill => (
                                    <Badge key={skill} variant="secondary">{skill}</Badge>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-3">Tools & DevOps</h3>
                            <div className="flex flex-wrap gap-2">
                                {DATA.skills.tools.map(skill => (
                                    <Badge key={skill} variant="outline">{skill}</Badge>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
