"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";
import { events } from "@/lib/events";

interface HeroProps {
  onOpenModal: () => void;
}

export function Hero({ onOpenModal }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Cycling city display
  const [currentCityIndex, setCurrentCityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCityIndex((prev) => (prev + 1) % events.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentEvent = events[currentCityIndex];

  return (
    <section
      ref={containerRef}
      className="relative bg-white overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: backgroundY }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/hero-bg.jpg')",
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        {/* Content overlaid on image */}
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 z-20 flex items-end"
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/80">
              The Irish Roadshow
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl italic text-white mb-4"
          >
            The Irish Roadshow
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-white text-lg leading-relaxed mb-8 max-w-2xl"
          >
            With one mission: to bring Ireland's sales and entrepreneurial community
            together through practical workshops, meaningful networking, and real-world
            learning.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <Button variant="primary" size="lg" onClick={onOpenModal}>
              Secure Your Seat
            </Button>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-sm sm:text-base text-white/80 font-medium"
          >
            <span className="text-white/60">YEAR:</span> 2026 &nbsp;&nbsp;&nbsp;&nbsp; 12 MONTHS &bull; 12 EVENTS &bull; 12 COUNTIES &nbsp;&nbsp;&nbsp;&nbsp; <span className="text-white/60">FORMAT:</span> IN-PERSON
          </motion.p>
        </div>
          </div>
        </motion.div>

        {/* Cycling City Name - Bottom Right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 md:bottom-12 right-8 text-right hidden lg:block z-20"
        >
          <motion.div
            key={currentCityIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-white/60 text-sm uppercase tracking-widest mb-1">
              {currentEvent.month} 2026
            </p>
            <p className="font-display text-3xl italic text-white">
              {currentEvent.city}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
