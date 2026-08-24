"use client";

import Link from "next/link";
import { ExternalLink, Github, CheckCircle2, ArrowRight, Layers, ShieldCheck, Zap } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import type { Project } from "@/lib/data";

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  const hasLiveDemo = project.liveDemoUrl && project.liveDemoUrl !== "#" && project.liveDemoUrl.trim() !== "";
  const hasGithub = project.githubRepoUrl && project.githubRepoUrl !== "#" && project.githubRepoUrl.trim() !== "";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 md:p-8 bg-card border-border shadow-2xl rounded-2xl">
        {/* Breadcrumb Navigation */}
        <div className="mb-4">
          <Breadcrumb
            items={[
              { label: "Projects", href: "#projects", onClick: onClose },
              { label: project.title },
            ]}
          />
        </div>

        <DialogHeader className="text-left space-y-3 pb-4 border-b border-border/60">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="p-2.5 rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
              <project.Icon className="h-6 w-6" />
            </span>
            <Badge variant="outline" className="text-xs uppercase tracking-wider font-semibold border-primary/30 text-primary">
              Production Project
            </Badge>
          </div>
          <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold font-headline text-foreground leading-tight">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Full-stack production software engineered with high scalability, modern UI, and robust backend API architecture.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Detailed Overview */}
          <div>
            <h3 className="text-base font-semibold text-foreground font-headline mb-2 flex items-center gap-2">
              <Layers className="h-4 w-4 text-primary" />
              Project Overview & Architecture
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed bg-secondary/30 dark:bg-secondary/10 p-4 rounded-xl border border-border/40">
              {project.description}
            </p>
          </div>

          {/* Key Features & Engineering Highlights */}
          <div>
            <h3 className="text-base font-semibold text-foreground font-headline mb-3 flex items-center gap-2">
              <Zap className="h-4 w-4 text-accent" />
              Key Features & Engineering Highlights
            </h3>
            <div className="grid sm:grid-cols-2 gap-2.5">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-card border border-border/50 text-xs sm:text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Responsive & intuitive user interfaces optimized for speed and access.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-card border border-border/50 text-xs sm:text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>RESTful APIs with secure JWT authentication and role management.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-card border border-border/50 text-xs sm:text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>High-performance database operations and cloud storage integrations.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-card border border-border/50 text-xs sm:text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Production readiness with comprehensive error handling and logging.</span>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-base font-semibold text-foreground font-headline mb-3 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Technologies & Infrastructure
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge
                  key={tech.name}
                  variant="secondary"
                  className="text-xs sm:text-sm py-1.5 px-3 rounded-lg font-medium flex items-center gap-1.5 bg-secondary hover:bg-secondary/80 border border-border/60"
                >
                  {typeof tech.Icon !== 'string' && <tech.Icon className="h-4 w-4 text-primary" />}
                  <span>{tech.name}</span>
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {hasLiveDemo ? (
              <Button asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href={project.liveDemoUrl!} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Project
                </Link>
              </Button>
            ) : (
              <Button disabled className="w-full sm:w-auto opacity-70">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo Unavailable
              </Button>
            )}

            {hasGithub && (
              <Button variant="outline" asChild className="w-full sm:w-auto border-border hover:bg-secondary">
                <Link href={project.githubRepoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Source Code
                </Link>
              </Button>
            )}
          </div>

          <Button variant="ghost" asChild className="w-full sm:w-auto text-primary hover:text-primary hover:bg-primary/10">
            <Link href="#contact" onClick={onClose} className="flex items-center justify-center">
              Discuss Similar Project
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
