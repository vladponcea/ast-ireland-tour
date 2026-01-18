"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { FadeInUp } from "../animations";
import { EventCard } from "../ui/EventCard";
import { events, Event } from "@/lib/events";

interface RoadmapProps {
  onEventSelect: (event: Event) => void;
}

// Checkpoint positions for 12 events (percentage-based y positions)
const checkpoints = [
  { x: 5, y: 4.5 },    // Event 1 - left
  { x: 95, y: 12.5 },  // Event 2 - right
  { x: 5, y: 20.5 },   // Event 3 - left
  { x: 95, y: 28.5 },  // Event 4 - right
  { x: 5, y: 36.5 },   // Event 5 - left
  { x: 95, y: 44.5 },  // Event 6 - right
  { x: 5, y: 52.5 },   // Event 7 - left
  { x: 95, y: 60.5 },  // Event 8 - right
  { x: 5, y: 68.5 },   // Event 9 - left
  { x: 95, y: 76.5 },  // Event 10 - right
  { x: 5, y: 84.5 },   // Event 11 - left
  { x: 95, y: 92.5 },  // Event 12 - right
];

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

// Checkpoint dot component to properly use hooks
function CheckpointDot({
  x,
  y,
  index,
  scrollYProgress
}: {
  x: number;
  y: number;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const threshold = (index + 1) / checkpoints.length;
  const fill = useTransform(
    scrollYProgress,
    [threshold - 0.08, threshold],
    ["#e5e7eb", "#6366f1"]
  );

  return (
    <motion.circle
      cx={x}
      cy={y}
      r="1"
      stroke="#e5e7eb"
      strokeWidth="0.2"
      style={{ fill }}
    />
  );
}

export function Roadmap({ onEventSelect }: RoadmapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

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
                strokeWidth="0.3"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
              {/* Animated path (blue) */}
              <motion.path
                d={snakePath}
                stroke="#6366f1"
                strokeWidth="0.4"
                fill="none"
                vectorEffect="non-scaling-stroke"
                style={{
                  pathLength,
                }}
              />
              {/* Checkpoint dots */}
              {checkpoints.map((checkpoint, index) => (
                <CheckpointDot
                  key={index}
                  x={checkpoint.x}
                  y={checkpoint.y}
                  index={index}
                  scrollYProgress={scrollYProgress}
                />
              ))}
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
