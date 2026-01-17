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
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
          }}
        >
          {/* Fallback gradient if no image */}
          <div className="absolute inset-0 bg-gradient-to-br from-background-secondary via-background to-background" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-32"
      >
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-text-secondary">
              The Roadshow
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl italic text-text-primary mb-4"
          >
            The Roadshow
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl sm:text-2xl text-accent font-medium mb-6"
          >
            12 Months &bull; 12 Events &bull; 12 Counties
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl"
          >
            With one mission: to create a transformational sales training experience
            never seen before in Ireland. A monthly event across 12 counties redefining
            networking through Workshops, Masterminds, Live Training, and our signature
            Closing Dinner.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button variant="primary" size="lg" href="#roadmap">
              View the Roadmap
            </Button>
            <Button variant="outline" size="lg" onClick={onOpenModal}>
              Secure Your Seat
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap gap-8 text-sm uppercase tracking-widest"
          >
            <div>
              <span className="text-text-secondary">Year:</span>{" "}
              <span className="text-text-primary font-semibold">2026</span>
            </div>
            <div>
              <span className="text-text-secondary">Destinations:</span>{" "}
              <span className="text-text-primary font-semibold">12 Counties</span>
            </div>
            <div>
              <span className="text-text-secondary">Format:</span>{" "}
              <span className="text-text-primary font-semibold">In-Person</span>
            </div>
          </motion.div>
        </div>

        {/* Cycling City Name - Bottom Right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-20 right-8 text-right hidden lg:block"
        >
          <motion.div
            key={currentCityIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-text-secondary text-sm uppercase tracking-widest mb-1">
              {currentEvent.month} 2026
            </p>
            <p className="font-display text-3xl italic text-text-primary">
              {currentEvent.city}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-text-secondary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
