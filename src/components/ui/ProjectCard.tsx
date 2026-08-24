"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/lib/data";
import { Badge } from "./badge";
import { Skeleton } from "@/components/ui/skeleton";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.1,
      },
    },
  };

  const hasValidLiveDemo = project.liveDemoUrl && project.liveDemoUrl !== "#" && project.liveDemoUrl.trim() !== "";

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="h-full group"
    >
      <Link href={`/projects/${project.id}`} className="block h-full outline-none focus:ring-2 focus:ring-primary rounded-2xl">
        <Card className="h-full flex flex-col overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-card border border-border/80 group-hover:border-primary/60 relative">
          <CardHeader className="pb-3 pt-5 px-4 sm:px-6">
            <div className="flex items-start justify-between gap-2">
              <CardTitle className="text-lg sm:text-xl font-headline text-primary group-hover:text-accent transition-colors line-clamp-2">
                {project.title}
              </CardTitle>
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 flex-shrink-0 font-medium">
                Case Study <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </CardHeader>

          <CardContent className="flex-grow pt-0 px-4 sm:px-6">
            <p className="text-muted-foreground mb-4 text-xs sm:text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>
            <div className="mb-4">
              <h4 className="text-[11px] font-semibold uppercase text-muted-foreground/80 mb-2 tracking-wider">Tech Stack:</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 6).map((tech) => (
                  <Badge key={tech.name} variant="secondary" className="text-xs px-2 py-0.5 bg-secondary/80">
                    {typeof tech.Icon !== 'string' && <tech.Icon className="h-3 w-3 mr-1 text-primary" />}
                    {tech.name}
                  </Badge>
                ))}
                {project.techStack.length > 6 && (
                  <Badge variant="outline" className="text-xs px-1.5 py-0.5">
                    +{project.techStack.length - 6} more
                  </Badge>
                )}
              </div>
            </div>
          </CardContent>

          <CardFooter className="mt-auto pt-3 pb-4 px-4 sm:px-6 flex items-center justify-between gap-2 border-t border-border/40">
            {!isMounted ? (
              <Skeleton className="h-9 w-full rounded-md" />
            ) : (
              <>
                <span className="text-xs font-semibold text-primary group-hover:underline flex items-center gap-1">
                  View Full Case Study <ArrowRight className="h-3.5 w-3.5" />
                </span>

                {hasValidLiveDemo && (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-8 px-2 text-xs text-muted-foreground hover:text-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(project.liveDemoUrl, '_blank', 'noopener,noreferrer');
                    }}
                    title="Open Live Project in New Tab"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Button>
                )}
              </>
            )}
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
