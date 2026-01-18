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
          <svg
            className="absolute inset-0 w-full h-full hidden md:block pointer-events-none"
            style={{ zIndex: 0 }}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
            {/* Background path (gray) */}
            <motion.path
              d={`M 50% 0
                  Q 10% 4%, 10% 8%
                  Q 10% 12%, 50% 16%
                  Q 90% 20%, 90% 24%
                  Q 90% 28%, 50% 32%
                  Q 10% 36%, 10% 40%
                  Q 10% 44%, 50% 48%
                  Q 90% 52%, 90% 56%
                  Q 90% 60%, 50% 64%
                  Q 10% 68%, 10% 72%
                  Q 10% 76%, 50% 80%
                  Q 90% 84%, 90% 88%
                  Q 90% 92%, 50% 96%
                  L 50% 100%`}
              stroke="#e5e7eb"
              strokeWidth="3"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
            {/* Animated path (blue) */}
            <motion.path
              d={`M 50% 0
                  Q 10% 4%, 10% 8%
                  Q 10% 12%, 50% 16%
                  Q 90% 20%, 90% 24%
                  Q 90% 28%, 50% 32%
                  Q 10% 36%, 10% 40%
                  Q 10% 44%, 50% 48%
                  Q 90% 52%, 90% 56%
                  Q 90% 60%, 50% 64%
                  Q 10% 68%, 10% 72%
                  Q 10% 76%, 50% 80%
                  Q 90% 84%, 90% 88%
                  Q 90% 92%, 50% 96%
                  L 50% 100%`}
              stroke="#6366f1"
              strokeWidth="3"
              fill="none"
              vectorEffect="non-scaling-stroke"
              style={{
                pathLength,
              }}
              strokeLinecap="round"
            />
          </svg>

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
