"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb navigation"
      className={cn(
        "flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm text-muted-foreground py-2 px-3 rounded-xl bg-secondary/40 dark:bg-card/80 border border-border/60 overflow-x-auto no-scrollbar",
        className
      )}
    >
      <Link
        href="/"
        className="flex items-center gap-1.5 hover:text-primary transition-colors flex-shrink-0 font-medium"
      >
        <Home className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0">
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60 flex-shrink-0" />
            {isLast ? (
              <span className="font-semibold text-foreground truncate max-w-[200px] sm:max-w-[320px]" aria-current="page">
                {item.label}
              </span>
            ) : item.href ? (
              <Link
                href={item.href}
                className="hover:text-primary transition-colors font-medium truncate max-w-[160px]"
                onClick={item.onClick}
              >
                {item.label}
              </Link>
            ) : (
              <button
                onClick={item.onClick}
                className="hover:text-primary transition-colors font-medium truncate max-w-[160px] text-left"
              >
                {item.label}
              </button>
            )}
          </div>
        );
      })}
    </nav>
  );
}
