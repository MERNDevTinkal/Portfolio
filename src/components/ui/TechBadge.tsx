"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TechBadgeProps {
  name: string;
  Icon: LucideIcon | string; // Allow string for future custom SVG or simple text
  index: number;
}

export function TechBadge({ name, Icon, index }: TechBadgeProps) {
  const badgeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={badgeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      whileHover={{
        scale: 1.1,
        y: -5,
        rotateX: 10,
        rotateY: -10,
      }}
      style={{ perspective: 1000 }}
      className="inline-block group"
    >
      <Badge
        variant="secondary"
        className="px-4 py-2.5 text-sm flex items-center gap-2 cursor-default glass-card transition-all duration-300 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {typeof Icon !== 'string' && (
          <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 relative z-10" />
        )}
        <span className="font-medium text-foreground/80 group-hover:text-foreground relative z-10 transition-colors duration-300">
          {name}
        </span>
      </Badge>
    </motion.div>
  );
}
