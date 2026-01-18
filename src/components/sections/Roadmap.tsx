"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeInUp } from "../animations";
import { EventCard } from "../ui/EventCard";
import { events, Event } from "@/lib/events";

interface RoadmapProps {
  onEventSelect: (event: Event) => void;
}

export function Roadmap({ onEventSelect }: RoadmapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Generate a snake path that goes left and right around cards
  const generateSnakePath = () => {
    const cardCount = events.length;
    const cardHeight = 400; // approximate height per card section
    const totalHeight = cardCount * cardHeight;
    const width = 1200;
    const padding = 100;

    let path = `M ${width / 2} 0`;

    for (let i = 0; i < cardCount; i++) {
      const y = i * cardHeight + cardHeight / 2;
      const isEven = i % 2 === 0;
      const curveX = isEven ? padding : width - padding;
      const controlOffset = cardHeight / 3;

      // Curve to the side
      path += ` Q ${curveX} ${y - controlOffset}, ${curveX} ${y}`;
      // Curve back to center for next card
      if (i < cardCount - 1) {
        const nextY = (i + 1) * cardHeight + cardHeight / 2;
        path += ` Q ${curveX} ${y + controlOffset}, ${width / 2} ${y + cardHeight / 2}`;
      }
    }

    return path;
  };

  return (
    <section id="roadmap" className="py-24 md:py-32 bg-background" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInUp>
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl italic text-text-primary">
              Tour Dates &amp; Locations
            </h2>
          </div>
        </FadeInUp>

        {/* Event Cards with animated line */}
        <div className="relative">
          {/* Animated SVG Snake Line */}
          <div className="absolute left-0 right-0 top-0 bottom-0 hidden md:block pointer-events-none overflow-visible" style={{ zIndex: 1 }}>
            <svg
              className="absolute left-0 top-0 w-full h-full"
              viewBox="0 0 1000 12000"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Background path (gray) */}
              <path
                d={`M 500 0
                    C 100 200, 100 400, 100 500
                    C 100 600, 100 800, 500 1000
                    C 900 1200, 900 1400, 900 1500
                    C 900 1600, 900 1800, 500 2000
                    C 100 2200, 100 2400, 100 2500
                    C 100 2600, 100 2800, 500 3000
                    C 900 3200, 900 3400, 900 3500
                    C 900 3600, 900 3800, 500 4000
                    C 100 4200, 100 4400, 100 4500
                    C 100 4600, 100 4800, 500 5000
                    C 900 5200, 900 5400, 900 5500
                    C 900 5600, 900 5800, 500 6000
                    C 100 6200, 100 6400, 100 6500
                    C 100 6600, 100 6800, 500 7000
                    C 900 7200, 900 7400, 900 7500
                    C 900 7600, 900 7800, 500 8000
                    C 100 8200, 100 8400, 100 8500
                    C 100 8600, 100 8800, 500 9000
                    C 900 9200, 900 9400, 900 9500
                    C 900 9600, 900 9800, 500 10000
                    C 100 10200, 100 10400, 100 10500
                    C 100 10600, 100 10800, 500 11000
                    L 500 12000`}
                stroke="#e5e7eb"
                strokeWidth="8"
                fill="none"
              />
              {/* Animated path (blue) */}
              <motion.path
                d={`M 500 0
                    C 100 200, 100 400, 100 500
                    C 100 600, 100 800, 500 1000
                    C 900 1200, 900 1400, 900 1500
                    C 900 1600, 900 1800, 500 2000
                    C 100 2200, 100 2400, 100 2500
                    C 100 2600, 100 2800, 500 3000
                    C 900 3200, 900 3400, 900 3500
                    C 900 3600, 900 3800, 500 4000
                    C 100 4200, 100 4400, 100 4500
                    C 100 4600, 100 4800, 500 5000
                    C 900 5200, 900 5400, 900 5500
                    C 900 5600, 900 5800, 500 6000
                    C 100 6200, 100 6400, 100 6500
                    C 100 6600, 100 6800, 500 7000
                    C 900 7200, 900 7400, 900 7500
                    C 900 7600, 900 7800, 500 8000
                    C 100 8200, 100 8400, 100 8500
                    C 100 8600, 100 8800, 500 9000
                    C 900 9200, 900 9400, 900 9500
                    C 900 9600, 900 9800, 500 10000
                    C 100 10200, 100 10400, 100 10500
                    C 100 10600, 100 10800, 500 11000
                    L 500 12000`}
                stroke="#6366f1"
                strokeWidth="8"
                fill="none"
                style={{
                  pathLength,
                }}
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Event cards */}
          <div className="space-y-24 md:space-y-32 relative z-10">
            {events.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                onSelect={onEventSelect}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
