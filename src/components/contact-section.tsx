'use client';

import { useState } from 'react';
import { DATA } from '@/lib/data';
import { toast } from '@/components/ui/toast';

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export function ContactSection() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) {
            toast.error('Please fix the errors in the form');
            return;
        }

        setIsSubmitting(true);
        
        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // In a real app, you would send the data to your backend
            console.log('Form submitted:', formData);
            
            toast.success('Message sent successfully! I&apos;ll get back to you soon.');
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
        } catch {
            toast.error('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    return (
        <section className="py-24 bg-surface" id="contact">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-midnight">Start a Conversation</h2>
                    <div className="h-1.5 w-16 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-midnight">Let&apos;s Build Something Amazing Together</h3>
                        <p className="text-text-muted mb-8 leading-relaxed">
                            Whether you have a groundbreaking idea or need technical expertise to scale your platform, I&apos;m here to help you achieve your goals.
                        </p>
                        <div className="space-y-4">
                            <a 
                                href={DATA.social.email} 
                                aria-label={`Send email to ${DATA.email}`}
                                className="flex items-center gap-4 p-4 bg-background rounded-xl shadow-sm border border-border-subtle hover:border-primary/30 transition-colors group"
                            >
                                <span aria-hidden="true" className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">mail</span>
                                <span className="font-semibold text-midnight">{DATA.email}</span>
                            </a>
                            <a 
                                href={DATA.social.linkedin} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Visit my LinkedIn profile (opens in new window)"
                                className="flex items-center gap-4 p-4 bg-background rounded-xl shadow-sm border border-border-subtle hover:border-primary/30 transition-colors group"
                            >
                                <span aria-hidden="true" className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">share</span>
                                <span className="font-semibold text-midnight">LinkedIn Profile</span>
                            </a>
                        </div>
                    </div>
                    <form className="space-y-4 bg-background p-8 rounded-3xl shadow-lg border border-border-subtle" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                                Name *
                            </label>
                            <input 
                                id="contact-name"
                                type="text" 
                                required
                                aria-required="true"
                                aria-invalid={errors.name ? 'true' : 'false'}
                                aria-describedby={errors.name ? 'name-error' : undefined}
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                className={`w-full bg-surface border rounded-lg px-4 py-3 text-text-main focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary-hover transition-all ${
                                    errors.name ? 'border-red-500' : 'border-border-subtle'
                                }`}
                                placeholder="John Doe" 
                            />
                            {errors.name && (
                                <span id="name-error" className="text-red-500 text-sm mt-1 block" role="alert">
                                    {errors.name}
                                </span>
                            )}
                        </div>
                        <div>
                            <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                                Email *
                            </label>
                            <input 
                                id="contact-email"
                                type="email" 
                                required
                                aria-required="true"
                                aria-invalid={errors.email ? 'true' : 'false'}
                                aria-describedby={errors.email ? 'email-error' : undefined}
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className={`w-full bg-surface border rounded-lg px-4 py-3 text-text-main focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary-hover transition-all ${
                                    errors.email ? 'border-red-500' : 'border-border-subtle'
                                }`}
                                placeholder="john@example.com" 
                            />
                            {errors.email && (
                                <span id="email-error" className="text-red-500 text-sm mt-1 block" role="alert">
                                    {errors.email}
                                </span>
                            )}
                        </div>
                        <div>
                            <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                                Message *
                            </label>
                            <textarea 
                                id="contact-message"
                                required
                                aria-required="true"
                                aria-invalid={errors.message ? 'true' : 'false'}
                                aria-describedby={errors.message ? 'message-error' : undefined}
                                value={formData.message}
                                onChange={(e) => handleInputChange('message', e.target.value)}
                                className={`w-full bg-surface border rounded-lg px-4 py-3 text-text-main h-32 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary-hover transition-all resize-none ${
                                    errors.message ? 'border-red-500' : 'border-border-subtle'
                                }`}
                                placeholder="Tell me about your project..."
                            />
                            {errors.message && (
                                <span id="message-error" className="text-red-500 text-sm mt-1 block" role="alert">
                                    {errors.message}
                                </span>
                            )}
                        </div>
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
                            className={`w-full font-bold py-4 rounded-xl shadow-lg text-sm uppercase tracking-wide transition-all ${
                                isSubmitting 
                                    ? 'bg-gray-400 cursor-not-allowed' 
                                    : 'bg-primary text-white shadow-primary/30 hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 active:translate-y-0'
                            }`}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}