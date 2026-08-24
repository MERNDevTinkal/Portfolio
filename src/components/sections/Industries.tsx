"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { INDUSTRIES_DATA } from "@/lib/data";
import { Building, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function Industries() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <SectionWrapper id="industries" className="overflow-hidden w-full max-w-full">
      <SectionHeader 
        title="Industries I've Built For" 
        subtitle="Proven software development experience across multiple domains—healthcare, veterinary, education, hospitality, wellness, and more. Click any domain card for technical breakdown."
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
              <Link href={`/industries/${industry.id}`} className="block h-full outline-none focus:ring-2 focus:ring-primary rounded-2xl">
                <Card className="h-full cursor-pointer hover:shadow-xl hover:border-primary/60 transition-all duration-300 bg-card border border-border/80 group transform hover:-translate-y-1 relative">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl font-semibold text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                        {industry.name}
                      </CardTitle>
                      <IconComponent className="h-5 w-5 text-accent group-hover:scale-110 transition-transform flex-shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {industry.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-1.5">
                      {industry.examples.map((example, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground font-medium"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                    <div className="pt-2 text-xs font-semibold text-primary group-hover:underline inline-flex items-center gap-1">
                      View Domain Solutions <ArrowRight className="h-3.5 w-3.5" />
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
