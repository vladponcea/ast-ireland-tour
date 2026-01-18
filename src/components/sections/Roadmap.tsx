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
          {/* Animated line that goes around cards */}
          <div className="absolute left-0 right-0 top-0 bottom-0 hidden lg:block pointer-events-none" style={{ zIndex: 5 }}>
            <svg
              className="absolute w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
            >
              {/*
                Path goes: down center, then alternates left/right around each card
                Using 90-degree corners (L commands for straight lines)
              */}
              {/* Background path (gray) */}
              <path
                d={`
                  M 50 0
                  L 50 4
                  L 5 4
                  L 5 12
                  L 50 12
                  L 50 16
                  L 95 16
                  L 95 24
                  L 50 24
                  L 50 28
                  L 5 28
                  L 5 36
                  L 50 36
                  L 50 40
                  L 95 40
                  L 95 48
                  L 50 48
                  L 50 52
                  L 5 52
                  L 5 60
                  L 50 60
                  L 50 64
                  L 95 64
                  L 95 72
                  L 50 72
                  L 50 76
                  L 5 76
                  L 5 84
                  L 50 84
                  L 50 88
                  L 95 88
                  L 95 96
                  L 50 96
                  L 50 100
                `}
                stroke="#e5e7eb"
                strokeWidth="0.3"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
              {/* Animated path (blue) */}
              <motion.path
                d={`
                  M 50 0
                  L 50 4
                  L 5 4
                  L 5 12
                  L 50 12
                  L 50 16
                  L 95 16
                  L 95 24
                  L 50 24
                  L 50 28
                  L 5 28
                  L 5 36
                  L 50 36
                  L 50 40
                  L 95 40
                  L 95 48
                  L 50 48
                  L 50 52
                  L 5 52
                  L 5 60
                  L 50 60
                  L 50 64
                  L 95 64
                  L 95 72
                  L 50 72
                  L 50 76
                  L 5 76
                  L 5 84
                  L 50 84
                  L 50 88
                  L 95 88
                  L 95 96
                  L 50 96
                  L 50 100
                `}
                stroke="#6366f1"
                strokeWidth="0.3"
                fill="none"
                vectorEffect="non-scaling-stroke"
                style={{
                  pathLength,
                }}
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
