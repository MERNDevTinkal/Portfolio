"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight, Wrench, ShieldCheck, Clock, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import type { ServiceCard } from "@/lib/data";

interface ServiceDetailModalProps {
  service: ServiceCard | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ServiceDetailModal({ service, isOpen, onClose }: ServiceDetailModalProps) {
  if (!service) return null;

  const IconComponent = service.Icon;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 md:p-8 bg-card border-border shadow-2xl rounded-2xl">
        {/* Breadcrumb Navigation */}
        <div className="mb-4">
          <Breadcrumb
            items={[
              { label: "Services", href: "#services", onClick: onClose },
              { label: service.name },
            ]}
          />
        </div>

        <DialogHeader className="text-left space-y-3 pb-4 border-b border-border/60">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="p-2.5 rounded-xl bg-accent/10 text-accent dark:bg-accent/20">
              <IconComponent className="h-6 w-6" />
            </span>
            <Badge variant="outline" className="text-xs uppercase tracking-wider font-semibold border-accent/40 text-accent">
              Professional Engineering Service
            </Badge>
          </div>
          <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold font-headline text-foreground leading-tight">
            {service.name}
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Tailored software development designed for high reliability, clean architecture, and rapid deployment.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Service Description */}
          <div>
            <h3 className="text-base font-semibold text-foreground font-headline mb-2 flex items-center gap-2">
              <Wrench className="h-4 w-4 text-primary" />
              Service Overview & Scope
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed bg-secondary/30 dark:bg-secondary/10 p-4 rounded-xl border border-border/40">
              {service.description} Tinkal brings end-to-end expertise across frontend UI, backend API integration, database architecture, security authentication, and production cloud hosting.
            </p>
          </div>

          {/* Key Deliverables Included */}
          <div>
            <h3 className="text-base font-semibold text-foreground font-headline mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" />
              Key Deliverables & Capabilities
            </h3>
            <div className="grid sm:grid-cols-2 gap-2.5">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-card border border-border/50 text-xs sm:text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Custom architecture tailored to your business requirements.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-card border border-border/50 text-xs sm:text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Clean, maintainable, and thoroughly tested codebase.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-card border border-border/50 text-xs sm:text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Seamless integration with existing APIs & cloud platforms.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-card border border-border/50 text-xs sm:text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Full post-deployment support and documentation.</span>
              </div>
            </div>
          </div>

          {/* Execution Process */}
          <div>
            <h3 className="text-base font-semibold text-foreground font-headline mb-3 flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              Development Process
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
              <div className="p-3 rounded-xl bg-secondary/40 border border-border/40 space-y-1">
                <span className="font-semibold text-primary block">1. Planning & Design</span>
                <p className="text-muted-foreground text-xs">Requirements gathering, schema modeling, and API specs.</p>
              </div>
              <div className="p-3 rounded-xl bg-secondary/40 border border-border/40 space-y-1">
                <span className="font-semibold text-primary block">2. Development</span>
                <p className="text-muted-foreground text-xs">Agile sprints with regular builds and test updates.</p>
              </div>
              <div className="p-3 rounded-xl bg-secondary/40 border border-border/40 space-y-1">
                <span className="font-semibold text-primary block">3. Deployment</span>
                <p className="text-muted-foreground text-xs">Production launch, monitoring, and handoff.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-green-500" />
            <span>High Quality Guarantee & Production Support</span>
          </div>

          <Button asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#contact" onClick={onClose} className="flex items-center justify-center">
              Request This Service
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
