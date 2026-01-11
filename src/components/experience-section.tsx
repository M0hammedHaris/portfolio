'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { DATA } from '@/lib/data';

export function ExperienceSection() {
    return (
        <section id="experience" className="py-20 px-4 bg-muted/30">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Work Experience</h2>
                    <p className="text-muted-foreground w-full max-w-2xl mx-auto">
                        My professional journey and career highlights.
                    </p>
                </div>

                <div className="space-y-8">
                    {DATA.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="relative overflow-hidden border-l-4 border-l-primary">
                                <CardHeader>
                                    <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                                        <div>
                                            <CardTitle className="text-xl">{exp.role}</CardTitle>
                                            <CardDescription className="text-lg font-medium text-foreground/80">{exp.company}</CardDescription>
                                        </div>
                                        <span className="text-sm text-muted-foreground px-3 py-1 bg-secondary rounded-full">
                                            {exp.dates}
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground whitespace-pre-line">
                                        {exp.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
