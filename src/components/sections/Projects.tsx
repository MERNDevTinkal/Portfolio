
"use client";

import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS_DATA } from "@/lib/data";
import { Briefcase } from "lucide-react";

export function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-secondary/30 dark:bg-card/50">
      <SectionHeader 
        title="Selected Production Work" 
        subtitle="Real-world software platforms I've worked on across multiple industries and business domains." 
        Icon={Briefcase} 
      />
      {PROJECTS_DATA.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center text-muted-foreground mb-12">
          <p>Loading production work...</p>
        </div>
      )}
    </SectionWrapper>
  );
}
