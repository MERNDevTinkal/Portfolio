"use client";

import Link from "next/link";
import { Building, CheckCircle2, ArrowRight, Layers, ShieldCheck, Briefcase } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import type { IndustryCard } from "@/lib/data";

interface IndustryDetailModalProps {
  industry: IndustryCard | null;
  isOpen: boolean;
  onClose: () => void;
}

export function IndustryDetailModal({ industry, isOpen, onClose }: IndustryDetailModalProps) {
  if (!industry) return null;

  const IconComponent = industry.Icon;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 md:p-8 bg-card border-border shadow-2xl rounded-2xl">
        {/* Breadcrumb Navigation */}
        <div className="mb-4">
          <Breadcrumb
            items={[
              { label: "Industries", href: "#industries", onClick: onClose },
              { label: industry.name },
            ]}
          />
        </div>

        <DialogHeader className="text-left space-y-3 pb-4 border-b border-border/60">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="p-2.5 rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
              <IconComponent className="h-6 w-6" />
            </span>
            <Badge variant="outline" className="text-xs uppercase tracking-wider font-semibold border-primary/30 text-primary">
              Industry Domain Focus
            </Badge>
          </div>
          <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold font-headline text-foreground leading-tight">
            {industry.name}
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Domain-specific full-stack engineering tailored to operational workflows, compliance requirements, and user engagement.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Industry Overview */}
          <div>
            <h3 className="text-base font-semibold text-foreground font-headline mb-2 flex items-center gap-2">
              <Building className="h-4 w-4 text-primary" />
              Domain Background & Expertise
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed bg-secondary/30 dark:bg-secondary/10 p-4 rounded-xl border border-border/40">
              {industry.description} Tinkal has engineered production-grade platforms addressing critical domain challenges—from real-time communication and video consultations to secure role-based access control and high-performance databases.
            </p>
          </div>

          {/* Key Solutions & Features Built */}
          <div>
            <h3 className="text-base font-semibold text-foreground font-headline mb-3 flex items-center gap-2">
              <Layers className="h-4 w-4 text-accent" />
              Specialized Features & Solutions Built
            </h3>
            <div className="flex flex-wrap gap-2.5 mb-4">
              {industry.examples.map((example, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="text-xs sm:text-sm py-1.5 px-3 rounded-lg font-medium bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground border border-primary/20"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-primary" />
                  {example}
                </Badge>
              ))}
            </div>
          </div>

          {/* Value Proposition */}
          <div>
            <h3 className="text-base font-semibold text-foreground font-headline mb-3 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Why Partner For {industry.name}?
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3 rounded-xl bg-card border border-border/50 space-y-1">
                <span className="font-semibold text-foreground block">Production-Proven Patterns</span>
                <p className="text-muted-foreground">Architected for scalable traffic, data security, and high uptime.</p>
              </div>
              <div className="p-3 rounded-xl bg-card border border-border/50 space-y-1">
                <span className="font-semibold text-foreground block">Seamless Integrations</span>
                <p className="text-muted-foreground">Third-party payment gateways, WebSockets, streaming, and AWS cloud.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Button variant="outline" asChild className="w-full sm:w-auto border-border hover:bg-secondary" onClick={onClose}>
            <Link href="#projects">
              <Briefcase className="mr-2 h-4 w-4" />
              View Related Projects
            </Link>
          </Button>

          <Button asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#contact" onClick={onClose} className="flex items-center justify-center">
              Discuss Industry Solution
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
