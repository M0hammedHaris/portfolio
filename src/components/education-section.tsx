'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import { DATA } from '@/lib/data';

export function EducationSection() {
    return (
        <section id="education" className="py-20 px-4 bg-background">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Education</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Academic background and qualifications.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {DATA.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:border-primary/50 transition-colors">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <GraduationCap className="h-6 w-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-lg">{edu.institution}</CardTitle>
                                    </div>
                                    <CardDescription className="text-base font-medium text-foreground">
                                        {edu.degree}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{edu.dates}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
