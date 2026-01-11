'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
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
        <section id="projects" className="py-20 px-4 bg-background">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">SaaS & Projects</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Innovating with purpose. Check out my latest SaaS experiments and engineering projects.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {DATA.projects.map((project, index) => (
                        <motion.div key={index} variants={item}>
                            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border-muted-foreground/10">
                                <CardHeader>
                                    <CardTitle className="text-xl">{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.tech.map(t => (
                                            <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="outline" size="sm" className="w-full" asChild>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            View Project <ExternalLink className="ml-2 w-3 h-3" />
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
