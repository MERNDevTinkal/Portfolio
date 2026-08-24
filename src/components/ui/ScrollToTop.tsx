"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      // Show button after user scrolls down ~80px
      const currentScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!mounted || typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed bottom-24 right-6 sm:bottom-6 sm:right-24 z-[9998] pointer-events-auto"
        >
          <Button
            onClick={scrollToTop}
            variant="default"
            size="icon"
            className={cn(
              "h-11 w-11 sm:h-12 sm:w-12 rounded-full shadow-2xl border border-primary/20",
              "bg-card/95 text-foreground hover:bg-primary hover:text-primary-foreground",
              "backdrop-blur-md transition-all duration-300 transform hover:scale-110",
              "flex items-center justify-center group"
            )}
            aria-label="Scroll to top of page"
            title="Go to top"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
