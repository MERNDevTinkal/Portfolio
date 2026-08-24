import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getProjectById, PROJECTS_DATA, AUTHOR_NAME } from "@/lib/data";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  ArrowRight,
  Layers,
  ShieldCheck,
  Zap,
  Server,
  Database,
  Cpu,
  ArrowLeft,
  Briefcase,
  Sparkles,
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectById(slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  return {
    title: `${project.title} | Case Study`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    notFound();
  }

  const hasLiveDemo = project.liveDemoUrl && project.liveDemoUrl !== "#" && project.liveDemoUrl.trim() !== "";
  const hasGithub = project.githubRepoUrl && project.githubRepoUrl !== "#" && project.githubRepoUrl.trim() !== "";

  // Get related projects
  const relatedProjects = PROJECTS_DATA.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <div className="min-h-screen py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-10">
        
        {/* Breadcrumb Navigation */}
        <div className="pt-4">
          <Breadcrumb
            items={[
              { label: "Projects", href: "/#projects" },
              { label: project.title },
            ]}
          />
        </div>

        {/* Hero Section */}
        <header className="space-y-6 border-b border-border/60 pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="p-3 rounded-2xl bg-primary/10 text-primary dark:bg-primary/20">
              <project.Icon className="h-7 w-7" />
            </span>
            <Badge variant="outline" className="text-xs uppercase tracking-wider font-semibold border-primary/40 text-primary">
              Production Software
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-headline text-foreground tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            {hasLiveDemo && (
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-6">
                <Link href={project.liveDemoUrl!} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Application
                </Link>
              </Button>
            )}
            {hasGithub && (
              <Button size="lg" variant="outline" asChild className="rounded-full px-6 border-border">
                <Link href={project.githubRepoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Source Code
                </Link>
              </Button>
            )}
            <Button size="lg" variant="ghost" asChild className="rounded-full px-6 text-primary hover:bg-primary/10">
              <Link href="/#contact">
                Discuss Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </header>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Case Study Details */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Overview */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-headline text-foreground flex items-center gap-2">
                <Layers className="h-5 w-5 text-primary" />
                Product Overview & Purpose
              </h2>
              <div className="p-5 rounded-2xl bg-card border border-border/70 space-y-3 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  {project.title} was engineered to solve real operational and workflow challenges in its target domain. Built with high emphasis on scalability, system resilience, and clean API design, this application serves production workloads with zero compromise on performance.
                </p>
                <p>
                  Key architectural decisions focused on modular component design, responsive interfaces across viewports, secure data validation, and automated cloud deployments.
                </p>
              </div>
            </section>

            {/* My Engineering Role */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-headline text-foreground flex items-center gap-2">
                <Cpu className="h-5 w-5 text-accent" />
                My Role & Key Contributions
              </h2>
              <div className="grid gap-3">
                <div className="p-4 rounded-xl bg-card border border-border/60 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">Full-Stack Application Development</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Architected and implemented core business workflows using React, Node.js, Express, and TypeScript.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border/60 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">API Architecture & Third-Party Integrations</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Designed secure RESTful API endpoints, request validation rules, and third-party service integrations.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border/60 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">Performance & Cloud Infrastructure</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Optimized database querying, asset management via AWS S3, and real-time state synchronization.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Features */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-headline text-foreground flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Key Functionality & Capabilities
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-card border border-border/60 space-y-1">
                  <span className="font-semibold text-foreground block text-sm sm:text-base">Real-Time Operations</span>
                  <p className="text-xs sm:text-sm text-muted-foreground">Instant event notifications, status updates, and interactive user state synchronization.</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border/60 space-y-1">
                  <span className="font-semibold text-foreground block text-sm sm:text-base">Role-Based Access Control</span>
                  <p className="text-xs sm:text-sm text-muted-foreground">JWT authentication with granular permission layers for admins, providers, and users.</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border/60 space-y-1">
                  <span className="font-semibold text-foreground block text-sm sm:text-base">Cloud Asset Pipeline</span>
                  <p className="text-xs sm:text-sm text-muted-foreground">Direct-to-S3 secure file uploads, media processing, and CDN asset delivery.</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border/60 space-y-1">
                  <span className="font-semibold text-foreground block text-sm sm:text-base">Mobile-First UI</span>
                  <p className="text-xs sm:text-sm text-muted-foreground">Fluid, high-contrast user interfaces supporting touch devices and desktop displays.</p>
                </div>
              </div>
            </section>

            {/* Technical Engineering Approach */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-headline text-foreground flex items-center gap-2">
                <Server className="h-5 w-5 text-accent" />
                Engineering Challenges & Solutions
              </h2>
              <div className="p-5 rounded-2xl bg-card border border-border/70 space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">Challenge: Ensuring High Availability & Data Integrity</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                    Production applications handle concurrent client requests where data consistency and fast response times are paramount.
                  </p>
                </div>
                <div className="pt-3 border-t border-border/50">
                  <h3 className="font-semibold text-primary text-sm sm:text-base">Solution: Microservices & Modular Database Patterns</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                    Implemented structured controller-service-repository patterns, robust error boundary layers, indexed database queries, and caching mechanisms to maintain fast API response times.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Tech Info & CTA */}
          <div className="space-y-6">
            
            {/* Tech Stack Box */}
            <div className="p-5 rounded-2xl bg-card border border-border/70 space-y-4">
              <h3 className="text-base font-bold font-headline text-foreground flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech.name} variant="secondary" className="text-xs py-1.5 px-3 rounded-lg flex items-center gap-1.5">
                    {typeof tech.Icon !== 'string' && <tech.Icon className="h-3.5 w-3.5 text-primary" />}
                    <span>{tech.name}</span>
                  </Badge>
                ))}
              </div>
            </div>

            {/* Consultation Callout */}
            <div className="p-6 rounded-2xl bg-primary/10 dark:bg-primary/20 border border-primary/30 space-y-4">
              <div className="flex items-center gap-2 text-primary font-bold">
                <Sparkles className="h-5 w-5" />
                <span>Need a Similar Product?</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Looking to build a production platform like {project.title}? Let&apos;s discuss your engineering requirements.
              </p>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Related Projects Navigation */}
        {relatedProjects.length > 0 && (
          <section className="pt-10 border-t border-border/60 space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold font-headline text-foreground flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Explore Other Production Work
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedProjects.map((rel) => (
                <div key={rel.id} className="p-5 rounded-2xl bg-card border border-border/70 hover:border-primary/50 transition-all space-y-3">
                  <h3 className="font-bold text-lg text-primary">{rel.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{rel.description}</p>
                  <Button variant="outline" size="sm" asChild className="text-xs border-border">
                    <Link href={`/projects/${rel.id}`}>
                      View Case Study <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Back Link */}
        <div className="pt-4 text-center">
          <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
            <Link href="/#projects" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to All Projects
            </Link>
          </Button>
        </div>

      </div>
    </div>
  );
}
