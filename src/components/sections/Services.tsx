"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { SERVICES_DATA } from "@/lib/data";
import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <SectionWrapper id="services" className="overflow-hidden w-full max-w-full">
      <SectionHeader 
        title="What I Can Build" 
        description="Full-stack solutions for your product, scaling needs, and technical challenges."
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
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-card border border-border group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                      {service.name}
                    </CardTitle>
                    <IconComponent className="h-5 w-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
