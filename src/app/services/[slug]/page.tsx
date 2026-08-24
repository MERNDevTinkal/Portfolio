import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getServiceById, SERVICES_DATA, PROJECTS_DATA } from "@/lib/data";
import {
  CheckCircle2,
  ArrowRight,
  Wrench,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowLeft,
  Briefcase,
  CodeXml,
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceById(slug);
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }
  return {
    title: `${service.name} | Professional Engineering Service`,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.id,
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceById(slug);

  if (!service) {
    notFound();
  }

  const IconComponent = service.Icon;

  return (
    <div className="min-h-screen py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-10">
        
        {/* Breadcrumb Navigation */}
        <div className="pt-4">
          <Breadcrumb
            items={[
              { label: "Services", href: "/#services" },
              { label: service.name },
            ]}
          />
        </div>

        {/* Hero Section */}
        <header className="space-y-6 border-b border-border/60 pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="p-3 rounded-2xl bg-accent/10 text-accent dark:bg-accent/20">
              <IconComponent className="h-7 w-7" />
            </span>
            <Badge variant="outline" className="text-xs uppercase tracking-wider font-semibold border-accent/40 text-accent">
              Engineering Capability
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-headline text-foreground tracking-tight leading-tight">
            {service.name}
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {service.description} Tailored software engineering focused on clean maintainable code, robust security, and seamless deployment.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-6">
              <Link href="/#contact">
                Request This Service <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full px-6 border-border">
              <Link href="/#projects">
                View Related Work
              </Link>
            </Button>
          </div>
        </header>

        {/* Service Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Scope */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Overview */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-headline text-foreground flex items-center gap-2">
                <Wrench className="h-5 w-5 text-primary" />
                Service Overview & Engineering Approach
              </h2>
              <div className="p-5 rounded-2xl bg-card border border-border/70 space-y-3 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  Delivering production-grade software requires a comprehensive engineering workflow—from initial database schema modeling to RESTful API creation, frontend state management, and continuous integration.
                </p>
                <p>
                  Every technical component is crafted with strict type definitions in TypeScript, clear separation of concerns, error logging, and performance optimization.
                </p>
              </div>
            </section>

            {/* Scope & Key Deliverables */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-headline text-foreground flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent" />
                What is Included & Typical Deliverables
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-card border border-border/60 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">Clean Architecture</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Modular, reusable codebase following modern industry standards.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border/60 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">Robust API & Database</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Performant endpoints, input validation, and indexed queries.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border/60 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">Security & Authentication</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">JWT token management, password hashing, and role permissions.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border/60 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">Deployment & Handoff</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Cloud deployment setup, documentation, and technical support.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Development Workflow */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-headline text-foreground flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Structured Development Lifecycle
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-card border border-border/70 space-y-1">
                  <span className="font-bold text-primary block text-sm">1. Planning</span>
                  <p className="text-xs text-muted-foreground">Technical discovery, schema design, and specification alignment.</p>
                </div>
                <div className="p-4 rounded-2xl bg-card border border-border/70 space-y-1">
                  <span className="font-bold text-primary block text-sm">2. Engineering</span>
                  <p className="text-xs text-muted-foreground">Agile sprints with clean code, testing, and continuous feedback.</p>
                </div>
                <div className="p-4 rounded-2xl bg-card border border-border/70 space-y-1">
                  <span className="font-bold text-primary block text-sm">3. Production</span>
                  <p className="text-xs text-muted-foreground">Deployment, cloud configuration, and live monitoring.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar CTA */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-card border border-border/70 space-y-4">
              <h3 className="text-base font-bold font-headline text-foreground flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-green-500" />
                Production Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                All development is backed by rigorous code reviews, automated linting, and scalable infrastructure design.
              </p>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/#contact">Discuss Your Requirements</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="pt-4 text-center">
          <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
            <Link href="/#services" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to All Services
            </Link>
          </Button>
        </div>

      </div>
    </div>
  );
}
