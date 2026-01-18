"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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

  // Cycling city display
  const [currentCityIndex, setCurrentCityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCityIndex((prev) => (prev + 1) % events.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentEvent = events[currentCityIndex];

  // Custom background positions for specific cities
  const bgPositions: Record<string, string> = {
    dublin: "center 30%",
    cavan: "center 40%",
    wexford: "center 60%",
    clare: "center 30%",
    kerry: "center 40%",
  };

  const getBgPosition = (city: string) => {
    return bgPositions[city.toLowerCase()] || "center";
  };

  return (
    <section
      ref={containerRef}
      className="bg-white pt-24 md:pt-28"
    >
      {/* Image Container with rounded corners */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative w-full aspect-[3/4] sm:aspect-[16/10] md:aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0"
            style={{ y: backgroundY }}
          >
            {/* Background Image with crossfade transition */}
            <AnimatePresence>
              <motion.div
                key={currentCityIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 bg-cover bg-no-repeat scale-105"
                style={{
                  backgroundImage: `url('${currentEvent.image}')`,
                  backgroundPosition: getBgPosition(currentEvent.city),
                }}
              />
            </AnimatePresence>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30" />
            {/* Bottom Gradient for text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </motion.div>

          {/* Content overlaid on image */}
          <div className="absolute inset-0 z-20 flex items-end">
            <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-6 md:pb-10">
              <div className="max-w-3xl">
                {/* Presents Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-white/80 text-xs sm:text-sm uppercase tracking-widest mb-2"
                >
                  AST and Young Irish Entrepreneurs presents
                </motion.p>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic text-white mb-2"
                >
                  The Irish Roadshow
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-white/90 text-base md:text-lg leading-relaxed mb-6 max-w-xl"
                >
                  With one mission: to bring Ireland's sales and entrepreneurial community
                  together through practical workshops, meaningful networking and real-world
                  learning.
                </motion.p>

                {/* CTA Button and info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <Button variant="primary" size="lg" onClick={onOpenModal} className="!py-2 !px-4 !text-sm sm:!py-3 sm:!px-6 sm:!text-base mb-3">
                    Secure Your Seat
                  </Button>
                  <p className="text-[8px] sm:text-xs md:text-sm text-white/70 whitespace-nowrap">
                    <span className="text-white font-medium">YEAR:</span> 2026 &nbsp;&nbsp; <span className="text-white font-medium">FORMAT:</span> In-Person &nbsp;&nbsp; <span className="text-white font-medium">DESTINATIONS:</span> 12 Counties
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Cycling City Name - Bottom Right */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute bottom-6 md:bottom-10 right-6 md:right-12 text-right hidden lg:block"
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
                <p className="font-display text-2xl italic text-white">
                  {currentEvent.city}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}
