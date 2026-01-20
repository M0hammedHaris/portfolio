import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import dynamic from 'next/dynamic';
import { SectionSkeleton } from '@/components/ui/skeleton';

// Lazy load below-the-fold sections
const ExperienceSection = dynamic(() => import('@/components/experience-section').then(mod => ({ default: mod.ExperienceSection })), {
  loading: () => <SectionSkeleton />,
});

const ProjectsSection = dynamic(() => import('@/components/projects-section').then(mod => ({ default: mod.ProjectsSection })), {
  loading: () => <SectionSkeleton />,
});

const ContactSection = dynamic(() => import('@/components/contact-section').then(mod => ({ default: mod.ContactSection })), {
  loading: () => <SectionSkeleton />,
});

export default function Home() {
  return (
    <main id="main" className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
