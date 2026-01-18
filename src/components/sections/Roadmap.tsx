"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeInUp } from "../animations";
import { EventCard } from "../ui/EventCard";
import { events, Event } from "@/lib/events";

interface RoadmapProps {
  onEventSelect: (event: Event) => void;
}

// The snake path for 12 events
const snakePath = `
  M 50 0
  L 50 2
  L 5 2
  L 5 7
  L 50 7
  L 50 10
  L 95 10
  L 95 15
  L 50 15
  L 50 18
  L 5 18
  L 5 23
  L 50 23
  L 50 26
  L 95 26
  L 95 31
  L 50 31
  L 50 34
  L 5 34
  L 5 39
  L 50 39
  L 50 42
  L 95 42
  L 95 47
  L 50 47
  L 50 50
  L 5 50
  L 5 55
  L 50 55
  L 50 58
  L 95 58
  L 95 63
  L 50 63
  L 50 66
  L 5 66
  L 5 71
  L 50 71
  L 50 74
  L 95 74
  L 95 79
  L 50 79
  L 50 82
  L 5 82
  L 5 87
  L 50 87
  L 50 90
  L 95 90
  L 95 95
  L 50 95
  L 50 100
`;

export function Roadmap({ onEventSelect }: RoadmapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const strokeDashoffset = useTransform(scrollYProgress, [0, 1], [1, 0]);

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
          {/* Animated line that goes around cards */}
          <div className="absolute left-0 right-0 top-0 bottom-0 hidden lg:block pointer-events-none" style={{ zIndex: 5 }}>
            <svg
              className="absolute w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Background path (gray) */}
              <path
                d={snakePath}
                stroke="#e5e7eb"
                strokeWidth="0.5"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
              {/* Animated path (blue) */}
              <motion.path
                d={snakePath}
                stroke="#6366f1"
                strokeWidth="0.8"
                fill="none"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="1"
                style={{
                  strokeDashoffset,
                }}
                pathLength="1"
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
