import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ExperienceSection } from '@/components/experience-section';
import { ProjectsSection } from '@/components/projects-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

import { Navbar } from '@/components/navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">
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
