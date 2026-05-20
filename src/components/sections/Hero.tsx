"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/Button";

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
            {/* Background Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover scale-105"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30" />
            {/* Bottom Gradient for text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </motion.div>

          {/* Content overlaid on image */}
          <div className="absolute inset-0 z-20 flex items-end">
            <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-6 md:pb-10">
              <div className="max-w-3xl">
                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic text-white mb-2"
                >
                  The Irish Entrepreneur Roadshow
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
                    <span className="text-white font-medium">YEAR:</span> 2026 &nbsp;&nbsp; <span className="text-white font-medium">FORMAT:</span> In-Person &nbsp;&nbsp; <span className="text-white font-medium">STOPS:</span> 12 Counties Across Ireland
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
