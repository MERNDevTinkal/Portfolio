"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { SERVICES_DATA } from "@/lib/data";
import { Briefcase, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <SectionWrapper id="services" className="overflow-hidden w-full max-w-full">
      <SectionHeader 
        title="What I Can Build" 
        subtitle="Full-stack engineering solutions for your product, scaling needs, and technical challenges. Click any service card for detailed scope & deliverables."
        Icon={Briefcase} 
      />
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {SERVICES_DATA.map((service) => {
          const IconComponent = service.Icon;
          return (
            <motion.div key={service.id} variants={itemVariants}>
              <Link href={`/services/${service.id}`} className="block h-full outline-none focus:ring-2 focus:ring-primary rounded-2xl">
                <Card className="h-full cursor-pointer hover:shadow-xl hover:border-primary/60 transition-all duration-300 bg-card border border-border/80 group transform hover:-translate-y-1 relative">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg font-semibold text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                        {service.name}
                      </CardTitle>
                      <IconComponent className="h-5 w-5 text-accent group-hover:scale-110 transition-transform flex-shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {service.description}
                    </CardDescription>
                    <div className="mt-4 text-xs font-semibold text-primary group-hover:underline inline-flex items-center gap-1">
                      View Service Scope & Deliverables <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
