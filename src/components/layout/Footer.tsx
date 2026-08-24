"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import { Mail, Sparkles, CodeXml, Layers, Briefcase, ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS, AUTHOR_NAME, NAV_LINKS, AUTHOR_EMAIL, PROJECTS_DATA, SERVICES_DATA } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setCurrentYear(new Date().getFullYear());
  }, []);

  const selectedProjects = PROJECTS_DATA.slice(0, 4);
  const keyCapabilities = SERVICES_DATA.slice(0, 6);

  const renderSocialIcons = () => (
    <div className="mt-4 flex items-center space-x-2.5">
      {SOCIAL_LINKS.filter(link => link.name === "GitHub" || link.name === "LinkedIn" || link.name === "Instagram").map(({ name, Icon, href }) => (
        <Button
          variant="outline"
          size="icon"
          key={name}
          onClick={() => window.open(href, '_blank', 'noopener,noreferrer')}
          aria-label={name}
          className="text-foreground/80 hover:text-primary hover:bg-primary/10 border-border/60 transition-all duration-300 h-9 w-9 rounded-full"
        >
          <Icon className="h-4 w-4" />
        </Button>
      ))}
    </div>
  );

  return (
    <footer className="relative border-t border-border/60 bg-card dark:bg-background/95 overflow-hidden text-foreground">
      {/* Subtle ambient lighting grid */}
      <div className="absolute inset-0 z-0 opacity-15 dark:opacity-10 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/30 via-background to-transparent" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-12">
          
          {/* Column 1: Executive Brand Summary */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary font-headline tracking-tight">
              {AUTHOR_NAME}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              MERN Stack Developer & Full Stack Software Engineer specializing in building scalable web applications, RESTful APIs, and cloud infrastructure for production systems.
            </p>
            <div className="pt-1">
              <Link href={`mailto:${AUTHOR_EMAIL}`} className="text-xs text-primary hover:underline flex items-center gap-1.5 font-medium">
                <Mail className="h-3.5 w-3.5" />
                {AUTHOR_EMAIL}
              </Link>
            </div>
            {isMounted ? renderSocialIcons() : <Skeleton className="h-9 w-32 rounded-full" />}
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider font-headline flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={`/${link.href}`} className="text-muted-foreground hover:text-primary transition-colors font-medium inline-block py-0.5">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider font-headline flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5 text-accent" />
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {keyCapabilities.map((cap) => (
                <li key={cap.id}>
                  <Link href={`/services/${cap.id}`} className="text-muted-foreground hover:text-primary transition-colors font-medium flex items-center gap-1">
                    <span>{cap.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Selected Work */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider font-headline flex items-center gap-1.5">
              <Briefcase className="h-3.5 w-3.5 text-primary" />
              Selected Work
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {selectedProjects.map((proj) => (
                <li key={proj.id}>
                  <Link href={`/projects/${proj.id}`} className="text-muted-foreground hover:text-primary transition-colors font-medium flex items-center gap-1">
                    <span className="truncate max-w-[200px]">{proj.title}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-60" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar - Client Facing Copyright */}
        <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          {isMounted && currentYear !== null ? (
            <p className="font-medium text-foreground/80">
              © {currentYear} {AUTHOR_NAME}. All rights reserved.
            </p>
          ) : (
            <Skeleton className="h-4 w-48" />
          )}

          <p className="text-xs text-muted-foreground/70">
            Available for freelance projects, custom software development & technical consulting.
          </p>
        </div>
      </div>
    </footer>
  );
}
