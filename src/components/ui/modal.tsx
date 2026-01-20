'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

interface ProjectModalProps {
  project: Project;
  children: React.ReactNode;
}

export function ProjectModal({ project, children }: ProjectModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-midnight mb-4">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-midnight">About This Project</h3>
            <p className="text-text-main leading-relaxed">
              {project.description}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-midnight">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="pt-4 border-t border-border-subtle">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition-colors"
              aria-label={`Visit ${project.title} ${project.link.includes('github') ? 'repository' : 'website'} (opens in new window)`}
            >
              {project.link.includes('github') ? 'View Code' : 'Visit Site'}
              <span aria-hidden="true" className="material-symbols-outlined text-sm">
                open_in_new
              </span>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}