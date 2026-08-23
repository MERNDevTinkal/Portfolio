"use client";

import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { HERO_TITLES, SOCIAL_LINKS, RESUME_PATH, AUTHOR_NAME, PROFILE_IMAGES } from "@/lib/data";

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export function Hero() {
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Generate random particles
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, duration: number, delay: number, randomX: number}>>([]);

  useEffect(() => {
    setParticles(Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      randomX: Math.random() * 50 - 25
    })));
  }, []);

  return (
    <SectionWrapper id="home" className="relative pt-8 md:pt-12 aurora-bg overflow-hidden w-full max-w-full min-h-[90vh] flex items-center">

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary/20 dark:bg-primary/40 blur-[1px]"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, particle.randomX, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          <div className="space-y-6 mb-8">
            <motion.div variants={textItemVariants} className="inline-block">
               <div className="glass px-4 py-1.5 rounded-full text-sm font-medium text-primary mb-2 inline-flex items-center gap-2 border-primary/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Available for new opportunities
               </div>
            </motion.div>

            <motion.h1
              variants={textItemVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-headline break-words text-glow leading-tight"
            >
              Hi, I&apos;m <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                {AUTHOR_NAME}
              </span>
            </motion.h1>

            <motion.div
              variants={textItemVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-medium h-20 md:h-12 text-foreground/80"
            >
              I build{" "}
              <span className="font-semibold text-accent dark:text-accent">
                <Typewriter
                  words={HERO_TITLES}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </motion.div>

            <motion.p
              variants={textItemVariants}
              className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0 leading-relaxed"
            >
              A Senior Full Stack Engineer crafting enterprise-grade software with modern technologies. Passionate about system reliability, seamless user experiences, and scalable architecture.
            </motion.p>
          </div>

          <motion.div
            variants={textItemVariants}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-10"
          >
            <Button size="lg" asChild className="premium-shadow rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-primary/50">
              <Link href={RESUME_PATH} download>
                <FileText className="mr-2 h-5 w-5 inline" />
                View Resume
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="glass rounded-full px-8 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link href="#contact">
                Contact Me
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            variants={textItemVariants}
            className="flex items-center justify-center md:justify-start space-x-4"
          >
            {SOCIAL_LINKS.map(({ name, Icon, href }) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button variant="outline" size="icon" asChild className="h-12 w-12 rounded-full glass border-border/50 hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all">
                  <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
                    <Icon className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
          className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto flex justify-center items-center overflow-hidden perspective-1000"
          style={{ perspective: "1000px" }}
        >
          <div className="relative w-full aspect-[3/4] group">
            {/* Ambient Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500 rounded-full" />

            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              loop
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              className="rounded-3xl premium-shadow w-full h-full glass border border-white/20 dark:border-white/10 overflow-hidden"
            >
              {PROFILE_IMAGES.map((image, index) => (
                <SwiperSlide key={image.src || index}>
                  <motion.div
                    className="relative w-full h-full max-w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={index === 0}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
                      data-ai-hint={image.dataAiHint || "profile image"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
