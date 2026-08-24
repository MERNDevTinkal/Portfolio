import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getIndustryById, INDUSTRIES_DATA, PROJECTS_DATA } from "@/lib/data";
import {
  Building,
  CheckCircle2,
  ArrowRight,
  Layers,
  ShieldCheck,
  ArrowLeft,
  Briefcase,
  Sparkles,
} from "lucide-react";

interface IndustryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryById(slug);
  if (!industry) {
    return {
      title: "Industry Not Found",
    };
  }
  return {
    title: `${industry.name} | Domain Experience`,
    description: industry.description,
  };
}

export async function generateStaticParams() {
  return INDUSTRIES_DATA.map((industry) => ({
    slug: industry.id,
  }));
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryById(slug);

  if (!industry) {
    notFound();
  }

  const IconComponent = industry.Icon;

  return (
    <div className="min-h-screen py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-10">
        
        {/* Breadcrumb Navigation */}
        <div className="pt-4">
          <Breadcrumb
            items={[
              { label: "Industries", href: "/#industries" },
              { label: industry.name },
            ]}
          />
        </div>

        {/* Hero Section */}
        <header className="space-y-6 border-b border-border/60 pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="p-3 rounded-2xl bg-primary/10 text-primary dark:bg-primary/20">
              <IconComponent className="h-7 w-7" />
            </span>
            <Badge variant="outline" className="text-xs uppercase tracking-wider font-semibold border-primary/40 text-primary">
              Domain Experience
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-headline text-foreground tracking-tight leading-tight">
            {industry.name}
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {industry.description} Engineering custom digital software platforms tailored to the operational demands and user workflows of the {industry.name} domain.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-6">
              <Link href="/#contact">
                Discuss Domain Solution <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full px-6 border-border">
              <Link href="/#projects">
                View Related Projects
              </Link>
            </Button>
          </div>
        </header>

        {/* Domain Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2 space-y-10">
            
            {/* Overview */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-headline text-foreground flex items-center gap-2">
                <Building className="h-5 w-5 text-primary" />
                Domain Workflows & System Requirements
              </h2>
              <div className="p-5 rounded-2xl bg-card border border-border/70 space-y-3 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  Developing software for {industry.name} requires deep focus on user experience, reliable data models, and secure access permissions.
                </p>
                <p>
                  Tinkal has delivered production systems in this domain with real-time features, secure backend APIs, scalable database schema design, and cloud asset hosting.
                </p>
              </div>
            </section>

            {/* Specialized Features Built */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-headline text-foreground flex items-center gap-2">
                <Layers className="h-5 w-5 text-accent" />
                Solutions & Features Built For {industry.name}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {industry.examples.map((example, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-card border border-border/60 flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground text-sm sm:text-base">{example}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">Production-ready workflow design and implementation.</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-card border border-border/70 space-y-4">
              <h3 className="text-base font-bold font-headline text-foreground flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Engineering Excellence
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Built with full-stack TypeScript, React, Next.js, Node.js, and AWS cloud integrations.
              </p>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/#contact">Start A Conversation</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="pt-4 text-center">
          <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
            <Link href="/#industries" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to All Industries
            </Link>
          </Button>
        </div>

      </div>
    </div>
  );
}
