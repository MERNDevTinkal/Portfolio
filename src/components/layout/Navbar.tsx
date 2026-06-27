
"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { APP_NAME, NAV_LINKS, LOGO_PATH } from "@/lib/data";
import { useRouter } from 'next/navigation'; 

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter(); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (href: string) => {
    setIsOpen(false); 
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push(`/${href}`); 
      }
    } else {
      router.push(href);
    }
  };


  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, y: "-100%" },
    open: { opacity: 1, y: "0%" },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{
        y: 0,
        backgroundColor: isScrolled ? "hsl(var(--card) / 0.8)" : "hsl(var(--background) / 0.3)",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(4px)",
        boxShadow: isScrolled ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
        borderColor: isScrolled ? "hsl(var(--border) / 0.3)" : "transparent",
      }}
      transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
      className={`fixed left-0 right-0 z-50 mx-auto w-full transition-all duration-300 ${
        isScrolled ? 'top-2 sm:top-4 max-w-5xl rounded-full border' : 'top-0'
      }`}
    >
      <div className={`container mx-auto flex items-center justify-between px-4 md:px-6 transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
        <Link href="#home" className="flex items-center space-x-3 text-2xl font-bold font-headline text-primary" onClick={(e) => { e.preventDefault(); handleNavClick("#home");}}>
           <div className="flex items-center space-x-2"> {/* Reduced space for slightly tighter logo and text */}
            <Image
              src={LOGO_PATH}
              alt={`${APP_NAME} Logo`}
              width={64} 
              height={64} 
              className="rounded-lg" // Removed h- w- classes, relying on width/height props
              data-ai-hint="website logo"
              priority
            />
            <span>{APP_NAME}</span>
          </div>
        </Link>

        <div className="hidden items-center space-x-1 md:flex bg-card/30 backdrop-blur-md border border-border/50 rounded-full px-2 py-1 shadow-sm">
          {NAV_LINKS.map((link, index) => (
            <motion.div
              key={link.name}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
              whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary)/0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full"
            >
              <Button variant="ghost" onClick={() => handleNavClick(link.href)} className="text-foreground/80 hover:text-primary rounded-full transition-all duration-300 ease-in-out px-4 py-2 text-sm font-medium">
                <span>{link.name}</span>
              </Button>
            </motion.div>
          ))}
          <div className="pl-2 border-l border-border/50 ml-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute top-20 left-0 right-0 bg-card shadow-lg md:hidden"
          >
            <div className="flex flex-col items-center space-y-4 p-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg text-foreground hover:text-primary transition-colors duration-300 ease-in-out"
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                >
                  <span>{link.name}</span>
                </Link>
              ))}
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

    
