'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';
import { DATA } from '@/lib/data';

export function ContactSection() {
    return (
        <section id="contact" className="py-20 px-4 bg-muted/30">
            <div className="max-w-4xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Interested in collaborating or have a project in mind? Let&apos;s connect.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Contact Information</CardTitle>
                                <CardDescription>
                                    Feel free to reach out through any of these platforms.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Button variant="outline" className="w-full justify-start" asChild>
                                    <a href={DATA.social.email}>
                                        <Mail className="mr-2 h-4 w-4" />
                                        {DATA.email}
                                    </a>
                                </Button>
                                <Button variant="outline" className="w-full justify-start" asChild>
                                    <a href={DATA.social.github} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-4 w-4" />
                                        GitHub Profile
                                    </a>
                                </Button>
                                <Button variant="outline" className="w-full justify-start" asChild>
                                    <a href={DATA.social.linkedin} target="_blank" rel="noopener noreferrer">
                                        <Linkedin className="mr-2 h-4 w-4" />
                                        LinkedIn Profile
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Send a Message</CardTitle>
                                <CardDescription>
                                    I&apos;ll get back to you as soon as possible.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-2">
                                        <Input placeholder="Your Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <Input type="email" placeholder="Your Email" />
                                    </div>
                                    <div className="space-y-2">
                                        <Textarea placeholder="Your Message" className="min-h-[120px]" />
                                    </div>
                                    <Button className="w-full shadow-lg hover:shadow-xl transition-all">Send Message</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
