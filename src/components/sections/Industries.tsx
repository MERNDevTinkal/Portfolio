"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { INDUSTRIES_DATA } from "@/lib/data";
import { Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function Industries() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <SectionWrapper id="industries" className="overflow-hidden w-full max-w-full">
      <SectionHeader 
        title="Industries I've Built For" 
        description="Experience across multiple sectors—healthcare, veterinary, education, entertainment, and more."
        Icon={Building} 
      />
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {INDUSTRIES_DATA.map((industry) => {
          const IconComponent = industry.Icon;
          return (
            <motion.div key={industry.id} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-card border border-border">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl font-semibold text-primary">
                      {industry.name}
                    </CardTitle>
                    <IconComponent className="h-5 w-5 text-accent flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {industry.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {industry.examples.map((example, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
